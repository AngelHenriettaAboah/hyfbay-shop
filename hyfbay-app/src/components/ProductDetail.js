import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "./productsData";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const productId = parseInt(id);
  const product = productsData.find((product) => product.id === productId);

  const [cart, setCart] = useState([]);

  const addToCart = () => {
    setCart([...cart, product]);
    navigate("/cart");
  };

  if (!product) {
    return <div className="container">Product not found.</div>;
  }

  return (
    <div className="container">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-detail">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Quantity available: {product.quantity}</p>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
