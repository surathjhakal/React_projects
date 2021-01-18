import React from "react";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";
import "./Cart.css";

const Cart = (props) => {
  return (
    <div className="cart">
      <div className="cartItems">
        <h1>Shopping Cart</h1>
        <hr />
        {props.cartItems.map((item) => (
          <CartItems
            id={item.id}
            key={item.id}
            title={item.cartItem.title}
            price={item.cartItem.price}
            quantity={item.cartItem.quantity}
            image={item.cartItem.image}
          />
        ))}
      </div>
      <CartTotal cartItems={props.cartItems} />
    </div>
  );
};

export default Cart;
