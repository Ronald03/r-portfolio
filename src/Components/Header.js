import React from "react";


export default function Header() {
  return (
    <div className="header">
      <div className="portLogo">
        <a href="n/a">
          <source srcSet={"../Images/Logo/RC_logo.svg"}/>
          <img id="logoImg" src={require("../Images/Logo/RC_logo.svg")} alt="RC_LOGO" />
        </a>
      </div>

      <div className="header-back-color">
        <div className="name-title">
          <h1 className="name">Ronald Ceballos</h1>
          <span className="fontSource">FULL STACK WEB DEVELOPER</span>
        </div>
      </div>
    </div>
  );
}

