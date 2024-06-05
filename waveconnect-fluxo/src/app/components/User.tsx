import React from "react";

interface UserProps {
  user: {
    id: number;
    name: string;
    email: string;
    bio: string;
  };
}

const User: React.FC<UserProps> = ({ user }) => {
  // componente de usuario para a userList
  return (
    <div className="bg-white p-4 rounded shadow mb-4 flex flex-col w-48">
      <img src="/icons/profile.png" alt="" className="bg-sage rounded mb-4" />
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p>{user.bio}</p>
      <div className="flex items-center mt-2"></div>
    </div>
  );
};

export default User;
