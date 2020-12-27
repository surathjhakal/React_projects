import React from "react";

const Class = (props) => {
  return (
    <div
      className="education-info"
      style={{
        borderBottom: props.noborder ? "none" : "1px solid lightgrey",
        marginBottom: props.noborder ? "0rem" : "3rem",
      }}
    >
      <div className="education-title">{props.title}</div>
      <div className="education-degree">{props.degree}</div>
      <div className="education-marks">{props.marks}</div>
    </div>
  );
};

export default Class;
