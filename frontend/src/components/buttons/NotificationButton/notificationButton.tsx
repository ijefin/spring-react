import axios from "axios";
import React, { useEffect } from "react";
import icon from "../../../assets/notification-icon.svg";
import { BASE_URL } from "../../../utils/request";
import "./notificationButton.css";

type Props = {
  saleId: number;
};

const handleClick = (id: number) => {
  axios(`${BASE_URL}/allSales/${id}/notification`).then((response) => {
    console.log("Sucesso!");
  });
};

export default function NotificationButton({ saleId }: Props) {
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={icon} alt="Notificar" />
    </div>
  );
}
