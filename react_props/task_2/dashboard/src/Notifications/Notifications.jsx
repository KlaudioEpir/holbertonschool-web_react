import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import './Notifications.css';

class Notifications extends React.Component {
  render() {
    const { notifications } = this.props;

    return (
      <div className="Notifications">
        <p>Here is the list of notifications</p>
        <button
          type="button"
          aria-label="Close"
          onClick={() => console.log('Close button has been clicked')}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <ul>
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              type={notification.type}
              value={notification.value}
              html={notification.html}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string,
      }),
    }),
  ),
};

Notifications.defaultProps = {
  notifications: [],
};

export default Notifications;