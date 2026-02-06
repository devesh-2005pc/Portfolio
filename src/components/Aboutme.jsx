import React from 'react';
import './Aboutme.css';
import aboutPic from '../assets/aboutme.jpg';
import useReveal from "../hooks/useReveal";
import RobotAbout from "../components/RobotAbout";

const AboutMe = () => {
  useReveal();

  return (
    <div className="about-wrapper">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <div className="about">
        <div className="about-content">

          {/* LEFT COLUMN */}
          <div className="about-left">
            <div className="about-image">
              <img src={aboutPic} alt="About section" />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="about-text">

            {/* Name + Robot Row */}
            <div className="name-row">
              <h1>Devesh Chaudhari</h1>
              <div className="robot-inline">
                <RobotAbout />
              </div>
            </div>

            <h2>Full-Stack Developer </h2>

            <p>
              I am <strong>Devesh Chaudhari</strong>, a Computer Engineering student at 
              <strong> Datta Meghe College of Engineering</strong>, passionate about building scalable, efficient, and impactful digital solutions.
              <br /><br />

              I have a strong foundation in programming languages including 
              <strong> C, Python and Java</strong>, along with hands-on experience in 
              <strong> Full Stack Development using the MERN stack (MongoDB, Express.js, React.js, Node.js)</strong>. 
              I enjoy developing responsive user interfaces, secure REST APIs, and performance-optimized web applications.
              <br /><br />

              Alongside web development, I am exploring 
              <strong> Machine Learning and Artificial Intelligence</strong>, working with data-driven approaches to build intelligent and practical solutions.
              <br /><br />

              My team secured <strong>3rd place</strong> in the CSI CATT DMCE Mini Project Competition, reflecting my ability to collaborate, innovate, and deliver results.
              <br /><br />

              I am always eager to learn, adapt to new technologies, and contribute to real-world software development projects.
              <br /><br />

              <strong>Let’s build something meaningful and impactful together.</strong>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
