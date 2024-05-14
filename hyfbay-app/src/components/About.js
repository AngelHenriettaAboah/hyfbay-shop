import React from "react";
import aboutImage from "./banner6.jpg.avif";

const About = () => {
  return (
    <div className="about-container">
      <img src={aboutImage} alt="About" className="about-banner" />
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          At hyfBay shop, we specialize in crafting personalized experiences
          through our curated collection of customized t-shirts, premium
          laptops, and exclusive sneakers. Our custom t-shirts aren't just
          garments; they're canvases for your creativity. From bold graphics to
          intricate designs, our expert team ensures that every stitch reflects
          your unique style. In a world where technology is paramount, our
          premium laptops stand out. Sleek designs, top-of-the-line performance,
          and customizable features make them essential companions for the
          modern individual. Step into style with our exclusive sneaker
          collection. From classic kicks to cutting-edge designs, each pair is
          meticulously crafted to elevate your footwear game.
        </p>
      </div>
    </div>
  );
};

export default About;
