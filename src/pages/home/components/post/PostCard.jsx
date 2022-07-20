import React from "react";
import "./PostCard.scss";
import PostCardHeader from "./PostCardHeader";
import PostContents from "./PostContents";
import PostFooter from "./PostFooter";

function PostCard({ post }) {
  return (
    <div className="post-card">
      <PostCardHeader user={post.user} />
      <PostContents caption={post.caption} image={post.image} />
      <PostFooter post={post} />
    </div>
  );
}

export default PostCard;
