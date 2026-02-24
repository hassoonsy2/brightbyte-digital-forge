import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'sonner';
import { LanguageProvider } from './context/LanguageContext';
import ScrollToTop from './components/ScrollToTop';
import SeoManager from './components/SeoManager';
import CookieConsent from './components/CookieConsent';
import { trackPageView } from './utils/analytics';

const Index = lazy(() => import('./pages/Index'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const AIConsultingPage = lazy(() => import('./pages/services/AIConsultingPage'));
const SoftwareDevelopmentPage = lazy(() => import('./pages/services/SoftwareDevelopmentPage'));
const AutomationPage = lazy(() => import('./pages/services/AutomationPage'));
const MachineLearningPage = lazy(() => import('./pages/services/MachineLearningPage'));
const WebDevelopmentPage = lazy(() => import('./pages/services/WebDevelopmentPage'));
const MobileDevelopmentPage = lazy(() => import('./pages/services/MobileDevelopmentPage'));
const DataMarketingPage = lazy(() => import('./pages/services/DataMarketingPage'));
const SEOPage = lazy(() => import('./pages/services/SEOPage'));
const SocialMediaPage = lazy(() => import('./pages/services/SocialMediaPage'));
const DesignContentPage = lazy(() => import('./pages/services/DesignContentPage'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const PortfolioCategory = lazy(() => import('./pages/PortfolioCategory'));
const BrightBytePrivacyPolicy = lazy(() => import('./pages/BrightBytePrivacyPolicy'));
const BrightByteTermsOfUse = lazy(() => import('./pages/BrightByteTermsOfUse'));
const FestiPrivacyPolicy = lazy(() => import('./pages/FestiPrivacyPolicy'));
const FestiTermsOfUse = lazy(() => import('./pages/FestiTermsOfUse'));
const NotFound = lazy(() => import('./pages/NotFound'));

const RouteLoader = () => (
  <div className="min-h-screen bg-[#030308] flex items-center justify-center">
    <div className="w-10 h-10 rounded-full border-2 border-[#3b82f6]/30 border-t-[#3b82f6] animate-spin" />
  </div>
);

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
      <Suspense fallback={<RouteLoader />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ai-consulting" element={<AIConsultingPage />} />
          <Route path="/services/software-development" element={<SoftwareDevelopmentPage />} />
          <Route path="/services/automation" element={<AutomationPage />} />
          <Route path="/services/machine-learning" element={<MachineLearningPage />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/mobile-development" element={<MobileDevelopmentPage />} />
          <Route path="/services/data-marketing" element={<DataMarketingPage />} />
          <Route path="/services/seo" element={<SEOPage />} />
          <Route path="/services/social-media" element={<SocialMediaPage />} />
          <Route path="/services/design-content" element={<DesignContentPage />} />
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
      </Suspense>
    </>
  );
}

export default App;
