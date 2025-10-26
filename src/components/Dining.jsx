import React from "react";
import "../components/Dining.css";

const Dining = () => {
  return (
    <section className="dining-section">
      <div className="dining-overlay">
        <div className="dining-content">
          <p className="booking-label">Booking</p>
          <h2>
            Private <br /> & Group <span>Dining</span>
          </h2>
          <p className="dining-text">
            At Cafe Italia, we specialize in creating memorable dining
            experiences, whether you’re seeking an intimate gathering or a grand
            celebration. Our private and group dining options are designed to
            meet your unique needs with personalized service, exceptional food,
            and a welcoming atmosphere.
          </p>
          <button className="book-btn">Book Now →</button>
        </div>
      </div>
    </section>
  );
};

export default Dining;
