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
              <section id="skills">
            <Skills />
          </section>
          <section id="project">
            <Project />
          </section>
         
          </section>
          <section id="contact">
            <Contact />
          </section>
          <section id="footer">
            <Footer/>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
