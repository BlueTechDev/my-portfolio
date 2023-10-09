import React from "react";
import "./Css/contact.css";

function Contact() {
  return (
    <div className="contact">
    <div className="container">
      <h2 className="section-title">Contact Me</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" rows="4" required />
        </div>
        <button type="submit" className="submit-button">Send</button>
      </form>
    </div>
  </div>
  );
}

export default Contact;
