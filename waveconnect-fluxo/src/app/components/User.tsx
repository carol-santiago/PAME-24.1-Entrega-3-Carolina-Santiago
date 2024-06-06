import React from "react";
import Image from "next/image";
import profile from "../../../public/icons/profile.png";
interface UserProps {
  user: {
    id: number;
    username: string;
    name: string;
    email: string;
    bio: string;
  };
}

const User: React.FC<UserProps> = ({ user }) => {
  // componente de usuario para a userList
  return (
    <div className="bg-white p-4 rounded shadow flex flex-col w-48 h-80">
      <Image
        src={profile}
        alt=""
        className="bg-sage rounded mb-4 w-full"
      ></Image>
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-gray-400 text-sm">@{user.username}</p>

      <p>{user.bio}</p>
      <div className="flex items-center mt-2"></div>
    </div>
  );
};

export default User;
