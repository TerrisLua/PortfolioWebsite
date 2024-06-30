import React from 'react';
import './Education.css';

const education = [
  {
    title: 'Bachelor Degree in Computer Science',
    institution: 'SIM-UOL',
    date: 'Oct 2020 - Nov 2023',
  },
  {
    title: 'Diploma in Electrical & Electronics Engineering',
    institution: 'Singapore Polytechnic',
    date: 'Mar 2015 - Mar 2018',
  },
];

const Education = () => {
    return (
      <div className="education-section">
        {education.map((edu, index) => (
          <div key={index} className="education-box">
            <span className="education-date">{edu.date}</span>
            <h4>{edu.title}</h4>
            <p className="education-institution">{edu.institution}</p>
          </div>
        ))}
      </div>
    );
  };
  
export default Education;

