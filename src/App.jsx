import React from 'react';
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

function App() {
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
