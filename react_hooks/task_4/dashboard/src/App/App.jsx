import { useState, useCallback } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import AppContext, { user as defaultUser } from '../Context/context';
import './App.css';

export default function App() {
  const [displayDrawer, setDisplayDrawer] = useState(true);
  const [user, setUser] = useState(defaultUser);
  const [listNotifications, setListNotifications] = useState([
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '<u>Test html</u>' } },
  ]);

  const handleDisplayDrawer = useCallback(() => {
    setDisplayDrawer(true);
  }, []);

  const handleHideDrawer = useCallback(() => {
    setDisplayDrawer(false);
  }, []);

  const logIn = (email, password) => {
    setUser({
      email,
      password,
      isLoggedIn: true,
    });
  };

  const logOut = useCallback(() => {
    setUser(defaultUser);
  }, []);

  const markNotificationAsRead = useCallback((id) => {
    setListNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  }, []);

  return (
    <AppContext.Provider value={{ user, logOut }}>
      <div className="App">
        <Notifications
          displayDrawer={displayDrawer}
          listNotifications={listNotifications}
          handleDisplayDrawer={handleDisplayDrawer}
          handleHideDrawer={handleHideDrawer}
          markAsRead={markNotificationAsRead}
        />
        <Header />
        {user.isLoggedIn ? <CourseList /> : <Login logIn={logIn} />}
        <Footer />
      </div>
    </AppContext.Provider>
  );
}
