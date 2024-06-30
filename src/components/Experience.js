import React, { useState } from 'react';
import './Experience.css';

const experiences = [
  {
    title: 'Junior Data Engineer',
    company: 'Synagie',
    date: 'May 2022 - Aug 2023',
    descriptions: [
      'Designed and implemented ETL pipelines to streamline data flow and improve data quality.',
      'Collaborated with cross-functional teams to develop data models and warehouse solutions.',
      'Optimized SQL queries to enhance database performance and reduce processing time.'
    ],
    skills: ['Python', 'SQL', 'ETL', 'Data Modeling', 'SQL Optimization', 'Dbeaver', 'Snowflake', 'Alibabacloud', 'Excel', 'Sharepoint', 'Lazada RESTful API']
  },
];

const Experience = () => {
  const [modalData, setModalData] = useState(null);

  const closeModal = () => {
    setModalData(null);
  };
  return (
    <div className="experience-section">
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-box">
            <span className="experience-date">{exp.date}</span>
            <h4>{exp.title}</h4>
            <p>{exp.company}</p>
            <button 
              className="more-details-btn" 
              onClick={() => setModalData(exp)}
            >
              More Details
            </button>
          </div>
        ))}
      </div>
      {modalData && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>{modalData.title}</h2>
            <h4>{modalData.company}</h4>
            <p>{modalData.date}</p>
            <ul>
              {modalData.descriptions.map((description, index) => (
                <li key={index}>{description}</li>
              ))}
            </ul>
            <h4>Tools & Skills:</h4>
            <ul className="skills-list">
              {modalData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;