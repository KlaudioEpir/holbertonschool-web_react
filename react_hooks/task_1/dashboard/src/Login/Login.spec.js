import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login Component', () => {
  it('renders without crashing', () => {
    render(<Login />);
    expect(screen.getByText(/Login to access the full dashboard/i)).toBeInTheDocument();
  });

  it('renders 2 input tags and 2 label tags', () => {
    render(<Login />);
    const emailInput = screen.getByLabelText(/Email:/i);
    const passwordInput = screen.getByLabelText(/Password:/i);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it('submit button is disabled by default', () => {
    render(<Login />);
    const submitButton = screen.getByRole('button', { value: /Ok/i }) || screen.getByDisplayValue('Ok');
    expect(submitButton).toBeDisabled();
  });

  it('submit button becomes enabled when changing the value of the inputs', () => {
    render(<Login />);
    const emailInput = screen.getByLabelText(/Email:/i);
    const passwordInput = screen.getByLabelText(/Password:/i);
    const submitButton = screen.getByDisplayValue('Ok');

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: '12345678' } });

    expect(submitButton).toBeEnabled();
  });
});
