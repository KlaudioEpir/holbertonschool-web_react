import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
  const style = {
    color: type === 'urgent' ? 'red' : 'blue',
  };

  if (html) {
    return (
      <li
        style={style}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
      />
    );
  }

  return (
    <li
      style={style}
      data-notification-type={type}
    >
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  html: null,
};

export default NotificationItem;
