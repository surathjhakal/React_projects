import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

const Header = (props) => {
  const getCount = () => {
    let quantity = 0;
    props.cartItems.forEach((item) => {
      quantity += parseInt(item.cartItem.quantity);
    });
    return quantity;
  };

  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/">
          <img
            src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-300x90.png"
            alt="image"
          />
        </Link>
      </div>
      <div className="header-optionAddress">
        <div className="header-option">
          <span className="header-optionLineOne">Hello,</span>
          <span className="header-optionLineOne">Select your address</span>
        </div>
      </div>
      <div className="header-search">
        <input type="text" className="header-input" />
        <div className="header-searchIcon">
          <SearchIcon />
        </div>
      </div>
      <div className="header-navItems">
        <div className="header-option">
          <span className="header-optionLineOne">Hello,Surath</span>
          <span className="header-optionLineTwo">Account & Lists</span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">Returns,</span>
          <span className="header-optionLineTwo">& Orders</span>
        </div>
        <div className="header-optionCart">
          <Link to="/cart">
            <ShoppingBasketIcon />
          </Link>
          <span className="header-cartCount">{getCount()}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
