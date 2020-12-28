import React from "react";
import profile_pic from "./profile_pic.jpeg";
import "./About.css";
import myResume from "./Resume.pdf";

const About = () => {
  // const downloadFile = () => {
  //   window.location.href = "file:///C:/Users/Admin/Downloads/Resume.pdf";
  // };

  return (
    <section id="about-header" className="d-flex align-items-center">
      <div className="container-fluid ">
        <div className="about-row">
          <div className="image">
            <img src={profile_pic} alt="profile_pic" />
          </div>
          <div className="about-info">
            <h1>About Me</h1>
            <h3>
              My name is Surath, I'm in 1st year Bsc IT in Jai Hind College. My
              aim is to become a software engineer. Currently i'm working on
              these tech React js, Node js,Mongo db, Machine learning. My aim is
              to become an mern stack web developer by the end of 2021...
            </h3>
            <div className="about-contact">
              <div className="contact-info">
                <h1>Contact Details</h1>
                <h3>
                  Surath K. Jhakal,
                  <br />
                  Mumbai Maharashtra,
                  <br />
                  91+ 9136890967,
                  <br />
                  jhakal.surath@gmail.com
                </h3>
              </div>
              <div className="about-resume">
                {/* import MyPDF from '../path/to/file.pdf'; */}
                <a href={myResume} download="MyResume.pdf">
                  <i className="fas fa-download"></i>
                  <p>Download Resume</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
