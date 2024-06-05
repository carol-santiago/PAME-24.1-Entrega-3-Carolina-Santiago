import React, { useState } from "react";
import CadastroForm from "../../components/CadastroForm"; // Import CadastroForm component

const Cadastro: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="bg-sage w-1/2 flex justify-center items-center p-20">
        <h1 className="text-beige text-6xl font-extrabold">
          Welcome to Waveconnect
        </h1>
      </div>
      <div className="bg-beige w-1/2 flex flex-col justify-center items-center">
        <h2 className="text-sage font-bold text-3xl mb-10">
          Faça seu cadastro!
        </h2>
        <CadastroForm></CadastroForm>
      </div>
    </div>
  );
};

export default Cadastro;
