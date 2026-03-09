import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-content">
        <div className="about-section">
          <h2>About Us</h2>
          <p>
            ZoeyLux Expedition Safaris Ltd is a premier tours and travel company specializing in
            unique, eco-friendly, and culturally immersive safari experiences across East Africa. With a
            commitment to excellence and sustainable tourism, we craft journeys that connect our
            clients with nature, culture, and community in a responsible and inspiring way. We are
            passionate storytellers, cultural connectors, and guardians of East Africa's most
            extraordinary landscapes. Since our inception, we have combined local expertise with
            global standards to deliver authentic, sustainable journeys that create lasting memories
            and meaningful impact.
          </p>
        </div>

        <div className="about-section">
          <h2>Company History</h2>
          <p>
            Founded in 2020, ZoeyLux Expeditions started with a simple dream: to share the wonders
            of East Africa with the world. From humble beginnings in Nairobi, we have grown into a
            reputable name, serving clients from over 20 countries. Our journey is defined by
            memorable service, passion, professionalism, and purpose, guaranteeing our clients value
            for their money.
          </p>
        </div>
        <div className="mission-section">
          <h3>Mission</h3>
          <p>
            To provide exceptional safari and travel services that promote conservation,
            cultural appreciation, and customer satisfaction through integrity, innovation,
            and partnership.
          </p>
        </div>
        <div className="vision-section">
          <h4>Vision</h4>
          <p>
            To become Africa’s most trusted and inspiring safari brand by delivering
            transformative travel experiences and empowering local communities.
          </p>
        </div>
        <div className="values-section">
          <h5>Core Values</h5>
            <ol>
            <li>Integrity       – We do what is right, always.</li>
            <li>Customer Focus  – We put our clients at the heart of everything we do.</li>
            <li>Excellence      – We strive for the highest standards in service and experience.</li>
            <li>Innovation      – We embrace creativity and continuous improvement.</li>
            <li>Sustainability  – We are committed to responsible tourism and conservation.</li>
            <li>Collaboration   – We believe in the power of partnerships and teamwork.</li>
          </ol>
          
        </div>
      </section>
    </div>
  );
};

export default About;
