import React from "react";

interface LikeBtnProps {
  liked: boolean; // se o botao foi clicado
  onLike: () => void; // funcao de like (a definir)
}

const LikeBtn: React.FC<LikeBtnProps> = ({ liked, onLike }) => {
  return (
    // botao de like
    <img
      src={liked ? "/icons/like_filled.png" : "/icons/like.png"}
      alt="Like"
      className="cursor-pointer mr-2 w-8 p-1 rounded-full bg-sage"
    />
  );
};

export default LikeBtn;
