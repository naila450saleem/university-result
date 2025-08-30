// components/Contact.js
import React, { useState } from 'react';
import './Contact.css';
// Font Awesome React component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Required icons
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    // For this example, we'll just log it and show an alert
    console.log(formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <div className="divider"></div>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-card">
              <h3><i className="fas fa-map-marker-alt"></i> Our Address</h3>
              <p> 98 Qarbath chowk bediyan road Lahore, Pakistan</p>
            </div>
            
            <div className="contact-card">
  <h3><i className="fas fa-phone-alt"></i> Helpline (24/7)</h3>
  <p>+92 423 8595863 / 5 (Office)</p>
  <p>+92 311 4836256 (Principal) </p>
</div>

            
            <div className="contact-card">
              <h3><i className="fas fa-envelope"></i> Email</h3>
              <p>pakistanparadisuniversity@gmail.com</p>
              <p>pakistanparadisuniversity@gmail.com</p>
              
              <div className="social-icons">
  <a href="#" aria-label="Facebook">
    <FontAwesomeIcon icon={faFacebookF} />
  </a>
  <a href="#" aria-label="Twitter">
    <FontAwesomeIcon icon={faTwitter} />
  </a>
  <a href="#" aria-label="Instagram">
    <FontAwesomeIcon icon={faInstagram} />
  </a>
  <a href="#" aria-label="LinkedIn">
    <FontAwesomeIcon icon={faLinkedinIn} />
  </a>
</div>

            </div>
          </div>
          
          <div className="contact-form">
            <div className="contact-card">
              <h3><i className="fas fa-paper-plane"></i> Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    className="form-control" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="form-control" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    className="form-control" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    className="form-control" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn" style={{ width: '100%' }}>
                  <i className="fas fa-paper-plane" style={{ marginRight: '0.5rem' }}></i> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;