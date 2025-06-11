import React from 'react';
import { LanguageProvider } from '../context/LanguageContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import ConsultationCTA from '../components/ConsultationCTA';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <ConsultationCTA />
        <About />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
