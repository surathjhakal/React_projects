import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section id="footer-header" className="d-flex align-items-center">
      <div className="container-fluid ">
        <div className="footer-row">
          <div className="footer-social">
            {/* <i className="fab fa-hackerrank"></i>
            <FontAwesomeIcon icon={["fab", "github"]} />
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-github"></i> */}
            <a href="https://www.hackerrank.com/jhakal_surath">
              <i className="fab fa-hackerrank"></i>
            </a>
            {/* <FontAwesomeIcon icon={["fab", "github"]} /> */}
            <a href="https://in.linkedin.com/in/surath-kumar-jhakal-6b200917b?challengeId=AQEgbDVV6R_4VwAAAXarCrTZcNg7ffbE7MmsyeOl5kSq3RVysGOkWQoS4POYzE1CxB4m1plHQ-fU-P_1fYnFZKt8z-RqNuOqag&submissionId=53791110-64fb-5416-b5b1-87b312fddb06">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/surath.jhakal/">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://github.com/surathjhakal">
              <i className="fab fa-github"></i>
            </a>
          </div>
          <p>My portfolio website :) which i have made in 7 days</p>
          <p>© All rights reserved to Surath K. Jhakal </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
