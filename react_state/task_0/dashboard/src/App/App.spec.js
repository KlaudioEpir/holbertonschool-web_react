import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('default state for displayDrawer is false', () => {
    const { container } = render(<App />);
    expect(screen.queryByText('Here is the list of notifications')).not.toBeInTheDocument();
  });

  test('handleDisplayDrawer updates displayDrawer state to true', () => {
    render(<App />);
    const menuItem = screen.getByText('Your notifications');
    fireEvent.click(menuItem);
    expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
  });

  test('handleHideDrawer updates displayDrawer state to false', () => {
    render(<App />);
    const menuItem = screen.getByText('Your notifications');
    fireEvent.click(menuItem);
    const closeBtn = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeBtn);
    expect(screen.queryByText('Here is the list of notifications')).not.toBeInTheDocument();
  });
});