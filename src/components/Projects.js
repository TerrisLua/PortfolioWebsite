import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Social Network Web Application',
    description: 'A Django-based social network web application that allows users to register, login, post updates, and interact with other users.',
    link: 'https://github.com/TerrisLua/socialnetworkdjango',
    image: '/assets/WebDev.png'
  },
  {
    title: '2D Plane Shooting Game',
    description: 'A fun and interactive 2D plane shooting game developed using Unity. Players can control a plane, shoot enemies, and score points.',
    link: 'https://github.com/TerrisLua/2d-planeshooting-game',
    image: '/assets/2dPlane.png'
  },
  {
    title: 'Crypto ETL',
    description: 'An ETL pipeline for cryptocurrency data that extracts, transforms, and loads data into a PostgreSQL database. The project includes data visualization using Flask and Plotly.',
    link: 'https://github.com/TerrisLua/crypto-api-etl',
    image: '/assets/CryptoETL.png'
  },
  {
    title: 'Simple Migration',
    description: 'A script for migrating data from SQLite to PostgreSQL. The project demonstrates data extraction, transformation, and loading (ETL) processes.',
    link: 'https://github.com/TerrisLua/simple-migration',
    image: '/assets/Migration.png'
  },
  {
    title: 'Real-Time Event Tracking',
    description: 'A real-time event tracking system using Kafka, Flask, and PostgreSQL to capture, process, and display user interactions such as button clicks and page views',
    link: 'https://github.com/TerrisLua/flask-kafka-integration',
    image: '/assets/kafka-events-realtime.png'
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects-section">
      <h2>My Work</h2>
      <p>Check out some of my projects...</p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <div className="project-info">
                <h3>{project.title}</h3>
              </div>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;