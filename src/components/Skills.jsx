import React from "react";
import "../styles/Skills.css";

function Skills() {
  const skills = [ "Core & Advance Java", "SQL", "Java Script", "React", "CSS3", "HTML5", "Spring Boot", "Hibernet"];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
