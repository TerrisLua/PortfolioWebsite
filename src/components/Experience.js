import React, { useState } from 'react';
import './Experience.css';

const experiences = [
  {
    title: 'Junior Data Engineer',
    company: 'Synagie',
    date: 'May 2022 - Aug 2023',
    descriptions: [
      'Built and maintained ETL pipelines to extract, transform, and load data from APIs, databases, and flat files, supporting multiple teams with 5–7 hours of fresh data weekly.',
      'Cleaned and processed over 10,000+ survey records, significantly improving data quality and consistency.',
      'Diagnosed and resolved data inconsistencies across multiple sources with over 99.5% accuracy for reporting and dashboards.',
      'Collaborated with stakeholders to design automated data workflows and simplify reporting logic.',
      'Used Alibaba Cloud Function Compute to automate Excel ingestion from OSS to database, reducing upload effort.'
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