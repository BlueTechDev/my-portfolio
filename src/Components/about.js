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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ultricies tristique nulla, eget euismod justo fermentum nec. Ut
              efficitur justo nec tortor tincidunt lacinia.
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ultricies tristique nulla, eget euismod justo fermentum nec. Ut
              efficitur justo nec tortor tincidunt lacinia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
