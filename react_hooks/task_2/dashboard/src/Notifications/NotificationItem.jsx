import { memo } from 'react';
import PropTypes from 'prop-types';
import './NotificationItem.css';

const NotificationItem = memo(function NotificationItem({ type, value, html, markAsRead, id }) {
  if (html) {
    return (
      <li
        data-notification-type={type}
        dangerouslySetInnerHTML={{ __html: html }}
        onClick={() => markAsRead(id)}
      />
    );
  }
  return (
    <li data-notification-type={type} onClick={() => markAsRead(id)}>
      {value}
    </li>
  );
});

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: undefined,
  markAsRead: () => {},
  id: 0,
};

export default NotificationItem;
