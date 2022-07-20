import React, { useState } from "react";
import { FaBell, FaFacebookMessenger, FaSearch } from "react-icons/fa";
import { MdFacebook, MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const [navs] = useState([
    {
      id: 1,
      label: "Home",
      icon: <MdHome />,
      route: "/",
    },
    {
      id: 2,
      label: "Search Facebook",
      icon: <FaSearch />,
      route: "/",
    },
    {
      id: 3,
      label: "Notifications",
      icon: <FaBell />,
      route: "/",
    },
    {
      id: 4,
      label: "Messenger",
      icon: <FaFacebookMessenger />,
      route: "/",
    },
  ]);
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
        {navs.map((nav) => (
          <li
            key={nav.id}
            className={`navbar__link-item ${
              nav.label === "Home" ? "active" : ""
            }`}>
            <Link className="navbar__link" to={nav.route}>
              <span className="icon">{nav.icon}</span>
              <span className="tooltip">{nav.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
