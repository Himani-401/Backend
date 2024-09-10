// src/components/FeaturedProducts.jsx
import React from 'react';
import './FeaturedProducts.css'; // Import CSS for styling

const FeaturedProducts = () => {
  return (
    <div className="featured-products">
      <h2>Featured Products</h2>
      <div className="products-container">
        <div className="product-card1">
          <img src="https://i.pinimg.com/236x/a4/94/87/a4948712f65ed67e5108816ccbe263c0.jpg" alt="Featured Product 1" />
          <div className="product-info">
            <h3>Product 1</h3>
            <p>$19.99</p>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="product-card">
          <img src="https://i.pinimg.com/564x/24/22/32/24223258deb2711a6cfb6ffe2ba3b5e9.jpg" alt="Featured Product 2" />
          <div className="product-info">
            <h3>Product 2</h3>
            <p>$29.99</p>
            <button>Buy Now</button>
          </div>
        </div>
        <div className="product-card">
          <img src="https://i.pinimg.com/736x/49/18/a8/4918a8acab009e6ebb4505b872065145.jpg" alt="Featured Product 3" />
          <div className="product-info">
            <h3>Product 3</h3>
            <p>$39.99</p>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
