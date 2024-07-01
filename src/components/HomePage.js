// src/components/HomePage.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar'; // Import the Navbar component
import './HomePage.css'; // Import the CSS file
import Projects from './Projects';
import Experience from './Experience'; // Import the Experience component
import Education from './Education';
import Skills from './Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


const HomePage = () => {
  const [activeTab, setActiveTab] = useState('aboutMe');
  const birthYear = 1997; 
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  const renderContent = () => {
    switch (activeTab) {
      case 'aboutMe':
        return (
          <div className="about-content">
          <h3>About Me</h3>
          <p>I am passionate about data, mathematics, and coding. I love solving complex problems and creating innovative solutions through technology.</p>
          <p>My interests lie in solving complex problems and developing innovative solutions through technology.</p>
          <p>Throughout my academic and professional journey, I've acquired a robust skill set in various programming languages and tools. I enjoy continuous learning and staying updated with the latest industry trends.</p>
          <div className="about-details">
            <div className="detail-item">
              <span className="detail-title">Name</span> Terris Lua
            </div>
            <div className="detail-item">
              <span className="detail-title">Experience</span> 1+ Years
            </div>
            <div className="detail-item">
              <span className="detail-title">Nationality</span> Singaporean
            </div>
            <div className="detail-item">
              <span className="detail-title">Email</span> luaterris880@gmail.com
            </div>
            <div className="detail-item">
              <span className="detail-title">Age</span> {age}
            </div>
            <div className="detail-item">
              <span className="detail-title">Languages</span> English, Chinese
            </div>
          </div>
        </div>
        );
      case 'experience':
        return (
        <div className="about-content">
          <h3>My Experience</h3>
          <Experience />
        </div>
        );
      case 'education':
        return (
          <div className="about-content">
            <h3>My Education</h3>
            <Education />
          </div>
          );
      case 'skills':
      return (
        <div className="about-content">
          <h3>Skills</h3>
          <Skills />
        </div>
      );
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <div className="section home-section dark" id="home">
        <div className="home-content">
          <div className="home-image">
              <img src="/assets/dp.jpg" alt="Profile" className="profile-pic" />
          </div>
          <div className="home-text">
            <motion.h1
              className="heading"
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Welcome to My Portfolio
            </motion.h1>
            <motion.p
              className="paragraph"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Hello, I'm <span className="highlight">Terris Lua</span>, a Computer Science graduate from SIM-UOL.
            </motion.p>
            <br />
              <a href="/assets/TerrisLuaResume.pdf" download className="resume-button">
                <FontAwesomeIcon icon={faDownload} /> Download Resume
              </a>
          </div>
        </div>
      </div>
      <div className="section light" id="about">
        <div className="about-container">
          <div className="about-sidebar">
            <button className={`tab-button ${activeTab === 'aboutMe' ? 'active' : ''}`} onClick={() => setActiveTab('aboutMe')}>About Me</button>
            <button className={`tab-button ${activeTab === 'experience' ? 'active' : ''}`} onClick={() => setActiveTab('experience')}>Experience</button>
            <button className={`tab-button ${activeTab === 'education' ? 'active' : ''}`} onClick={() => setActiveTab('education')}>Education</button>
            <button className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`} onClick={() => setActiveTab('skills')}>Skills</button>
          </div>
          <div className="about-content-wrapper">
            {renderContent()}
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
