import React from "react";
import Sidebar from "../../components/Sidebar";
import ModForm from "../../components/ModForm";
import Image from "next/image";
import profile from "../../../../public/icons/profile.png";

const Profile = () => {
  return (
    <div className="w-full h-screen flex flex-row">
      <Sidebar />
      <div className="flex flex-col w-full h-screen py-10 ml-[350px] mr-16">
        <div className="flex flex-col bg-white shadow-md rounded-lg py-7 px-16 w-[100%] justify-around">
          <h1 className="text-2xl font-bold mb-6 self-center">Perfil</h1>
          <div className="flex flex-row ">
            <div className=" w-full px-10 bg-gray-100 mr-6 rounded-2xl">
              <div className="flex flex-col items-center mb-4 p-4 rounded-2xl">
                <Image
                  src={profile} // imagem de perfil
                  alt="Profile"
                  className="w-24 h-24 rounded-full mb-4 bg-cinnamon p-2"
                ></Image>

                <h2 className="text-xl font-semibold">(Nome)</h2>
                {/* Dados do perfil */}
                <p>@(Username)</p>
              </div>
              <div className="w-full text-left">
                <p>
                  <strong>Bio:</strong> (Biografia)
                </p>
                <p>
                  <strong>Email:</strong> (email)@gmail.com
                </p>
                <p>
                  <strong>Location:</strong> (Localização)
                </p>
              </div>
            </div>
            <div className="w-full bg-celeste rounded-2xl">
              <ModForm></ModForm> {/* formulario de modificacao de dados */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
