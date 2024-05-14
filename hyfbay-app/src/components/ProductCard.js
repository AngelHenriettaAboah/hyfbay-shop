import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const ProductCard = ({ product }) => {
  // eslint-disable-next-line
  const { id, name, description, price, quantity, image } = product;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Quantity available: {quantity}</p>
      <Link to={`/product/${id}`} className="btn btn-primary">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
