import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Banner from './Components/Banner';
import About from './Components/About';
import Services from './Components/Services';
import Page1 from './Components/Page1';
import Gallery from './Components/Gallery';
import Faqs from './Components/Faqs';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import './App.css';

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToBanner = () => {
    document.getElementById('banner').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <Banner />
      <About />
      <Services />
      <Page1 />
      <Gallery />
      <Faqs />
      <Blog />
      <Footer />

      {showScrollButton && (
        <button
          onClick={scrollToBanner}
          style={{
            position: 'fixed',
            bottom: '20px',
            width:'50px',
            height:'50px',
            right: '20px',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            zIndex: 1000,
            padding: '10px',
            borderRadius: '50%',
            backgroundColor: '#568673',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </>
  );
}

export default App;
