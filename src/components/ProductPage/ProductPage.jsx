import React, { useState, useRef } from "react";
import "./ProductPage.scss";
import productImg from "../../assets/images/image-product-1.jpg";
import cart from "../../assets/images/icon-cart.svg";
import next from "../../assets/images/icon-next.svg";
import previous from "../../assets/images/icon-previous.svg";

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

  const nextSlide = () => {
    const imgLength = Object.keys(images).length / 2;
    let prod;

    if (active !== imgLength) {
      setActive(active + 1);
      prod = Object.keys(images).find(
        (image) => image.includes(active + 1) && !image.includes("thumbnail")
      );
      setActiveImg(images[prod].default);
    } else if (active === imgLength) {
      setActive(1);
      prod = Object.keys(images).find(
        (image) => image.includes(1) && !image.includes("thumbnail")
      );
      setActiveImg(images[prod].default);
    }
  };

  const prevSlide = () => {
    const imgLength = Object.keys(images).length / 2;
    let prod;

    if (active !== 1) {
      setActive(active - 1);
      prod = Object.keys(images).find(
        (image) => image.includes(active - 1) && !image.includes("thumbnail")
      );
      setActiveImg(images[prod].default);
    } else if (active === 1) {
      setActive(imgLength);
      prod = Object.keys(images).find(
        (image) => image.includes(imgLength) && !image.includes("thumbnail")
      );
      setActiveImg(images[prod].default);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(product, quantity);
    }
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
        <button className="photo-change-btn prev" onClick={prevSlide}>
          <img src={previous} alt="previous button" />
        </button>
        <img src={activeImg} alt="product" className="productImg" />
        <button className="photo-change-btn next" onClick={nextSlide}>
          <img src={next} alt="next button" />
        </button>
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
