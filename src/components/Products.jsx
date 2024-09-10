import React, { useState } from 'react';
import ProductDisplay from './ProductDisplay';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './Products.css';

function Products() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="products-page">
            <Navbar />
            <div className="main-content">
                <Sidebar onSelectCategory={handleCategorySelect} activeCategory={selectedCategory} />
                <div className="product-list-container">
                    <ProductDisplay category={selectedCategory} />
                </div>
            </div>
        </div>
    );
}

export default Products;
