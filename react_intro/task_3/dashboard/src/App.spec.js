import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders 2 input elements', () => {
    render(<App />);
    const inputElements = screen.getAllByRole('textbox');
    // Note: input type="password" is not matched by 'textbox' role, 
    // so querying inputs directly ensures exact count verification:
    const inputs = screen.getByRole('button').parentElement.querySelectorAll('input');
    expect(inputs).toHaveLength(2);
  });

  test('renders 2 label elements with text Email and Password', () => {
    render(<App />);
    const emailLabel = screen.getByText(/email/i);
    const passwordLabel = screen.getByText(/password/i);

    expect(emailLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(emailLabel.tagName).toBe('LABEL');
    expect(passwordLabel.tagName).toBe('LABEL');
  });

  test("renders a button with the text 'OK'", () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /ok/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
