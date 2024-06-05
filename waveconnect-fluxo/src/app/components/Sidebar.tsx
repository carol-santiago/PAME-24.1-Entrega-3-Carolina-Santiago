import React from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    // barra lateral com links para as paginas
    <div className="w-1/8   bg-sage p-2 py-10 mr-6 flex flex-col h-[100vh]">
      <div className="flex flex-row mb-4 items-center">
        {/* barra de pesquisa - AO CLICAR NA LUPA, LEVA PARA A LISTA DE USERS */}
        {/* funcionalidade real ainda nao implementada */}
        <Link href={"userlist"}>
          <img
            src={"/icons/search.png"}
            alt="home"
            className="cursor-pointer  w-9"
          />
        </Link>

        <input
          type="text"
          title="search"
          placeholder="Pesquisar..."
          className="w-[60%] p-1 ml-2 border border-white rounded 
          focus:outline-none placeholder:text-sm"
        />
      </div>
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
        {/* botao de logout - AO CLICAR, LEVA PARA A PAGINA DE LOGIN
        nao existe sistema de logout real ainda */}
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
