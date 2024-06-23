// src/components/Projects.js

import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Social Network Web Application',
    description: 'A Django-based social network web application that allows users to register, login, post updates, and interact with other users.',
    link: 'https://github.com/TerrisLua/SocialnetworkDjango',
    image: '/assets/WebDev.png'
  },
  {
    title: '2D Plane Shooting Game',
    description: 'A fun and interactive 2D plane shooting game developed using Unity. Players can control a plane, shoot enemies, and score points.',
    link: 'https://github.com/TerrisLua/FinalProject2DPlaneShootingGame',
    image: '/assets/2dPlane.png'
  },
  {
    title: 'Crypto ETL',
    description: 'An ETL pipeline for cryptocurrency data that extracts, transforms, and loads data into a PostgreSQL database. The project includes data visualization using Flask and Plotly.',
    link: 'https://github.com/TerrisLua/CryptoETL',
    image: '/assets/CryptoETL.png'
  },
  {
    title: 'Basic Migration',
    description: 'A script for migrating data from SQLite to PostgreSQL. The project demonstrates data extraction, transformation, and loading (ETL) processes.',
    link: 'https://github.com/TerrisLua/BasicMigration',
    image: '/assets/Migration.png'
  }
];

const Projects = () => {
  return (
    <div className="projects-section">
      <h2>My Latest Projects</h2>
      <p>Take a look at my recent work.</p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;