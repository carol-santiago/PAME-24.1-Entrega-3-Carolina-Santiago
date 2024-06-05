import React from "react";
import styles from "../styles/Sidebar.module.css";
import Image from "next/image";
import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-blue w-20 h-screen flex flex-col items-center justify-center">
      <Link href="/profile">
        <Image src="/icons/profile.png" alt="Profile" width={30} height={30} />
      </Link>
      <Link href="/notifications">
        <Image
          src="/icons/notifications.png"
          alt="Notifications"
          width={30}
          height={30}
        />
      </Link>
      <Link href="/home">
        <Image src="/icons/home.png" alt="Home" width={30} height={30} />
      </Link>
    </div>
  );
};

export default Sidebar;
