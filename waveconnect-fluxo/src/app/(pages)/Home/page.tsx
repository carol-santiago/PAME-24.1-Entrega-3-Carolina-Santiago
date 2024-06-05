import React from "react";
import Sidebar from "../../components/Sidebar";
import PostList from "../../components/PostList";
import { posts } from "../../../../public/utils/posts"; // posts = array de posts criado para demonstração

const Home = () => {
  const handleLike = (postId: number) => {
    // funcao de like (a definir)
    console.log(`Like ${postId}`);
  };

  const handleRepost = (postId: number) => {
    // funcao de repost (a definir)
    console.log(`Repost ${postId}`);
  };

  return (
    <div className="flex">
      <Sidebar />
      <PostList posts={posts} onLike={handleLike} onRepost={handleRepost} />
    </div>
  );
};

export default Home;
