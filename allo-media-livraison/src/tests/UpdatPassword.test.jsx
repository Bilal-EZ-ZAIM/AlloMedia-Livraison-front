import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import UpdatPassword from "../pages/UpdatePassword";

const mockStore = configureMockStore();

describe("Update Password Page", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: {
        error: [],
      },
    });
  });

  it("renders Update Password form correctly", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <UpdatPassword />
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByPlaceholderText("Enter the verification code")
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("New Password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Confirm Password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Update Password/i })
    ).toBeInTheDocument();
  });

  it("should display required field errors if fields are empty", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <UpdatPassword />
        </MemoryRouter>
      </Provider>
    );
    const submitButton = screen.getByRole("button", {
      name: /Update Password/i,
    });

    fireEvent.click(submitButton);

    expect(
      await screen.findByText(/Verification code is required/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/New password is required/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Please confirm your password/i)
    ).toBeInTheDocument();
  });

  it("should display 'passwords do not match' error if passwords are different", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <UpdatPassword />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.input(screen.getByTestId("new-password-input"), {
      target: { value: "password123" },
    });

    fireEvent.input(screen.getByTestId("confirmPassword-input"), {
      target: { value: "differentPassword" },
    });

    const submitButton = screen.getByRole("button", {
      name: /Update Password/i,
    });
    fireEvent.click(submitButton);

    expect(
      await screen.findByText(/Passwords do not match/i)
    ).toBeInTheDocument();
  });

  it("should submit the form successfully with valid data", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <UpdatPassword />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.input(screen.getByTestId(/code-input/i), {
      target: { value: "12BT" },
    });

    fireEvent.input(screen.getByTestId(/new-password-input/i), {
      target: { value: "Bilanox1" },
    });

    fireEvent.input(screen.getByTestId(/confirmPassword-input/i), {
      target: { value: "Bilanox1" },
    });

    const submitButton = screen.getByRole("button", {
      name: /Update Password/i,
    });

    fireEvent.click(submitButton);

    expect(screen.queryByText(/is required/i)).not.toBeInTheDocument();
  });
});
