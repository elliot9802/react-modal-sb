import React from "react";

const Sidebar = ({ sidebar }) => {
  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Text</li>
    </div>
  );
};

export default Sidebar;
