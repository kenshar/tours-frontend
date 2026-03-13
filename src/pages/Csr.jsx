import '../styles/Csr.css';

export default function Csr() {
  return (
    <div className="csr-container">
      {/* Social Responsibility Section */}
      <section className="csr-hero">
        <div className="csr-hero-content">
          <h1>Social Responsibility / Impact</h1>
          <p>
            We support community-based tourism, donate a portion of our proceeds to children's 
            education projects in Ewaso Kedong, and promote environmental conservation through 
            tree planting and awareness campaigns.
          </p>
        </div>
        <div className="csr-hero-image">
          <div className="image-placeholder-hero"></div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="key-achievements">
        <div className="achievements-content">
          <h2>Key Achievements</h2>
          <ul className="achievements-list">
            <li>Rated Top 10 Boutique Safari Companies in Kenya (2023)</li>
            <li>Partnered with 15 international travel agencies.</li>
            <li>
              Hosted over 5,000 satisfied clients <span className="highlight">(Including OCMIC America Delegates, Cypriot and Greek Volunteer Doctors, Romanian Delegates, African Orthodox Youths, Kimende Mission Hospital Doctors, etc.)</span>
            </li>
            <li>Built strong community ties in the Maasai Land</li>
          </ul>
        </div>
        <div className="achievements-image">
          <div className="image-placeholder-achievements"></div>
        </div>
      </section>

      {/* Impact Details Section */}
      <section className="impact-details">
        <div className="impact-grid">
          <div className="impact-card">
            <h3>Education Support</h3>
            <p>
              We contribute a portion of our proceeds to children's education projects 
              in Ewaso Kedong, helping build a brighter future for local communities.
            </p>
          </div>
          <div className="impact-card">
            <h3>Environmental Conservation</h3>
            <p>
              Through tree planting initiatives and awareness campaigns, we promote 
              sustainable practices and environmental protection.
            </p>
          </div>
          <div className="impact-card">
            <h3>Community Tourism</h3>
            <p>
              We support community-based tourism that benefits local Maasai communities, 
              preserving their culture while providing economic opportunities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}