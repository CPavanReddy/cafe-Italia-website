
import React from "react";
import "../components/Special.css";

const specials = [
  {
    title: "Food",
    description:
      "Cafe Italia is born from a passion for bringing the finest cuisine to life. Every dish is a labor of love, crafted by our chefs with fresh ingredients.",
    img: "https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg",
  },
  {
    title: "Drinks",
    description:
      "From craft cocktails to fine wines, every drink at Cafe Italia is designed to elevate your dining experience.",
    img: "https://images.pexels.com/photos/1189261/pexels-photo-1189261.jpeg",
  },
  {
    title: "Atmosphere",
    description:
      "Enjoy a cozy, modern atmosphere that combines elegance and comfort — the perfect setting for every occasion.",
    img: "https://images.pexels.com/photos/1704261/pexels-photo-1704261.jpeg",
  },
];

const Special = () => {
  return (
    <section className="special-section">
      <p>We Offer</p>
      <h2>
        Unforgettable Dining <span>Experience</span>
      </h2>

      <div className="special-grid">
        {specials.map((item) => (
          <div key={item.title} className="special-card">
            <img src={item.img} alt={item.title} />
            <div className="special-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Special;
