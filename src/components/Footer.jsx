import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT SIDE */}
        <div className="footer-left">
          <h2 className="footer-name">Devesh Chaudhari</h2>
          <p className="footer-about">
            A passionate developer & life-long learner <br />
            building ideas into reality.
          </p>

          <div className="footer-icons">
            <a
              href="https://www.linkedin.com/in/devesh-chaudhari-246180314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/devesh-2005pc"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/Devesh_pc/"
              target="_blank"
              rel="noreferrer"
              aria-label="LeetCode Profile"
            >
              <SiLeetcode />
            </a>

            <a href="mailto:deveshpc25@gmail.com">
              <FaEnvelope />
            </a>

            <a href="tel:+918850195288">
              <FaPhone />
            </a>

            <a
              href="https://maps.google.com/?q=Kalyan,Thane"
              target="_blank"
              rel="noreferrer"
            >
              <FaMapMarkerAlt />
            </a>
          </div>
        </div>

        {/* MIDDLE SIDE */}
        <div className="footer-middle">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
                <li><a href="#milestone">Milestones</a></li>

            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="footer-right">
          <h3>Contact</h3>
          <p><FaMapMarkerAlt className="icon" /> Kalyan, Thane</p>
          <p><FaEnvelope className="icon" /> deveshpc25@gmail.com</p>
          <p><FaPhone className="icon" /> +91 8850195288</p>
        </div>
      </div>

      <p className="footer-text">
        © {new Date().getFullYear()} Devesh Chaudhari | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
