import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import closeIcon from '../assets/close-icon.png';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;

    return (
      <React.Fragment>
        <div
          className={css(styles.menuItem)}
          onClick={handleDisplayDrawer}
        >
          Your notifications
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)}>
            <button
              style={{
                background: 'transparent',
                border: 'none',
                position: 'absolute',
                right: '15px',
                top: '15px',
                cursor: 'pointer',
              }}
              aria-label="Close"
              onClick={handleHideDrawer}
            >
              <img src={closeIcon} alt="close icon" width="10px" />
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.list)}>
              {listNotifications.length === 0 ? (
                <NotificationItem value="No new notification for now" />
              ) : (
                listNotifications.map((notif) => (
                  <NotificationItem
                    key={notif.id}
                    type={notif.type}
                    value={notif.value}
                    html={notif.html}
                  />
                ))
              )}
            </ul>
          </div>
        )}
      </React.Fragment>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

const styles = StyleSheet.create({
  menuItem: {
    position: 'fixed',
    right: '12px',
    top: '12px',
    cursor: 'pointer',
  },
  notifications: {
    padding: '1rem',
    border: '2px dashed #e1003c',
    position: 'fixed',
    right: '12px',
    top: '36px',
    width: '300px',
    backgroundColor: '#fff',
    zIndex: 100,
  },
  list: {
    paddingLeft: '20px',
  },
});

export default Notifications;