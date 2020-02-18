import React from "react";


export default function Header() {
  return (
    <div className="header">
      <div className="portLogo">
        <a href="n/a">
          <source srcSet={"../Images/RC_logo.svg"}/>
          <img id="logoImg" src={require("../Images/RC_logo.svg")} alt="RC_LOGO" />
        </a>
      </div>

      <div className="portName">
        <div className="name-details">
          <h1 className="name">Ronald Ceballo</h1>
          <h3 className="jobTitle">FULL STACK WEB DEVELOPER</h3>
        </div>
      </div>
    </div>
  );
}

