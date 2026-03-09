import { useState } from 'react';
import '../styles/Header.css';

const Header = ({ onNavigate }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/logo.png" alt="ZOEYLUX Expedition Safaris" className="logo-img" />
        </div>
        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => handleNavClick('home')} className="nav-link">Home</button>
          <button onClick={() => handleNavClick('safaris')} className="nav-link">Safaris</button>
          <button onClick={() => handleNavClick('products')} className="nav-link">Products & Services</button>
          <button onClick={() => handleNavClick('about')} className="nav-link">About</button>
          <button onClick={() => handleNavClick('team')} className="nav-link">Team</button>
          <button onClick={() => handleNavClick('contact')} className="nav-link">Contact</button>
          <button onClick={() => handleNavClick('login')} className="nav-link login-btn">Login</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
