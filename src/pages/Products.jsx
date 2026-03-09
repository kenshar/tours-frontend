import '../styles/Products.css';

const Products = () => {
  const services = [
    {
      id: 1,
      category: 'Wildlife Safaris',
      icon: '🦁',
      description: 'Explore Africa\'s diverse wildlife across multiple countries',
      items: ['Kenya', 'Tanzania', 'Uganda']
    },
    {
      id: 2,
      category: 'Beach Holidays',
      icon: '🏖️',
      description: 'Relax on pristine African beaches',
      items: ['Diani', 'Zanzibar', 'Lamu']
    },
    {
      id: 3,
      category: 'Cultural Tours',
      icon: '🎭',
      description: 'Experience authentic African cultures and traditions',
      items: ['Maasai', 'Turkana', 'Swahili Coast']
    },
    {
      id: 4,
      category: 'Bird Watching Expeditions',
      icon: '🦅',
      description: 'Spot rare and exotic bird species in their natural habitat',
      items: []
    },
    {
      id: 5,
      category: 'Educational & Mission Trips',
      icon: '📚',
      description: 'Combine learning and community service with adventure',
      items: []
    },
    {
      id: 6,
      category: 'VIP & Private Tours',
      icon: '👑',
      description: 'Exclusive, personalized experiences for discerning travelers',
      items: []
    },
    {
      id: 7,
      category: 'Transport & Airport Transfers',
      icon: '🚗',
      description: 'Reliable ground transportation and airport logistics',
      items: []
    },
    {
      id: 8,
      category: 'Car Hire Services',
      icon: '🚙',
      description: 'Self-drive options with vehicle rentals',
      items: []
    },
    {
      id: 9,
      category: 'Day Trips & Camping',
      icon: '⛺',
      description: 'Short adventures and overnight camping experiences',
      items: []
    },
    {
      id: 10,
      category: 'Hotel Bookings & Reservations',
      icon: '🏨',
      description: 'Exclusive partnerships with premium accommodations',
      items: []
    },
    {
      id: 11,
      category: 'Meet & Assist Services',
      icon: '🤝',
      description: 'Airport welcome, visa assistance, and travel support',
      items: []
    }
  ];

  return (
    <div className="products">
      <section className="services-intro">
        <h2>What We Offer</h2>
        <p>
          ZOEYLUX Expedition Safaris provides a complete range of travel services tailored 
          to meet diverse customer needs. From thrilling wildlife safaris to serene beach getaways, 
          cultural immersion, and premium hospitality services.
        </p>
      </section>

      <section className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.category}</h3>
            <p className="service-description">{service.description}</p>
            {service.items.length > 0 && (
              <div className="service-items">
                {service.items.map((item, idx) => (
                  <span key={idx} className="service-item">{item}</span>
                ))}
              </div>
            )}
            <button className="enquire-btn">Enquire Now</button>
          </div>
        ))}
      </section>

      <section className="services-cta">
        <h2>Need a Custom Package?</h2>
        <p>Our expert team can design bespoke travel experiences tailored to your preferences</p>
        <button className="contact-btn">Get in Touch</button>
      </section>
    </div>
  );
};

export default Products;
