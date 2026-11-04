import { useContext } from 'react';
import AppContext from '../Context/context';
import logo from '../assets/holberton-logo.jpg';
import './Header.css';

export default function Header() {
  const { user, logOut } = useContext(AppContext);

  return (
    <>
      <div className="App-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      {user.isLoggedIn && (
        <section id="logoutSection">
          Welcome {user.email} (<a href="#logout" onClick={logOut}>logout</a>)
        </section>
      )}
    </>
  );
}
