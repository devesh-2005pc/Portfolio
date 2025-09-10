import React from 'react';
import './Aboutme.css';
import aboutPic from '../assets/aboutme.jpg';
import useReveal from "../hooks/useReveal";

const AboutMe = () => {
  useReveal(); // 👈 apply scroll animation everywhere

  return (
    <div className="about-wrapper">
      {/* Floating blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <div className="about">
        <div className="about-content">
          {/* Left Side - Image */}
          <div className="about-image">
            <img src={aboutPic} alt="About section" />
          </div>

          {/* Right Side - Text */}
          <div className="about-text">
            <h1>Devesh Chaudhari</h1>
            <h2>Aspiring Full-Stack Developer</h2>
            <p>
              I’m <strong>Devesh Chaudhari</strong>, a passionate Computer Engineering student at
              <strong> Datta Meghe College of Engineering</strong>, with a strong passion for technology and innovation.
              <br /><br />
I specialize in <strong> Full Stack Development </strong>, where I design and build responsive, user-friendly, and scalable web applications using modern technologies like React.js, Node.js, Express, and MongoDB. Alongside this, I have recently begun my <strong> Machine Learning journey</strong>, where I am exploring the fascinating world of data-driven solutions and AI-powered applications in a structured and professional manner.             <br /><br />
             
             
As part of my academic journey, my team and I secured <strong>3rd place </strong> in our college Mini Project Competition, organized by CSI CATT DMCE , a milestone that strengthened my problem-solving mindset, teamwork, and hands-on technical expertise.              <br /><br />
              I’m aI truly believe in being a <strong>lifelong learner</strong>, constantly experimenting, innovating, and building solutions that make an impact. With a collaborative spirit, I look forward to working together with professionals and teams to create something<strong> unique, meaningful, and future-ready</strong>. <br /><br />
              <strong>Let’s build something awesome together!</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
