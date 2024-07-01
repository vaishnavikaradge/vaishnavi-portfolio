import "./SkillsStyles.css";

import React from 'react'

const Skills = () => {
  return (
    <div className="skills">
        <div className="skill-container">
        <h1 className="skill-heading">SKILLS</h1>
            <div className="skill">
            <img className="image" src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="HTML" width="100" height="100" />
            </div>

            <div className="skill">
            <img className="image" src="https://icon-library.com/images/css-3-icon/css-3-icon-8.jpg" alt="CSS" width="100" height="100"/>
            </div>

            <div className="skill">
            <img className="image" src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3253950/javascript-icon-sm.png" alt="Js" width="100" height="100"/>
            </div>

            <div className="skill">
            <img className="image" src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp" alt="React js" width="100" height="100"/>
            </div>

            <div className="skill">
            <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr3qu45w6oR6DRe_TzUxob6I3Il68s2FPbz9hDE7Cr-UErqajrGD6SdW0AZ6DOtdwGtKc&usqp=CAU" alt="Git" width="100" height="100"/>
            </div>

            <div className="skill">
            <img className="image" src="https://www.shutterstock.com/image-illustration/sql-database-icon-logo-design-260nw-695249038.jpg" alt="SQL" width="100" height="100"/>
            </div>

            <div className="skill">
            <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi-nwyPIq1C4b49wz08KL3jyBXdrnHww0rag&s" alt="Java" width="100" height="100"/>
            </div>

            <div className="skill">
            <img className="image" src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU" alt="Github" width="100" height="100"/>
            </div>


        </div>
    </div>
  )
}

export default Skills;