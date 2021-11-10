import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import ProductPage from "./components/ProductPage/ProductPage";
import Attribution from "./components/Attribution/Attribution";

const Product = {
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: 125.0,
};

const App = () => {
  const [cart, setCart] = useState({});
  console.log(cart);

  const addToCart = (product, qty) => {
    setCart({ ...product, quantity: qty });
  };

  const emptyCart = (product) => {
    console.log(product);
  };

  return (
    <div className="container">
      <Header emptyCart={emptyCart} />
      <ProductPage addToCart={addToCart} product={Product} />
      <Attribution />
    </div>
  );
};

export default App;
