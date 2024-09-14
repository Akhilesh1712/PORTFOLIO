import React, { useState } from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [emailContent, setEmailContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:akhileshkr17122002@gmail.com?body=${encodeURIComponent(emailContent)}`;
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="column">
          <h2 className="heading">Quick Links</h2>
          <a href="/" className="link">Home</a>
          <a href="/Projects" className="link">Projects</a>
          <a href="/About" className="link">About</a>
          <a href="/Contact" className="link">Contact Me</a>
        </div>
        <div className="column">
          <h2 className="heading">Follow Me</h2>
          <div className="iconsContainer">
            <a href="https://www.instagram.com/__akhilesh200__/" target="_blank" rel="noopener noreferrer" className="iconLink">
              <FaInstagram />
            </a>
            <a href="https://x.com/explore" target="_blank" rel="noopener noreferrer" className="iconLink">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/akhilesh-kumar-7a6857248/" target="_blank" rel="noopener noreferrer" className="iconLink">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Akhilesh1712" target="_blank" rel="noopener noreferrer" className="iconLink">
              <FaGithub />
            </a>
          </div>
          <h4>Email</h4><h5>akhileshkr17122002@gmail.com</h5>
        </div>
        <div className="form1-container column">
          <h2 className="heading1">Send Me a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text1"
              placeholder="Your message"
              className="form1-input"
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
            />
            <button type="submit" className="form1-button">Send Email</button>
          </form>
        </div>
      </div>
      <p className="bottomText1">© 2024 Akhilesh. All rights reserved.</p>
    </div>
  );
};

export default Footer;
