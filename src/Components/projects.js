import React from "react";
import "./Css/projects.css";
import image1 from "./images/Base-apparel.png";
import image2 from "./images/QR-Code.png";
import image3 from "./images/interactive-rating.png";
import image4 from "./images/statspreview.png";
import image5 from "./images/summarycomponent.png";

function Projects() {
  return (
    <div className="projects">
    <section className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="project-card">
          <img
            src={image1}// Replace with the URL of your project image
            alt="Project Name"
            className="project-image"
          />
          <div className="project-details">
            <h3 className="project-name">Project Name</h3>
            <p className="project-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ultricies tristique nulla, eget euismod justo fermentum nec.
            </p>
            <a
              href="#project-link" // Replace with the URL of your project
              className="project-link"
            >
              View Project
            </a>
          </div>
        </div>
        {/* Add more project cards as needed */}
        <div className="project-card">
          <img
            src={image2} // Replace with the URL of your project image
            alt="Project Name"
            className="project-image"
          />
          <div className="project-details">
            <h3 className="project-name">Project Name</h3>
            <p className="project-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ultricies tristique nulla, eget euismod justo fermentum nec.
            </p>
            <a
              href="#project-link" // Replace with the URL of your project
              className="project-link"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="project-card">
          <img
            src={image3} // Replace with the URL of your project image
            alt="Project Name"
            className="project-image"
          />
          <div className="project-details">
            <h3 className="project-name">Project Name</h3>
            <p className="project-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ultricies tristique nulla, eget euismod justo fermentum nec.
            </p>
            <a
              href="#project-link" // Replace with the URL of your project
              className="project-link"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="project-card">
          <img
            src={image4} // Replace with the URL of your project image
            alt="Project Name"
            className="project-image"
          />
          <div className="project-details">
            <h3 className="project-name">Project Name</h3>
            <p className="project-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ultricies tristique nulla, eget euismod justo fermentum nec.
            </p>
            <a
              href="#project-link" // Replace with the URL of your project
              className="project-link"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="project-card">
          <img
            src={image5}// Replace with the URL of your project image
            alt="Project Name"
            className="project-image"
          />
          <div className="project-details">
            <h3 className="project-name">Project Name</h3>
            <p className="project-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ultricies tristique nulla, eget euismod justo fermentum nec.
            </p>
            <a
              href="#project-link" // Replace with the URL of your project
              className="project-link"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Projects;
