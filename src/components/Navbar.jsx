import React, { useEffect, useState } from 'react';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hideOnMobile, setHideOnMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeHeight = document.getElementById("home")?.offsetHeight || 0;

      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide only on mobile if user scrolls past Home section
      if (window.innerWidth <= 768 && window.scrollY > homeHeight - 80) {
        setHideOnMobile(true);
      } else {
        setHideOnMobile(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''} ${hideOnMobile ? 'hide-mobile' : ''}`}>
      {/* Logo fades out when scrolled */}
      <div className={`logo ${scrolled ? 'fade-out' : ''}`}>My Portfolio</div>

      <div className={`nav-right ${scrolled ? 'nav-box' : ''}`}>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#milestone">Milestones</a></li>

            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Navbar;
