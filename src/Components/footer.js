import React from "react";
import "./Css/footer.css"

function Footer() {
    return (
        <footer className="page-footer">
            <div className="container">
                <p>Jonah Kroll, © Copyright, 2023</p>
                <ul className="social-links">
                    <li><a href="#home">Github</a></li>
                    <li><a href="#home">LinkedIn</a></li>
                    <li><a href="#home">Instagram</a></li>
                    <li><a href="#home">Tiktok</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
