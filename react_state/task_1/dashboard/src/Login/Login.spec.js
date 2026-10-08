import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";

import Login from "./Login";

test("submit button is disabled by default", () => {
  render(<Login />);

  const submitButton = screen.getByDisplayValue("OK");

  expect(submitButton).toBeDisabled();
});

test("submit button becomes enabled with valid email and password", () => {
  render(<Login />);

  const emailInput = screen.getByLabelText("Email:");
  const passwordInput = screen.getByLabelText("Password:");
  const submitButton = screen.getByDisplayValue("OK");

  expect(submitButton).toBeDisabled();

  fireEvent.change(emailInput, {
    target: { value: "test@example.com" },
  });

  expect(submitButton).toBeDisabled();

  fireEvent.change(passwordInput, {
    target: { value: "password123" },
  });

  expect(submitButton).toBeEnabled();
});

test("submit button remains disabled with invalid email", () => {
  render(<Login />);

  const emailInput = screen.getByLabelText("Email:");
  const passwordInput = screen.getByLabelText("Password:");
  const submitButton = screen.getByDisplayValue("OK");

  fireEvent.change(emailInput, {
    target: { value: "invalid-email" },
  });

  fireEvent.change(passwordInput, {
    target: { value: "password123" },
  });

  expect(submitButton).toBeDisabled();
});

test("submit button remains disabled with password shorter than 8 characters", () => {
  render(<Login />);

  const emailInput = screen.getByLabelText("Email:");
  const passwordInput = screen.getByLabelText("Password:");
  const submitButton = screen.getByDisplayValue("OK");

  fireEvent.change(emailInput, {
    target: { value: "test@example.com" },
  });

  fireEvent.change(passwordInput, {
    target: { value: "1234567" },
  });

  expect(submitButton).toBeDisabled();
});
