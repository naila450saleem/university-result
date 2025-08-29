// components/About.js
import React from 'react';
import aboutImage from '../assets/5.jpg'; // correct import

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-title">
          <h2>About Our University</h2>
          <div className="divider"></div>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <img src={aboutImage} alt="PUP" /> {/* use imported image */}
          </div>
          
          <div className="about-text">
            <h3>Welcome to Paradise University Pakistan</h3>
            <p>Established in 1995, Paradise University Pakistan has been a beacon of quality education in our community. Our mission is to provide a nurturing environment that fosters academic excellence, character development, and lifelong learning.</p>
            <p>With state-of-the-art facilities and a dedicated faculty, we prepare students to meet the challenges of an ever-changing world while maintaining strong moral values and social responsibility.</p>
            
            <div className="features">
              <FeatureItem 
                icon="fas fa-flask"
                title="Modern Labs"
                description="Well-equipped science and computer laboratories"
              />
              <FeatureItem 
                icon="fas fa-book"
                title="Extensive Library"
                description="10,000+ books and digital resources"
              />
              <FeatureItem 
                icon="fas fa-running"
                title="Sports Facilities"
                description="Basketball, swimming, and more"
              />
              <FeatureItem 
                icon="fas fa-music"
                title="Arts Programs"
                description="Music, dance, and visual arts"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="feature-item">
      <div className="feature-icon">
        <i className={icon}></i>
      </div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default About;
