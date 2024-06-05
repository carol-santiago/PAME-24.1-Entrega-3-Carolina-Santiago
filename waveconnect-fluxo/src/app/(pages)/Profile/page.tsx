import React from "react";
import Sidebar from "../../components/Sidebar";
import ModForm from "../../components/ModForm";

const Profile = () => {
  return (
    <div className="w-full h-screen flex flex-row">
      <Sidebar />
      <div className="flex flex-col items-center p-6 w-5/6">
        <h1 className="text-2xl font-bold mb-4">Perfil</h1>
        <div className="flex flex-row bg-white shadow-md rounded-lg p-6 w-[70%]">
          <div className=" w-full">
            <div className="flex flex-col items-center mb-4">
              <img
                src="/icons/profile.png" // imagem de perfil
                alt="Profile"
                className="w-24 h-24 rounded-full mb-4 bg-sage p-2"
              />

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
          <div className="w-full">
            <ModForm></ModForm> {/* formulario de modificacao de dados */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
