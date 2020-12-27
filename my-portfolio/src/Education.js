import React from "react";
import Class from "./Class";
import "./Education.css";

const Education = () => {
  return (
    <section id="education-header" className="d-flex align-items-center">
      <div className="container-fluid ">
        <div className="education-row">
          <div className="education-topic">
            <p>Education</p>
          </div>
          <div className="certificates">
            <Class
              title="Jai Hind College"
              degree="Bachelor's Degree, Information Technology (2020-2023)"
              marks="Not graduated but I'm sure that I'll graduate with distinction"
            />
            <Class
              title="Thakur College of Science & Commerce"
              degree="Junior College, Commerce with Math & IT (2018-2020)"
              marks="Passed with 80%"
            />
            <Class
              title="U.S Ostwal English Academy"
              degree="Secondary School (2016-2018)"
              marks="Passed with 79%"
              noborder
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
