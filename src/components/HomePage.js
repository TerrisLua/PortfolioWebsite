// src/components/HomePage.js

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar'; // Import the Navbar component
import Background from './Background'; // Import the Background component
import './HomePage.css'; // Import the CSS file
import Projects from './Projects';


const HomePage = () => {
  return (
    <div>
      <Background /> {/* Include the Background component */}
      <Navbar /> {/* Include the Navbar component */}
      <div className="section home-section dark" id="home">
        <div className="home-content">
          <div className="home-image">
              <img src="/assets/dp.jpg" alt="Profile" className="profile-pic" />
          </div>
          <div className="home-text">
            <motion.h1
              className="heading"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Welcome to My Portfolio
            </motion.h1>
            <motion.p
              className="paragraph"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Hi, I'm Terris Lua, a Computer Science graduate from SIM-UOL.
            </motion.p>
            <motion.p
              className="paragraph"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              I am passionate about data, mathematics, and coding. I love solving complex problems and creating innovative solutions through technology.
            </motion.p>
            <motion.p
              className="paragraph"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              My interests lie in solving complex problems and developing innovative solutions through technology.
            </motion.p>
            <motion.p
              className="paragraph"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            >
              Throughout my academic and professional journey, I've acquired a robust skill set in various programming languages and tools. I enjoy continuous learning and staying updated with the latest industry trends.
            </motion.p>
          </div>
        </div>
      </div>
      <div className="section light" id="about">
        <div className="about-container">
          <div className="about-text">
          <h3>Experience</h3>
          <div className="experience">
          <h4>Junior Data Engineer, Synagie</h4>
          <p className="experience-date">May 2022 - Aug 2023</p>
            <ul>
              <li>Designed and implemented ETL pipelines to streamline data flow and improve data quality.</li>
              <li>Collaborated with cross-functional teams to develop data models and warehouse solutions.</li>
              <li>Optimized SQL queries to enhance database performance and reduce processing time.</li>
            </ul>
          </div>
          </div>
          <div className="divider"></div> {/* Add divider */}
          <div className="about-icons">
            <div className="category">
              <h3>Languages</h3>
              <div className="icons">
                <div className="icon" data-tooltip="Python"><i className="fab fa-python"></i></div>
                <div className="icon" data-tooltip="JavaScript"><i className="fab fa-js"></i></div>
                <div className="icon" data-tooltip="Java"><i className="fab fa-java"></i></div>
                <div className="icon" data-tooltip="HTML5"><i className="fab fa-html5"></i></div>
                <div className="icon" data-tooltip="CSS3"><i className="fab fa-css3-alt"></i></div>
                <div className="icon" data-tooltip="C#"><i className="fab fa-microsoft"></i></div> {/* Using Microsoft icon as placeholder */}
                <div className="icon" data-tooltip="Unity"><i className="fab fa-unity"></i></div>
              </div>
            </div>
            <div className="category">
              <h3>Databases</h3>
              <div className="icons">
                <div className="icon" data-tooltip="SQL"><i className="fas fa-database"></i></div>
                <div className="icon" data-tooltip="Snowflake"><i className="fas fa-snowflake"></i></div>
                <div className="icon" data-tooltip="Alibaba Cloud"><i className="fas fa-cloud"></i></div>
                <div className="icon" data-tooltip="PostgreSQL"><i className="fas fa-database"></i></div>
                <div className="icon" data-tooltip="SQLite"><i className="fas fa-database"></i></div>
              </div>
            </div>
            <div className="category">
              <h3>Tools</h3>
              <div className="icons">
                <div className="icon" data-tooltip="GitHub"><i className="fab fa-github"></i></div>
                <div className="icon" data-tooltip="JIRA"><i className="fab fa-jira"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section dark" id="projects">
        <Projects />
      </div>
      <div className="section light contact-section" id="contact">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/terris-l-4a5842130/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/TerrisLua" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        </div>
        <p className="contact-name">Terris Lua</p>
      </div>
    </div>
  );
};

export default HomePage;
