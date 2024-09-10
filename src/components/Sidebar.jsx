import React, { useState, useEffect } from 'react';
import './Sidebar.css';

const Sidebar = ({ onSelectCategory, activeCategory }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    return (
        <div className="sidebar">
            <h2>Categories</h2>
            <ul>
                <li 
                    className={activeCategory === null ? 'active' : ''} 
                    onClick={() => onSelectCategory(null)}
                >
                    All Products
                </li>
                {categories.map(category => (
                    <li 
                        key={category} 
                        className={activeCategory === category ? 'active' : ''}
                        onClick={() => onSelectCategory(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
