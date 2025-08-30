import React from 'react';
import aboutImage1 from '../../assets/3.jpg'; // Image 1
import aboutImage2 from '../../assets/6.jpg'; // Image 2 (dusra image)
import aboutImage3 from '../../assets/5.jpg'; // Image 3
import './About.css';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-title">
          <h2>About Our University</h2>
          <div className="divider"></div>
        </div>

        <div className="about-section">
          {/* Row 1 → Image Left, Text Right */}
          <div className="about-row">
            <div className="about-image">
              <img src={aboutImage1} alt="University Campus" />
            </div>
            <div className="about-text">
              <h3>Welcome to Paradise University Pakistan</h3>
              <p>
                Established in 1995, Paradise University Pakistan has been a beacon of
                quality education in our community. Our mission is to provide a nurturing
                environment that fosters academic excellence, character development, and
                lifelong learning.
              </p>
              <p>Over the years, we have empowered thousands of students with knowledge, 
                values, and confidence to achieve their dreams. With a strong commitment 
                to innovation and inclusivity, Paradise University continues to shape future leaders 
                for a better tomorrow.</p>
            </div>
          </div>

          {/* Row 2 → Text Left, Image Right */}
          <div className="about-row reverse">
            <div className="about-image">
              <img src={aboutImage2} alt="Students" />
            </div>
            <div className="about-text">
              <h3>Our Mission</h3>
              <p>
                With state-of-the-art facilities and a dedicated faculty, we prepare
                students to meet the challenges of an ever-changing world while
                maintaining strong moral values and social responsibility.
              </p>
              <p>We strive to inspire innovation, leadership, and a lifelong passion for learning in every student.</p>
            </div>
          </div>

          {/* Row 3 → Image Left, Text Right */}
          <div className="about-row">
            <div className="about-image">
              <img src={aboutImage3} alt="Library" />
            </div>
         <div className="about-text">
  <h3>Why Choose Us?</h3>
<ul className="why-choose-list">
  <li><strong>Modern Facilities</strong> – Well-equipped labs, a vast library, and advanced learning resources.</li>
  <li><strong>Holistic Development</strong> – Sports, arts, and cultural programs to nurture talent.</li>
  <li><strong>Career Support</strong> – Internships, career counseling, and strong industry partnerships.</li>
  <li><strong>Inclusive Environment</strong> – Safe, supportive, and inspiring campus life for all students.</li>
</ul>

</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
