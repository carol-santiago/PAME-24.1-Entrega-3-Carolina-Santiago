import React from "react";
import SubmitBtn from "../components/SubmitBtn";

const LoginForm: React.FC = () => {
  return (
    // formulario de login
    <form className="flex flex-col gap-4 w-[60%] p-4 items-center">
      <div className="w-full">
        <label className="block mb-1">Usuário</label>
        <input
          type="text"
          placeholder="Digite um nome de Usuário"
          className="w-full p-2 border rounded focus:outline-none"
          required
        />
      </div>
      <div className="mb-6 w-full">
        <label className="block mb-1">Senha</label>
        <input
          type="password"
          placeholder="Digite sua Senha"
          className="w-full p-2 border rounded focus:outline-none"
          required
        />
      </div>
      {/* botao de submit */}
      <SubmitBtn name={"Entrar"} rota={"home"}></SubmitBtn>
      {/* botao para a pag de cadastro */}
      <SubmitBtn name={"Cadastrar nova conta"} rota={"cadastro"}></SubmitBtn>
    </form>
  );
};

export default LoginForm;
