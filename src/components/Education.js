import React from 'react';
import './Education.css';

const education = [
  {
    title: '🧑‍🎓 Bachelor of Science in Computer Science',
    institution: 'SIM Global Education, University of London',
    honours: 'Second Upper Class Honours',
    date: '📅 Oct 2020 – Jan 2024',
  },
  {
    title: '🎓 Diploma in Electrical & Electronic Engineering',
    institution: 'Singapore Polytechnic',
    date: '📅 Mar 2015 – Mar 2018',
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
          {edu.honours && <p className="education-honours">{edu.honours}</p>}
        </div>
      ))}
    </div>
  );
};
  
export default Education;

