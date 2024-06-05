import React from "react";

interface LikeBtnProps {
  liked: boolean;
  onLike: () => void;
}

const LikeBtn: React.FC<LikeBtnProps> = ({ liked, onLike }) => {
  return (
    <img
      src={liked ? "/icons/like_filled.png" : "/icons/like.png"}
      alt="Like"
      className="cursor-pointer mr-2 w-8 p-1 rounded-full bg-sage"
    />
  );
};

export default LikeBtn;
