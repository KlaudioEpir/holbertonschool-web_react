import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('renders the notifications title', () => {
    render(<Notifications />);

    expect(
      screen.getByText('Here is the list of notifications', {
        exact: false,
      })
    ).toBeInTheDocument();
  });

  test('renders the close button', () => {
    render(<Notifications />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('renders 3 notifications', () => {
    render(<Notifications />);

    const notifications = screen.getAllByRole('listitem');

    expect(notifications).toHaveLength(3);
  });

  test('logs message when close button is clicked', () => {
    const consoleSpy = jest
      .spyOn(console, 'log')
      .mockImplementation(() => {});

    render(<Notifications />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalledWith(
      'Close button has been clicked'
    );

    consoleSpy.mockRestore();
  });
});