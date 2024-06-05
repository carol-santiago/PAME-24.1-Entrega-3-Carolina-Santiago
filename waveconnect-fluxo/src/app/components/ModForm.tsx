import React from "react";
import SubmitBtn from "./SubmitBtn";
import Link from "next/link";

const CadastroForm: React.FC = () => {
  return (
    <form className="flex flex-col gap-4 w-full p-4 items-center">
      <h2 className="self-start text-sage font-semibold text-xl">
        Modificar Dados:
      </h2>
      <div className="w-full">
        <label className="block mb-1">Nome</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          className="p-2 border rounded focus:outline-none w-full"
          required
        />
      </div>
      <div className="w-full">
        <label className="block mb-1">Usuário</label>
        <input
          type="text"
          placeholder="Digite um nome de usuário"
          className="p-2 border rounded focus:outline-none w-full"
          required
        />
      </div>
      <div className="w-full">
        <label className="block mb-1">Email</label>
        <input
          type="email"
          placeholder="Digite seu email"
          className="w-full p-2 border rounded focus:outline-none"
          required
        />
      </div>
      <div className="w-full">
        <label className="block mb-1">Senha</label>
        <input
          type="password"
          placeholder="Digite uma senha"
          className="w-full p-2 border rounded focus:outline-none"
          required
        />
      </div>
      <div className="w-full mb-6">
        <label className="block mb-1">Confirme sua senha</label>
        <input
          type="password"
          placeholder="Confirme sua senha"
          className="w-full p-2 border rounded focus:outline-none"
          required
        />
      </div>
      <Link href="profile">
        <button
          type="submit"
          title="submit"
          className="flex justify-center p-2 bg-sage rounded-2xl text-white font-semibold w-60"
        >
          Salvar Alterações
        </button>
      </Link>
    </form>
  );
};

export default CadastroForm;
