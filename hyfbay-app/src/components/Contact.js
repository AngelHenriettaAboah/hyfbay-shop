import React, { useState } from "react";
import contactImage from "./flipart.jpg.webp";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Contact page still under construction");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div style={styles.contactContainer}>
      <h2 style={styles.heading}>Contact Us</h2>
      <div style={styles.contactInfo}>
        <img src={contactImage} alt="Contact" style={styles.contactImage} />
        <div>
          <p style={styles.contactDetails}>
            You can contact us at contact@example.com
          </p>
        </div>
      </div>
      <form style={styles.contactForm} onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
            required
          />
        </div>
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  contactContainer: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    color: "#333",
  },
  contactInfo: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  contactImage: {
    width: "100px",
    height: "100px",
    marginRight: "20px",
  },
  contactDetails: {
    fontSize: "16px",
    color: "#666",
  },
  contactForm: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    marginBottom: "5px",
    fontSize: "14px",
    color: "#333",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "100%",
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "100%",
    minHeight: "100px",
  },
  button: {
    padding: "10px 15px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#40280f",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Contact;
