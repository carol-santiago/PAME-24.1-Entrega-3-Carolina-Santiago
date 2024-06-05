import React from "react";
import Post from "./Post";

interface PostListProps {
  posts: Array<{
    id: number;
    title: string;
    content: string;
    liked: boolean;
  }>;
  onLike: (postId: number) => void;
  onRepost: (postId: number) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onLike, onRepost }) => {
  return (
    <div className="w-3/4 p-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} onLike={onLike} onRepost={onRepost} />
      ))}
    </div>
  );
};

export default PostList;
