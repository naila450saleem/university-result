// components/Header.js
import React from 'react';
import logo from '../assets/logo1.jpg'; // <-- import your logo from assets

const Header = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  return (
    <header>
      <div className="container header-container">
        <div className="logo">
  <img src={logo} alt="PUP Logo" className="logo-img" />
  <span className="logo-text desktop-text">Paradise University Pakistan</span>
  <span className="logo-text mobile-text">PUP</span>
</div>

        
        <nav>
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
          <ul className={isMobileMenuOpen ? "active" : ""}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#results">Results</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
