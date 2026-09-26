import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  // Test 1: Check title existence (case-insensitive)
  test('renders the notifications title "Here is the list of notifications"', () => {
    render(<Notifications />);
    const titleElement = screen.getByText(/here is the list of notifications/i);
    expect(titleElement).toBeInTheDocument();
  });

  // Test 2: Check button element existence
  test('renders a button element', () => {
    render(<Notifications />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  // Test 3: Check for 3 list items rendered
  test('renders 3 list item elements', () => {
    render(<Notifications />);
    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(3);
  });

  // Test 4: Verify close button click logs to console
  test('logs "Close button has been clicked" to the console when close button is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    
    render(<Notifications />);
    const closeButton = screen.getByRole('button');
    
    fireEvent.click(closeButton);
    
    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');
    
    consoleSpy.mockRestore();
  });
});
