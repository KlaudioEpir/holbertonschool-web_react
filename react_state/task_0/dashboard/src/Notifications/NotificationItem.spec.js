import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  test('clicking on menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    render(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
    
    const menuItem = screen.getByText('Your notifications');
    fireEvent.click(menuItem);
    
    expect(handleDisplayDrawer).toHaveBeenCalledTimes(1);
  });

  test('clicking on close button calls handleHideDrawer', () => {
    const handleHideDrawer = jest.fn();
    render(
      <Notifications
        displayDrawer={true}
        handleHideDrawer={handleHideDrawer}
      />
    );
    
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    
    expect(handleHideDrawer).toHaveBeenCalledTimes(1);
  });
});
