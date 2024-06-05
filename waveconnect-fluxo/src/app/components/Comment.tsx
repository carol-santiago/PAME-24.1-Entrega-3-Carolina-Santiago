import React from "react";

interface CommentProps {
  comment: {
    text: string;
  };
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div className="bg-gray-100 p-2 rounded mb-2">
      <p>{comment.text}</p>
    </div>
  );
};

export default Comment;
