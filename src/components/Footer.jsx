import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>ZOEYLUX Expedition Safaris</h4>
          <p>Experience the wild beauty of Africa with our premium safari tours.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#safaris">Safaris</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: info@zoeylux.com</p>
          <p>Phone: +254 704 428 419 / +254 782 829 275</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 ZOEYLUX Expedition Safaris Limited. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
