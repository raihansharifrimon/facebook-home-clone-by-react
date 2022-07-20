import React from "react";
import "./PostCard.scss";
import PostCardHeader from "./PostCardHeader";
import PostContents from "./PostContents";
import PostFooter from "./PostFooter";

function PostCard() {
  return (
    <div className="post-card">
      <PostCardHeader />
      <PostContents />
      <PostFooter />
    </div>
  );
}

export default PostCard;
