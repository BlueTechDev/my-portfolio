import React from "react";
import "./Css/About.css"; // Import the CSS file for styling

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <div className="profile-image-container">
            <img
              src="/profile.jpg" // Replace with the correct path to your image
              alt="Jonah Kroll"
              className="profile-image"
            />
          </div>
          <div className="about-text">
            <h1 className="section-title">My Story</h1>
            <p className="paragraph">
              Hi, it's nice to meet you, welcome to my portfolio page. 
            </p>
            <p className="paragraph">
              I currently work as an IT specialist at a school and teach Tech Ed. I have not always been in the field i am currently in. 
              Originally I went to school to become a grade school teacher but decided that was not my path in life. I graduated with an BS in Education to have 
              something to show for my work and time spent. I spent 4 years work at an international school figuring out what i wanted to do in life. 
              I have always loved technology and decided this was the route i wanted to take in my life. 
              I am a frontend web developer I have experience working on projects using technologies such as HTML5, CSS3, Javascript, and React. I have used other technologies like Github and version control. 
              I do frontend development on the side while working as an IT specialist. 
            </p>
            <p>Feel free to reach out!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
