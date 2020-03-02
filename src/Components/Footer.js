import React from "react";

export default function Footer() {
  return (
    <div className="main-footer">
      <footer class="footer">

        <div className=" name-on-footer fontSource center-content">
        <span id="ronald">Ronald <span id="ceballos">Ceballos</span></span>
        </div>
        <div className="footer-address center-content">
        <span>Lewisville, TX 75056 <i class="fas fa-map-marker-alt"></i></span>
        </div>
        <div className="social center-content">
          <a href="https://github.com/Ronald03">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/ronaldceballos/">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
        
       {/*

        <div class="footer-address ftr">
          <p>Lewisville, TX 75056 <i class="fas fa-map-marker-alt"></i></p>
          <p hidden="true">914.536.8968 <i class="fas fa-phone"></i></p>
        </div>

        <div class="social ftr">
          <p id="social-text">Social Media: </p>
          <a href="https://github.com/Ronald03">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/ronaldceballos/">
            <i class="fab fa-linkedin"></i>
          </a>
        </div> */}

      </footer>
    </div>)
}
