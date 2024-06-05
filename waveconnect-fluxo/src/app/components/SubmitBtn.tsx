import Link from "next/link";
import React from "react";

interface SubmitBtnProps {
  name: string;
  rota: string;
}

const SubmitBtn: React.FC<SubmitBtnProps> = ({ name, rota }: any) => {
  return (
    <Link href={rota}>
      <button
        type="submit"
        title="submit"
        className="flex justify-center p-2 bg-sage rounded-2xl text-white font-semibold w-60"
      >
        {name}
      </button>
    </Link>
  );
};

export default SubmitBtn;
