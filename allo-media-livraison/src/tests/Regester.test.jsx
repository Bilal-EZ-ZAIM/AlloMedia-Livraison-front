import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import Register from "../pages/regester";

const mockStore = configureMockStore();

describe("Register Page", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: {
        error: [],
      },
    });
  });

  test("renders Register form correctly", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByPlaceholderText("Full Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email Address")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Phone Number")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Create a Password")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Confirm Password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /sign up/i })
    ).toBeInTheDocument();
  });

  it("should display required field errors if fields are empty", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      </Provider>
    );
    const submitButton = screen.getByRole("button", { name: /sign up/i });

    fireEvent.click(submitButton);

    expect(await screen.findByText(/Name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/password is required/i)
    ).toBeInTheDocument();
    expect(await screen.findByText(/Phone is required/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/Confirm your password/i)
    ).toBeInTheDocument();
  });

  it("should display 'passwords do not match' error if passwords are different", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.input(screen.getByTestId("password-input"), {
      target: { value: "password123" },
    });

    fireEvent.input(screen.getByTestId("confirm-password-input"), {
      target: { value: "differentPassword" },
    });

    const submitButton = screen.getByRole("button", { name: /sign up/i });
    fireEvent.click(submitButton);

    expect(
      await screen.findByText(/passwords do not match/i)
    ).toBeInTheDocument();
  });

  it("should submit the form successfully with valid data", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Register />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.input(screen.getByTestId(/full-name-input/i), {
      target: { value: "Bilal ezzaim" },
    });

    fireEvent.input(screen.getByTestId(/full-email-input/i), {
      target: { value: "bilal@example.com" },
    });
    fireEvent.input(screen.getByPlaceholderText(/Create a Password/i), {
      target: { value: "password123" },
    });
    fireEvent.input(screen.getByPlaceholderText(/Confirm Password/i), {
      target: { value: "password123" },
    });

    const submitButton = screen.getByRole("button", { name: /Sign Up/i });
    fireEvent.click(submitButton);

    expect(screen.queryByText(/is required/i)).not.toBeInTheDocument();
  });
});
