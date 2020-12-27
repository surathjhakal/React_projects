import React, { useState } from "react";

const SkillCard = (props) => {
  const [show, setShow] = useState(true);

  const display = () => {
    // console.log("clicked");
    setShow(!show);
  };

  return (
    <div className="skill-card">
      <h5>{props.title}</h5>
      <div className={`${show ? "accordion-old" : "accordion-new"}`}>
        <div className="skill-bar">
          <div className="skill-btns" onClick={display}>
            <button
              className={`btn1 ${show ? "btn1-old" : "btn1-new"}`}
            ></button>
            <button
              className={`btn2 ${show ? "btn2-old" : "btn2-new"}`}
              style={{ width: props.percent }}
            ></button>
          </div>
        </div>
        <div
          className={`skill-bar-info ${
            show ? "skill-bar-info-old" : "skill-bar-info-new"
          }`}
        >
          {props.info}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
