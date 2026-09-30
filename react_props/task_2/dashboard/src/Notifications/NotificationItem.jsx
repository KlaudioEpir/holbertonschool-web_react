import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
  const style = { color: type === 'urgent' ? 'red' : 'blue' };

  if (html) {
    return (
      <li
        data-notification-type={type}
        style={style}
        dangerouslySetInnerHTML={html}
      />
    );
  }

  return (
    <li data-notification-type={type} style={style}>
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: 'default',
  html: undefined,
  value: '',
};

export default NotificationItem;