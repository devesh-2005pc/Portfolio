import React, { useState, memo } from "react";
import "./Project.css";

// Import your screenshots
import ToggleNest from "../assets/ToggleNest.png";
import lamboImg from "../assets/lambo.png.png";
import DevMentorImg from "../assets/devmentor.png";
import BurnoutImg from "../assets/burnout.png";

// Updated Projects data
const project = [
  {
    id: 1,
    name: "DEVMENTOR AI",
    description:
      "An AI-powered career development platform that analyzes resumes, evaluates GitHub profiles, generates personalized learning roadmaps, recommends projects, and provides AI-assisted career guidance.",
    stack:
      "React.js, Node.js, Express.js, MongoDB, JWT, Gemini API, GitHub API",
    code: "https://github.com/devesh-2005pc/DevMentor.git", // replace with exact repo
    live: "https://dev-mentor-chi.vercel.app/",
    image: DevMentorImg,
  },
  {
    id: 2,
    name: "TOGGLENEST",
    description:
      "A full-stack MERN productivity platform featuring secure authentication, responsive dashboards, REST APIs, and efficient MongoDB integration. Developed in a collaborative team environment during internship.",
    stack: "React.js, Node.js, Express.js, MongoDB, JWT, REST APIs",
    code: "https://github.com/omii88/ToggleNest2.git",
    live: "https://togglenest.netlify.app/",
    image: ToggleNest,
  },
  {
    id: 3,
    name: "WORKLOAD BURNOUT PREDICTION",
    description:
      "An AI-powered system that predicts employee burnout risk using machine learning models. Features an interactive dashboard for data input, prediction, and workforce wellness insights.",
    stack:
      "React.js, Flask, Python, Machine Learning, Random Forest, Scikit-learn",
    code: "https://github.com/devesh-2005pc/workload-burnout.git", // replace with exact repo
    live: "https://workload-burnout.vercel.app/",
    image: BurnoutImg,
  },
  {
    id: 4,
    name: "LAMBORGHINI WEB EXPERIENCE",
    description:
      "A premium automotive-inspired frontend experience showcasing advanced UI/UX design, smooth animations, immersive interactions, and responsive layouts.",
    stack:
      "React.js, Vite, CSS, GSAP, ScrollTrigger, Framer Motion",
    code: "https://github.com/devesh-2005pc/Lambo_web",
    live: "https://lambo-web-eight.vercel.app/",
    image: lamboImg,
  },
];

const Project = memo(() => {
  const [active, setActive] = useState(project[0]);

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-subtitle">A showcase of my recent works</p>

      <div className="projects-container">
        {/* Left side list */}
        <div className="projects-list">
          {project.map((proj) => (
            <div
              key={proj.id}
              className={`project-item ${active.id === proj.id ? "active" : ""
                }`}
              onMouseEnter={() => setActive(proj)}
            >
              <a
                href={proj.live}
                target="_blank"
                rel="noreferrer"
                className="project-name-link"
              >
                <h3>{proj.name}</h3>
              </a>

              <p className="project-desc">{proj.description}</p>
              <p className="project-tech">
                <strong>Tech:</strong> {proj.stack}
              </p>

              <div className="project-links">
                <a href={proj.code} target="_blank" rel="noreferrer">
                  <span>Get Code</span>
                </a>
                <a href={proj.live} target="_blank" rel="noreferrer">
                  <span>Live</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right side preview */}
        <div className="project-preview">
          <a href={active.live} target="_blank" rel="noreferrer">
            <img
              key={active.id}
              src={active.image}
              alt={active.name}
              className="fade-in"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>
  );
});

export default Project;
