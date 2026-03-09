import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Experience Africa's Wild Beauty</h1>
          <p>Discover unforgettable safari adventures with ZOEYLUX Expedition Safaris</p>
          <button className="cta-button">Book Your Adventure</button>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>🦁 Expert Guides</h3>
          <p>Our experienced safari guides have years of expertise in wildlife tracking and conservation.</p>
        </div>
        <div className="feature-card">
          <h3>🏕️ Luxury Camps</h3>
          <p>Stay in comfort at our premium eco-friendly safari camps with modern amenities.</p>
        </div>
        <div className="feature-card">
          <h3>🌍 Conservation</h3>
          <p>We're committed to wildlife conservation and sustainable tourism practices.</p>
        </div>
      </section>

      <section className="highlights">
        <h2>Why Choose ZOEYLUX?</h2>
        <ul className="highlights-list">
          <li>✓ Small group sizes for personalized experiences</li>
          <li>✓ All-inclusive safari packages</li>
          <li>✓ Photography-friendly tours</li>
          <li>✓ 24/7 customer support</li>
          <li>✓ Competitive pricing with premium service</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
