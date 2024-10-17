import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="date-badge">JUL<br />17</div>
      <h1>Your tasks. Organized like magic.</h1>
      <div className="buttons">
        {/* Link to SignUp Page */}
        <Link to="/signup">
          <button className="start-btn">Start Today</button>
        </Link>

        {/* Optional: Link for Learn More button */}
        <Link to="/todolist">
          <button className="learn-btn">Learn More</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
