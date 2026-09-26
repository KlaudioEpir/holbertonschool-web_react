import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it('renders the text Here is the list of notifications', () => {
    render(<Notifications />);
    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
  });

  it('renders the button element', () => {
    render(<Notifications />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders three list items', () => {
    render(<Notifications />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  it('logs Close button has been clicked to the console when clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Notifications />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');
    consoleSpy.mockRestore();
  });
});