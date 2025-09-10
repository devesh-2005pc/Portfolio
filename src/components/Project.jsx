import React, { useState } from "react";
import "./Project.css";

// Import your screenshots
import lamboImg from "../assets/lambo.png.png";
import wellnessImg from "../assets/wellness.png.png";
import currencyImg from "../assets/currency.png.png";

// Projects data with description
const project = [
  {
    id: 1,
    name: "CAR WEB",
    description:
      "A Lamborghini-inspired showcase website with smooth animations, immersive UI, and sound effects.",
    stack: "React, CSS, Animations",
    code: "https://github.com/devesh-2005pc/Lambo_web",
    live: "https://lambo-web-eight.vercel.app/",
    image: lamboImg,
  },
  {
    id: 2,
    name: "WELLNESS HUB",
    description:
      "A secure wellness session platform with JWT authentication, session drafting, publishing, and charts.",
    stack: "MERN, JWT, Charts",
    code: "https://github.com/devesh-2005pc/wellness_platform_app",
    live: "https://wellness-taupe.vercel.app/",
    image: wellnessImg,
  },
  {
    id: 3,
    name: "CURRENCY CONVERTER",
    description:
      "A real-time currency converter that fetches live exchange rates using APIs and provides smooth UI.",
    stack: "React, API, CSS",
    code: "https://github.com/devesh-2005pc/Currency-Converter",
    live: "https://currency-converter-flax-kappa.vercel.app/",
    image: currencyImg,
  },
];

const Project = () => {
  const [active, setActive] = useState(project[0]);

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-subtitle"> A showcase of my recent works </p>

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
              {/* Project Name as Link */}
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

        {/* Right side preview (Image as Link) */}
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
