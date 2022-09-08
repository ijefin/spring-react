import React from "react";
import icon from "../../../assets/notification-icon.svg";
import "./notificationButton.css";

export default function NotificationButton() {
  return (
    <div className="dsmeta-red-btn">
      <img src={icon} alt="Notificar" />
    </div>
  );
}
