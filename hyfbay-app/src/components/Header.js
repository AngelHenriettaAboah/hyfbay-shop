import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import cartIcon from "./cart.png";

const Header = ({ itemCount }) => {
  return (
    <div className="header">
      <h1>hyfBay Shop</h1>
      <nav className="nav-link">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">
              <img src={cartIcon} alt="Cart" className="cart-icon" />
              {itemCount > 0 && (
                <span className="item-count">{itemCount}</span>
              )}{" "}
              {/* Show item count if greater than 0 */}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
