import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section id="footer-header" className="d-flex align-items-center">
      <div className="container-fluid ">
        <div className="footer-row">
          <div className="footer-social">
            <i className="fab fa-hackerrank"></i>
            {/* <FontAwesomeIcon icon={["fab", "github"]} /> */}
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-github"></i>
          </div>
          <p>My portfolio website :) which i have made in 8 days</p>
          <p>© All rights reserved to Surath K. Jhakal </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
