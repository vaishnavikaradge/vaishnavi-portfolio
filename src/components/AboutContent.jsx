import "./AboutContentStyles.css";

import React from 'react'
// import { Link } from "react-router-dom";
import Resume from "./Resume";


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
        <h1>Who I Am?</h1>
        <p>Hi, I am Vaishnavi Karadge.I am a Front-End developer. I completed : 
        <ul>
            <li>- &nbsp;B.Tech in Electronics and  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Telecommunication Engineering (CGPA : 8.25).</li>
            <li> &nbsp;&nbsp;&nbsp;&nbsp;- Higher Secondary Certificate &nbsp;&nbsp;from Govindrao Junior College, Ichalkaranji and got 63.69%.</li>
            <li> &nbsp;&nbsp;&nbsp;&nbsp;- Secondary School Certificate &nbsp;&nbsp;&nbsp;&nbsp;from New English School,Rendal and got 85.80%.</li>
        </ul>
        </p>
        
        <Resume/>

        </div>
        <div className="right">
            <div className="img-container">
                <div className="top">
                   
                    <img src="https://www.bigscal.com/wp-content/uploads/2022/12/Top-5-React-Github-repositories-to-Become-a-Pro-React-js-Developer-1.png" className="img" alt="image" />
                </div>
                <div className="bottom">
                    <img src="https://ziontutorial.com/wp-content/uploads/2023/02/ziontutorial.com_.png" className="img" alt="image" />
                    
                </div>    



            </div>

        </div>
    </div>
  )
}

export default AboutContent;