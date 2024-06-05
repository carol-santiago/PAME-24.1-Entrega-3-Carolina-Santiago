import React from "react";
import Sidebar from "../../components/Sidebar";
import UserList from "@/app/components/UserList";
import { users } from "../../../../public/utils/users"; // users = array de usuários criado para demonstração

const Home = () => {
  // renderização da página com todos os usuários
  return (
    <div className="flex">
      <Sidebar />
      <UserList users={users} />
    </div>
  );
};

export default Home;
