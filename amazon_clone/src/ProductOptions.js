import React from "react";
import FourImage from "./FourImage";
import OneImage from "./OneImage";
import "./ProductOptions.css";

const ProductOptions = (props) => {
  return (
    <div className="productOptions">
      <div className="productOptions-info">
        <span className="productOptions-title">{props.title}</span>
        {props.fourImage ? (
          <FourImage
            img1={props.img1}
            info1={props.info1}
            img2={props.img2}
            info2={props.info2}
            img3={props.img3}
            info3={props.info3}
            img4={props.img4}
            info4={props.info4}
          />
        ) : (
          <OneImage img1={props.img1} />
        )}
        <p>{props.offers}</p>
      </div>
    </div>
  );
};

export default ProductOptions;
