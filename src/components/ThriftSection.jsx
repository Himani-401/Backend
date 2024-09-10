import React from 'react';
import { Link } from 'react-router-dom';
import './ThriftSection.css'; 

const ThriftSection = () => {
  return (
    <div className="thrift-section">
      <div className="text-content">
        <h2>Explore Our Thrift Collection</h2>
        <p>Discover unique and vintage items at unbeatable prices. Our collection includes a wide range of products that cater to all tastes and budgets. Click below to dive into our thrift store and find your next favorite item.</p>
        <Link to="/Thrift" className="thrift-button">Shop Now</Link>
      </div>
      <img height="600vh" width="10vh" className="thrift-image" src="https://i.pinimg.com/736x/b7/90/8c/b7908c193a7b4b74b6ae6b184ae27805.jpg" alt="Thrift Collection"  />
    </div>
  );
};

export default ThriftSection;
