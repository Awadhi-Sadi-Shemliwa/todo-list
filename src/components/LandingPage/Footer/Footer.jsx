import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about">
          <h4>About</h4>
          <p>Our Vision</p>
          <p>Team</p>
          <p>Culture</p>
        </div>
        <div className="services">
          <h4>Services</h4>
          <p>Pricing</p>
          <p>Features</p>
          <p>Updates</p>
        </div>
        <div className="support">
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Contact</p>
          <p>Forum</p>
        </div>
      </div>
      <p className="copyright">© 2024</p>
    </footer>
  );
};

export default Footer;
