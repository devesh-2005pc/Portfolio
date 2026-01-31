import React, { useEffect, useRef, useState } from "react";
import "./Milestone.css";

// Images
import sapphireImg from "../assets/sapphire-intern.png";
import tmgImg from "../assets/tmg-intern.png";
import csi1 from "../assets/csi-award1.png";
import csi2 from "../assets/csi-award2.png";
import csi3 from "../assets/csi-award3.png";
import archery1 from "../assets/archery-gold1.jpeg";
import archery2 from "../assets/archery-gold2.jpeg";

/* =======================
   DATA
======================= */

const data = [
{
  title: "MERN Stack Intern – Sapphire",
  subtitle: "Full-Stack Product Development",
  images: [sapphireImg],
  content: [
    "Worked as a MERN Stack Intern in a real-world, product-driven development environment.",
    "Built and deployed ToggleNest, a scalable full-stack MERN application.",
    "Developed modular React UI and implemented secure REST APIs using Node.js and Express.",
    "Managed MongoDB schemas and ensured seamless frontend–backend integration."
  ],
}
,
  {
    title: "Research Intern – TMG",
    subtitle: "First-Year Research Internship",
    images: [tmgImg],
    content: [
      "Worked as a Research Intern during my first year of engineering.",
      "Contributed to multiple real-time research papers.",
      "Gained exposure to technical documentation, research methodology, and analysis.",
    ],
  },
{
  title: "3rd Place – CSI Mini Project Competition",
  subtitle: "Among All Branches & All Years",
  images: [csi1, csi2, csi3], // 3 images -> 3 dots
  content: [
    "Secured 3rd position in a mini project competition organized by CSI, with participants from all engineering branches and academic years.",
    "Developed a Language Translator web application capable of translating text across 100+ languages.",
    "Implemented a Text-to-Speech feature to enhance accessibility and user experience.",
    "Recognized for innovation, practical problem-solving, and strong technical execution."
  ],
},

{
  title: "Gold Medalist – Archery (Mumbai University)",
  subtitle: "University & State-Level Sports Achievement",
  images: [archery1, archery2], // 2 images -> 2 dots
  content: [
    "Secured 1st Rank (Gold Medal) in Archery at Mumbai University School Games.",
    "Represented at State Level; achieved 2nd Rank in Junior District and 4th Rank in Senior District competitions.",
    "Consistently selected through district-level qualifiers across multiple categories.",
    "Actively participated in multiple sports including Cricket, Football, Table Tennis, Chess, Badminton, and Athletics."
  ],
}

];

/* =======================
   IMAGE SLIDER
======================= */

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="ms-image-wrap">
      <img
        src={images[index]}
        alt="Milestone"
        className="ms-image"
        key={index}
      />

      {images.length > 1 && (
        <div className="ms-dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`ms-dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

/* =======================
   MAIN COMPONENT
======================= */

const Milestone = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    const dot = dotRef.current;

    if (!section || !line || !dot) return;

    let targetY = 0;
    let currentY = 0;
    let rafId;

    const lerp = (a, b, n) => a + (b - a) * n;

    const calculateTarget = () => {
      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top + window.scrollY;
      const sectionBottom = sectionTop + sectionRect.height;

      const viewTop = window.scrollY;
      const viewBottom = viewTop + window.innerHeight;

      const lineHeight = line.offsetHeight;

      // before section
      if (viewBottom <= sectionTop) {
        targetY = 0;
        return;
      }

      // after section
      if (viewTop >= sectionBottom) {
        targetY = lineHeight;
        return;
      }

      const scrollRange =
        sectionBottom - sectionTop - window.innerHeight;
      const scrolled = viewTop - sectionTop;

      const raw =
        scrollRange > 0 ? scrolled / scrollRange : 0;

      const progress = Math.max(0, Math.min(1, raw));

      targetY = progress * lineHeight;
    };

    const animate = () => {
      // smooth dot move
      currentY = lerp(currentY, targetY, 0.15);
      dot.style.transform = `translate(-50%, ${currentY}px)`;

      // find closest card to dot
      const dotY = line.getBoundingClientRect().top + currentY;
      const cards = section.querySelectorAll(".milestone-card");
      let closest = null;
      let minDist = Infinity;

      cards.forEach((card) => {
        const r = card.getBoundingClientRect();
        const center = r.top + r.height / 2;
        const d = Math.abs(center - dotY);
        if (d < minDist) {
          minDist = d;
          closest = card;
        }
      });

      cards.forEach((c) => c.classList.remove("is-active"));
      if (closest) closest.classList.add("is-active");

      rafId = requestAnimationFrame(animate);
    };

    calculateTarget();
    animate();

    window.addEventListener("scroll", calculateTarget, { passive: true });
    window.addEventListener("resize", calculateTarget);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", calculateTarget);
      window.removeEventListener("resize", calculateTarget);
    };
  }, []);

  return (
    <section className="milestone-section" id="milestone" ref={sectionRef}>
      <h2 className="milestone-title">Milestones</h2>
      <p className="milestone-subtitle">
        Experience, achievements, and defining moments of my journey
      </p>

      <div className="milestone-container">
        <div className="milestone-line" ref={lineRef} />
        <div className="scroll-dot" ref={dotRef} />

        {data.map((item, index) => (
          <div
            key={index}
            className={`timeline-row ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="milestone-card animate-milestone-fade">
              <ImageSlider images={item.images} />

              <h3>{item.title}</h3>
              <small>{item.subtitle}</small>

              <ul>
                {item.content.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Milestone;
