// src/components/FAQ/FAQ.jsx
import React from 'react';
import './FAQ.css'; // Import CSS for styling

const FAQ = () => {
  return (
    <div className="faq-section">
      <div className="faq-content">
        <div className="faq-left">
          <h2>Frequently Asked Questions</h2>
          <div className="search-box">
            <input type="text" placeholder="One question" />
            <button>Search</button>
          </div>
          <div className="image-group">
            {/* <img src="https://i.pinimg.com/564x/4f/dc/f6/4fdcf60a969161095fcb8e92596e8f11.jpg" />
             */}
          </div>
        </div>
        <img className="large-image" src="https://i.pinimg.com/564x/c7/d9/f0/c7d9f04f403b3b59126c9f8060061b5a.jpg" alt="Large FAQ Image" />
      </div>
    </div>
  );
};

export default FAQ;
