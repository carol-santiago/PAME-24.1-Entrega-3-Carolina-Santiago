import React from "react";
import Sidebar from "../../components/Sidebar";
import PostList from "../../components/PostList";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Post 1",
      content: "Bom dia!!!",
      liked: false,
    },
    {
      id: 2,
      title: "Post 2",
      content: "Olá, tudo bem?",
      liked: false,
    },
  ];

  const handleProfileClick = () => {
    console.log("Profile clicked");
  };

  const handleNotificationsClick = () => {
    console.log("Notifications clicked");
  };

  const handleHomeClick = () => {
    console.log("Home clicked");
  };

  const handleLike = (postId: number) => {
    console.log(`Like clicked for post ${postId}`);
  };

  const handleRepost = (postId: number) => {
    console.log(`Repost clicked for post ${postId}`);
  };

  return (
    <div className="flex">
      <Sidebar />
      <PostList posts={posts} onLike={handleLike} onRepost={handleRepost} />
    </div>
  );
};

export default Home;
