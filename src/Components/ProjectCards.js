import React from "react";

import Projects from "./Projects";
import projectsArray from "./projectsList";

export default function ProjectCards() {
  const projectCards = projectsArray.map((item) => (
    <Projects key={item.id} item={item} />
  ));
  return (
    <div>
      {projectCards}
      <div className="extraSpace"></div>
    </div>
  );
}
