import React from "react";

function PostContents({ caption, image }) {
  return (
    <div className="post-card__contents">
      <p className="text">{caption}</p>
      <div className="post-card__contents-gallery">
        <div className="post-img">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default PostContents;
