import React from "react";
import "./Projects.css";

export default function Projects(props) {
  const toolList = props.item.skills.map((item) => (
    <li class="project-skill">{item}</li>
  ));
  return (
    <div className="main-projects">
      <div class="projects-content fadeAnimation fadeIn">
        <div class="project-img s-set">
          <img src={props.item.img} alt={props.item.alt} />
          <div class="overlay"></div>
          <div class="links">
            <a
              rel="noreferrer noopener"
              target="_blank"
              href={props.item.gitLink}
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href={props.item.liveLink ? props.item.liveLink : "#"}
            >
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>

        <div class="project-desc s-set">
          <h4 class="subHeader">{props.item.name}</h4>
          <p class="description">{props.item.desc}</p>
        </div>

        <div class="project-tech s-set">
          <h4 class="subHeader"> Skills Developed </h4>
          <ul>{toolList}</ul>
        </div>
      </div>
    </div>
  );
}
