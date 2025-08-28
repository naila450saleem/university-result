import React from 'react';
import heroImage from '../assets/hero.jpg'; // Image import

const Hero = () => {
  return (
    <section
      className="hero"
      id="home"
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: '80px',
        overflow: 'hidden',
      }}
    >
      {/* Background image with blur and brightness */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.7) blur(1px)',
          zIndex: 1,
        }}
      ></div>

      {/* Text content */}
      <div className="container hero-content" style={{ position: 'relative', zIndex: 2, color: 'black', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Excellence in Education Since 1995</h1>
        <p>
          Nurturing young minds to become responsible global citizens through quality education and holistic development.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="#results" className="btn">Check Results</a>
          <a href="#contact" className="btn btn-outline">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
