import { useState } from "react";
import "./App.css";
import Verifie from "./commeptes/verfie";
import Login from "./pages/login";
import Register from "./pages/regester";
import Header from "./commeptes/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VerfieOtp from "./pages/VerfieOtp";
import ForgetPassword from "./pages/ForgetPassword";
import UpdatPassword from "./pages/UpdatePassword";
import { useDispatch, useSelector } from "react-redux";
import { isLogins } from "./redux/features/authSlice";
import Profile from "./pages/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";
import Gaurd from "./commeptes/Gaurd";

function App() {
  const { error, status, isLogin } = useSelector((state) => state.auth);
  console.log( 'yesss =  ' , isLogin);

  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  console.log(token);
  console.log("hi");

  if (token) {
    isLogin ? null : dispatch(isLogins(token));
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/signin" element={<Login />}></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/verfei" element={<VerfieOtp />}></Route>
          <Route path="/forget-password" element={<ForgetPassword />}></Route>
          <Route path="/updit-password" element={<UpdatPassword />}></Route>

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
