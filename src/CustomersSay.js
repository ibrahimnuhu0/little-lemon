import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CustomersSay() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const testimonials = [
    {
      name: "Aisha K.",
      photo: "/images/customer1.jpg",
      rating: 5,
      message: "Absolutely loved the Greek salad! Fresh, tasty, and delivered fast.",
    },
    {
      name: "Rahim S.",
      photo: "/images/customer22.jpg",
      rating: 4,
      message: "The bruschetta was amazing, crispy and flavorful. Will order again!",
    },
    {
      name: "Emily J.",
      photo: "/images/customer2.jpg",
      rating: 5,
      message: "Lemon dessert was divine! Reminded me of my childhood!",
    },
  ];

  return (
    <section className="customers-section">
      <h2 className="customers-heading">What Our Customers Say</h2>
      <div className="customers-grid">
        {testimonials.map((t, index) => (
          <div className="customer-card" data-aos="fade-up" key={index}>
            <img src={t.photo} alt={t.name} className="customer-photo" />
            <h3>{t.name}</h3>
            <p className="stars">{"⭐".repeat(t.rating)}</p>
            <p className="testimonial">{t.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
