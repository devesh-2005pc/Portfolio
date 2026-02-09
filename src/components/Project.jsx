import React, { useState } from "react";
import "./Project.css";

// Import your screenshots
import ToggleNest from "../assets/ToggleNest.png";
import tsecImg from "../assets/TSEC.png";
import lamboImg from "../assets/lambo.png.png";

// Updated Projects data
const project = [
  {
    id: 1,
    name: "TOGGLENEST",
    description:
      "A full-stack productivity web application built with the MERN stack, featuring secure authentication, dynamic task management, and seamless deployment. ToggleNest offers an intuitive user experience with optimized backend performance and real-time data handling.",
    stack: "MERN Stack, JWT, REST APIs, Deployment",
    code: "https://github.com/omii88/ToggleNest2.git", // put your actual repo if needed
    live: "https://togglenest.netlify.app/",
    image: ToggleNest,
  },
  {
    id: 2,
    name: "TSEC FOOD RECIPE",
    description:
      "A frontend hackathon project built for TSEC, showcasing a modern food recipe platform with clean UI, smooth navigation, and responsive design.",
    stack: "React, CSS, Frontend UI",
    code: "https://github.com/devesh-2005pc/TSEC_Receipe-tut.git",
    live: "https://tsec-receipe-tut.vercel.app/",
    image: tsecImg,
  },
  {
    id: 3,
    name: "CAR WEB",
    description:
      "A Lamborghini-inspired showcase website with smooth animations, immersive UI, and premium visual interactions.",
    stack: "React, CSS, Animations",
    code: "https://github.com/devesh-2005pc/Lambo_web",
    live: "https://lambo-web-eight.vercel.app/",
    image: lamboImg,
  },
];

const Project = () => {
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
              className={`project-item ${
                active.id === proj.id ? "active" : ""
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
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
