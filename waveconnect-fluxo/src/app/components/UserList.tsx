import React from "react";
import User from "./User";

interface UserListProps {
  users: Array<{
    // props de cada usuario
    id: number;
    username: string;
    name: string;
    email: string;
    bio: string;
  }>;
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  // mapeamento da lista de usuários
  return (
    <div className="w-3/4 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ml-[350px] mr-16">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
