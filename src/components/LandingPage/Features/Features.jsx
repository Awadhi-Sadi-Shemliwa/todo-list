import React from 'react';
import './Features.css';
import TitleSection from './TitleSection';
import FeatureItem from './FeatureItem';
import weights from '/media/sda3/todo-list/src/assets/weights.png';
import gym from '/media/sda3/todo-list/src/assets/Gym-structure.png';
import callrem from '/media/sda3/todo-list/src/assets/calls and reminders.png';

const Features = () => {
  return (
    <section className="features-section">
      <TitleSection 
        backgroundImage={gym} 
        title="Eat healthy, sleep well, and stay organized."
      />
      <div className="feature-items">
        <FeatureItem 
          image={callrem}
          title="Calls and Reminders" 
          description="Set quick reminders for important calls and stay on top of communication with ease."
          className="feature-right"
        />
        <FeatureItem 
          image={weights}
          title="Your Health Partner" 
          description="Schedule workouts and connect with your favorite health apps."
          className="feature-left"
        />
      </div>
    </section>
  );
};

export default Features;
