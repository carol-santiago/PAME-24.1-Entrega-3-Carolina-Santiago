import React from "react";
import Sidebar from "../../components/Sidebar";
import { notifications } from "../../../../public/utils/notifications"; // notifications = array de notificações criado para demonstração

const Notifications = () => {
  return (
    <div className="w-full h-screen flex flex-row">
      <Sidebar></Sidebar>
      <div className="flex flex-col items-center p-6 w-5/6">
        <h1 className="text-2xl font-bold mb-4">Notificações Recentes</h1>
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
          {/* mapeamento das notificações */}
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div key={notification.id} className="border-b py-2">
                {" "}
                {/* id da notificação */}
                <p className="">{notification.message}</p>{" "}
                {/* mensagem da notificação */}
                <p className=" text-sm">{notification.time}</p>{" "}
                {/* horário da notificação */}
              </div>
            ))
          ) : (
            <p className="">Você não tem notificações.</p> // mensagem caso não haja notificações
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
