import React from "react";
import Image from "next/image";
import comment from "../../../public/icons/comment.png";

const CommentBtn: React.FC = () => {
  return (
    // botao de comentario
    <Image
      src={comment}
      alt=""
      className="cursor-pointer mr-2 w-8 p-1 rounded-full bg-cinnamon"
    ></Image>
  );
};

export default CommentBtn;
