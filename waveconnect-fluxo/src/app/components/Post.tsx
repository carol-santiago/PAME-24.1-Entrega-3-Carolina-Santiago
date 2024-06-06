import React from "react";
import LikeBtn from "./LikeBtn";
import RepostBtn from "./RepostBtn";
import CommentBtn from "./CommentBtn";
import Comment from "./Comment";

interface PostProps {
  post: {
    id: number;
    user: string;
    title: string;
    content: string;
    isImage: boolean;
    image: string;
    liked: boolean;
    time: string;
    isCommented: boolean;
    comments: Array<{
      id: number;
      user: string;
      content: string;
      time: string;
    }>;
  };
  onLike: (postId: number) => void;
  onRepost: (postId: number) => void;
}

const Post: React.FC<PostProps> = ({ post, onLike, onRepost }) => {
  const handleImage = () => {
    if (post.isImage) {
      return (
        <img
          src={post.image}
          alt=""
          className="rounded my-8 mx-0 w-[80%] ml-[9%]"
        />
      );
    }
  };
  const handleComments = () => {
    if (post.isCommented) {
      return (
        <div className="bg-gray-100 p-4 rounded shadow mb-4 w-1/2">
          {post.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      );
    }
  };
  return (
    <div className="bg-white p-4 rounded shadow mb-4 w-1/2">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="text-gray-400 text-sm mb-2">@{post.user}</p>
      <p>{post.content}</p>
      {handleImage()}
      <div className="flex items-center my-2">
        <LikeBtn liked={post.liked} onLike={() => onLike(post.id)} />
        <RepostBtn />
        <CommentBtn />
        <p className="text-gray-400">{post.time}</p>
      </div>
      {handleComments()}
    </div>
  );
};

export default Post;
