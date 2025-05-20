import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-banner">
        <div className="about-banner-overlay">
          <h1>About Us</h1>
        </div>
      </div>

      <div className="about-content">
        <h2>What is 1MDM?</h2>
        <p>
          1MDM is a cloud-based master data management solution that empowers businesses to manage
          their critical master data efficiently. Our platform is designed to ensure data accuracy,
          consistency, and accountability across the organization. We offer modules like master data
          governance, data cataloging, and business glossary to help you streamline and centralize
          your data governance efforts.
        </p>

        <h2>Why 1MDM?</h2>
        <p>
          Our mission is to simplify and automate the data governance process. With 1MDM, you get:
        </p>
        <ul>
          <li>Centralized master data control</li>
          <li>Role-based access for data stewards and stakeholders</li>
          <li>Automated workflows for approval and change management</li>
          <li>Data quality checks and scorecards</li>
          <li>Compliance with regulatory standards</li>
        </ul>

        <h2>Our Vision</h2>
        <p>
          We envision a future where businesses no longer struggle with fragmented and unreliable
          data. Our goal is to be the leading platform for managing enterprise master data
          effectively and securely.
        </p>
      </div>
    </div>
  );
};

export default About;
