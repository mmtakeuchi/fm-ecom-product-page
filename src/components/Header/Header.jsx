import React from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";

const Header = () => {
  return (
    <div className="headerContainer">
      <img src={logo} alt="company logo" />
      <ul className="headerLinks">
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="cartAvatar">
        <button className="cartBtn">
          <img src={cart} alt="shopping cart" className="cartImg" />
        </button>
        <img src={avatar} alt="avatar" className="avatar" />
      </div>
    </div>
  );
};

export default Header;
