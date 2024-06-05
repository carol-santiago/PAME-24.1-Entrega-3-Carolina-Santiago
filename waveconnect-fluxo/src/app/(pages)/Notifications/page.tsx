import React from "react";
import Sidebar from "../../components/Sidebar";

const Notifications = () => {
  const notifications = [
    { id: 1, message: "Você tem um novo seguidor!", time: "2 minutos atrás" },
    {
      id: 2,
      message: "Seu post recebeu um novo like.",
      time: "10 minutos atrás",
    },
    {
      id: 3,
      message: "@User2 comentou no seu post.",
      time: "2 dias atrás",
    },
  ];

  return (
    <div className="w-full h-screen flex flex-row">
      <Sidebar></Sidebar>
      <div className="flex flex-col items-center p-6 w-5/6">
        <h1 className="text-2xl font-bold mb-4">Notificações Recentes</h1>
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div key={notification.id} className="border-b py-2">
                <p className="">{notification.message}</p>
                <p className=" text-sm">{notification.time}</p>
              </div>
            ))
          ) : (
            <p className="">Você não tem notificações.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
