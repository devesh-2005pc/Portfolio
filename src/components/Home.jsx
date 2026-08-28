import React, { useState, useEffect } from "react";
import myImage from "../assets/deveshimage.jpeg";
import resumeFile from "../assets/DEVESH_Resume_combine.pdf";
import "./Home.css";

const titles = [
  "Computer Engineering Student",
  "Full Stack Developer",
  "Machine Learning Enthusiast",
];

const TypingText = React.memo(() => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[index];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayText(currentTitle.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentTitle.length) {
          // Pause at full word before deleting
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
        setDisplayText(currentTitle.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 <= 0) {
          // Reset for next word
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % titles.length);
          setCharIndex(0);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <p className="subtitle typing">
      {displayText}
      <span className="cursor">|</span>
    </p>
  );
});

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-container">
        <div className="intro">
          <h1>
            Hi, I'm <span>Devesh Chaudhari</span>
          </h1>

          {/* Typing subtitle */}
          <TypingText />

          <p className="tagline">
            Passionate about building modern web applications with MERN Stack.
          </p>

          <div className="buttons">
            <a
              href={resumeFile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Download Resume
            </a>
            <a href="#contact" className="btn secondary">
              Let's Talk
            </a>
          </div>
        </div>
        <div class="twinkle-overlay"></div>

        <div className="hero-img">
          <img src={myImage} alt="Developer" className="profile-img" />
          <span className="img-frame"></span>
        </div>
      </div>
    </section>
  );
};

export default Home;
