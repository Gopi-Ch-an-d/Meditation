import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DynamicGallery from './components/Gallery';
import WhyChooseSerenity from './components/Feature';
import TestimonialsSection from './components/Review';
import ScrollingShowcase from './components/Side';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <ScrollingShowcase/>
      <WhyChooseSerenity/>
      <DynamicGallery/>
      <Pricing />
      <TestimonialsSection/>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;