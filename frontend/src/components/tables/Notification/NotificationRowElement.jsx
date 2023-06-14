import React from "react";
import "./NotificationRowElement.css";
const NotificationRowElement = (props) => {
  return (
    <div className="notification-row-content" key={props.index}>
      <span>{props.item.message}</span>
    </div>
  );
};

export default NotificationRowElement;
