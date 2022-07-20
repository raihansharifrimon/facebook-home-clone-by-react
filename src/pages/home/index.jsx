import React from "react";
import { Stories, CreatePostCard, CreateRoom, PostList } from "./components";
import "./Home.scss";

function Home() {
  return (
    <div className="post-content">
      <Stories />
      <CreatePostCard />
      <CreateRoom />
      <PostList />
    </div>
  );
}

export default Home;
