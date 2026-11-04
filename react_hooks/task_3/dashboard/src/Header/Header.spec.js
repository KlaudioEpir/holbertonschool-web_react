import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import AppContext from '../Context/context';

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: false }, logOut: () => {} }}>
        <Header />
      </AppContext.Provider>
    );
    expect(screen.getByText('School dashboard')).toBeInTheDocument();
  });

  it('does not render logoutSection when user is logged out', () => {
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: false }, logOut: () => {} }}>
        <Header />
      </AppContext.Provider>
    );
    expect(screen.queryByText(/Welcome/i)).not.toBeInTheDocument();
  });

  it('renders logoutSection when user is logged in', () => {
    const user = { email: 'test@test.com', isLoggedIn: true };
    render(
      <AppContext.Provider value={{ user, logOut: () => {} }}>
        <Header />
      </AppContext.Provider>
    );
    expect(screen.getByText(/Welcome test@test.com/i)).toBeInTheDocument();
  });

  it('calls logOut function when logout link is clicked', () => {
    const logOutMock = jest.fn();
    const user = { email: 'test@test.com', isLoggedIn: true };
    render(
      <AppContext.Provider value={{ user, logOut: logOutMock }}>
        <Header />
      </AppContext.Provider>
    );
    
    const logoutLink = screen.getByText('logout');
    fireEvent.click(logoutLink);
    expect(logOutMock).toHaveBeenCalled();
  });
});
