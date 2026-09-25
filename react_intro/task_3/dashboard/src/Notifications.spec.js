import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('renders the title "Here is the list of notifications"', () => {
    render(<Notifications />);
    const titleElement = screen.getByText(/here is the list of notifications/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders a button element', () => {
    render(<Notifications />);
    const buttonElement = screen.getByRole('button', { name: /close/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders 3 list items (li elements) as notifications', () => {
    render(<Notifications />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });

  test('logs "Close button has been clicked" to console when button is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    
    render(<Notifications />);
    const buttonElement = screen.getByRole('button', { name: /close/i });
    
    fireEvent.click(buttonElement);
    
    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');
    
    consoleSpy.mockRestore();
  });
});
