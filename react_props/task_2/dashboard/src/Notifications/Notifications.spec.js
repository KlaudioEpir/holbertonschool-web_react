import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '<u>Urgent requirement</u>' } },
  ];

  test('renders 3 notification items when listNotifications prop is passed', () => {
    render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const items = screen.getAllByRole('listitem');

    expect(items).toHaveLength(3);
    expect(screen.getByText('New course available')).toBeInTheDocument();
    expect(screen.getByText('New resume available')).toBeInTheDocument();
  });

  test('renders "No new notification for now" when listNotifications is empty or not passed', () => {
    render(<Notifications displayDrawer={true} />);
    expect(screen.getByText('No new notification for now')).toBeInTheDocument();
  });
});
