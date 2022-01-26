import React from "react";
import "remixicon/fonts/remixicon.css";

const ToolBar = ({ openSidebar }) => {
  return (
    <div className="tool-bar">
      <div className="burger" onClick={openSidebar}>
        <i className="ri-menu-line"></i>
      </div>
      <div className="title">Sidbar</div>
    </div>
  );
};

export default ToolBar;
