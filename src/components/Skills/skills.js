import React from "react";
import './skills.css'
import python from '../../assets/python.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/javascript.png'
import react from '../../assets/react.png'
import sql from '../../assets/sql.png'



const Skills = () => {
    return (
        <section id="skills">
           <span className="skillsTitle">Skills</span> 
           <span className="skillsDesc"></span>
           <div className="skillBars">
               <div className="skillBar">
                  <img src={python} alt="" className="skillBarImg" />
                  <div className="skillBarText">
                    <h2>Python</h2>
                    <p>Fundamentals of python</p>
                  </div>
               </div>
               <div className="skillBar">
                  <img src={html} alt="" className="skillBarImg" />
                  <div className="skillBarText">
                    <h2>HTML</h2>
                    {/* <p>Learn't HTML</p> */}
                  </div>
               </div>
               <div className="skillBar">
                  <img src={css} alt="" className="skillBarImg" />
                  <div className="skillBarText">
                    <h2>CSS</h2>
                    {/* <p>Learn't CSS</p> */}
                  </div>
               </div>
               <div className="skillBar">
                  <img src={javascript} alt="" className="skillBarImg" />
                  <div className="skillBarText">
                    <h2>JavaScript</h2>
                    {/* <p>Basics of JavaScript</p> */}
                  </div>
               </div>
               <div className="skillBar">
                  <img src={react} alt="" className="skillBarImg" />
                  <div className="skillBarText">
                    <h2>React js</h2>
                    {/* <p>Basics of Reactjs</p> */}
                  </div>
               </div>
               <div className="skillBar">
                  <img src={sql} alt="" className="skillBarImg" />
                  <div className="skillBarText">
                    <h2>SQL</h2>
                    {/* <p>Learn't SQL</p> */}
                  </div>
               </div>

           </div>
        </section>
    )
}

export default Skills