import React, { useState } from 'react';
import { Home, Utensils, PhoneOutgoing, Menu, ChevronDown } from 'lucide-react';
import healthpartner from '/src/assets/health_partner.jpg';
import healthyrecipe from '/src/assets/healthyrecipes.png';
import mindfultechniques from '/src/assets/mindfultechniques.jpg';
import workoutroutine from '/src/assets/workout-routine.png';

import './HealthPartner.css';

const HealthPartner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container-wrapper">
      <button className="menu-toggle" onClick={toggleMenu}>
        <Menu size={24} />
      </button>
      <div className="health-partner-container">
        <main className="main-content">
          <h1>Health Partner Overview</h1>
          <div className="hero-image">
            <img src={healthpartner} alt='hero'/>
          </div>
          <h2>Your Health Journey</h2>
          <p>A vibrant page showcasing the user's health partner journey.</p>
          <div className="button-group">
            <button>Workout Plans</button>
            <button>Nutrition Tips</button>
            <button>Progress Tracker</button>
          </div>
        </main>
      </div>

      <div className="health-partner-container1">
        <main className="main-content1">
          <div className="search-bar">
            <input type="text" placeholder="Type your question here..." />
            <button className="ask-coach-btn">Ask Coach</button>
          </div>
          <div className="accordion">
            <div className="accordion-item">
              <div className="accordion-header">
                Fitness Tips
                <ChevronDown />
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-header">
                Nutrition Guidance
                <ChevronDown />
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-header">
                Wellness Strategies
                <ChevronDown />
              </div>
            </div>
          </div>
          <div className="info-cards1">
            <div className="info-card1">
              <img src={workoutroutine} alt="Workout Routine" />
              <h3>Workout Routine</h3>
              <p>A personalized workout plan just for you!</p>
            </div>
            <div className="info-card1">
              <img src={healthyrecipe} alt="Healthy Recipes" />
              <h3>Healthy Recipes</h3>
              <p>Discover delicious and nutritious recipes.</p>
            </div>
            <div className="info-card1">
              <img src={mindfultechniques} alt="Mindfulness Techniques" />
              <h3>Mindfulness Techniques</h3>
              <p>Explore techniques for mental well-being.</p>
            </div>
          </div>
        </main>
      </div>

      <aside className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <li onClick={toggleMenu}><Home /> Home</li>
            <li onClick={toggleMenu}><Utensils /> Nutrition</li>
            <li onClick={toggleMenu}><PhoneOutgoing /> Call Outbound</li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default HealthPartner;