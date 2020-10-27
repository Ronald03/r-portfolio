import React from "react";
import "./Footer.css";

export default function Footer() {
  let footerHeight = document.getElementsByTagName("footer").offsetHeight;
  console.log(footerHeight);
  return (
    <div className="main-footer">
      <footer class="footer">
        <div className=" name-on-footer fontSource center-content">
          <span id="ronald">Ronald</span> <span>Ceballos</span>
        </div>
        <div className="footer-address center-content">
          <span>
            Lewisville, TX 75056 <i class="fas fa-map-marker-alt"></i>
          </span>
        </div>
        <div className="social center-content">
          <a href="https://github.com/Ronald03/r-portfolio">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/ronaldceballos/">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}
