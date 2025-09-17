import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackLanguageChange } from '../utils/analytics';
import { useLanguage } from '../context/LanguageContext';

export const useAnalytics = () => {
  const location = useLocation();
  const { language } = useLanguage();

  // Track page views on route changes
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  // Track language changes
  useEffect(() => {
    trackLanguageChange(language);
  }, [language]);

  return {
    trackPageView,
    trackLanguageChange,
  };
};
