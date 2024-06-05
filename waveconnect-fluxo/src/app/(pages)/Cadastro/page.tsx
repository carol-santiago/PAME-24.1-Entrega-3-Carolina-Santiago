import React, { useState } from "react";
import CadastroForm from "../../components/CadastroForm"; // Import CadastroForm component

const Cadastro: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-sage w-1/2 flex justify-center items-center">
        <h1 className="text-beige text-6xl font-extrabold">
          Welcome to Waveconnect
        </h1>
      </div>
      <div className="bg-beige w-1/2 flex flex-col justify-center items-center">
        <CadastroForm></CadastroForm>
      </div>
    </div>
  );
};

export default Cadastro;
