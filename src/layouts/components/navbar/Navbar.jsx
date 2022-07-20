import React from "react";
import { MdFacebook, MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__user">
        <div className="navbar__user-img">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="rimon" />
        </div>
        <span className="navbar__user-badge">
          <MdFacebook />
        </span>
      </div>
      <ul className="navbar__links">
        <li className="navbar__link-item active">
          <Link className="navbar__link" to="/">
            <span className="icon">
              <MdHome />
            </span>
            <span className="tooltip">Home</span>
          </Link>
        </li>
        <li className="navbar__link-item">
          <Link className="navbar__link" to="/">
            <span className="icon">
              <MdHome />
            </span>
            <span className="tooltip">Home</span>
          </Link>
        </li>
        <li className="navbar__link-item">
          <Link className="navbar__link" to="/">
            <span className="icon">
              <MdHome />
            </span>
            <span className="tooltip">Home</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
