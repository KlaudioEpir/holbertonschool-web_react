import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications', () => {
  test('renders the notifications title', () => {
    render(<Notifications />);

    expect(
      screen.getByText('Here is the list of notifications', { exact: false })
    ).toBeInTheDocument();
  });

  test('renders the close button', () => {
    render(<Notifications />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('renders 3 notifications', () => {
    render(<Notifications />);

    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('logs a message when the close button is clicked', () => {
    const consoleLog = jest.spyOn(console, 'log');

    render(<Notifications />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(consoleLog).toHaveBeenCalledWith(
      'Close button has been clicked'
    );

    consoleLog.mockRestore();
  });
});