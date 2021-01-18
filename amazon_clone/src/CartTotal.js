import React from "react";
import "./CartTotal.css";

const CartTotal = (props) => {
  const getTotalPrice = () => {
    let totalPrice = 0;
    let totalItem = 0;
    props.cartItems.forEach((item) => {
      let findQuantity = parseInt(item.cartItem.quantity);
      totalPrice += item.cartItem.price * findQuantity;
      totalItem += findQuantity;
    });
    return [totalPrice, totalItem];
  };

  return (
    <div className="cartTotal">
      <h3>
        Subtotal({getTotalPrice()[1]} items): ₹
        {getTotalPrice()[0].toLocaleString("en-IN")}
      </h3>
      <button>Proceed to checkout</button>
    </div>
  );
};

export default CartTotal;
