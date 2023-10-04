import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import "./Css/footer.css";

function Footer() {
  return (
    <footer className="page-footer">
      <div className="container">
        <p>Jonah Kroll, © Copyright, 2023</p>
        <ul className="social-links">
          <li><a href="#home"><FontAwesomeIcon icon={faGithub} /></a></li>
          <li><a href="#home"><FontAwesomeIcon icon={faLinkedin} /></a></li>
          <li><a href="#home"><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li><a href="#home"><FontAwesomeIcon icon={faTiktok} /></a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
