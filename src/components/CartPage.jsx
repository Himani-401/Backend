import React from 'react';
import './CartPage.css';
import { useCart } from '../context/CartContext';
import Navbar from './Navbar';

const CartPage = () => {
    const { cart, removeFromCart } = useCart(); // Use CartContext to get removeFromCart function

    const handleRemove = (productId) => {
        removeFromCart(productId);
    };

    return (
        <div className="cart-page">
            <Navbar/>
            <h1>Cart Items</h1>
            <div className="cart-container">
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cart.map(product => (
                        <div key={product.id} className="cart-item">
                            <div className="cart-item-image-container">
                                <img src={product.image} alt={product.title} className="cart-item-image" />
                            </div>
                            <h2>{product.title}</h2>
                            <p>Quantity: {product.quantity}</p>
                            <button 
                                className="cart-item-button"
                                onClick={() => handleRemove(product.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CartPage;
