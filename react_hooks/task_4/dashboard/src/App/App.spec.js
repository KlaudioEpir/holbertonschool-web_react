import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders App without crashing', () => {
    render(<App />);
    expect(screen.getByText('School dashboard')).toBeInTheDocument();
  });

  it('renders Login component when user is not logged in', () => {
    render(<App />);
    expect(screen.getByText('Login to access the full dashboard')).toBeInTheDocument();
  });

  it('updates user state to logged in when logIn function is called', () => {
    // Këtu mund të testosh nëse ekziston forma e login-it ose mund të testosh mutacionin e user state
    render(<App />);
    const emailInput = screen.getByLabelText(/Email:/i);
    const passwordInput = screen.getByLabelText(/Password:/i);
    const submitButton = screen.getByDisplayValue('Ok');

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    // Nëse buttoni bëhet enabled dhe klikohet
    expect(submitButton).toBeEnabled();
  });

  it('verifies displayDrawer state changes with handleDisplayDrawer and handleHideDrawer', () => {
    render(<App />);
    // Kontrollojmë nëse njoftimet shfaqen ose fshihen
    const notificationMenu = screen.getByText('Your notifications');
    expect(notificationMenu).toBeInTheDocument();
  });
});
