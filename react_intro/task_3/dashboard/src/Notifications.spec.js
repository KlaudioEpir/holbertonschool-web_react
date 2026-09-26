import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component tests', () => {
  test('renders the title "Here is the list of notifications" ignoring case', () => {
    render(<Notifications />);
    // Përdorimi i RegEx /.../i siguron që teksti gjehet pavarësisht shkronjave të mëdha/vogëla
    const title = screen.getByText(/here is the list of notifications/i);
    expect(title).toBeInTheDocument();
  });

  test('renders a button element', () => {
    render(<Notifications />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('renders 3 list items', () => {
    render(<Notifications />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });

  test('logs "Close button has been clicked" to the console when button is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Notifications />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(consoleSpy).toHaveBeenCalledWith('Close button has been clicked');
    consoleSpy.mockRestore();
  });
});
