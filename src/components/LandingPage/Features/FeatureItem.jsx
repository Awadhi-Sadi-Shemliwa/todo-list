import React from 'react';
import './FeatureItem.css';

const FeatureItem = ({ image, title, description, className }) => {
  return (
    <div className={`feature-item ${className}`}>
      <img src={image} alt={title} className="feature-image" />
      <div className="feature-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
