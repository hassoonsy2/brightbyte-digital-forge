
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'nl' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    
    // Hero
    heroTitle: 'Transforming Tomorrow with',
    heroSubtitle: 'Cutting-Edge Technology',
    heroDescription: 'Leading AI consulting, quantum computing, and software development solutions for the digital age.',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    
    // Services
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Comprehensive technology solutions for your business',
    
    aiConsulting: 'AI Consulting',
    aiConsultingDesc: 'Strategic AI implementation and consulting to transform your business processes.',
    
    quantumComputing: 'Quantum Computing',
    quantumComputingDesc: 'Next-generation quantum solutions for complex computational challenges.',
    
    softwareDev: 'Software Development',
    softwareDevDesc: 'Custom software solutions built with cutting-edge technologies.',
    
    automation: 'Automation',
    automationDesc: 'Streamline operations with intelligent automation systems.',
    
    dataMarketing: 'Data-Driven Marketing',
    dataMarketingDesc: 'Leverage data insights for targeted marketing campaigns.',
    
    socialMedia: 'Social Media Management',
    socialMediaDesc: 'Comprehensive social media strategy and management services.',
    
    machineLearning: 'Machine Learning',
    machineLearningDesc: 'Advanced ML solutions for predictive analytics and insights.',
    
    mobileDev: 'Mobile Development',
    mobileDevDesc: 'Native and cross-platform mobile applications.',
    
    seo: 'SEO Optimization',
    seoDesc: 'Search engine optimization to boost your online visibility.',
    
    webDev: 'Website Development',
    webDevDesc: 'Modern, responsive websites built for performance.',
    
    // About
    aboutTitle: 'About Bright-Byte',
    aboutDescription: 'We are a cutting-edge technology company specializing in AI, quantum computing, and comprehensive digital solutions. Our team of experts delivers innovative solutions that drive business transformation.',
    
    // Contact
    contactTitle: 'Get In Touch',
    contactDescription: 'Ready to transform your business with cutting-edge technology?',
    contactUs: 'Contact Us',
  },
  nl: {
    // Navigation
    home: 'Home',
    services: 'Diensten',
    about: 'Over Ons',
    contact: 'Contact',
    
    // Hero
    heroTitle: 'De Toekomst Transformeren met',
    heroSubtitle: 'Geavanceerde Technologie',
    heroDescription: 'Toonaangevende AI-consulting, quantum computing en softwareontwikkeling voor het digitale tijdperk.',
    getStarted: 'Begin Nu',
    learnMore: 'Meer Informatie',
    
    // Services
    servicesTitle: 'Onze Diensten',
    servicesSubtitle: 'Uitgebreide technologieoplossingen voor uw bedrijf',
    
    aiConsulting: 'AI Consulting',
    aiConsultingDesc: 'Strategische AI-implementatie en consulting om uw bedrijfsprocessen te transformeren.',
    
    quantumComputing: 'Quantum Computing',
    quantumComputingDesc: 'Next-generatie quantum oplossingen voor complexe computationele uitdagingen.',
    
    softwareDev: 'Software Ontwikkeling',
    softwareDevDesc: 'Op maat gemaakte softwareoplossingen gebouwd met geavanceerde technologieën.',
    
    automation: 'Automatisering',
    automationDesc: 'Stroomlijn operaties met intelligente automatiseringssystemen.',
    
    dataMarketing: 'Data-Gedreven Marketing',
    dataMarketingDesc: 'Benut data-inzichten voor gerichte marketingcampagnes.',
    
    socialMedia: 'Social Media Management',
    socialMediaDesc: 'Uitgebreide social media strategie en managementdiensten.',
    
    machineLearning: 'Machine Learning',
    machineLearningDesc: 'Geavanceerde ML-oplossingen voor voorspellende analyses en inzichten.',
    
    mobileDev: 'Mobiele Ontwikkeling',
    mobileDevDesc: 'Native en cross-platform mobiele applicaties.',
    
    seo: 'SEO Optimalisatie',
    seoDesc: 'Zoekmachine optimalisatie om uw online zichtbaarheid te vergroten.',
    
    webDev: 'Website Ontwikkeling',
    webDevDesc: 'Moderne, responsieve websites gebouwd voor prestaties.',
    
    // About
    aboutTitle: 'Over Bright-Byte',
    aboutDescription: 'Wij zijn een geavanceerd technologiebedrijf gespecialiseerd in AI, quantum computing en uitgebreide digitale oplossingen.ons team van experts levert innovatieve oplossingen die bedrijfstransformatie stimuleren.',
    
    // Contact
    contactTitle: 'Neem Contact Op',
    contactDescription: 'Klaar om uw bedrijf te transformeren met geavanceerde technologie?',
    contactUs: 'Contacteer Ons',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    services: 'الخدمات',
    about: 'عن الشركة',
    contact: 'اتصل بنا',
    
    // Hero
    heroTitle: 'تحويل الغد بواسطة',
    heroSubtitle: 'التكنولوجيا المتطورة',
    heroDescription: 'حلول رائدة في الذكاء الاصطناعي والحوسبة الكمية وتطوير البرمجيات للعصر الرقمي.',
    getStarted: 'ابدأ الآن',
    learnMore: 'اعرف المزيد',
    
    // Services
    servicesTitle: 'خدماتنا',
    servicesSubtitle: 'حلول تكنولوجية شاملة لأعمالك',
    
    aiConsulting: 'استشارات الذكاء الاصطناعي',
    aiConsultingDesc: 'تنفيذ استراتيجي للذكاء الاصطناعي واستشارات لتحويل عمليات عملك.',
    
    quantumComputing: 'الحوسبة الكمية',
    quantumComputingDesc: 'حلول كمية من الجيل القادم للتحديات الحاسوبية المعقدة.',
    
    softwareDev: 'تطوير البرمجيات',
    softwareDevDesc: 'حلول برمجية مخصصة مبنية بأحدث التقنيات.',
    
    automation: 'الأتمتة',
    automationDesc: 'تبسيط العمليات بأنظمة أتمتة ذكية.',
    
    dataMarketing: 'التسويق المدفوع بالبيانات',
    dataMarketingDesc: 'الاستفادة من رؤى البيانات لحملات التسويق المستهدفة.',
    
    socialMedia: 'إدارة وسائل التواصل الاجتماعي',
    socialMediaDesc: 'استراتيجية شاملة لوسائل التواصل الاجتماعي وخدمات الإدارة.',
    
    machineLearning: 'التعلم الآلي',
    machineLearningDesc: 'حلول متقدمة للتعلم الآلي للتحليلات التنبؤية والرؤى.',
    
    mobileDev: 'تطوير التطبيقات المحمولة',
    mobileDevDesc: 'تطبيقات محمولة أصلية ومتعددة المنصات.',
    
    seo: 'تحسين محركات البحث',
    seoDesc: 'تحسين محركات البحث لتعزيز ظهورك على الإنترنت.',
    
    webDev: 'تطوير المواقع الإلكترونية',
    webDevDesc: 'مواقع ويب حديثة ومتجاوبة مبنية للأداء.',
    
    // About
    aboutTitle: 'عن شركة برايت-بايت',
    aboutDescription: 'نحن شركة تكنولوجيا متطورة متخصصة في الذكاء الاصطناعي والحوسبة الكمية والحلول الرقمية الشاملة. يقدم فريق خبرائنا حلولاً مبتكرة تدفع التحول التجاري.',
    
    // Contact
    contactTitle: 'تواصل معنا',
    contactDescription: 'مستعد لتحويل عملك بالتكنولوجيا المتطورة؟',
    contactUs: 'اتصل بنا',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
