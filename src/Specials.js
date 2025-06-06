function Specials() {
  return (
    <section className="specials-section">
      <div className="specials-header">
        <h2>Our  Specials!</h2>
        <button className="menu-btn">Online Menu</button>
      </div>
      <div className="specials-grid">
        <div className="special-card">
          <img src="/images/greek salad.jpg" alt="Greek Salad" />
          <div className="special-content">
            <div className="special-title-price">
              <h3>Greek Salad</h3>
              <span className="price">$15.99</span>
            </div>
            <p>
              The famous Greek salad of crispy lettuce, peppers, olives and our Chicago-style feta cheese, topped with crunchy garlic and rosemary croutons.
            </p>
            <button className="order-btn">Order a delivery</button>
          </div>
        </div>

        <div className="special-card">
          <img src="/images/bruchetta.svg" alt="Bruschetta" />
          <div className="special-content">
            <div className="special-title-price">
              <h3>Bruschetta</h3>
              <span className="price">$5.99</span>
            </div>
            <p>
             The classic Bruschetta of grilled artisan bread, gently rubbed with fresh garlic and lightly seasoned with sea salt and extra virgin olive oil, topped with a hint of herbs..
            </p>
            <button className="order-btn">Order a delivery</button>
          </div>
        </div>

        <div className="special-card">
          <img src="/images/lemon dessert.jpg" alt="Lemon Dessert" />
          <div className="special-content">
            <div className="special-title-price">
              <h3>Lemon Dessert</h3>
              <span className="price">$6.99</span>
            </div>
            <p>
              A timeless dish from grandma’s treasured recipe book, made with carefully sourced ingredients that are as authentic and flavorful as anyone could possibly imagine.
            </p>
            <button className="order-btn">Order a delivery</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specials;
