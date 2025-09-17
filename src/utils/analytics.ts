// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const GA_TRACKING_ID = 'G-0GK1C4LD51'; // Bright-Byte Google Analytics 4 tracking ID

// Initialize Google Analytics
export const initGA = () => {
  // Check if user has accepted cookies
  const cookieConsent = localStorage.getItem('cookieConsent');
  if (cookieConsent === 'accepted') {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
      anonymize_ip: true, // GDPR compliance
      allow_google_signals: false, // Disable Google signals for privacy
    });
  }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (window.gtag && localStorage.getItem('cookieConsent') === 'accepted') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: title || document.title,
    });
  }
};

// Track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (window.gtag && localStorage.getItem('cookieConsent') === 'accepted') {
    window.gtag('event', eventName, parameters);
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', {
    form_name: formName,
    event_category: 'engagement',
    event_label: formName,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location || 'unknown',
    event_category: 'engagement',
    event_label: buttonName,
  });
};

// Track portfolio project views
export const trackProjectView = (projectName: string) => {
  trackEvent('project_view', {
    project_name: projectName,
    event_category: 'portfolio',
    event_label: projectName,
  });
};

// Track service page views
export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', {
    service_name: serviceName,
    event_category: 'services',
    event_label: serviceName,
  });
};

// Track language changes
export const trackLanguageChange = (language: string) => {
  trackEvent('language_change', {
    language: language,
    event_category: 'user_preference',
    event_label: language,
  });
};

// Track consultation requests
export const trackConsultationRequest = () => {
  trackEvent('consultation_request', {
    event_category: 'lead_generation',
    event_label: 'consultation_request',
  });
};

// Track contact form submissions
export const trackContactFormSubmission = () => {
  trackEvent('contact_form_submit', {
    event_category: 'lead_generation',
    event_label: 'contact_form',
  });
};
