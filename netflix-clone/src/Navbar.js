import React, { useEffect, useState } from "react";
import "./Navbar.css";
import netflix_logo from "./netflix_image.png";
import netflix_avatar from "./netflix_avatar.png";

const Navbar = () => {
  const [show, handleshow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleshow(true);
      } else {
        handleshow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={netflix_logo} alt="Netflic Logo" />
      <img className="nav_avatar" src={netflix_avatar} alt="Netflic Logo" />
    </div>
  );
};

export default Navbar;
