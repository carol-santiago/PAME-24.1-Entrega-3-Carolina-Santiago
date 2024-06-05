import React from "react";
import Image from "next/image";
import Sidebar from "../../components/Sidebar";
import { notifications } from "../../../../public/utils/notifications";
import notificationbell from "../../../../public/icons/notificationbell.png";

const Notifications = () => {
  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <div className="flex flex-col  p-6 py-10 w-full">
        <h1 className="text-3xl font-bold mb-6">Notificações Recentes</h1>
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className="border-b py-4 flex items-start space-x-4"
              >
                <Image
                  src={notificationbell}
                  alt=""
                  className="w-9 bg-cinnamon p-1 rounded-full"
                ></Image>{" "}
                {/* ícone de notificação */}
                <div>
                  <p className="text-lg">{notification.message}</p>
                  <p className="text-sm text-gray-500">{notification.time}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              Você não tem notificações.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
