import axios from "axios";
import React, { useEffect } from "react";
import icon from "../../../assets/notification-icon.svg";
import { BASE_URL } from "../../../utils/request";
import "./notificationButton.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  saleId: number;
};

const handleClick = (id: number) => {
  axios(`${BASE_URL}/allSales/${id}/notification`).then(() => {
    toast.success("Enviado com sucesso!");
  });
};

export default function NotificationButton({ saleId }: Props) {
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={icon} alt="Notificar" />
    </div>
  );
}
