import React from "react";

interface CommentProps {
  comment: {
    id: number;
    user: string;
    content: string;
    time: string;
  };
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  // componente de comentario
  return (
    <div className="p-2 mb-2 border-y-gray-300 border-b-2">
      <div className="flex flex-row justify-between">
        <p className="text-cinnamon text-sm mb-2">@{comment.user}</p>
        <p className="text-gray-400 text-sm mb-2">{comment.time}</p>
      </div>

      <p>{comment.content}</p>
    </div>
  );
};

export default Comment;
