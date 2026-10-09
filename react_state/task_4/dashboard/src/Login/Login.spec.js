test("calls logIn with email and password when form is submitted", () => {
  const logIn = jest.fn();

  render(
    <Login
      logIn={logIn}
      email=""
      password=""
    />
  );

  const emailInput = screen.getByLabelText("Email:");
  const passwordInput = screen.getByLabelText("Password:");
  const submitButton = screen.getByDisplayValue("OK");

  fireEvent.change(emailInput, {
    target: { value: "test@example.com" },
  });

  fireEvent.change(passwordInput, {
    target: { value: "password123" },
  });

  expect(submitButton).toBeEnabled();

  fireEvent.click(submitButton);

  expect(logIn).toHaveBeenCalledWith(
    "test@example.com",
    "password123"
  );
});
