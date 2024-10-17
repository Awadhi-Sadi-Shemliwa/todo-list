import React from 'react';
import './TitleSection.css';

const TitleSection = ({ backgroundImage, title }) => {
  return (
    <div 
      className="title-section" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h2>{title}</h2>
    </div>
  );
};

export default TitleSection;
