import React, { createContext, useContext, useEffect, useState } from 'react';


const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // Retrieve cart items from local storage or initialize as an empty array
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Update local storage whenever the cart changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Add product to cart or increase quantity if already present
    const addToCart = (product) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                // If product already exists, increase quantity
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Otherwise, add new product with quantity 1
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    // Remove or decrease quantity of product from cart
    const removeFromCart = (productId) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === productId);
            if (existingProduct.quantity > 1) {
                // If quantity is more than 1, decrease the quantity
                return prevCart.map(item =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            } else {
                // If quantity is 1, remove the item
                return prevCart.filter(item => item.id !== productId);
            }
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use CartContext
export const useCart = () => useContext(CartContext);
