import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  it('renders Notifications component without crashing', () => {
    render(<Notifications />);
    const menuItem = screen.getByText('Your notifications');
    expect(menuItem).toBeInTheDocument();
  });

  it('renders menu item when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} />);
    expect(screen.getByText('Your notifications')).toBeInTheDocument();
    expect(screen.queryByText('Here is the list of notifications')).not.toBeInTheDocument();
  });

  it('renders notifications box when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} />);
    expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
  });

  it('renders list notifications correctly when listNotifications is passed', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(screen.getByText('New course available')).toBeInTheDocument();
    expect(screen.getByText('New resume available')).toBeInTheDocument();
  });

  it('calls handleDisplayDrawer when menu item is clicked', () => {
    const handleDisplayDrawerMock = jest.fn();
    render(<Notifications displayDrawer={false} handleDisplayDrawer={handleDisplayDrawerMock} />);
    
    const menuItem = screen.getByText('Your notifications');
    fireEvent.click(menuItem);

    expect(handleDisplayDrawerMock).toHaveBeenCalled();
  });
});
