import React from "react";
import { BiLike } from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { RiShareForwardLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function PostFooter() {
  return (
    <div className="post-card__footer">
      <div className="post-card__footer-couts">
        <div className="ractions">
          <Link to="/">Sabekun Nahar Rima, Samiul Hasan and 77 others</Link>
        </div>
        <div className="comments">
          <Link to="/">10 Comments</Link>
        </div>
      </div>

      <div className="post-card__footer-actions">
        <button className="btn post-card__footer-actions-btn">
          <div className="icon">
            <BiLike />
          </div>
          Like
        </button>
        <button className="btn post-card__footer-actions-btn">
          <div className="icon">
            <GoComment />
          </div>
          Comment
        </button>
        <button className="btn post-card__footer-actions-btn">
          <div className="icon">
            <RiShareForwardLine />
          </div>
          Share
        </button>
      </div>
    </div>
  );
}

export default PostFooter;
