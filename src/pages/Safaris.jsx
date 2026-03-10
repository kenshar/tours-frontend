import '../styles/Safaris.css';

const Safaris = () => {
  const safariPackages = [
    {
      id: 1,
      name: 'Classic Kenya Safari',
      duration: '5 Days / 4 Nights',
      price: 'ksh. 2,499',
      highlights: ['Maasai Mara', 'Game drives', 'Big Five', 'Luxury lodging'],
      image: '🦁'
    },
    {
      id: 2,
      name: 'Tanzania Adventure',
      duration: '7 Days / 6 Nights',
      price: 'ksh. 3,299',
      highlights: ['Serengeti', 'Crater Tour', 'Hot air balloon', 'Photography'],
      image: '🦓'
    },
    {
      id: 3,
      name: 'Premium All-Inclusive',
      duration: '10 Days / 9 Nights',
      price: 'ksh. 5,499',
      highlights: ['Kenya & Tanzania', 'Premium camps', 'All meals', 'Private guide'],
      image: '🦒'
    },
    {
      id: 4,
      name: 'Botswana Delta',
      duration: '6 Days / 5 Nights',
      price: 'ksh. 3,899',
      highlights: ['Okavango Delta', 'Water safaris', 'Bird watching', 'Bush walks'],
      image: '🦏'
    }
  ];

  return (
    <div className="safaris">
      <section className="safaris-header">
        <h1>Our Safari Packages</h1>
        <p>Choose from our carefully curated safari experiences</p>
      </section>

      <section className="packages-grid">
        {safariPackages.map(pkg => (
          <div key={pkg.id} className="safari-card">
            <div className="safari-icon">{pkg.image}</div>
            <h3>{pkg.name}</h3>
            <p className="duration">{pkg.duration}</p>
            <div className="highlights">
              {pkg.highlights.map((highlight, idx) => (
                <span key={idx} className="highlight-tag">{highlight}</span>
              ))}
            </div>
            <p className="price">{pkg.price}</p>
            <button className="book-btn">Learn More</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Safaris;
