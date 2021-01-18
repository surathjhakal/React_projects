import React from "react";
import db from "./firebase";
import "./Product.css";

function Product(props) {
  const addToCart = () => {
    let cartItem = db.collection("cart-items").doc(props.id);
    let quantity = db.collection("cart-items").doc(props.id);
    console.log(quantity);
    cartItem.get().then((doc) => {
      if (doc.exists) {
        cartItem.update({
          quantity: parseInt(doc.data().quantity) + 1,
        });
      } else {
        cartItem.set({
          title: props.title,
          price: props.price,
          image: props.image,
          quantity: 1,
        });
      }
    });
  };

  // console.log(props);

  return (
    <div className="product">
      <div className="product-info">
        <span className="product-title">{props.title}</span>
        <span className="product-price">
          ₹{props.price.toLocaleString("en-IN")}
        </span>
        <span className="product-rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </span>
      </div>
      <img alt="image" src={props.image} />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
