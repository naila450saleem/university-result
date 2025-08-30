import React, { useState } from "react";
import logo from "../../assets/logo1.jpg";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
import img7 from "../../assets/7.jpg";
import img8 from "../../assets/hero.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faHome,
  faChartBar,
  faInfoCircle,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
  faClock,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

const galleryImages = [logo, img1, img2, img3, img4, img5, img6, img7, img8];

const Footer = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = (img) => setSelectedImg(img);
  const closeModal = () => setSelectedImg(null);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-about">
            <div className="footer-logo">
              <div className="footer-logo-img">PUP</div>
              <span className="logo-text">Paradise University Pakistan</span>
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
                <span>98 Qarbath chowk bediyan road Lahore, Pakistan</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <span>+92 302 1419588</span>
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
          </div>

          {/* Gallery / Logo Column */}
          <div className="footer-gallery">
            <h3>Campus Gallery</h3>
            <div className="gallery-images">
  {galleryImages.map((img, index) => (
    <img
      key={index}
      src={img}
      alt={`Gallery ${index}`}
      onClick={() => openModal(img)}
      className="gallery-img"
    />
  ))}
</div>

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
            <FontAwesomeIcon icon={faHeart} className="heart" /> | Developed by{" "}
            <span className="dev-name">Naila Saleem</span>
          </p>
        </div>

        {/* Image Modal */}
        {selectedImg && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <FontAwesomeIcon
                icon={faTimes}
                className="modal-close"
                onClick={closeModal}
              />
              <img src={selectedImg} alt="Enlarged" />
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

const FooterLinks = ({ title, links }) => (
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

export default Footer;
