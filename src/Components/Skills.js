import React from "react"
import "./Skills.css";
import { Skills_content } from "./constants"

export default function Skills() {
    return (
        <div class="skills-content fadeAnimation fadeIn">
            <div class="profile-img skill-img"></div>

            <div class="frontEnd skill-common">
                <h5 class="skill-header">{Skills_content.FRONT_END_SEC.FRONT_END}</h5>
                <ul class="ul-no-style">
                    <li class="skill-list-style">{Skills_content.FRONT_END_SEC.FE_HTML}
                        <br />
                        <span class="skill-desc">
                            <i>{Skills_content.FRONT_END_SEC.FE_HTML_DESC}</i>
                        </span>
                    </li>
                    <li class="skill-list-style">{Skills_content.FRONT_END_SEC.FE_JAVASCRIPT}
                        <br />
                        <span class="skill-desc">
                            <i>{Skills_content.FRONT_END_SEC.FE_JAVASCRIPT_DESC}</i>
                        </span>
                    </li>
                </ul>
            </div>

            <div class="backEnd skill-common">
                <h5 class="skill-header">{Skills_content.BACK_END_SEC.BACK_END}</h5>
                <ul class="ul-no-style">
                    <li class="skill-list-style">{Skills_content.BACK_END_SEC.BE_MYSQL}
                        <br />
                        <span class="skill-desc">
                            <i>{Skills_content.BACK_END_SEC.BE_MYSQL_DESC}</i>
                        </span>
                    </li>
                    <li class="skill-list-style">{Skills_content.BACK_END_SEC.BE_PHP}
                        <br />
                        <span class="skill-desc">
                            <i>{Skills_content.BACK_END_SEC.BE_PHP_DESC}</i>
                        </span>
                    </li>
                    <li class="skill-list-style">{Skills_content.BACK_END_SEC.BE_FLASK}
                        <br />
                        <span class="skill-desc">
                            <i>{Skills_content.BACK_END_SEC.BE_FLASK_DESC}</i>
                        </span>
                    </li>
                </ul>
            </div>
            <div class="programming skill-common">
                <h5 class="skill-header">{Skills_content.PROGRAMMING.PROGRAMMING_LANG}</h5>
                <ul class="ul-no-style">
                    <li class="skill-list-style">{Skills_content.PROGRAMMING.PYTHON}</li>
                    <li class="skill-list-style">{Skills_content.PROGRAMMING.JAVA}</li>
                </ul>
            </div>

            <div class="skillStory skill-common">
                <p>
                    {Skills_content.SKILLSTORY}
                </p>
            </div>

        </div>
    )
}