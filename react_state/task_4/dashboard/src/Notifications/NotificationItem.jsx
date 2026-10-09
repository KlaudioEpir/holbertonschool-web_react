import React, { PureComponent } from "react";

class NotificationItem extends PureComponent {
  render() {
    const { type = "default", html, value, markAsRead, id } = this.props;

    const style = type === "urgent" ? { color: "red" } : { color: "blue" };

    if (html) {
      return (
        <li
          data-notification-type={type}
          style={style}
          dangerouslySetInnerHTML={html}
          onClick={() => markAsRead(id)}
        />
      );
    }

    return (
      <li
        data-notification-type={type}
        style={style}
        onClick={() => markAsRead(id)}
      >
        {value}
      </li>
    );
  }
}

export default NotificationItem;
