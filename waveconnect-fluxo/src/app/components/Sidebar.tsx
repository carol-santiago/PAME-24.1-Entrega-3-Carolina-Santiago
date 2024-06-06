import React from "react";
import Link from "next/link";
import Image from "next/image";
import notificationbell from "../../../public/icons/notificationbell.png";
import profile from "../../../public/icons/profile.png";
import home from "../../../public/icons/home.png";
import search from "../../../public/icons/search.png";
import logout from "../../../public/icons/logout.png";

const Sidebar: React.FC = () => {
  return (
    // barra lateral com links para as paginas
    <div className="w-fit bg-sage pl-2 py-10 flex flex-col h-screen fixed">
      <div className="flex flex-row mb-4 items-center">
        {/* barra de pesquisa - AO CLICAR NA LUPA, LEVA PARA A LISTA DE USERS */}
        {/* funcionalidade real ainda nao implementada */}
        <Link href={"userlist"}>
          <Image src={search} alt="" className="cursor-pointer w-9"></Image>
        </Link>

        <input
          type="text"
          title="search"
          placeholder="Pesquisar..."
          className="w-[70%] p-1 ml-2 border border-white rounded 
          focus:outline-none placeholder:text-sm"
        />
      </div>
      <Link href={"home"}>
        <div className="flex flex-row mb-4 items-center">
          <Image src={home} alt="" className="cursor-pointer w-9"></Image>
          <p className="text-white font-semibold">Início</p>
        </div>
      </Link>
      <Link href={"profile"}>
        <div className="flex flex-row mb-4  items-center">
          <Image src={profile} alt="" className="cursor-pointer w-9"></Image>
          <p className="text-white font-semibold">Perfil</p>
        </div>
      </Link>

      <Link href={"notifications"}>
        <div className="flex flex-row mb-4  items-center">
          <Image
            src={notificationbell}
            alt=""
            className="cursor-pointer w-9"
          ></Image>
          <p className="text-white font-semibold">Notificações</p>
        </div>
      </Link>
      <Link href={"login"}>
        {/* botao de logout - AO CLICAR, LEVA PARA A PAGINA DE LOGIN
        nao existe sistema de logout real ainda */}
        <div className="flex flex-row mb-4 items-center">
          <Image src={logout} alt="" className="cursor-pointer w-9"></Image>
          <p className="text-white font-semibold">Logout</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
