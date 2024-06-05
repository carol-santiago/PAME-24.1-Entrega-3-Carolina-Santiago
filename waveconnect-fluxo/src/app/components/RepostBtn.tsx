import React from "react";
import Image from "next/image";
import repost from "../../../public/icons/repost.png";

const RepostBtn: React.FC = () => {
  return (
    // botao de repost (nao faz nada ainda)
    <Image
      src={repost}
      alt=""
      className="cursor-pointer mr-2 w-8 p-1 rounded-full bg-cinnamon"
    ></Image>
  );
};

export default RepostBtn;
