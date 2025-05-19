import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Download from './components/Download';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from'./components/Contact';
function App() {
  return (
    <>
    <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Download />
      <Contact />
      <Footer />
    </>
  );
}

export default App;