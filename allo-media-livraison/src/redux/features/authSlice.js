import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState = {
  isLoading: false,
  user: null,
  error: null,
  token: null,
};

// Create async thunk for registering a user
export const registers = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    console.log("Data being sent to API:", data);

    try {
      const res = await axios.post(
        "http://localhost:8001/api/auth/register",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response from API:", res.data);

      return res.data;
    } catch (error) {
      console.error(
        "Error while registering:",
        error.response?.data || error.message
      );

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  console.log("Data being sent to API:", data);

  try {
    const res = await axios.post("http://localhost:8001/api/auth/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Response from API:", res.data);

    return res.data;
  } catch (error) {
    console.error(
      "Error while registering:",
      error.response?.data || error.message
    );

    return thunkAPI.rejectWithValue(error);
  }
});

export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState().auth;
    console.log(state);

    console.log("Data being sent to API:", data);
    console.log("Current token:", state.token);

    try {
      const res = await axios.post(
        `http://localhost:8001/api/auth/verify-otp/${state.token}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response from API:", res.data);

      return res.data;
    } catch (error) {
      console.error(
        "Error while verifying OTP:",
        error.response?.data || error.message
      );

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const forgetPassword = createAsyncThunk(
  "auth/forgetPassword",
  async (data, thunkAPI) => {
    try {
      const res = await axios.post(
        `http://localhost:8001/api/auth//forgetpassword`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response from API:", res);

      return res.data;
    } catch (error) {
      console.error(
        "Error while verifying OTP:",
        error.response?.data || error.message
      );

      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Create the slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Register user
      .addCase(registers.pending, (state) => {
        console.log("is pending");
        state.isLoading = true;
      })
      .addCase(registers.fulfilled, (state, action) => {
        console.log("is fulfilled");
        state.isLoading = false;
        state.user = action.payload;
        console.log("User registered successfully:", action.payload);
        state.token = action.payload.token;
      })
      .addCase(registers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.response.data.errors;
      });

    // login user
    builder
      .addCase(login.pending, (state) => {
        console.log("is pending");
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log("is fulfilled");
        state.isLoading = false;
        state.user = action.payload;
        console.log("User logged in successfully:", action.payload);
        state.token = action.payload.token;

        console.log(state.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.response.data.errors;
      });

    // verifyOtp
    builder
      .addCase(verifyOtp.pending, (state) => {
        console.log("is pending");
        state.isLoading = true;
        console.log(state.token);
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        console.log("is fulfilled");
        state.isLoading = false;
        state.user = action.payload;
        console.log("User logged in successfully:", action.payload);
        state.token = action.payload.token;
        console.log(state.token);
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.response.data.errors;
      });

    // Forget Password
    builder
      .addCase(forgetPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        console.log("User Action", action.payload);
      })
      .addCase(forgetPassword.rejected, (state, action) => {
        console.log("dghkjlm");

        state.isLoading = false;
        console.log(action.payload.response.data.message);

        state.error = action.payload.response.data.message;
      });
  },
});

export default authSlice.reducer;
