import React from "react";
import Project from "./Project";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects-header" className="d-flex align-items-center">
      <div className="container-fluid ">
        <div className="projects-row">
          <div className="projects-title">Checkout some of my projects :)</div>
          <div className="projects-project">
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
          <div className="projects-project">
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
          <div className="projects-row-button">
            <button>
              <i className="fas fa-angle-up"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
