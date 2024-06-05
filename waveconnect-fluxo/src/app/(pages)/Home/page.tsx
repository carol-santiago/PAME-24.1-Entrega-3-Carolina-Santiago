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
      <div className="flex flex-col w-full h-screen py-10">
        <h1 className="text-3xl font-bold mb-6">Timeline</h1>
        <PostList posts={posts} onLike={handleLike} onRepost={handleRepost} />
      </div>
    </div>
  );
};

export default Home;
