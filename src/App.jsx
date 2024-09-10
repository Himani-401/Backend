import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import AboutPage from './components/AboutPage';
import Products from './components/Products';
import ContactPage from './components/ContactPage';

import CartPage from './components/CartPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ThriftStorePage from './components/ThriftStorePage';
import './index.css'; 
import ProfilePage from './components/ProfilePage';
import ReviewsPage from './components/ReviewsPage';

function App() {
  return (
    <>
      <Navbar /> 
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/thrift" element={<ThriftStorePage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/review" element={<ReviewsPage/>} />
           
        </Routes>
      </main>
    </>
  );
}

export default App;
