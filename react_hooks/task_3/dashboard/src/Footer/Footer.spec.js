import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import AppContext from '../Context/context';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
  });

  it('does not render contact us link when user is logged out', () => {
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(screen.queryByText(/Contact us/i)).not.toBeInTheDocument();
  });

  it('renders contact us link when user is logged in', () => {
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(screen.getByText(/Contact us/i)).toBeInTheDocument();
  });
});
