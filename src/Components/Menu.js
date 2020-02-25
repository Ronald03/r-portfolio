import React from "react";

export default function Menu() {
  return (
    <div className="menu">
      <span className="line" ></span>
      <nav>
        <div className="navs fontSource">
          <span id="home" className="nav-links">
            Home
          </span>
          <span id="project" className="nav-links">
            Projects
          </span>
          <span id="skills" className="nav-links">
            Skills
          </span>
        </div>
      </nav>
      
    </div>
  );
}
