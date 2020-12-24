import React, { useState } from "react";
import "./Header.css";
// import photo from "./header-background.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fab } from "@fortawesome/free-brand-svg-icons";
const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid ">
        <div className="row">
          <nav className="navbar navbar-expand-lg">
            <button
              className="custom-toggler navbar-toggler ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample09"
              aria-controls="navbarsExample09"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setIsNavCollapsed(!isNavCollapsed)}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>

            <div
              className={`${!isNavCollapsed ? "collapse" : ""} navbar-collapse 
              `}
              id="navbarsExample09"
            >
              {}
              <a className="nav-link current" href="/contact">
                Home
              </a>
              <a className="nav-link" href="/login">
                About
              </a>
              <a href="/request-demo" className="nav-link">
                Education
              </a>
              <a href="/request-demo" className="nav-link">
                Skills
              </a>
              <a href="/request-demo" className="nav-link">
                Projects
              </a>
              <a href="/request-demo" className="nav-link">
                Contact
              </a>
            </div>
          </nav>
          <div className="info">
            <h1>I'm Surath Kumar Jhakal.</h1>
            <h3>
              I'm a Beverly Hills based{" "}
              <span>Head Instructor @CleverProgrammer</span>. Full Stack
              Developer and Lead Instructor at Clever Programmer..
            </h3>
            <div className="social">
              <i className="fab fa-hackerrank"></i>
              {/* <FontAwesomeIcon icon={["fab", "github"]} /> */}
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-github"></i>
            </div>
            <div className="btn">
              <button>
                <i className="fas fa-angle-down"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
