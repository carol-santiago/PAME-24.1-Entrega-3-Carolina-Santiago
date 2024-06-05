import React from "react";

// interface LoginFormProps {
//   setIsLogin: (isLogin: boolean) => void;
// }

const LoginForm: React.FC = () => {
  return (
    <form className="flex flex-col gap-4 w-80 p-4">
      <div>
        <label className="block text-gray-700 mb-1">Usuário</label>
        <input
          type="text"
          placeholder="Digite seu Usuário"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-1">Senha</label>
        <input
          type="password"
          placeholder="Digite sua Senha"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Entrar
      </button>
      <button
        type="button"
        className="text-blue-500 hover:underline mt-0"
        //onClick={() => setIsLogin(false)}
      >
        Cadastrar nova conta
      </button>
    </form>
  );
};

export default LoginForm;
