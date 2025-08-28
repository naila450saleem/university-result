import React from 'react';
import heroImage from '../assets/hero.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroImage})` }}
    >
      {/* Text content */}
      <div className=" hero-content">
        <h1>Excellence in Education <br/>Since 1995</h1>
        <p>
          Nurturing young minds to become responsible global citizens through quality <br/>education and holistic development.
        </p>
        <div className="hero-buttons">
          <a href="#results" className="btn">Check Results</a>
          <a href="#contact" className="btn btn-outline">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
