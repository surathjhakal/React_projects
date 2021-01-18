import React from "react";

const FourImage = (props) => {
  return (
    <div className="productOptions-images">
      <div className="productOptions-images-LineOne">
        <div className="images">
          <img
            className="productOptions-fourImage"
            alt="images"
            src={props.img1}
          />
          <span>{props.info1}</span>
        </div>
        <div className="images">
          <img
            className="productOptions-fourImage"
            alt="images"
            src={props.img2}
          />
          <span>{props.info2}</span>
        </div>
      </div>
      <div className="productOptions-images-LineTwo">
        <div className="images">
          <img
            className="productOptions-fourImage"
            alt="images"
            src={props.img3}
          />
          <span>{props.info3}</span>
        </div>
        <div className="images">
          <img
            className="productOptions-fourImage"
            alt="images"
            src={props.img4}
          />
          <span>{props.info4}</span>
        </div>
      </div>
    </div>
  );
};

export default FourImage;
