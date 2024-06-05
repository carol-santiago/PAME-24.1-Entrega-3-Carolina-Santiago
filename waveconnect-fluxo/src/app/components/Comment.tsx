import React from "react";

interface CommentProps {
  comment: {
    text: string;
  };
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  // componente de comentario
  return (
    <div className="p-2 rounded mb-2">
      <p>{comment.text}</p>
    </div>
  );
};

export default Comment;
