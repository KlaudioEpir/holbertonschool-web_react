import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  test('renders with blue color and data-notification-type="default" when type prop is default', () => {
    render(<NotificationItem type="default" value="Test item" />);
    const li = screen.getByText('Test item');

    expect(li).toHaveAttribute('data-notification-type', 'default');
    expect(li).toHaveStyle({ color: 'blue' });
  });

  test('renders with red color and data-notification-type="urgent" when type prop is urgent', () => {
    render(<NotificationItem type="urgent" value="Urgent item" />);
    const li = screen.getByText('Urgent item');

    expect(li).toHaveAttribute('data-notification-type', 'urgent');
    expect(li).toHaveStyle({ color: 'red' });
  });

  test('renders html content correctly when html prop is passed', () => {
    render(<NotificationItem type="urgent" html={{ __html: '<u>test html</u>' }} />);
    const li = screen.getByRole('listitem');

    expect(li.innerHTML).toBe('<u>test html</u>');
    expect(li).toHaveAttribute('data-notification-type', 'urgent');
  });
});
