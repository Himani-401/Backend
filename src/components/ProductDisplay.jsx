import React, { useEffect, useRef, useState } from 'react';
import './ProductDisplay.css';
import { useCart } from '../context/CartContext';

const ProductDisplay = ({ category }) => {
    const [products, setProducts] = useState([]);
    const [isScrolling, setIsScrolling] = useState(false);
    const containerRef = useRef(null);
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const url = category ? `https://fakestoreapi.com/products/category/${category}` : 'https://fakestoreapi.com/products';
                console.log('Fetching URL:', url); 
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Fetched Products:', data); 
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [category]);

    useEffect(() => {
        let intervalId;
        if (isScrolling && containerRef.current) {
            const scrollAmount = 2;
            const scrollInterval = 20;

            intervalId = setInterval(() => {
                containerRef.current.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth',
                });
            }, scrollInterval);

            const checkScrollEnd = () => {
                if (containerRef.current.scrollLeft + containerRef.current.clientWidth >= containerRef.current.scrollWidth) {
                    clearInterval(intervalId);
                    setIsScrolling(false);
                }
            };

            containerRef.current.addEventListener('scroll', checkScrollEnd);

            return () => {
                clearInterval(intervalId);
                containerRef.current.removeEventListener('scroll', checkScrollEnd);
            };
        }
    }, [isScrolling]);

    const handleAutoScroll = () => {
        setIsScrolling(!isScrolling);
    };

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    return (
        <div className="product-display">
            <button onClick={handleAutoScroll} className="auto-scroll-btn">
                {isScrolling ? 'Stop Auto Scroll' : 'Start Auto Scroll'}
            </button>
            <div ref={containerRef} className="product-container">
                {products.length > 0 ? (
                    products.map(product => (
                        <div key={product.id} className="product-item">
                            <div className="product-image-container">
                                <img src={product.image} alt={product.title} className="product-image" />
                            </div>
                            <h3>{product.title}</h3>
                            <p className="product-description">{product.description}</p>
                            <button 
                                className="button-29" 
                                onClick={() => handleAddToCart(product)}
                            >
                                Add to Cart
                            </button>
                            <button className="button-29">See More</button>
                        </div>
                    ))
                ) : (
                    <p>No products available in this category.</p>
                )}
            </div>
        </div>
    );
};

export default ProductDisplay;
