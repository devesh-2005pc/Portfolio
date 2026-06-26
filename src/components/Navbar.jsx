import React, { useEffect, useState } from 'react';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hideOnMobile, setHideOnMobile] = useState(false);

  useEffect(() => {
    let ticking = false;
    let homeHeight = document.getElementById("home")?.offsetHeight || 0;

    const handleResize = () => {
      homeHeight = document.getElementById("home")?.offsetHeight || 0;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setScrolled(scrollY > 50);

          if (window.innerWidth <= 768) {
            setHideOnMobile(scrollY > homeHeight - 80);
          } else {
            setHideOnMobile(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // Initial query
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
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
