import React from 'react';
import Navbar from './Navbar'; 
import ContentSection from './ContentSection';
import Brands from './Brands';
import Section2 from './Section2';
import FeaturedProducts from './FeaturedProducts';
import Section3 from './Section3';
import FAQ from './FAQ';
import NavigationLinks from './NavigationLinks';
import ThriftSection from './ThriftSection';
import Footer from './Footer';
const Home = () => {
  return (
    <div>
      <Navbar /> 
      <header className="home-header">
       
      </header>
      <main className="home-content">
        <ContentSection /> 
        <Brands/>
        <Section2/>
        <FeaturedProducts/>
        <Section3/>
        <FAQ/>
        <NavigationLinks/>
        <ThriftSection/>
        <Footer/>
      </main>
    </div>
  );
};
 
export default Home;