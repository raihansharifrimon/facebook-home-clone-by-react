import React from "react";
import { Link } from "react-router-dom";
import "./Avatar.scss";

function Avatar({ user, size = 45 }) {
  return (
    <Link to={user?.link} className="avatar-link">
      <div
        style={{ "--size": size + "px" }}
        className={`avatar ${user.online ? "online" : ""}`}>
        <img className="avatar" src={user?.image} alt="avatar" />
      </div>
    </Link>
  );
}

export default Avatar;
