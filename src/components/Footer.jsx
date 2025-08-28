import React from "react";
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

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={footerContainerStyle}>
          {/* About Section */}
          <div style={footerAboutStyle}>
            <div style={footerLogoStyle}>
              <div style={footerLogoImgStyle}>PU</div>
              <span style={logoTextStyle}>Paradise University</span>
            </div>
            <p style={paragraphStyle}>
              Paradise University prepares students for global opportunities with strong academic and ethical foundations.
            </p>
            <p style={paragraphStyle}>
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
          <div style={footerContactStyle}>
            <h3 style={headingStyle}>Contact Us</h3>
            <ul style={contactListStyle}>
              <li style={contactItemStyle}>
                <FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle} />
                <span style={contactTextStyle}>123 Education Street, Academic District, Paradise City</span>
              </li>
              <li style={contactItemStyle}>
                <FontAwesomeIcon icon={faPhone} style={iconStyle} />
                <span style={contactTextStyle}>+92 321 1234567</span>
              </li>
              <li style={contactItemStyle}>
                <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
                <span style={contactTextStyle}>results@paradiseuni.edu.pk</span>
              </li>
              <li style={contactItemStyle}>
                <FontAwesomeIcon icon={faClock} style={iconStyle} />
                <span style={contactTextStyle}>Support Hours: 9:00 AM - 5:00 PM (Mon-Fri)</span>
              </li>
            </ul>
            
            <div style={socialLinksStyle}>
              <a href="#" style={socialLinkStyle}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" style={socialLinkStyle}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" style={socialLinkStyle}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" style={socialLinkStyle}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div style={footerBottomStyle}>
          <p style={footerBottomTextStyle}>
            &copy; 2023 Paradise University Pakistan. All rights reserved. | Designed with <FontAwesomeIcon icon={faHeart} style={{color: '#ff6b6b'}} /> for quality education
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLinks = ({ title, links }) => {
  return (
    <div style={footerLinksStyle}>
      <h3 style={headingStyle}>{title}</h3>
      <ul style={linksListStyle}>
        {links.map((link, index) => (
          <li key={index} style={linkItemStyle}>
            <a href={link.href} style={linkStyle}>
              <FontAwesomeIcon icon={link.icon} style={linkIconStyle} />
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Styles
const footerStyle = {
  background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
  color: '#fff',
  padding: '4rem 0 1.5rem',
  marginTop: 'auto',
  borderTop: '4px solid #4299e1',
  boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.1)'
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 1.5rem'
};

const footerContainerStyle = {
  display: 'grid',
  gridTemplateColumns: '1.2fr 1fr 1fr', // ✅ About section thoda zyada space lega
  gap: '3.5rem', // ✅ yahan se gap adjust hoga (kam/zyada kar sakte ho)
  marginBottom: '2.5rem'
};

const footerAboutStyle = {};
const footerLogoStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  marginBottom: '1.25rem'
};

const footerLogoImgStyle = {
  width: '45px',
  height: '45px',
  background: 'linear-gradient(135deg, #4299e1 0%, #3182ce 100%)',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '1.25rem',
  boxShadow: '0 4px 6px rgba(66, 153, 225, 0.3)'
};

const logoTextStyle = {
  fontSize: '1.5rem',
  fontWeight: '700',
  background: 'linear-gradient(to right, #fff, #bee3f8)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
};

const paragraphStyle = {
  marginBottom: '1.5rem',
  opacity: '0.85',
  lineHeight: '1.6',
  fontSize: '0.95rem'
};

const footerLinksStyle = {};

const headingStyle = {
  fontSize: '1.25rem',
  marginBottom: '1.5rem',
  position: 'relative',
  paddingBottom: '0.75rem',
  fontWeight: '600'
};

const linksListStyle = {
  listStyle: 'none',
  padding: '0',
  margin: '0'
};

const linkItemStyle = {
  marginBottom: '0.85rem',
  transition: 'transform 0.2s ease'
};

const linkStyle = {
  color: '#cbd5e0',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  fontSize: '0.95rem'
};

const linkIconStyle = {
  width: '16px',
  color: '#4299e1'
};

const footerContactStyle = {};

const contactListStyle = {
  listStyle: 'none',
  padding: '0',
  margin: '0'
};

const contactItemStyle = {
  marginBottom: '1.25rem',
  display: 'flex',
  alignItems: 'center', // ✅ ab icon or text same line me hoga
  gap: '0.75rem'
};

const iconStyle = {
  color: '#4299e1',
  fontSize: '1.1rem',
  flexShrink: '0'
};

const contactTextStyle = {
  opacity: '0.85',
  lineHeight: '1.5',
  fontSize: '0.95rem'
};

const socialLinksStyle = {
  display: 'flex',
  gap: '1rem',
  marginTop: '1.5rem'
};

const socialLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '42px',
  height: '42px',
  background: 'rgba(255, 255, 255, 0.08)',
  borderRadius: '50%',
  color: 'white',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  border: '1px solid rgba(255, 255, 255, 0.1)'
};

const footerBottomStyle = {
  textAlign: 'center',
  paddingTop: '1.5rem',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)'
};

const footerBottomTextStyle = {
  fontSize: '0.9rem',
  opacity: '0.8'
};

export default Footer;
