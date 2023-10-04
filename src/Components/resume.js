import React from "react";
import "./Css/resume.css"; // Import the CSS file for styling

function Resume() {
  // Function to handle the download action
  const downloadResume = () => {
    // Create a Blob with the resume data and specify the MIME type
    const csvData = "Name,Skills,Experience\nJonah Kroll,Frontend Development,5 years";
    const blob = new Blob([csvData], { type: "text/csv" });

    // Create a temporary URL for the Blob
    const url = window.URL.createObjectURL(blob);

    // Create a temporary <a> element to trigger the download
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.csv";

    // Programmatically click the <a> element to start the download
    a.click();

    // Clean up resources
    window.URL.revokeObjectURL(url);
  };

  return (
    <section className="resume">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <div className="resume-content">
          <p>Here you can download my resume in CSV format:</p>
          <button onClick={downloadResume}>Download Resume</button>
        </div>
      </div>
    </section>
  );
}

export default Resume;
