import React, { useState } from "react";
import "./Contact.css";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS credentials
    const serviceID = "service_ioflhxn";
    const templateID = "template_eofopq2";
    const publicKey = "Myis3MMkI2AQ0cE9u";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (err) => {
          console.error("FAILED...", err);
          alert("Something went wrong, please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        {/* ---------- Left Side (Info Boxes) ---------- */}
        <div className="contact-info">
          <h3 className="sub-heading">Get in Touch</h3>
          <p className="sub-text">
            Let’s work together to build something impactful.
          </p>

          <div className="info-box">
            <MdEmail className="info-icon" />
            <a href="mailto:deveshpc2005@gmail.com">deveshpc2005@gmail.com</a>
          </div>

          <div className="info-box">
            <MdPhone className="info-icon" />
            <a href="tel:+918850195288">+91 88501 95288</a>
          </div>

          <div className="info-box">
            <MdLocationOn className="info-icon" />
            <a
              href="https://www.google.com/maps?q=Kalyan,+Maharashtra"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kalyan, Maharashtra
            </a>
          </div>
        </div>

        {/* ---------- Right Side (Form) ---------- */}
        <div className="contact-form-wrapper">
          <h2>Contact</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
