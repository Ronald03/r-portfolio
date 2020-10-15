import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <a href="n/a">
          <source srcSet={"../Images/Logo/RC_logo.svg"} />
          <img
            id="logoImg"
            src={require("../Images/Logo/RC_logo.svg")}
            alt="RC_LOGO"
          />
        </a>
      </div>

      <div className="header__background">
        <div className="header__nameTitle">
          <h1 className="name">Ronald Ceballos</h1>
          <span className="fontSource">JAVASCRIPT / REACT DEVELOPER</span>
        </div>
      </div>
    </div>
  );
}
