import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationLinks.css'; 

const NavigationLinks = () => {
  return (
    <div className="navigation-links">
      <div className="link-item">
        <Link to="/about">About Us</Link>
      </div>
      <div className="link-item">
        <Link to="/contact">Contact Us</Link>
      </div>
    </div>
  );
};

export default NavigationLinks;
