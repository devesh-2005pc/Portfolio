import React from 'react';
import './Skills.css';
import { FaCode, FaLaptopCode, FaDatabase, FaTools, FaBrain } from 'react-icons/fa';
import {
  SiC,
  SiPython,
  SiReact,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiCanva,
  SiFlask,
  SiScikitlearn,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';
import { SiAuth0 } from 'react-icons/si';
import { SiSocketdotio } from 'react-icons/si';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2><span>My</span> Skills</h2>
      <div className="skills-container">

        {/* Languages */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <FaCode className="skill-icon" />
              <h3>Languages</h3>
            </div>
            <div className="flip-card-back">
              <ul>
                <li><SiC /> C</li>
                <li><FaJava /> Java</li>
                <li><SiPython /> Python</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Frontend */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <FaLaptopCode className="skill-icon" />
              <h3>Frontend Development</h3>
            </div>
            <div className="flip-card-back">
              <ul>
                <li><SiHtml5 /> HTML</li>
                <li><SiCss3 /> CSS</li>
                <li><SiJavascript /> JavaScript</li>
                <li><SiReact /> React.js</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <FaLaptopCode className="skill-icon" />
              <h3>Backend Development</h3>
            </div>
            <div className="flip-card-back">
              <ul>
                <li><SiNodedotjs /> Node.js</li>
                <li><SiExpress /> Express.js</li>
                <li><SiFlask /> Flask</li>
                <li><SiAuth0 /> JWT</li>
                <li><SiSocketdotio /> Socket.io</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Databases */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <FaDatabase className="skill-icon" />
              <h3>Databases</h3>
            </div>
            <div className="flip-card-back">
              <ul>
                <li><SiMysql /> MySQL</li>
                <li><SiMongodb /> MongoDB</li>
                <li><SiFirebase /> Firebase</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Machine Learning */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <FaBrain className="skill-icon" />
              <h3>Machine Learning</h3>
            </div>
            <div className="flip-card-back">
              <ul>
                <li><SiScikitlearn /> Scikit-learn</li>
                <li><SiPython /> ML with Python</li>
                <li>Data Preprocessing</li>
                <li>Model Training & Evaluation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <FaTools className="skill-icon" />
              <h3>Tools</h3>
            </div>
            <div className="flip-card-back">
              <ul>
                <li><SiGit /> Git</li>
                <li><SiGithub /> GitHub</li>
                <li><VscVscode /> VS Code</li>
                <li><SiCanva /> Canva</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
