import React from "react";
import "./Css/Skills.css"; // Import the CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faReact } from "@fortawesome/free-brands-svg-icons";

function Skills() {
  // Define your skills as an array of objects with a name and icon (Font Awesome icons)
  const skillsList = [
    { name: "HTML5", icon: faHtml5 },
    { name: "CSS3", icon: faCss3 },
    { name: "JavaScript", icon: faJs },
    { name: "React", icon: faReact },
    // Add more skills as needed
  ];

  return (
    <section className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-description">
          Here you can showcase your technical skills and expertise. Feel free
          to add a brief description of your capabilities.
        </p>
        <div className="skills-list">
          {skillsList.map((skill, index) => (
            <div className="skill" key={index}>
              <FontAwesomeIcon icon={skill.icon} size="2x" /> {/* Use FontAwesomeIcon */}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
