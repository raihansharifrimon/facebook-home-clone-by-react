import React from "react";
import { BsDot, BsThreeDots } from "react-icons/bs";
import { GoGlobe } from "react-icons/go";
import { Link } from "react-router-dom";
import Avatar from "../../../../common/avatar/Avatar";

function PostCardHeader({ user }) {
  return (
    <div className="post-card__header">
      <div className="post-card__header-left">
        <div className="post-card__header-avatar">
          <Avatar user={user} isLink={false} />
        </div>

        <div className="post-card__header-users">
          <Link to="/" className="post-ownner-name">
            {user.name}
          </Link>
          <div className="post-meta">
            <p>29m</p>
            <BsDot />
            <div className="icon">
              <span className="tooltip">Public</span>
              <GoGlobe />
            </div>
          </div>
        </div>
      </div>

      <div className="post-card__header-right">
        <button className="btn post-card__header-btn">
          <BsThreeDots />
        </button>
      </div>
    </div>
  );
}

export default PostCardHeader;
