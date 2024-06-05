import React from "react";
import Image from "next/image";
import like from "../../../public/icons/like.png";

interface LikeBtnProps {
  liked: boolean; // se o botao foi clicado
  onLike: () => void; // funcao de like (a definir)
}

const LikeBtn: React.FC<LikeBtnProps> = ({ liked, onLike }) => {
  return (
    // botao de like
    <Image
      src={like}
      alt=""
      className="cursor-pointer mr-2 w-8 p-1 rounded-full bg-cinnamon"
    ></Image>
  );
};

export default LikeBtn;
