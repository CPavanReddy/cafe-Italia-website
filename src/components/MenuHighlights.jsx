
import React from "react";
import "../components/MenuHighlight.css";

const menuItems = [
  {
    name: "Adana Kebab",
    price: "€12",
    img: "https://images.pexels.com/photos/4106486/pexels-photo-4106486.jpeg",
    small: "https://images.pexels.com/photos/4106486/pexels-photo-4106486.jpeg?auto=compress&h=200",
  },
  {
    name: "Meze Platter",
    price: "€10",
    img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
    small: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&h=200",
  },
  {
    name: "Baklava",
    price: "€8",
    img: "https://images.pexels.com/photos/60616/baklava-dessert-turkish-greek-60616.jpeg",
    small: "https://images.pexels.com/photos/60616/baklava-dessert-turkish-greek-60616.jpeg?auto=compress&h=200",
  },
  {
    name: "Kebab Platter",
    price: "€15",
    img: "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg",
    small: "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&h=200",
  },
];

const MenuHighlights = () => {
  return (
    <section className="mh-section" id="menu">
      <h2 className="mh-title">Monthly <span>Highlights</span></h2>

      <div className="mh-grid">
        {menuItems.map((it) => (
          <article className="mh-card" key={it.name}>
            <img
              src={it.small}
              data-src={it.img}
              alt={it.name}
              className="mh-img lazy"
              loading="lazy"
              decoding="async"
            />
            <div className="mh-body">
              <h3>{it.name}</h3>
              <div className="mh-price">{it.price}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MenuHighlights;
