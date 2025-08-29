import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faHome,
  faUserGraduate,
  faChartBar,
  faBook,
  faInfoCircle,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css"; // ✅ CSS file import

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-about">
            <div className="footer-logo">
              <div className="footer-logo-img">PU</div>
              <span className="logo-text">Paradise University</span>
            </div>
            <p>
              Paradise University prepares students for global opportunities with strong academic and ethical foundations.
            </p>
            <p>
              Focused on innovation, research, and holistic growth since its establishment.
            </p>
          </div>

          {/* Quick Links */}
          <FooterLinks
            title="Quick Links"
            links={[
              { icon: faHome, text: "Home", href: "#home" },
              { icon: faChartBar, text: "Results", href: "#results" },
              { icon: faInfoCircle, text: "About", href: "#about" },
              { icon: faEnvelope, text: "Contact", href: "#contact" }
            ]}
          />

          {/* Contact Us */}
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>123 Education Street, Academic District, Paradise City</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <span>+92 321 1234567</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>results@paradiseuni.edu.pk</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faClock} />
                <span>Support Hours: 9:00 AM - 5:00 PM (Mon-Fri)</span>
              </li>
            </ul>

            <div className="social-links">
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
  &copy; 2025 Paradise University Pakistan. All rights reserved. | Designed with{" "}
  <FontAwesomeIcon icon={faHeart} className="heart" /> for quality education | Developed by{" "}
  <span className="dev-name">Naila Saleem</span>
</p>

        </div>
      </div>
    </footer>
  );
};

const FooterLinks = ({ title, links }) => {
  return (
    <div className="footer-links">
      <h3>{title}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>
              <FontAwesomeIcon icon={link.icon} />
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
