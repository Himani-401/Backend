import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">ShopSpot</Link>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li>
            <Link to="thrift" className='navbar-link'>Thrift</Link>
          </li>
          <li>
            <Link to="/products" className="navbar-link">Products</Link>
          </li>
          <li>
            <Link to="/cart" className="navbar-link">Cart</Link>
          </li>
          <li>
            <Link to="/about" className="navbar-link">About</Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
          <li>
            <Link to="/login" className="navbar-link">Login</Link>
          </li>
          <li className="navbar-profile">
            <Link to="/profile" className="navbar-link">Profile</Link>
          </li>
          <li className="navbar-profile">
            <Link to="/review" className="navbar-link">Reviews</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
