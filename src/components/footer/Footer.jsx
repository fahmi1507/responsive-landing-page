import React from "react";
import "../../css/style.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content-container">
        <p className="footer-text">
          <span style={{ fontWeight: "bold" }}>wknd</span>@2020
        </p>
        <div className="version">
          <p className="alpha-version-01">alpha version 0.1</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
