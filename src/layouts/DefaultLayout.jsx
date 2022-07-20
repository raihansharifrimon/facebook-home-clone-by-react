import React from "react";
import { LeftSidebar, Navbar, RightSidebar } from "./components";
import "./DefaultLayout.scss";

function DefaultLayout({ children }) {
  return (
    <div className="main">
      <div className="default-layout">
        <Navbar />
        <LeftSidebar />
        <div className="post__inner">{children}</div>
        <RightSidebar />
      </div>
    </div>
  );
}

export default DefaultLayout;
