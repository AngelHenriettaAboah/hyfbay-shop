import React, { useState } from "react";
import "./styles.css";

const ShoppingCart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Laptop",
      description: "Powerful laptop for all your needs",
      category: "Electronics",
      price: 999,
      quantity: 5,
      colors: ["black", "white", "green"],
      selectedColor: "black",
    },
    {
      id: 2,
      name: "T-shirt",
      description: "Comfortable cotton t-shirt",
      category: "Clothing",
      price: 20,
      quantity: 10,
      sizes: ["XS", "S", "M", "L", "XL"],
      selectedSize: "M",
      colors: ["brown", "green", "black", "white"],
      selectedColor: "black",
    },
    {
      id: 3,
      name: "Sneakers",
      description: "Stylish sneakers for everyday wear",
      category: "Footwear",
      price: 350,
      quantity: 20,
      sizes: [34, 36, 38, 39, 40, 42, 44],
      selectedSize: 40,
      colors: ["white", "rainbow-palette"],
      selectedColor: "white",
    },
  ]);

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const updateSize = (itemId, newSize) => {
    setCart(
      cart.map((item) =>
        item.id === itemId ? { ...item, selectedSize: newSize } : item
      )
    );
  };

  const updateColor = (itemId, newColor) => {
    setCart(
      cart.map((item) =>
        item.id === itemId ? { ...item, selectedColor: newColor } : item
      )
    );
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Checkout still under construction");
  };

  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Size</th>
                <th>Color</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                    />
                  </td>
                  <td>
                    {item.sizes ? (
                      <select
                        value={item.selectedSize}
                        onChange={(e) => updateSize(item.id, e.target.value)}
                      >
                        {item.sizes.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td>
                    {item.colors ? (
                      <select
                        value={item.selectedColor}
                        onChange={(e) => updateColor(item.id, e.target.value)}
                      >
                        {item.colors.map((color) => (
                          <option key={color} value={color}>
                            {color}
                          </option>
                        ))}
                      </select>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <button onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Total: ${totalPrice}</p>
          <button className="btn btn-primary" onClick={handleCheckout}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
