import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import { LanguageProvider } from './context/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import SeoManager from './components/SeoManager';
import CookieConsent from './components/CookieConsent';
import Index from './pages/Index';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import PortfolioCategory from './pages/PortfolioCategory';
import BrightBytePrivacyPolicy from './pages/BrightBytePrivacyPolicy';
import BrightByteTermsOfUse from './pages/BrightByteTermsOfUse';
import FestiPrivacyPolicy from './pages/FestiPrivacyPolicy';
import FestiTermsOfUse from './pages/FestiTermsOfUse';
import NotFound from './pages/NotFound';
import { trackPageView } from './utils/analytics';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

function AppContent() {
  const location = useLocation();
  
  // Track page views
  React.useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);
  
  return (
    <>
      <SeoManager />
      <ScrollToTop />
      <CookieConsent />
      <Toaster 
        position="top-center" 
        toastOptions={{
          style: {
            background: '#0f172a',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff',
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/category/:category" element={<PortfolioCategory />} />
        <Route path="/portfolio/festi-festival-dating-app/terms-of-use" element={<FestiTermsOfUse />} />
        <Route path="/portfolio/festi-festival-dating-app/privacy-policy" element={<FestiPrivacyPolicy />} />
        <Route path="/portfolio/:slug" element={<ProjectDetail />} />
        <Route path="/privacy-policy" element={<BrightBytePrivacyPolicy />} />
        <Route path="/terms-of-use" element={<BrightByteTermsOfUse />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
