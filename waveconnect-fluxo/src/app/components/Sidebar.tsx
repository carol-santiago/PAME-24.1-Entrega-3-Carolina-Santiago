import React from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <div className="w-1/8 h-screen  bg-sage p-4 py-10 mr-6 flex flex-col">
      <Link href={"home"}>
        <div className="flex flex-row mb-4 items-center">
          <img
            src={"/icons/home.png"}
            alt="home"
            className="cursor-pointer  w-9"
          />
          <p className="text-white font-semibold">Início</p>
        </div>
      </Link>
      <Link href={"profile"}>
        <div className="flex flex-row mb-4  items-center">
          <img
            src={"/icons/profile.png"}
            alt="profile"
            className="cursor-pointer w-9"
          />
          <p className="text-white font-semibold">Perfil</p>
        </div>
      </Link>

      <Link href={"notifications"}>
        <div className="flex flex-row mb-4  items-center">
          <img
            src={"/icons/notifications.png"}
            alt="notifications"
            className="cursor-pointer w-9"
          />{" "}
          <p className="text-white font-semibold">Notificações</p>
        </div>
      </Link>
      <Link href={"login"}>
        <div className="flex flex-row mb-4 items-center">
          <img
            src={"/icons/logout.png"}
            alt="logout"
            className="cursor-pointer mr-2 w-9"
          />
          <p className="text-white font-semibold">Logout</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
