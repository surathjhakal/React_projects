import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
// import photo from "./header-background.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fab } from "@fortawesome/free-brand-svg-icons";
const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [show, handleshow] = useState(false);
  const [navshow, setnavshow] = useState(false);
  const [uniqueId, setUniqueId] = useState("id_home");
  // const [mobileUniqueId, mbileSetUniqueId] = useState("id_home");

  useEffect(() => {
    if (window.innerWidth > 900) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 0 && window.scrollY < 570) {
          setUniqueId("id_home");
        } else if (window.scrollY > 570 && window.scrollY < 1030) {
          setUniqueId("id_about");
        } else if (window.scrollY > 1030 && window.scrollY < 1750) {
          setUniqueId("id_education");
        } else if (window.scrollY > 1750 && window.scrollY < 3040) {
          setUniqueId("id_skills");
        } else if (window.scrollY > 3040) {
          setUniqueId("id_projects");
        }
      });
    } else {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 0 && window.scrollY < 650) {
          setUniqueId("id_home");
        } else if (window.scrollY > 650 && window.scrollY < 1630) {
          setUniqueId("id_about");
        } else if (window.scrollY > 1630 && window.scrollY < 2560) {
          setUniqueId("id_education");
        } else if (window.scrollY > 2560 && window.scrollY < 4000) {
          setUniqueId("id_skills");
        } else if (window.scrollY > 4000) {
          setUniqueId("id_projects");
        }
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 590 && window.scrollY > 40) {
        setnavshow(true);
      } else {
        setnavshow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 590 && window.scrollY < 40) {
          setnavshow(false);
        } else setnavshow(true);
      });
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 550) {
        handleshow(true);
      } else {
        handleshow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY < 550) {
          handleshow(false);
        } else handleshow(true);
      });
    };
  }, []);

  const scrollFunction = (id) => {
    if (window.innerWidth > 900) {
      if (id === "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else if (id === "about") {
        window.scrollTo({
          top: 600,
          behavior: "smooth",
        });
      } else if (id === "education") {
        window.scrollTo({
          top: 1085,
          behavior: "smooth",
        });
      } else if (id === "skills") {
        window.scrollTo({
          top: 1822,
          behavior: "smooth",
        });
      } else if (id === "projects") {
        window.scrollTo({
          top: 3080,
          behavior: "smooth",
        });
      }
    } else {
      if (id === "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else if (id === "about") {
        window.scrollTo({
          top: 810,
          behavior: "smooth",
        });
      } else if (id === "education") {
        window.scrollTo({
          top: 1740,
          behavior: "smooth",
        });
      } else if (id === "skills") {
        window.scrollTo({
          top: 2685,
          behavior: "smooth",
        });
      } else if (id === "projects") {
        window.scrollTo({
          top: 4060,
          behavior: "smooth",
        });
      }
    }
  };

  const goToBottom = () => {
    window.scrollTo({
      top: 590,
      behavior: "smooth",
    });
  };

  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid ">
        <div className="row">
          <nav
            className={`navbar navbar-expand-lg ${show && "addColor"} ${
              navshow && "hide"
            }`}
          >
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
              ${show && "addColor"}`}
              id="navbarsExample09"
            >
              <Link
                onClick={() => scrollFunction("home")}
                to="/"
                className="nav-link"
                id={`${uniqueId === "id_home" && "id_home"}`}
              >
                Home
              </Link>
              <Link
                onClick={() => scrollFunction("about")}
                to="/about"
                className="nav-link"
                id={`${uniqueId === "id_about" && "id_about"}`}
              >
                About
              </Link>
              <Link
                onClick={() => scrollFunction("education")}
                to="/education"
                className="nav-link"
                id={`${uniqueId === "id_education" && "id_education"}`}
              >
                Education
              </Link>
              <Link
                onClick={() => scrollFunction("skills")}
                to="/skills"
                className="nav-link"
                id={`${uniqueId === "id_skills" && "id_skills"}`}
              >
                Skills
              </Link>
              <Link
                onClick={() => scrollFunction("projects")}
                to="/projects"
                className="nav-link"
                id={`${uniqueId === "id_projects" && "id_projects"}`}
              >
                Projects
              </Link>
            </div>
          </nav>
          <div className="info">
            <h1>I'm Surath Kumar Jhakal.</h1>
            <h3>
              My next goal is to become<span> Full Stack Developer🔥🔥</span>. I
              love programming and enjoy doing it. I'm really dedicated &
              passionate towards my work ...
            </h3>
            <div className="social">
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
            <div className="btn">
              <button onClick={goToBottom}>
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
