import React from "react";
import "./styles.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div className="footer">
      <h2 className="logo" onClick={topFunction}>
        CryptoTracker<span>.</span>
      </h2>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/shivangi-beniwal-44a5092b9/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon className="social-link" />
        </a>
        <a href="mailto:shivangibeniwal338@gmail.com">
          <EmailIcon className="social-link" />
        </a>
        <a href="https://www.instagram.com/shivangi_beniwal111/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon className="social-link" />
        </a>
        <a href="https://github.com/Shivangi14Beniwal" target="_blank" rel="noopener noreferrer">
          <GitHubIcon className="social-link" />
        </a>
      </div>
    </div>
  );
}

export default Footer;