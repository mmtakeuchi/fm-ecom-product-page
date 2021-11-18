import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import cartImg from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";
import prodThumb from "../../assets/images/image-product-1-thumbnail.jpg";
import trashcan from "../../assets/images/icon-delete.svg";
import menu from "../../assets/images/icon-menu.svg";
import close from "../../assets/images/icon-close.svg";

const Header = ({ cart, emptyCart }) => {
  const [activeAvi, setActiveAvi] = useState(false);
  const [activeCart, setActiveCart] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const activateAvi = () => {
    setActiveAvi(!activeAvi);
  };

  const activateCart = () => {
    setActiveCart(!activeCart);
  };

  const renderMiniCart = () => {
    return (
      <div className={`cart${activeCart ? "-open" : ""}`}>
        <h2 className="cart-title">Cart</h2>
        <hr className="line" />

        {Object.keys(cart).length ? (
          <>
            <div className="cart-container">
              <div>
                <img src={prodThumb} alt={cart.name} className="cart-image" />
              </div>
              <div className="cart-details">
                <p className="product-name">{cart.name}</p>
                <p className="product-price">
                  {`$${cart.price.toFixed(2)}`} x {cart.quantity}
                  <span className="cart-total">{`$${(
                    cart.price * cart.quantity
                  ).toFixed(2)}`}</span>
                </p>
              </div>
              <img
                src={trashcan}
                alt="trash can"
                className="trashcan"
                onClick={emptyCart}
              />
            </div>
            <button className="cart-checkoutBtn">Checkout</button>
          </>
        ) : (
          <div className="cart-empty">Your cart is empty</div>
        )}
      </div>
    );
  };

  const links = (
    <>
      <li>Collections</li>
      <li>Men</li>
      <li>Women</li>
      <li>About</li>
      <li>Contact</li>
    </>
  );

  return (
    <div className="headerContainer">
      <div className="mobile_menu">
        {toggleMenu ? (
          <>
            <img
              src={close}
              alt="close icon"
              className="mobile_menu-icon"
              onClick={() => setToggleMenu(false)}
            />
          </>
        ) : (
          <>
            <img
              src={menu}
              alt="menu icon"
              className="mobile_menu-icon"
              onClick={() => setToggleMenu(true)}
            />
          </>
        )}
        {toggleMenu && (
          <div className="mobile_menu_container">
            <img
              src={close}
              alt="close icon"
              className="mobile_menu-icon"
              onClick={() => setToggleMenu(false)}
            />
            <div className="mobile_menu_container-links">{links}</div>
          </div>
        )}
      </div>
      <img src={logo} alt="company logo" className="logo" />
      <ul className="headerLinks">{links}</ul>
      <div className="cartAvatar">
        <div className="cart-container" onClick={activateCart}>
          <img
            src={cartImg}
            alt="shopping cart"
            className={`cartImg${activeCart ? "-active" : ""}`}
          />
          {Object.keys(cart).length > 0 && (
            <div className="cart-noti">{cart.quantity}</div>
          )}
        </div>
        <img
          src={avatar}
          alt="avatar"
          className={`avatar${activeAvi ? "-active" : ""}`}
          onClick={activateAvi}
        />
      </div>
      {renderMiniCart()}
    </div>
  );
};

export default Header;
