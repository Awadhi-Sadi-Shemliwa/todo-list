import React from 'react';
import './Section.css';
import emevent from '/media/sda3/todo-list/src/assets/email-event.png';
import grocery from '/media/sda3/todo-list/src/assets/fruit-vegetable-juices-zlatko-duric-unsplash.jpg';

const Section = () => {
  return (
    <section className="info-section">
      <div className="image-text">
        <img src={grocery} alt="Groceries" className="info-image" />
        <div >
          <h2>Groceries</h2>
          <p>Never forget to buy milk again...</p>
        </div>
      </div>

      <div className="image-text">
        <img src={emevent} alt="Email and Event" className="info-image" />
        <div className="email-event">
        <h3>Email Management</h3>
        <p>Organize. Prioritize. Simplify...</p>
        <h3>Event Tracker</h3>
        <p>Never miss an important appointment...</p>
      </div>
      </div>

    </section>
  );
};

export default Section;
