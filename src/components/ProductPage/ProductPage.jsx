import React, { useState, useRef } from "react";
import "./ProductPage.scss";
import productImg from "../../assets/images/image-product-1.jpg";
import cart from "../../assets/images/icon-cart.svg";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const images = importAll(
  require.context("../../assets/images", false, /\.(jpe?g)$/)
);

const ProductPage = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(0);
  const [activeImg, setActiveImg] = useState(productImg);
  const [active, setActive] = useState(1);
  const imageRef = useRef(null);

  const handleClick = (e) => {
    if (e.target.textContent === "+") {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const setImage = (e) => {
    const prodId = e.target.dataset.id;

    const prodImg = Object.keys(images).find(
      (image) => image.includes(prodId) && !image.includes("thumbnail")
    );

    setActive(e.target.dataset.id);
    setActiveImg(images[prodImg].default);
  };

  const renderThumbnails = Object.keys(images)
    .filter((key) => key.includes("thumbnail"))
    .map((image, i) => (
      <li key={i} onClick={setImage}>
        <img
          src={images[image].default}
          alt={images[image]}
          className={`imageThumbnail${
            parseInt(active) === i + 1 ? "-active" : ""
          }`}
          data-id={i + 1}
          ref={imageRef}
        />
      </li>
    ));

  return (
    <div className="productContainer">
      <div className="productImgContainer">
        <img src={activeImg} alt="product" className="productImg" />
        <ul className="thumbnails">{renderThumbnails}</ul>
      </div>
      <div className="productDetails">
        <p className="productTitle">{"Sneaker Company".toUpperCase()}</p>
        <h1 className="productName">{product.name}</h1>
        <p className="productDescription">{product.description}</p>
        <div className="productPrice">
          <p className="finalPrice">
            {`$${parseFloat(product.price).toFixed(2)}`}
            <span className="discountPercent">50%</span>
          </p>
          <p className="originalPrice">$250.00</p>
        </div>
        <div className="productBtns">
          <div className="productQtyBtns">
            <button onClick={handleClick}>-</button>
            <span className="quantity">{quantity}</span>
            <button onClick={handleClick}>+</button>
          </div>
          <button className="addProductBtn" onClick={handleAddToCart}>
            <img src={cart} alt="shopping cart" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
