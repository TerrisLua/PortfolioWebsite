import React from 'react';
import './Skills.css';

const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python', icon: 'fab fa-python' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'Java', icon: 'fab fa-java' },
      { name: 'C#', icon: 'fab fa-microsoft' },
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3-alt' },
      { name: 'React', icon: 'fab fa-react' }, // Added React
      { name: 'PySpark', icon: 'fas fa-fire' }, // Added PySpark (using fire icon as placeholder)
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'SQL', icon: 'fas fa-database' },
      { name: 'Snowflake', icon: 'fas fa-snowflake' },
      { name: 'Alibaba Cloud', icon: 'fas fa-cloud' },
      { name: 'PostgreSQL', icon: 'fas fa-database' },
      { name: 'SQLite', icon: 'fas fa-database' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'GitHub', icon: 'fab fa-github' },
      { name: 'JIRA', icon: 'fab fa-jira' },
      { name: 'Kafka', icon: 'fas fa-stream' }, 
      { name: 'RESTful API', icon: 'fas fa-network-wired' }, 
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-section">
      {skills.map((skillCategory, index) => (
        <div key={index} className="skills-category">
          <h4>{skillCategory.category}</h4>
          <div className="skills-icons">
            {skillCategory.items.map((skill, idx) => (
              <div key={idx} className="skill-item" data-tooltip={skill.name}>
                <i className={skill.icon}></i>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
