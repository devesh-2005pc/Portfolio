



import React from 'react';
import './Education.css';
import { FaCalendarAlt } from 'react-icons/fa';

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-icon"><FaCalendarAlt /></div>
          <div className="timeline-content">
            <span className="timeline-date">2023–2027</span>
            <h3>B.E – Datta Meghe College of Engineering</h3>
            <p>CS Engineer '27 Graduate</p>
            
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon"><FaCalendarAlt /></div>
          <div className="timeline-content">
            <span className="timeline-date">2021–2023</span>
            <h3>BK Birla College</h3>
            <p>Completed 12th Grade HSC</p>
            
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon"><FaCalendarAlt /></div>
          <div className="timeline-content">
            <span className="timeline-date">2009–2021</span>
            <h3>St. Thomas High School</h3>
            <p>Completed 10th Grade S.S.C</p>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
