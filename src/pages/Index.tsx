import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ConsultationCTA from '../components/ConsultationCTA';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <ConsultationCTA />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
