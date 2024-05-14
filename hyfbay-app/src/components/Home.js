import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import productsData from "./productsData";
import bannerImage from "./banner2.jpg.avif";
import sectionImage1 from "./lap4.jpg";
import sectionImage2 from "./Tshirt.jpg";
import productImage1 from "./sneakers1.jpg";
import productImage2 from "./tshirt3.jpg";
import productImage3 from "./sneaker 2.jpg";
import productImage4 from "./tshirt4.jpg";
import productImage5 from "./Tshirt2.jpg";
import productImage7 from "./sneakers1.jpg";
import productImage8 from "./sneaker 2.jpg";
import "./styles.css";

const Home = () => {
  // eslint-disable-next-line
  const [products] = useState(productsData);
  const navigate = useNavigate();

  const popularProducts = [
    { id: 1, name: "Premium Laptops", price: "19.99", image: sectionImage1 },
    { id: 2, name: "Manny T-shirt", price: "24.99", image: productImage2 },
    { id: 3, name: "Bone Sneakers", price: "29.99", image: productImage3 },
  ];

  const productCards = [
    { id: 4, name: "Sporty T-shirt", price: "39.99", image: productImage4 },
    { id: 5, name: "Comfy T-shirt", price: "14.99", image: productImage2 },
    { id: 6, name: "Casual T-shirt", price: "18.99", image: productImage5 },
    { id: 8, name: "Stitches Sneakers", price: "49.99", image: productImage7 },
    { id: 9, name: "Manny Sneakers", price: "59.99", image: productImage8 },
  ];

  const handleViewProductsClick = () => {
    navigate("/product/3");
  };

  const handleShopNowClick = () => {
    navigate("/shopping-cart");
  };

  const handleAddToCartClick = () => {
    navigate("/shopping-cart");
  };

  return (
    <div className="container">
      <h1 style={{ color: "black", textAlign: "center" }}>
        Welcome to our e-commerce platform!
      </h1>
      <img src={bannerImage} alt="Banner" className="banner" />

      <div className="section">
        <div className="popular-products">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-content">
          <h1>Discover New Arrivals</h1>
          <img src={productImage1} alt="Section 1" className="section-image" />
          <button className="section-button" onClick={handleViewProductsClick}>
            View Products
          </button>
        </div>
      </div>

      <div className="section">
        <div className="section-content-wrapper">
          <h4>Exclusive Offer</h4>
          <h2>Get 20% Off</h2>
          <img src={sectionImage2} alt="Section 2" className="section-image2" />
          <Link to={`/product/2`} className="btn btn-primary">
            <button className="section-button2" onClick={handleShopNowClick}>
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      <div className="section">
        <h2 style={{ textAlign: "center", color: "black" }}>Products</h2>
        <div className="product-grid">
          {productCards.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <Link to={`/cart`} className="btn btn-primary">
                <button
                  className="add-to-cart-button"
                  onClick={handleAddToCartClick}
                >
                  Add to Cart
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
