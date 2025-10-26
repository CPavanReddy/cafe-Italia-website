import React from "react";
import "../components/Testmonial.css";

const testimonials = [
  {
    name: "Archie Mathew",
    review: "The food was absolutely wonderful, from preparation to presentation!",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    name: "Garcia Tom",
    review: "Loved the ambiance and the service. Authentic Italian flavors!",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
  {
    name: "Maya Silva",
    review: "A must-visit place for Italian cuisine lovers. Highly recommended!",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Hear Our Guests</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <img src={t.img} alt={t.name} className="testimonial-img" />
            <h3>{t.name}</h3>
            <p>{t.review}</p>
            <div className="stars">★★★★★</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
