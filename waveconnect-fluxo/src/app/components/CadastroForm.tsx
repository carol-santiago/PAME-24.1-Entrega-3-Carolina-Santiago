import React from "react";
import SubmitBtn from "./SubmitBtn";

const CadastroForm: React.FC = () => {
  return (
    // formulario de cadastro
    <form className="flex flex-col gap-4 w-[60%] p-4 items-center">
      <div className="w-full">
        <label className="block mb-1">Usuário</label>
        <input
          type="text"
          placeholder="Digite um nome de Usuário"
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
      {/* botao de submit */}
      <SubmitBtn name="Cadastrar" rota="cadastro"></SubmitBtn>
      {/* botao de voltar para a pagina de login */}
      <SubmitBtn name="Voltar para Login" rota="login"></SubmitBtn>
    </form>
  );
};

export default CadastroForm;
