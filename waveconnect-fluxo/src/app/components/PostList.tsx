import React from "react";
import Post from "./Post";

interface PostListProps {
  posts: Array<{
    // props de cada post
    id: number;
    title: string;
    content: string;
    liked: boolean;
  }>;
  onLike: (postId: number) => void; // funcao de like (a definir)
  onRepost: (postId: number) => void; // funcao de repost (a definir)
}

const PostList: React.FC<PostListProps> = ({ posts, onLike, onRepost }) => {
  // lista de posts
  return (
    <div className="w-3/4 p-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} onLike={onLike} onRepost={onRepost} />
      ))}
    </div>
  );
};

export default PostList;
