import React from "react";

class NotificationItem extends React.PureComponent {
render() {
const { type = "default", html, value, markAsRead, id } = this.props;

```
const style = type === "urgent" ? { color: "red" } : { color: "blue" };

const handleClick = () => {
  if (markAsRead) {
    markAsRead(id);
  }
};

if (html) {
  return (
    <li
      data-notification-type={type}
      style={style}
      dangerouslySetInnerHTML={html}
      onClick={handleClick}
    />
  );
}

return (
  <li
    data-notification-type={type}
    style={style}
    onClick={handleClick}
  >
    {value}
  </li>
);
```

}
}

export default NotificationItem;
