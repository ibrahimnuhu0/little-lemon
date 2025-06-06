import React from "react";


export default function About() {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About Little Lemon</h2>
          <p>
            Little Lemon is a family-owned Mediterranean restaurant located in the heart of Chicago. Founded by two passionate brothers, our mission is to bring the authentic flavors of the Mediterranean to your table, using only the freshest ingredients and traditional recipes with a modern twist.
          </p>
          <p>
            Whether you're here for a quick lunch or a cozy dinner, our warm atmosphere and delightful dishes promise an unforgettable dining experience.
          </p>
        </div>
        <div className="about-image">
          <img src="/images/Mario and Adrian A.jpg" alt="Chef at work" />
        </div>
      </div>
    </section>
  );
}
