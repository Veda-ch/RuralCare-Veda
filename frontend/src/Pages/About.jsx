import React from "react";
import {
  FaVideo,
  FaCapsules,
  FaRobot,
  FaLanguage,
  
} from "react-icons/fa"; // install: npm i react-icons
import "./About.css";

export const About = () => {
  return (
    <div className="about-container">
      {/* Hero */}
      <section className="about-hero">
        <h1>About RuralCare+</h1>
        <p>
          Bringing quality healthcare to rural communities through technology,
          multilingual access and partnerships.
        </p>
      </section>

      {/* Features */}
      <section className="about-features">
        <div className="feature-card">
          <FaVideo className="feature-icon" />
          <h3>Secure Teleconsultations</h3>
          <p>Consult certified doctors remotely via secure video calls.</p>
        </div>

        <div className="feature-card">
          <FaCapsules className="feature-icon" />
          <h3>Medicine Availability</h3>
          <p>Check real-time stock at nearby pharmacies and find alternatives.</p>
        </div>

        <div className="feature-card">
          <FaRobot className="feature-icon" />
          <h3>AI Symptom Screening</h3>
          <p>Get basic AI-assisted symptom guidance before visiting a doctor.</p>
        </div>

        <div className="feature-card">
          <FaLanguage className="feature-icon" />
          <h3>Multilingual Access</h3>
          <p>Use the platform in your preferred local language.</p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To make healthcare more accessible, affordable, and inclusive for rural
          populations. We partner with local health workers, government schemes,
          and NGOs to ensure continuous care and follow-up.
        </p>

        <h2>Our Vision</h2>
        <p>
          Empower every rural household with reliable healthcare, knowledge, and
          support — closing the gap between urban and rural health outcomes.
        </p>
      </section>
    </div>
  );
};
