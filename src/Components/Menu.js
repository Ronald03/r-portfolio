import React from "react";
import "./Menu.css"
import {Tab} from "./constants"


function Menu(props) {

  const clickOn = "menu-links highLightNav"
  const clickOff = "menu-links"

  return (
    <div className="menu">
      <span className="line" ></span>
      <nav>
        <div className="navs fontSource">
          <span id="home" className={props.state === Tab.HOME ? clickOn : clickOff} onClick={()=>props.handleTab(Tab.HOME)} >
            Home
          </span>
          <span id="project" className={props.state === Tab.PROJECTS ? clickOn : clickOff} onClick={()=>props.handleTab(Tab.PROJECTS)} >
            Projects
          </span>
          <span id="skills" className={props.state === Tab.SKILLS ? clickOn : clickOff} onClick={()=> props.handleTab(Tab.SKILLS)} >
            Skills
          </span>
        </div>
      </nav>

    </div>
  );


}

export default Menu;