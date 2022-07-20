import React from "react";
import { StoryList, CreatePostCard, CreateRoom, PostList } from "./components";
import "./Home.scss";

function Home() {
  return (
    <div className="post-content">
      <StoryList />
      <CreatePostCard />
      <CreateRoom />
      <PostList />
    </div>
  );
}

export default Home;
