import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  test('checks that the notifications title is rendered', () => {
    render(<Notifications />);

    expect(
      screen.getByText(/Here is the list of notifications/i)
    ).toBeInTheDocument();
  });

  test('checks that the button is rendered', () => {
    render(<Notifications />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('checks that 3 notifications are rendered', () => {
    render(<Notifications />);

    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('checks that clicking the close button logs the correct message', () => {
    const consoleSpy = jest
      .spyOn(console, 'log')
      .mockImplementation(() => {});

    render(<Notifications />);

    fireEvent.click(screen.getByRole('button'));

    expect(consoleSpy).toHaveBeenCalledWith(
      'Close button has been clicked'
    );

    consoleSpy.mockRestore();
  });
});