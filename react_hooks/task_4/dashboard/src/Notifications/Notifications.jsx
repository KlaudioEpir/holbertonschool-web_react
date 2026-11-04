import { memo } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css';

const Notifications = memo(function Notifications({
  displayDrawer,
  listNotifications,
  handleDisplayDrawer,
  handleHideDrawer,
  markAsRead,
}) {
  return (
    <>
      {displayDrawer ? (
        <div className="menuItem" onClick={handleHideDrawer}>
          Your notifications
        </div>
      ) : (
        <div className="menuItem" onClick={handleDisplayDrawer}>
          Your notifications
        </div>
      )}
      {displayDrawer && (
        <div className="Notifications">
          <button
            style={{
              position: 'absolute',
              right: '10px',
              top: '10px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
            aria-label="Close"
            onClick={(e) => {
              console.log('Close button has been clicked');
              handleHideDrawer && handleHideDrawer(e);
            }}
          >
            <img src={closeIcon} alt="close" width="15px" />
          </button>
          <p>Here is the list of notifications</p>
          {listNotifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <ul>
              {listNotifications.map((notif) => (
                <NotificationItem
                  key={notif.id}
                  id={notif.id}
                  type={notif.type}
                  value={notif.value}
                  html={notif.html}
                  markAsRead={markAsRead}
                />
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
}, (prevProps, nextProps) => {
  // Re-render vetëm nëse numri i njoftimeve ndryshon ose ndryshon gjendja e displayDrawer
  return (
    nextProps.listNotifications.length <= prevProps.listNotifications.length &&
    nextProps.displayDrawer === prevProps.displayDrawer
  );
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string,
      }),
    })
  ),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markAsRead: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markAsRead: () => {},
};

export default Notifications;
