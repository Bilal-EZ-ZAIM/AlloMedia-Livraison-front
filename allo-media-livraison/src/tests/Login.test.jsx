import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import Login from "../pages/login";

const mockStore = configureMockStore();

describe("Login Page", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: {
        error: [],
      },
    });
  });

  it("renders Login form correctly", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByPlaceholderText("Email Address")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Sign In/i })
    ).toBeInTheDocument();
  });

  it("should display required field errors if fields are empty", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );
    const submitButton = screen.getByRole("button", { name: /sign in/i });

    fireEvent.click(submitButton);

    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/password is required/i)
    ).toBeInTheDocument();
  });

  it("should submit the form successfully with valid data", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.input(screen.getByTestId(/full-email-input/i), {
      target: { value: "bilal@example.com" },
    });

    const submitButton = screen.getByRole("button", { name: /Sign in/i });
    fireEvent.click(submitButton);

    expect(screen.queryByText(/is required/i)).not.toBeInTheDocument();
  });
});
