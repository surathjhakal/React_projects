import React from "react";

const Project = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.info}</p>
        <a href={props.link} className="btn btn new-btn">
          Get Source Code
        </a>
      </div>
    </div>
  );
};

export default Project;
