import React from "react";
import image from "./header-background.jpg";

const Project = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn new-btn">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Project;
