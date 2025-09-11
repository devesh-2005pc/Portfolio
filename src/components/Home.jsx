import React, { useState, useEffect } from 'react';
import myImage from '../assets/deveshimage.jpg';
import resumeFile from '../assets/Resume.Devesh.1.pdf';
import './Home.css';

const Home = () => {
  const titles = ['Computer Engineering Student', 'Full Stack Developer'];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[index];
    let typingSpeed = isDeleting ? 50 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentTitle.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <section className="home">
      {/* Wrap intro + image in a container for proper mobile stacking */}
      <div className="home-container">
        <div className="intro">
          <h1>Hi, I'm <span>Devesh Chaudhari</span></h1>
          <p className="subtitle typing">
            {displayText}<span className="cursor">|</span>
          </p>
          <p className="tagline">
            Passionate about building modern web applications with MERN Stack.
          </p>
          <div className="buttons">
            <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="btn">
              Download Resume
            </a>
            <a href="#contact" className="btn secondary">Let's Talk</a>
          </div>
        </div>

        <div className="hero-img">
          <img src={myImage} alt="Developer" className="profile-img" />
          <span className="img-frame"></span>
        </div>
      </div>
    </section>
  );
};

export default Home;
