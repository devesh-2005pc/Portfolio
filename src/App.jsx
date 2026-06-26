import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Aboutme from './components/Aboutme';
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Home from './components/Home';
import Education from './components/Education';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './ThemeContext.jsx'; // ✅ Theme context wrapper
import Footer from './components/Footer';
import Milestone from "./components/Milestone.jsx";
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Smooth scroll interceptor for hash links
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetEl = document.querySelector(href);
        if (targetEl) {
          lenis.scrollTo(targetEl, {
            offset: -80, // Adjust offset for fixed navbar
            duration: 1.2,
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />

  <main>
  <section id="home">
    <Home />
  </section>

  <section id="about">
    <Aboutme />
  </section>

  <section id="education">
    <Education />
  </section>

  <section id="skills">
    <Skills />
  </section>

  <section id="project">
    <Project />
  </section>

  <section id="milestone">
    <Milestone />
  </section>

  <section id="contact">
    <Contact />
  </section>

  <Footer />
</main>

      </div>
    </ThemeProvider>
  );
}

export default App;
