import React from "react";
import "./CartItems.css";
import db from "./firebase";

const CartItems = (props) => {
  let options = [];
  for (let i = 1; i < 21; i++) {
    options.push(
      <option className="options" value={i}>
        Qty: {i}
      </option>
    );
  }

  const deleteItem = () => {
    db.collection("cart-items").doc(props.id).delete();
  };

  const changeQuantity = (val) => {
    db.collection("cart-items")
      .doc(props.id)
      .update({
        quantity: parseInt(val),
      });
  };

  return (
    <div className="cartItem">
      <div className="cartItem-image">
        <img alt="image" src={props.image} />
      </div>
      <div className="cartItem-info">
        <div className="cartItem-title">{props.title}</div>
        <div className="cartItem-actions">
          <div className="cartItem-quantity">
            <select
              value={props.quantity}
              onChange={(e) => changeQuantity(e.target.value)}
            >
              {options}
            </select>
          </div>
          <div className="cartItem-delete" onClick={deleteItem}>
            Delete
          </div>
        </div>
      </div>
      <div className="cartItem-price">
        ₹{(props.price * props.quantity).toLocaleString("en-IN")}
      </div>
    </div>
  );
};

export default CartItems;
