import { useContext } from 'react';
import AppContext from '../Context/context';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';

export default function Footer() {
  const { user } = useContext(AppContext);

  return (
    <div className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {user.isLoggedIn && (
        <p>
          <a href="#contact">Contact us</a>
        </p>
      )}
    </div>
  );
}
