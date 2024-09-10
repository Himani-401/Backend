import React, { useState } from 'react';
import './ThriftStorePage.css'; 
import Brands from './Brand1';
import Footer from './Footer';
import Brand1 from './Brand1';

const ThriftStorePage = () => {
  
   
  
    return (
        <>
            <div className="thrift-store">
                <main>
                    <section className="welcome-section">
                        <img 
                            src="https://img.freepik.com/premium-photo/bustling-thrift-store-interior-with-vintage-clothes-accessories_1235831-53216.jpg?size=626&ext=jpg&ga=GA1.1.808235247.1725279949&semt=ais_hybrid" 
                            alt="Welcome" 
                            className="welcome-image" 
                        />
                        <div className="blue">
                            <h2><b>Welcome to Our</b></h2> 
                            <h2>Thrift Store</h2>
                            <h2>Discover Unique</h2>
                            <p>Discover unique items at affordable prices.</p>
                            <button className="shop-now-button">Shop Now</button>
                        </div>
                    </section>

                    <section className="featured-products">
                        <h2>Featured Products</h2>
                        <div className="product-grid">
                            {[
                                { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgJ4jGbCbAXbnPJuLKSnsIg_hRO9ZB5tw1VQ&s', price: '$9.99' },
                                { src: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSCZKu0SJx47zRmqNiXrr6zuxu2IwJuziH5xJ-jhxnVLoMSFNdJfmLiUkg7B_shAU2wlbZkpiyFjN214ZKOco1dYuy9qdoA39ajY32ye4J2WL4wWdnz3zMKz6nwLV2MgEVEkLObpCaNZ9o&usqp=CAc', price: '$14.99' },
                                { src: 'https://images-na.ssl-images-amazon.com/images/I/41rJ-cXXsnL._SX240_QL100_AC_SCLZZZZZZZ_.jpg', price: '$7.99' },
                                { src: 'https://m.media-amazon.com/images/I/71O-AV89z5L._AC_SY200_.jpg', price: '$14.99' },
                                { src: 'https://m.media-amazon.com/images/I/91hkVz3NnAL._SX425_.jpg', price: '$14.99' }
                            ].map((product, index) => (
                                <div key={index} className="product-card">
                                    <img src={product.src} alt={`Product ${index + 1}`} />
                                    <p>{product.price}</p>
                                    <button className="cart-button">Add to Cart</button>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="image-text-section">
                        <div className="image-container">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8qDahsO8RmkK6dSiI0AD1LpFy2uQpxrgJ7A&s" alt="Image 1" className="image1" />
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfBTaR8B2VnV2g7GZc5Pk60zzJ1qYaXzh4hg&s" alt="Image 2" className="image2" />
                        </div>
                        <div className="text-container">
                            <h2 className="main-heading">Thrifting: A Sustainable Choice</h2>
                            <p className="sub-text">Thrifting not only helps you find unique items but also contributes to a more sustainable future by reducing waste.</p>
                        </div>
                    </section>

                    <div className="grey">
                       <Brand1/>
                    </div>

                    <section className="additional-info">
                        <h2>Discover the Thrift Store Difference</h2>
                    </section>

                    <div className="flex">
                        <div className="image-text-pair">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn2VZxU3ulA7LI_t_NqJqomMdao7hLMuPKEw&s" alt="Vintage Vibes" className="pair-image" />
                            <div className="pair-text">
                                <p><b>Vintage Vibes</b></p>
                                <p>Timeless Classics, Reborn</p>
                            </div>
                        </div>
                        <div className="image-text-pair">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi1gjxS7gh6pmY_lHKdcYzn4R4iYlmZoYPTg&s" alt="Thrifting Made Easy" className="pair-image" />
                            <div className="pair-text">
                                <p><b>Thrifting Made Easy</b></p>
                                <p>Sustainable Style, Rediscovered</p>
                            </div>
                        </div>
                    </div>

                    <section className="image-text-section">
                        <div className="text-container">
                            <h2>Sustainable Shopping</h2>
                            <p className="sub-text">Find unique treasures, reduce waste</p>
                            <p className="sub-text2">Embrace the thrift lifestyle</p>
                            <p className="sub-text2">Thrifting is more than just shopping – it's a way to create a personalized wardrobe that reflects your style and values.</p>
                            <p className="sub-text">At our Thrift store, we believe that every item has the potential to be someone's new favorite.</p>
                            <p className="sub-text2">Shop Sustainably</p>
                        </div>
                        <div className="image-contain">
                            <img src="https://i.pinimg.com/564x/f5/3f/a3/f53fa30d616fc43a13e6a24e6deea366.jpg" alt="Sustainable Shopping" className="image1" />
                        </div>
                    </section>
                </main>

                <Footer/>
            </div>
        </>
    );
};

export default ThriftStorePage;
