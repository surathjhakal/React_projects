import React from "react";
import Project from "./Project";
import "./Projects.css";
import amazon_image from "./amazon-clone.png";
import netflix_image from "./netflix-clone.png";
import music_image from "./music_image.png";
import first_react_app_image from "./first-react-website.png";
import typing_test_image from "./typing_test_image.png";
import tic_tac_toe_image from "./tic_tac_toe_image.png";
import quiz_image from "./quiz_image.png";
import weather_image from "./weather_image.png";

const Projects = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects-header" className="d-flex align-items-center">
      <div className="container-fluid ">
        <div className="projects-row">
          <div className="projects-title">Checkout some of my projects :)</div>
          <div className="projects-project">
            <Project
              img={amazon_image}
              title="Amazon Clone"
              info="Loved making amazon clone as it was challenge and wanted to check my skills much i can do. Whereever i got stuck 
              I taked helped from youtube channel named clever programmer.."
              link="https://github.com/surathjhakal/Amazon-clone"
            />
            <Project
              img={netflix_image}
              title="Netflix Clone"
              info="This netflix clone was easy but quite challenging too, even in this app i taked help from clever programmer. 
              I even learn some new css styles in this project.."
              link="https://github.com/surathjhakal/React_projects/tree/master/netflix-clone"
            />
            <Project
              img={music_image}
              title="Music app"
              info="I really learned a lot in this app. I even use this app because whichever song 
              I want to listen I add it to the music object and it plays all the songs in queue.."
              link="https://github.com/surathjhakal/javascript_projects/tree/master/music_player"
            />
            <Project
              img={first_react_app_image}
              title="First react app"
              info="This was my first react app and in this app I learned everything about react because every functionality of react was
               used in this.."
              link="https://github.com/surathjhakal/React_projects/tree/master/first-react-website"
            />
          </div>
          <div className="projects-project">
            <Project
              img={typing_test_image}
              title="Typing Test"
              info="One of my friend asked me that how much is my typing speed so from that I got an idea to make a typing speed app.."
              link="https://github.com/surathjhakal/javascript_projects/tree/master/Typing_test"
            />
            <Project
              img={tic_tac_toe_image}
              title="Tic Tac Toe app"
              info="This was my first project of python in which my OOP became strong. I really had fun and got great experience.."
              link="https://github.com/surathjhakal/python_codes/blob/master/tic_tac_toe_game.py"
            />
            <Project
              img={quiz_image}
              title="Quiz app"
              info="Everyone likes quiz game, it's a fun game so thought of making it. By the way got this idea from kaun banega crorepati.."
              link="https://github.com/surathjhakal/Amazon-clone"
            />
            <Project
              img={weather_image}
              title="Weather app"
              info="In this app I really learned about how to fetch data from api and it was quite easy I would say..."
              link="https://github.com/surathjhakal/React_projects/tree/master/weather-app"
            />
          </div>
          <div className="projects-row-button">
            <button onClick={goToTop}>
              <i className="fas fa-angle-up"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
