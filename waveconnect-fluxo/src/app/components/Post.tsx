import React from "react";
import LikeBtn from "./LikeBtn";
import RepostBtn from "./RepostBtn";
import CommentBtn from "./CommentBtn";

interface PostProps {
  post: {
    id: number;
    title: string;
    content: string;
    liked: boolean;
  };
  onLike: (postId: number) => void;
  onRepost: (postId: number) => void;
}

const Post: React.FC<PostProps> = ({ post, onLike, onRepost }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p>{post.content}</p>
      <div className="flex items-center mt-2">
        <LikeBtn liked={post.liked} onLike={() => onLike(post.id)} />
        <RepostBtn />
        <CommentBtn />
      </div>
    </div>
  );
};

export default Post;
