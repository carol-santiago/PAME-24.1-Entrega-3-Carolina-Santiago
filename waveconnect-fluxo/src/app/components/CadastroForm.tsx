import React from "react";

// interface CadastroFormProps {
//   setIsLogin: (isLogin: boolean) => void;
// }

const CadastroForm: React.FC = () => {
  return (
    <form className="flex flex-col gap-4 w-80 p-4">
      <div>
        <label className="block text-gray-700 mb-1">Username</label>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-1">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-1">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Cadastrar
      </button>
      <button
        type="button"
        className="text-blue-500 hover:underline mt-4"
        //onClick={() => setIsLogin(true)}
      >
        Voltar para Login
      </button>
    </form>
  );
};

export default CadastroForm;
