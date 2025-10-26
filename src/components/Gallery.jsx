import React from "react";
import "../components/gallery.css";

const images = [
  "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
  "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg",
  "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg",
  "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
  "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg"
];

const Gallery = () => (
  <section className="gallery-section">
    <div className="gallery-header">
      <h2 className="gallery-title">Follow Us</h2>
      <button className="insta-btn">Check out our Instagram</button>
    </div>
    <div className="gallery-grid">
      {images.map((img, index) => (
        <img key={index} src={img} alt="gallery" className="gallery-img" />
      ))}
    </div>
  </section>
);

export default Gallery;
