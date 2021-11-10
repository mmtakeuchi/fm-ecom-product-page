import React, { useState } from "react";
import "./ProductPage.scss";
import product from "../../assets/images/image-product-1.jpg";
import cart from "../../assets/images/icon-cart.svg";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(0);
  console.log(quantity);

  const handleClick = (e) => {
    if (e.target.textContent === "+") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="productContainer">
      <div className="productImgContainer">
        <img src={product} alt="product" className="productImg" />
      </div>
      <div className="productDetails">
        <p className="productTitle">{"Sneaker Company".toUpperCase()}</p>
        <h1 className="productName">Fall Limited Edition Sneakers</h1>
        <p className="productDescription">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="productPrice">
          <p className="finalPrice">
            $125.00 <span className="discountPercent">50%</span>
          </p>
          <p className="originalPrice">$250.00</p>
        </div>
        <div className="productBtns">
          <div className="productQtyBtns">
            <button onClick={handleClick}>-</button>
            <span className="quantity">{quantity}</span>
            <button onClick={handleClick}>+</button>
          </div>
          <button className="addProductBtn">
            <img src={cart} alt="shopping cart" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
