import React from "react";
import "./Css/education.css"; // Import the CSS file for styling

function Education() {
  return (
    <section className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-content">
          <div className="education-item">
            <h3 className="school-name">Martin Luther College</h3>
            <p className="degree">Bachelor of Science in Education</p>
            <p className="duration">2015 - 2019</p>
            <p className="description">
                I originally set out to be a teacher for grade school level kids. Later decided that was not the route I wanted 
                to take for my life. I graduated with the degree but did not pruse teaching or really anything until 2022. 
            </p>
          </div>
          <div className="education-item">
            <h3 className="school-name">Coursera Online Education</h3>
            <p className="degree">Frontend Developer Certification</p>
            <p className="duration">2022-current</p>
            <p className="description">
              I took various course to learn how to code and get into web devlopement. I studied basic Html & Css, Version control, React,
              Javscript, Advanced Html & Css. I received Certification for each completed course and have various projects to prove my ability. 
            </p>
          </div>
          <div className="education-item">
            <h3 className="school-name">Codecademy</h3>
            <p className="degree">Frontend Developer Certification || UX & UI | Ai interface</p>
            <p className="duration">2022-current</p>
            <p className="description">
              I use Codecademy to gain an understanding of different topics in the technology field as well as improve my skill an understanding
              in fields I already am familiar with. I like the way the simplify things and allow for personal paced learning. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
