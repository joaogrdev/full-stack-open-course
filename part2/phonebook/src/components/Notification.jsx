import React from "react";

const Notification = ({ notification }) => {
  if (notification.mensagem === "") {
    return null;
  }

  return (<p className={notification.tipo}>{notification.mensagem}</p>);
};

export default Notification;
