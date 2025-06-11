import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'nl' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isLoading: boolean;
}

const translations = {
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    
    // Hero
    heroTitle: 'Shaping Tomorrow with',
    heroSubtitle: 'Advanced Technology',
    heroDescription: 'Pioneering AI consulting, quantum computing, and software development to empower the digital future.',
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
    
    designContent: 'Design & Content Creation',
    designContentDesc: 'Creative design solutions and engaging content that captures your brand essence.',

    // Service Detail Page Content
    backToServices: 'Back to Services',
    getInTouch: 'Get In Touch',
    readyToStart: 'Ready to get started? Contact us for a free consultation.',

    // AI Consulting
    aiConsultingTitle: 'Transform Your Business with AI',
    aiConsultingIntro: 'Artificial Intelligence is no longer a futuristic concept—it\'s a present-day reality that\'s transforming industries worldwide. Our AI consulting services help you harness the power of machine learning, deep learning, and intelligent automation to drive innovation and competitive advantage.',
    aiSolutionsTitle: 'Our AI Solutions Include:',
    aiSolution1: 'Custom AI strategy development tailored to your business objectives',
    aiSolution2: 'Machine learning model development and deployment',
    aiSolution3: 'Natural Language Processing (NLP) solutions',
    aiSolution4: 'Computer Vision and image recognition systems',
    aiSolution5: 'Predictive analytics and forecasting models',
    aiSolution6: 'AI integration with existing business systems',
    aiSolution7: 'Staff training and AI literacy programs',
    whyChooseAiTitle: 'Why Choose Our AI Consulting?',
    aiExpertTeam: 'Expert Team',
    aiExpertTeamDesc: 'Our team consists of experienced AI researchers and practitioners with proven track records.',
    aiPracticalApproach: 'Practical Approach',
    aiPracticalApproachDesc: 'We focus on delivering practical, implementable AI solutions that provide real business value.',
    aiEndToEndSupport: 'End-to-End Support',
    aiEndToEndSupportDesc: 'From strategy to implementation and maintenance, we provide comprehensive AI consulting services.',
    aiIndustryExpertise: 'Industry Expertise',
    aiIndustryExpertiseDesc: 'We have experience across various industries including healthcare, finance, retail, and manufacturing.',
    aiClosing: 'Ready to unlock the potential of AI for your business? Let\'s discuss how we can help you implement cutting-edge AI solutions that drive growth and efficiency.',

    // Quantum Computing
    quantumTitle: 'Pioneering the Quantum Future',
    quantumIntro: 'Quantum computing represents the next frontier in computational power, offering unprecedented capabilities for solving complex problems that are intractable for classical computers. Our quantum computing services prepare your organization for the quantum advantage.',
    quantumServicesTitle: 'Our Quantum Services:',
    quantumService1: 'Quantum algorithm design and optimization',
    quantumService2: 'Quantum simulation and modeling',
    quantumService3: 'Hybrid classical-quantum system development',
    quantumService4: 'Quantum machine learning applications',
    quantumService5: 'Quantum cryptography and security solutions',
    quantumService6: 'Executive workshops on quantum technology',
    quantumService7: 'Research partnerships and collaboration',
    quantumApplicationsTitle: 'Applications & Use Cases:',
    quantumOptimization: 'Optimization',
    quantumOptimizationDesc: 'Supply chain, logistics, portfolio optimization, and resource allocation.',
    quantumCryptography: 'Cryptography',
    quantumCryptographyDesc: 'Quantum-safe encryption and secure communication protocols.',
    quantumSimulation: 'Simulation',
    quantumSimulationDesc: 'Molecular modeling, drug discovery, and materials science.',
    quantumClosing: 'While quantum computers are still emerging, preparing now ensures your organization will be ready to leverage quantum advantages as they become available. Let\'s explore how quantum computing can revolutionize your industry.',

    // Software Development
    softwareTitle: 'Custom Software Solutions',
    softwareIntro: 'Every business is unique, and so are its software needs. Our full-cycle software development services create tailored solutions that align perfectly with your business objectives, processes, and growth plans.',
    softwareServicesTitle: 'Our Development Services:',
    softwareService1: 'Web application development (React, Vue.js, Angular)',
    softwareService2: 'Backend API development (Node.js, Python, Java)',
    softwareService3: 'Database design and optimization',
    softwareService4: 'Cloud-native application development',
    softwareService5: 'Microservices architecture',
    softwareService6: 'DevOps and CI/CD implementation',
    softwareService7: 'Software maintenance and support',
    softwareProcessTitle: 'Our Development Process:',
    softwareStep1: 'Discovery & Planning',
    softwareStep1Desc: 'We analyze your requirements, define project scope, and create a detailed development roadmap.',
    softwareStep2: 'Design & Architecture',
    softwareStep2Desc: 'Our architects design scalable, secure, and maintainable software architecture.',
    softwareStep3: 'Development & Testing',
    softwareStep3Desc: 'Agile development with continuous testing and quality assurance throughout the process.',
    softwareStep4: 'Deployment & Support',
    softwareStep4Desc: 'Seamless deployment to production with ongoing maintenance and support.',
    softwareClosing: 'From concept to deployment and beyond, we\'re your trusted partner for custom software development that drives business success.',

    // Automation
    automationTitle: 'Intelligent Business Automation',
    automationIntro: 'Transform your operations with intelligent automation solutions that eliminate repetitive tasks, reduce errors, and free your team to focus on high-value activities. Our automation services help you achieve operational excellence and significant cost savings.',
    automationSolutionsTitle: 'Automation Solutions:',
    automationSolution1: 'Robotic Process Automation (RPA)',
    automationSolution2: 'Workflow automation and orchestration',
    automationSolution3: 'Document processing automation',
    automationSolution4: 'Data integration and synchronization',
    automationSolution5: 'Email and communication automation',
    automationSolution6: 'Report generation and distribution',
    automationSolution7: 'Customer service automation',
    automationSolution8: 'Invoice and payment processing',
    automationBenefitsTitle: 'Benefits of Automation:',
    automationBenefit1: '80%',
    automationBenefit1Desc: 'Reduction in processing time',
    automationBenefit2: '99%',
    automationBenefit2Desc: 'Accuracy improvement',
    automationBenefit3: '24/7',
    automationBenefit3Desc: 'Continuous operation',
    automationClosing: 'Let us help you identify automation opportunities in your business and implement solutions that deliver immediate and long-term value.',

    // Data Marketing
    dataMarketingTitle: 'Data-Driven Marketing Excellence',
    dataMarketingIntro: 'Transform your marketing efforts with data-driven strategies that deliver measurable results. Our comprehensive marketing solutions combine advanced analytics, AI-powered insights, and proven tactics to maximize your ROI and drive sustainable growth.',
    dataMarketingServicesTitle: 'Our Marketing Services:',
    dataMarketingService1: 'Customer segmentation and persona development',
    dataMarketingService2: 'Predictive analytics for customer behavior',
    dataMarketingService3: 'Multi-channel campaign optimization',
    dataMarketingService4: 'Marketing attribution and ROI tracking',
    dataMarketingService5: 'A/B testing and conversion optimization',
    dataMarketingService6: 'Real-time marketing dashboards',
    dataMarketingService7: 'Customer lifetime value analysis',
    dataMarketingService8: 'Churn prediction and retention strategies',
    dataMarketingChannelsTitle: 'Marketing Channels We Optimize:',
    digitalChannels: 'Digital Channels',
    digitalChannel1: '• Search Engine Marketing (SEM)',
    digitalChannel2: '• Social Media Advertising',
    digitalChannel3: '• Email Marketing Campaigns',
    digitalChannel4: '• Content Marketing',
    digitalChannel5: '• Display Advertising',
    analyticsInsights: 'Analytics & Insights',
    analyticsInsight1: '• Google Analytics 4 Setup',
    analyticsInsight2: '• Custom Marketing Dashboards',
    analyticsInsight3: '• Conversion Tracking',
    analyticsInsight4: '• Customer Journey Analysis',
    analyticsInsight5: '• Performance Reporting',
    dataMarketingClosing: 'Ready to supercharge your marketing with data-driven insights? Let\'s create a marketing strategy that delivers measurable results and drives business growth.',

    // Social Media
    socialMediaTitle: 'Strategic Social Media Management',
    socialMediaIntro: 'Build a powerful social media presence that engages your audience, drives brand awareness, and converts followers into customers. Our comprehensive social media management services help you navigate the ever-changing social landscape with confidence.',
    socialMediaServicesTitle: 'Our Social Media Services:',
    socialMediaService1: 'Social media strategy development',
    socialMediaService2: 'Content creation and curation',
    socialMediaService3: 'Community management and engagement',
    socialMediaService4: 'Influencer partnership programs',
    socialMediaService5: 'Social media advertising campaigns',
    socialMediaService6: 'Analytics and performance reporting',
    socialMediaService7: 'Crisis management and reputation monitoring',
    socialMediaService8: 'Social commerce optimization',
    socialMediaPlatformsTitle: 'Platforms We Manage:',
    facebook: 'Facebook',
    facebookDesc: 'Meta Business',
    instagram: 'Instagram',
    instagramDesc: 'Visual Content',
    linkedin: 'LinkedIn',
    linkedinDesc: 'B2B Networking',
    youtube: 'YouTube',
    youtubeDesc: 'Video Content',
    socialMediaClosing: 'Let us help you build a social media presence that truly connects with your audience and drives meaningful business results.',

    // Machine Learning
    machineLearningTitle: 'Advanced Machine Learning Solutions',
    machineLearningIntro: 'Unlock the power of your data with advanced machine learning solutions that predict trends, automate decisions, and provide actionable insights. Our ML expertise helps you transform raw data into competitive advantages.',
    machineLearningServicesTitle: 'Machine Learning Services:',
    machineLearningService1: 'Predictive modeling and forecasting',
    machineLearningService2: 'Natural Language Processing (NLP)',
    machineLearningService3: 'Computer vision and image recognition',
    machineLearningService4: 'Recommendation systems',
    machineLearningService5: 'Anomaly detection and fraud prevention',
    machineLearningService6: 'Time series analysis',
    machineLearningService7: 'Deep learning model development',
    machineLearningService8: 'MLOps and model deployment',
    machineLearningIndustryTitle: 'ML Applications by Industry:',
    financialServices: 'Financial Services',
    financialServicesDesc: 'Risk assessment, fraud detection, algorithmic trading, and credit scoring.',
    healthcare: 'Healthcare',
    healthcareDesc: 'Diagnostic assistance, drug discovery, patient monitoring, and treatment optimization.',
    retail: 'Retail & E-commerce',
    retailDesc: 'Product recommendations, demand forecasting, price optimization, and customer segmentation.',
    manufacturing: 'Manufacturing',
    manufacturingDesc: 'Predictive maintenance, quality control, supply chain optimization, and process automation.',
    machineLearningClosing: 'Ready to harness the power of machine learning for your business? Let\'s discuss how we can build custom ML solutions that drive innovation and growth.',

    // Mobile Development
    mobileTitle: 'Mobile App Development',
    mobileIntro: 'Create exceptional mobile experiences that engage users and drive business growth. Our mobile development team builds native and cross-platform applications that deliver outstanding performance, intuitive design, and seamless functionality.',
    mobileServicesTitle: 'Mobile Development Services:',
    mobileService1: 'Native iOS development (Swift/SwiftUI)',
    mobileService2: 'Native Android development (Kotlin/Java)',
    mobileService3: 'Cross-platform development (React Native, Flutter)',
    mobileService4: 'Progressive Web Apps (PWA)',
    mobileService5: 'Mobile app UI/UX design',
    mobileService6: 'App Store optimization (ASO)',
    mobileService7: 'Mobile app testing and QA',
    mobileService8: 'App maintenance and updates',
    mobileProcessTitle: 'Our Mobile Development Process:',
    mobileStep1: 'Discovery & Strategy',
    mobileStep1Desc: 'Market research, competitor analysis, and feature prioritization.',
    mobileStep2: 'Design & Prototyping',
    mobileStep2Desc: 'User experience design, wireframing, and interactive prototypes.',
    mobileStep3: 'Development & Testing',
    mobileStep3Desc: 'Agile development with continuous testing and quality assurance.',
    mobileStep4: 'Launch & Support',
    mobileStep4Desc: 'App store submission, marketing support, and ongoing maintenance.',
    mobileClosing: 'Ready to bring your mobile app idea to life? Let\'s create a mobile experience that your users will love and that drives your business forward.',

    // SEO
    seoTitle: 'SEO Optimization Services',
    seoIntro: 'Improve your search engine visibility and drive organic traffic with our comprehensive SEO services. We use data-driven strategies and white-hat techniques to help your website rank higher and attract more qualified visitors.',
    seoServicesTitle: 'Our SEO Services:',
    seoService1: 'Technical SEO audits and optimization',
    seoService2: 'Keyword research and strategy',
    seoService3: 'On-page SEO optimization',
    seoService4: 'Content strategy and optimization',
    seoService5: 'Link building and outreach',
    seoService6: 'Local SEO for businesses',
    seoService7: 'SEO performance tracking and reporting',
    seoService8: 'Competitor analysis and insights',
    seoResultsTitle: 'SEO Results You Can Expect:',
    seoResult1: '↑ 150%',
    seoResult1Desc: 'Average organic traffic increase',
    seoResult2: '3-6 months',
    seoResult2Desc: 'Time to see significant results',
    seoResult3: '↑ 200%',
    seoResult3Desc: 'Improvement in keyword rankings',
    seoClosing: 'Ready to dominate search results and drive more organic traffic to your website? Let\'s develop an SEO strategy that delivers long-term results.',

    // Web Development
    webTitle: 'Modern Web Development',
    webIntro: 'Create stunning, high-performance websites that captivate your audience and drive conversions. Our web development team combines cutting-edge technology with exceptional design to deliver websites that perform flawlessly across all devices.',
    webServicesTitle: 'Web Development Services:',
    webService1: 'Custom website development',
    webService2: 'E-commerce solutions (Shopify, WooCommerce)',
    webService3: 'Content Management Systems (WordPress, Strapi)',
    webService4: 'Progressive Web Applications (PWA)',
    webService5: 'API development and integration',
    webService6: 'Website performance optimization',
    webService7: 'Security audits and implementations',
    webService8: 'Website maintenance and support',
    webTechnologiesTitle: 'Technologies We Use:',
    react: 'React',
    reactDesc: 'Frontend Framework',
    nodejs: 'Node.js',
    nodejsDesc: 'Backend Runtime',
    nextjs: 'Next.js',
    nextjsDesc: 'Full-stack Framework',
    typescript: 'TypeScript',
    typescriptDesc: 'Type Safety',
    webClosing: 'Ready to build a website that stands out from the competition? Let\'s create a web presence that drives results and grows your business.',

    // Design & Content
    designTitle: 'Design & Content Creation',
    designIntro: 'Create a compelling visual identity and engaging content that resonates with your audience. Our creative team combines artistic expertise with strategic thinking to deliver designs and content that strengthen your brand and drive engagement.',
    designServicesTitle: 'Our Creative Services:',
    designService1: 'Brand identity and logo design',
    designService2: 'Website and app UI/UX design',
    designService3: 'Marketing materials and collateral',
    designService4: 'Social media graphics and templates',
    designService5: 'Content strategy and creation',
    designService6: 'Video production and editing',
    designService7: 'Photography and image editing',
    designService8: 'Print design and production',
    designProcessTitle: 'Our Design Process:',
    designStep1: 'Research & Discovery',
    designStep1Desc: 'Understanding your brand, audience, and market to inform our creative direction.',
    designStep2: 'Concept Development',
    designStep2Desc: 'Creating initial concepts and mood boards that capture your brand essence.',
    designStep3: 'Design & Refinement',
    designStep3Desc: 'Developing detailed designs with multiple iterations based on your feedback.',
    designStep4: 'Delivery & Support',
    designStep4Desc: 'Final delivery with all necessary files and ongoing support for implementation.',
    designClosing: 'Ready to elevate your brand with exceptional design and compelling content? Let\'s create visuals and messaging that truly represent your brand and connect with your audience.',
    
    // About
    aboutTitle: 'About Bright-Byte',
    aboutDescription: 'We are AI & Tech Specialists - hands-on builders with deep domain knowledge. Our cutting-edge technology company specializes in AI, quantum computing, and comprehensive digital solutions, delivering innovative solutions that drive business transformation.',
    
    // About Stats
    aiTechSpecialists: 'AI & Tech Specialists',
    successfulProjects: 'Successful Projects',
    technicalSupport: 'Technical Support',
    clientSatisfaction: 'Client Satisfaction',
    yearsOfExcellence: 'Years of Excellence',
    pioneeringFuture: 'Pioneering the future of technology',
    
    // About Page Content
    aboutPageTitle: 'About Bright-Byte',
    aboutPageSubtitle: 'We\'re a team of passionate innovators dedicated to transforming businesses through cutting-edge technology and creative solutions.',
    
    // Our Story Section
    ourStoryTitle: 'Our Story',
    ourStoryParagraph1: 'Founded in 2025, Bright-Byte emerged from a vision to bridge the gap between traditional business practices and modern technological solutions. Our journey began with a small team of passionate technologists and has grown into a full-service digital transformation company.',
    ourStoryParagraph2: 'Today, we\'re proud to serve clients across various industries, helping them navigate the digital landscape and achieve their business objectives through innovative technology solutions.',
    getInTouchButton: 'Get in Touch',
    
    // Our Values Section
    ourValuesTitle: 'Our Values',
    ourValuesSubtitle: 'The principles that guide everything we do',
    valueInnovationTitle: 'Innovation',
    valueInnovationDesc: 'Pushing boundaries and embracing cutting-edge technologies to deliver exceptional solutions.',
    valueCollaborationTitle: 'Collaboration',
    valueCollaborationDesc: 'Working together with our clients and partners to achieve shared success.',
    valueExcellenceTitle: 'Excellence',
    valueExcellenceDesc: 'Committed to delivering the highest quality in everything we do.',
    valueCreativityTitle: 'Creativity',
    valueCreativityDesc: 'Thinking outside the box to solve complex challenges with unique solutions.',
    
    // Our Mission Section
    ourMissionTitle: 'Our Mission',
    ourMissionDescription: 'To empower businesses with innovative technology solutions that drive growth, efficiency, and success in the digital age.',
    exploreServicesButton: 'Explore Our Services',
    
    // Contact
    contactTitle: 'Get In Touch',
    contactDescription: 'Ready to transform your business with cutting-edge technology?',
    contactUs: 'Contact Us',
    
    // Contact Page
    sendMessageTitle: 'Send us a Message',
    contactInfoTitle: 'Contact Information',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    sendMessage: 'Send Message',
    sending: 'Sending...',
    messageSent: 'Message sent successfully! We will get back to you soon.',
    
    // Form placeholders
    firstNamePlaceholder: 'John',
    lastNamePlaceholder: 'Doe',
    emailPlaceholder: 'john@example.com',
    subjectPlaceholder: 'How can we help?',
    messagePlaceholder: 'Tell us about your project...',
    
    // Contact Info Headers
    emailTitle: 'Email',
    phoneTitle: 'Phone',
    locationTitle: 'Location',
    
    // Quick Response Guarantee
    quickResponseTitle: 'Quick Response Guarantee',
    quickResponseDescription: 'We pride ourselves on quick communication. You\'ll receive an automatic confirmation email immediately, and our team will personally respond to your inquiry within 24 hours.',
    
    // Footer
    footerDescription: 'Innovative technology solutions transforming businesses with advanced AI, quantum computing, and digital solutions.',
    footerServicesTitle: 'Services',
    footerContactTitle: 'Contact',
    footerLocationTitle: 'Location',
    footerCopyright: '2025 Bright-Byte. All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    
    // Consultation CTA
    consultationAvailable: 'Free Consultation Available',
    consultationTitle: 'Book Your Free',
    consultationSubtitle: '30-Minute Consulting',
    consultationDescription: 'Ready to transform your business with cutting-edge technology? Let\'s discuss your project and discover how our expertise in AI, quantum computing, and digital innovation can drive your success.',
    consultationBenefit1: 'Free 30-minute consultation',
    consultationBenefit2: 'Expert guidance tailored to your needs',
    consultationBenefit3: 'No obligation or commitment required',
    consultationBenefit4: 'Quick response within 24 hours',
    consultationButton: 'Get In Touch',
    consultationDuration: '30 Minutes',
    consultationType: 'Strategic Consultation',
    consultationCoverTitle: 'What We\'ll Cover:',
    consultationCover1: 'Your current business challenges and goals',
    consultationCover2: 'Tailored technology solutions for your needs',
    consultationCover3: 'Implementation roadmap and next steps',
    consultationCover4: 'Investment insights and ROI projections',
  },
  nl: {
    // Navigation
    home: 'Home',
    services: 'Diensten',
    about: 'Over Ons',
    contact: 'Contact',
    
    // Hero
    heroTitle: 'De Toekomst Vormgeven met',
    heroSubtitle: 'Geavanceerde Technologie',
    heroDescription: 'Vooroplopen in AI-consultancy, quantum computing en softwareontwikkeling voor het digitale tijdperk.',
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
    
    designContent: 'Design & Content Creatie',
    designContentDesc: 'Creatieve designoplossingen en boeiende content die de essentie van uw merk vastleggen.',

    // Service Detail Page Content
    backToServices: 'Terug naar Diensten',
    getInTouch: 'Neem Contact Op',
    readyToStart: 'Klaar om te beginnen? Neem contact met ons op voor een gratis consultatie.',

    // AI Consulting - Dutch
    aiConsultingTitle: 'Transformeer Uw Bedrijf met AI',
    aiConsultingIntro: 'Kunstmatige Intelligentie is niet langer een futuristisch concept—het is een huidige realiteit die industrieën wereldwijd transformeert. Onze AI-consultingdiensten helpen u de kracht van machine learning, deep learning en intelligente automatisering te benutten om innovatie en concurrentievoordeel te stimuleren.',
    aiSolutionsTitle: 'Onze AI Oplossingen Omvatten:',
    aiSolution1: 'Op maat gemaakte AI-strategieontwikkeling aangepast aan uw bedrijfsdoelstellingen',
    aiSolution2: 'Machine learning modelontwikkeling en implementatie',
    aiSolution3: 'Natural Language Processing (NLP) oplossingen',
    aiSolution4: 'Computer Vision en beeldherkenningssystemen',
    aiSolution5: 'Voorspellende analyses en voorspellingsmodellen',
    aiSolution6: 'AI-integratie met bestaande bedrijfssystemen',
    aiSolution7: 'Personeelstraining en AI-geletterdheidsprojecten',
    whyChooseAiTitle: 'Waarom Kiezen voor Onze AI Consulting?',
    aiExpertTeam: 'Expert Team',
    aiExpertTeamDesc: 'Ons team bestaat uit ervaren AI-onderzoekers en praktijkmensen met bewezen track records.',
    aiPracticalApproach: 'Praktische Benadering',
    aiPracticalApproachDesc: 'We richten ons op het leveren van praktische, implementeerbare AI-oplossingen die echte bedrijfswaarde bieden.',
    aiEndToEndSupport: 'End-to-End Ondersteuning',
    aiEndToEndSupportDesc: 'Van strategie tot implementatie en onderhoud, we bieden uitgebreide AI-consultingdiensten.',
    aiIndustryExpertise: 'Industrie Expertise',
    aiIndustryExpertiseDesc: 'We hebben ervaring in verschillende industrieën waaronder gezondheidszorg, financiën, retail en productie.',
    aiClosing: 'Klaar om het potentieel van AI voor uw bedrijf te ontgrendelen? Laten we bespreken hoe we u kunnen helpen geavanceerde AI-oplossingen te implementeren die groei en efficiëntie stimuleren.',

    // Quantum Computing - Dutch
    quantumTitle: 'De Quantum Toekomst Pionieren',
    quantumIntro: 'Quantum computing vertegenwoordigt de volgende grens in rekenkracht en biedt ongekende mogelijkheden voor het oplossen van complexe problemen die onoplosbaar zijn voor klassieke computers. Onze quantum computing diensten bereiden uw organisatie voor op het quantum voordeel.',
    quantumServicesTitle: 'Onze Quantum Diensten:',
    quantumService1: 'Quantum algoritme ontwerp en optimalisatie',
    quantumService2: 'Quantum simulatie en modellering',
    quantumService3: 'Hybride klassiek-quantum systeemontwikkeling',
    quantumService4: 'Quantum machine learning toepassingen',
    quantumService5: 'Quantum cryptografie en beveiligingsoplossingen',
    quantumService6: 'Executive workshops over quantum technologie',
    quantumService7: 'Onderzoekspartnerschappen en samenwerking',
    quantumApplicationsTitle: 'Toepassingen & Gebruiksscenario\'s:',
    quantumOptimization: 'Optimalisatie',
    quantumOptimizationDesc: 'Toeleveringsketen, logistiek, portefeuille optimalisatie en resource allocatie.',
    quantumCryptography: 'Cryptografie',
    quantumCryptographyDesc: 'Quantum-veilige encryptie en beveiligde communicatieprotocollen.',
    quantumSimulation: 'Simulatie',
    quantumSimulationDesc: 'Moleculaire modellering, medicijnontwikkeling en materiaalwetenschap.',
    quantumClosing: 'Hoewel quantum computers nog in ontwikkeling zijn, zorgt voorbereiding nu ervoor dat uw organisatie klaar zal zijn om quantum voordelen te benutten zodra ze beschikbaar komen. Laten we verkennen hoe quantum computing uw industrie kan revolutioneren.',

    // Software Development - Dutch
    softwareTitle: 'Op Maat Gemaakte Software Oplossingen',
    softwareIntro: 'Elk bedrijf is uniek, en zo zijn ook zijn softwarebehoeften. Onze volledige cyclus softwareontwikkelingsdiensten creëren op maat gemaakte oplossingen die perfect aansluiten bij uw bedrijfsdoelstellingen, processen en groeiplannen.',
    softwareServicesTitle: 'Onze Ontwikkelingsdiensten:',
    softwareService1: 'Webapplicatie ontwikkeling (React, Vue.js, Angular)',
    softwareService2: 'Backend API ontwikkeling (Node.js, Python, Java)',
    softwareService3: 'Database ontwerp en optimalisatie',
    softwareService4: 'Cloud-native applicatie ontwikkeling',
    softwareService5: 'Microservices architectuur',
    softwareService6: 'DevOps en CI/CD implementatie',
    softwareService7: 'Software onderhoud en ondersteuning',
    softwareProcessTitle: 'Ons Ontwikkelingsproces:',
    softwareStep1: 'Ontdekking & Planning',
    softwareStep1Desc: 'We analyseren uw vereisten, definiëren projectscope en creëren een gedetailleerde ontwikkelingsroadmap.',
    softwareStep2: 'Ontwerp & Architectuur',
    softwareStep2Desc: 'Onze architecten ontwerpen schaalbare, veilige en onderhoudbare software architectuur.',
    softwareStep3: 'Ontwikkeling & Testen',
    softwareStep3Desc: 'Agile ontwikkeling met continue testing en kwaliteitsborging gedurende het hele proces.',
    softwareStep4: 'Implementatie & Ondersteuning',
    softwareStep4Desc: 'Naadloze implementatie naar productie met doorlopend onderhoud en ondersteuning.',
    softwareClosing: 'Van concept tot implementatie en verder, wij zijn uw vertrouwde partner voor op maat gemaakte softwareontwikkeling die bedrijfssucces stimuleert.',

    // Automation - Dutch
    automationTitle: 'Intelligente Bedrijfsautomatisering',
    automationIntro: 'Transformeer uw operaties met intelligente automatiseringsoplossingen die repetitieve taken elimineren, fouten verminderen en uw team vrijmaken om zich te concentreren op hoogwaardige activiteiten. Onze automatiseringsdiensten helpen u operationele excellentie en aanzienlijke kostenbesparingen te behalen.',
    automationSolutionsTitle: 'Automatiseringsoplossingen:',
    automationSolution1: 'Robotic Process Automation (RPA)',
    automationSolution2: 'Workflow automatisering en orkestratie',
    automationSolution3: 'Document verwerkingsautomatisering',
    automationSolution4: 'Data integratie en synchronisatie',
    automationSolution5: 'E-mail en communicatie automatisering',
    automationSolution6: 'Rapportgeneratie en distributie',
    automationSolution7: 'Klantenservice automatisering',
    automationSolution8: 'Factuur- en betalingsverwerking',
    automationBenefitsTitle: 'Voordelen van Automatisering:',
    automationBenefit1: '80%',
    automationBenefit1Desc: 'Vermindering van verwerkingstijd',
    automationBenefit2: '99%',
    automationBenefit2Desc: 'Nauwkeurigheidsverbetering',
    automationBenefit3: '24/7',
    automationBenefit3Desc: 'Continue werking',
    automationClosing: 'Laat ons u helpen automatiseringsmogelijkheden in uw bedrijf te identificeren en oplossingen te implementeren die onmiddellijke en langetermijnwaarde leveren.',

    // Data Marketing - Dutch
    dataMarketingTitle: 'Data-Gedreven Marketing Excellentie',
    dataMarketingIntro: 'Transformeer uw marketinginspanningen met data-gedreven strategieën die meetbare resultaten opleveren. Onze uitgebreide marketingoplossingen combineren geavanceerde analyses, AI-aangedreven inzichten en bewezen tactieken om uw ROI te maximaliseren en duurzame groei te stimuleren.',
    dataMarketingServicesTitle: 'Onze Marketing Diensten:',
    dataMarketingService1: 'Klantensegmentatie en persona ontwikkeling',
    dataMarketingService2: 'Voorspellende analyses voor klantgedrag',
    dataMarketingService3: 'Multi-kanaal campagne optimalisatie',
    dataMarketingService4: 'Marketing attributie en ROI tracking',
    dataMarketingService5: 'A/B testing en conversie optimalisatie',
    dataMarketingService6: 'Real-time marketing dashboards',
    dataMarketingService7: 'Customer lifetime value analyse',
    dataMarketingService8: 'Churn predictie en retentiestrategieën',
    dataMarketingChannelsTitle: 'Marketing Kanalen Die We Optimaliseren:',
    digitalChannels: 'Digitale Kanalen',
    digitalChannel1: '• Search Engine Marketing (SEM)',
    digitalChannel2: '• Social Media Advertising',
    digitalChannel3: '• E-mail Marketing Campagnes',
    digitalChannel4: '• Content Marketing',
    digitalChannel5: '• Display Advertising',
    analyticsInsights: 'Analytics & Inzichten',
    analyticsInsight1: '• Google Analytics 4 Setup',
    analyticsInsight2: '• Op Maat Gemaakte Marketing Dashboards',
    analyticsInsight3: '• Conversie Tracking',
    analyticsInsight4: '• Customer Journey Analyse',
    analyticsInsight5: '• Performance Rapportage',
    dataMarketingClosing: 'Klaar om uw marketing te superchargen met data-gedreven inzichten? Laten we een marketingstrategie creëren die meetbare resultaten oplevert en bedrijfsgroei stimuleert.',

    // Social Media - Dutch
    socialMediaTitle: 'Strategisch Social Media Management',
    socialMediaIntro: 'Bouw een krachtige social media aanwezigheid die uw publiek betrekt, merkbewustzijn stimuleert en volgers omzet in klanten. Onze uitgebreide social media managementdiensten helpen u met vertrouwen navigeren door het steeds veranderende sociale landschap.',
    socialMediaServicesTitle: 'Onze Social Media Diensten:',
    socialMediaService1: 'Social media strategie ontwikkeling',
    socialMediaService2: 'Content creatie en curatie',
    socialMediaService3: 'Community management en betrokkenheid',
    socialMediaService4: 'Influencer partnerschapprogramma\'s',
    socialMediaService5: 'Social media advertentiecampagnes',
    socialMediaService6: 'Analytics en performance rapportage',
    socialMediaService7: 'Crisismanagement en reputatiemonitoring',
    socialMediaService8: 'Social commerce optimalisatie',
    socialMediaPlatformsTitle: 'Platforms Die We Beheren:',
    facebook: 'Facebook',
    facebookDesc: 'Meta Business',
    instagram: 'Instagram',
    instagramDesc: 'Visuele Content',
    linkedin: 'LinkedIn',
    linkedinDesc: 'B2B Netwerken',
    youtube: 'YouTube',
    youtubeDesc: 'Video Content',
    socialMediaClosing: 'Laat ons u helpen een social media aanwezigheid op te bouwen die echt verbinding maakt met uw publiek en betekenisvolle bedrijfsresultaten oplevert.',

    // Machine Learning - Dutch
    machineLearningTitle: 'Geavanceerde Machine Learning Oplossingen',
    machineLearningIntro: 'Ontsluit de kracht van uw data met geavanceerde machine learning oplossingen die trends voorspellen, beslissingen automatiseren en bruikbare inzichten bieden. Onze ML expertise helpt u ruwe data transformeren in concurrentievoordelen.',
    machineLearningServicesTitle: 'Machine Learning Diensten:',
    machineLearningService1: 'Voorspellende modellering en forecasting',
    machineLearningService2: 'Natural Language Processing (NLP)',
    machineLearningService3: 'Computer vision en beeldherkenning',
    machineLearningService4: 'Aanbevelingssystemen',
    machineLearningService5: 'Anomalie detectie en fraudepreventie',
    machineLearningService6: 'Tijdreeks analyse',
    machineLearningService7: 'Deep learning model ontwikkeling',
    machineLearningService8: 'MLOps en model deployment',
    machineLearningIndustryTitle: 'ML Toepassingen per Industrie:',
    financialServices: 'Financiële Diensten',
    financialServicesDesc: 'Risicobeoordeling, fraudedetectie, algoritmische handel en kredietscoring.',
    healthcare: 'Gezondheidszorg',
    healthcareDesc: 'Diagnostische hulp, medicijnontwikkeling, patiëntmonitoring en behandelingsoptimalisatie.',
    retail: 'Retail & E-commerce',
    retailDesc: 'Product aanbevelingen, vraagvoorspelling, prijsoptimalisatie en klantensegmentatie.',
    manufacturing: 'Productie',
    manufacturingDesc: 'Voorspellend onderhoud, kwaliteitscontrole, supply chain optimalisatie en procesautomatisering.',
    machineLearningClosing: 'Klaar om de kracht van machine learning voor uw bedrijf te benutten? Laten we bespreken hoe we op maat gemaakte ML-oplossingen kunnen bouwen die innovatie en groei stimuleren.',

    // Mobile Development - Dutch
    mobileTitle: 'Mobiele App Ontwikkeling',
    mobileIntro: 'Creëer uitzonderlijke mobiele ervaringen die gebruikers betrekken en bedrijfsgroei stimuleren. Ons mobiele ontwikkelingsteam bouwt native en cross-platform applicaties die uitstekende prestaties, intuïtief ontwerp en naadloze functionaliteit leveren.',
    mobileServicesTitle: 'Mobiele Ontwikkelingsdiensten:',
    mobileService1: 'Native iOS ontwikkeling (Swift/SwiftUI)',
    mobileService2: 'Native Android ontwikkeling (Kotlin/Java)',
    mobileService3: 'Cross-platform ontwikkeling (React Native, Flutter)',
    mobileService4: 'Progressive Web Apps (PWA)',
    mobileService5: 'Mobiele app UI/UX ontwerp',
    mobileService6: 'App Store optimalisatie (ASO)',
    mobileService7: 'Mobiele app testen en QA',
    mobileService8: 'App onderhoud en updates',
    mobileProcessTitle: 'Ons Mobiele Ontwikkelingsproces:',
    mobileStep1: 'Ontdekking & Strategie',
    mobileStep1Desc: 'Marktonderzoek, concurrentieanalyse en feature prioritering.',
    mobileStep2: 'Ontwerp & Prototyping',
    mobileStep2Desc: 'User experience ontwerp, wireframing en interactieve prototypes.',
    mobileStep3: 'Ontwikkeling & Testen',
    mobileStep3Desc: 'Agile ontwikkeling met continue testing en kwaliteitsborging.',
    mobileStep4: 'Lancering & Ondersteuning',
    mobileStep4Desc: 'App store indiening, marketing ondersteuning en doorlopend onderhoud.',
    mobileClosing: 'Klaar om uw mobiele app idee tot leven te brengen? Laten we een mobiele ervaring creëren die uw gebruikers zullen liefhebben en die uw bedrijf vooruit helpt.',

    // SEO - Dutch
    seoTitle: 'SEO Optimalisatie Diensten',
    seoIntro: 'Verbeter uw zoekmachine zichtbaarheid en stimuleer organisch verkeer met onze uitgebreide SEO diensten. We gebruiken data-gedreven strategieën en white-hat technieken om uw website hoger te laten ranken en meer gekwalificeerde bezoekers aan te trekken.',
    seoServicesTitle: 'Onze SEO Diensten:',
    seoService1: 'Technische SEO audits en optimalisatie',
    seoService2: 'Keyword onderzoek en strategie',
    seoService3: 'On-page SEO optimalisatie',
    seoService4: 'Content strategie en optimalisatie',
    seoService5: 'Link building en outreach',
    seoService6: 'Lokale SEO voor bedrijven',
    seoService7: 'SEO performance tracking en rapportage',
    seoService8: 'Competitor analysis and insights',
    seoResultsTitle: 'SEO Resultaten Die U Kunt Verwachten:',
    seoResult1: '↑ 150%',
    seoResult1Desc: 'Gemiddelde organische verkeer toename',
    seoResult2: '3-6 maanden',
    seoResult2Desc: 'Tijd om significante resultaten te zien',
    seoResult3: '↑ 200%',
    seoResult3Desc: 'Verbetering in keyword rankings',
    seoClosing: 'Klaar om zoekresultaten te domineren en meer organisch verkeer naar uw website te rijden? Laten we een SEO strategie ontwikkelen die langetermijnresultaten oplevert.',

    // Web Development - Dutch
    webTitle: 'Moderne Web Ontwikkeling',
    webIntro: 'Creëer verbluffende, hoogperformante websites die uw publiek boeien en conversies stimuleren. Ons webontwikkelingsteam combineert geavanceerde technologie met uitzonderlijk ontwerp om websites te leveren die feilloos presteren op alle apparaten.',
    webServicesTitle: 'Web Ontwikkelingsdiensten:',
    webService1: 'Op maat gemaakte website ontwikkeling',
    webService2: 'E-commerce oplossingen (Shopify, WooCommerce)',
    webService3: 'Content Management Systemen (WordPress, Strapi)',
    webService4: 'Progressive Web Applications (PWA)',
    webService5: 'API ontwikkeling en integratie',
    webService6: 'Website performance optimalisatie',
    webService7: 'Beveiligingsaudits en implementaties',
    webService8: 'Website onderhoud en ondersteuning',
    webTechnologiesTitle: 'Technologieën Die We Gebruiken:',
    react: 'React',
    reactDesc: 'Frontend Framework',
    nodejs: 'Node.js',
    nodejsDesc: 'Backend Runtime',
    nextjs: 'Next.js',
    nextjsDesc: 'Full-stack Framework',
    typescript: 'TypeScript',
    typescriptDesc: 'Type Veiligheid',
    webClosing: 'Klaar om een website te bouwen die opvalt tussen de concurrentie? Laten we een webpresentatie creëren die resultaten oplevert en uw bedrijf laat groeien.',

    // Design & Content - Dutch
    designTitle: 'Design & Content Creatie',
    designIntro: 'Creëer een overtuigende visuele identiteit en boeiende content die resoneert met uw publiek. Ons creatieve team combineert artistieke expertise met strategisch denken om ontwerpen en content te leveren die uw merk versterken en betrokkenheid stimuleren.',
    designServicesTitle: 'Onze Creatieve Diensten:',
    designService1: 'Merkidentiteit en logo ontwerp',
    designService2: 'Website en app UI/UX ontwerp',
    designService3: 'Marketingmateriaal en collateral',
    designService4: 'Social media graphics en templates',
    designService5: 'Content strategie en creatie',
    designService6: 'Videoproductie en editing',
    designService7: 'Fotografie en beeldbewerking',
    designService8: 'Print ontwerp en productie',
    designProcessTitle: 'Ons Ontwerpproces:',
    designStep1: 'Onderzoek & Ontdekking',
    designStep1Desc: 'Uw merk, publiek en markt begrijpen om onze creatieve richting te informeren.',
    designStep2: 'Concept Ontwikkeling',
    designStep2Desc: 'Initiële concepten en moodboards créeren die uw merkessentie vastleggen.',
    designStep3: 'Ontwerp & Verfijning',
    designStep3Desc: 'Gedetailleerde ontwerpen ontwikkelen met meerdere iteraties gebaseerd op uw feedback.',
    designStep4: 'Levering & Ondersteuning',
    designStep4Desc: 'Finale levering met alle benodigde bestanden en doorlopende ondersteuning voor implementatie.',
    designClosing: 'Klaar om uw merk te verheffen met uitzonderlijk ontwerp en overtuigende content? Laten we visuals en berichten creëren die uw merk echt vertegenwoordigen en verbinding maken met uw publiek.',
    
    // About
    aboutTitle: 'Over Bright-Byte',
    aboutDescription: 'Wij zijn AI & Tech Specialisten - hands-on bouwers met diepe domeinkennis. Ons geavanceerd technologiebedrijf is gespecialiseerd in AI, quantum computing en uitgebreide digitale oplossingen, waarbij we innovatieve oplossingen bieden die bedrijfstransformatie stimuleren.',
    
    // About Stats
    aiTechSpecialists: 'AI & Tech Specialisten',
    successfulProjects: 'Succesvolle Projecten',
    technicalSupport: 'Technische Ondersteuning',
    clientSatisfaction: 'Klanttevredenheid',
    yearsOfExcellence: 'Jaar van Excellentie',
    pioneeringFuture: 'Pionieren van de toekomst van technologie',
    
    // About Page Content
    aboutPageTitle: 'Over Bright-Byte',
    aboutPageSubtitle: 'Wij zijn een team van gepassioneerde innovators die zich toeleggen op het transformeren van bedrijven door middel van geavanceerde technologie en creatieve oplossingen.',
    
    // Our Story Section
    ourStoryTitle: 'Ons Verhaal',
    ourStoryParagraph1: 'Opgericht in 2025, ontstond Bright-Byte uit een visie om de kloof te overbruggen tussen traditionele bedrijfspraktijken en moderne technologische oplossingen. Onze reis begon met een klein team van gepassioneerde technologen en is uitgegroeid tot een full-service digitale transformatie bedrijf.',
    ourStoryParagraph2: 'Vandaag zijn we er trots op dat we klanten uit verschillende industrieën bedienen, hen helpen navigeren in het digitale landschap en hun bedrijfsdoelstellingen bereiken door middel van innovatieve technologische oplossingen.',
    getInTouchButton: 'Neem Contact Op',
    
    // Our Values Section
    ourValuesTitle: 'Onze Waarden',
    ourValuesSubtitle: 'De principes die alles wat we doen leiden',
    valueInnovationTitle: 'Innovatie',
    valueInnovationDesc: 'Grenzen verleggen en geavanceerde technologieën omarmen om uitzonderlijke oplossingen te leveren.',
    valueCollaborationTitle: 'Samenwerking',
    valueCollaborationDesc: 'Samenwerken met onze klanten en partners om gezamenlijk succes te bereiken.',
    valueExcellenceTitle: 'Excellentie',
    valueExcellenceDesc: 'Toegewijd aan het leveren van de hoogste kwaliteit in alles wat we doen.',
    valueCreativityTitle: 'Creativiteit',
    valueCreativityDesc: 'Out-of-the-box denken om complexe uitdagingen op te lossen met unieke oplossingen.',
    
    // Our Mission Section
    ourMissionTitle: 'Onze Missie',
    ourMissionDescription: 'Bedrijven empoweren met innovatieve technologische oplossingen die groei, efficiëntie en succes in het digitale tijdperk stimuleren.',
    exploreServicesButton: 'Ontdek Onze Diensten',
    
    // Contact
    contactTitle: 'Neem Contact Op',
    contactDescription: 'Klaar om uw bedrijf te transformeren met geavanceerde technologie?',
    contactUs: 'Contacteer Ons',
    
    // Contact Page
    sendMessageTitle: 'Stuur ons een Bericht',
    contactInfoTitle: 'Contactinformatie',
    firstName: 'Voornaam',
    lastName: 'Achternaam',
    email: 'E-mail',
    subject: 'Onderwerp',
    message: 'Bericht',
    sendMessage: 'Verstuur Bericht',
    sending: 'Versturen...',
    messageSent: 'Bericht succesvol verzonden! Wij nemen binnenkort contact met u op.',
    
    // Form placeholders
    firstNamePlaceholder: 'Jan',
    lastNamePlaceholder: 'Janssen',
    emailPlaceholder: 'jan@voorbeeld.nl',
    subjectPlaceholder: 'Hoe kunnen we helpen?',
    messagePlaceholder: 'Vertel ons over uw project...',
    
    // Contact Info Headers
    emailTitle: 'E-mail',
    phoneTitle: 'Telefoon',
    locationTitle: 'Locatie',
    
    // Quick Response Guarantee
    quickResponseTitle: 'Snelle Reactie Garantie',
    quickResponseDescription: 'Wij zijn trots op onze snelle communicatie. U ontvangt onmiddellijk een automatische bevestigingsmail, en ons team zal persoonlijk binnen 24 uur reageren op uw vraag.',
    
    // Footer
    footerDescription: 'Innovative technology solutions transforming businesses with advanced AI, quantum computing, and digital solutions.',
    footerServicesTitle: 'Services',
    footerContactTitle: 'Contact',
    footerLocationTitle: 'Location',
    footerCopyright: '2025 Bright-Byte. All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    
    // Consultation CTA
    consultationAvailable: 'Free Consultation Available',
    consultationTitle: 'Book Your Free',
    consultationSubtitle: '30-Minute Consulting',
    consultationDescription: 'Ready to transform your business with cutting-edge technology? Let\'s discuss your project and discover how our expertise in AI, quantum computing, and digital innovation can drive your success.',
    consultationBenefit1: 'Free 30-minute consultation',
    consultationBenefit2: 'Expert guidance tailored to your needs',
    consultationBenefit3: 'No obligation or commitment required',
    consultationBenefit4: 'Quick response within 24 hours',
    consultationButton: 'Get In Touch',
    consultationDuration: '30 Minutes',
    consultationType: 'Strategic Consultation',
    consultationCoverTitle: 'What We\'ll Cover:',
    consultationCover1: 'Your current business challenges and goals',
    consultationCover2: 'Tailored technology solutions for your needs',
    consultationCover3: 'Implementation roadmap and next steps',
    consultationCover4: 'Investment insights and ROI projections',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    services: 'الخدمات',
    about: 'من نحن',
    contact: 'اتصل بنا',
    
    // Hero
    heroTitle: 'نُشكّل المستقبل بالتكنولوجيا',
    heroSubtitle: 'المتقدمة',
    heroDescription: 'روّاد في استشارات الذكاء الاصطناعي، والحوسبة الكمومية، وتطوير البرمجيات لعصر رقمي متطور.',
    getStarted: 'ابدأ الآن',
    learnMore: 'اعرف المزيد',
    
    // Services
    servicesTitle: 'خدماتنا',
    servicesSubtitle: 'حلول تكنولوجية شاملة لعملك',
    
    aiConsulting: 'استشارات الذكاء الاصطناعي',
    aiConsultingDesc: 'تنفيذ واستشارات استراتيجية للذكاء الاصطناعي لتحويل عمليات عملك.',
    
    quantumComputing: 'الحوسبة الكمية',
    quantumComputingDesc: 'حلول كمية من الجيل التالي للتحديات الحاسوبية المعقدة.',
    
    softwareDev: 'تطوير البرمجيات',
    softwareDevDesc: 'حلول برمجية مخصصة مبنية بتقنيات متطورة.',
    
    automation: 'الأتمتة',
    automationDesc: 'تبسيط العمليات بأنظمة الأتمتة الذكية.',
    
    dataMarketing: 'التسويق المبني على البيانات',
    dataMarketingDesc: 'استفد من رؤى البيانات لحملات تسويقية مستهدفة.',
    
    socialMedia: 'إدارة وسائل التواصل الاجتماعي',
    socialMediaDesc: 'خدمات شاملة لاستراتيجية وإدارة وسائل التواصل الاجتماعي.',
    
    machineLearning: 'التعلم الآلي',
    machineLearningDesc: 'حلول متقدمة للتعلم الآلي للتحليلات التنبؤية والرؤى.',
    
    mobileDev: 'تطوير الجوال',
    mobileDevDesc: 'تطبيقات جوال أصلية ومتعددة المنصات.',
    
    seo: 'تحسين محركات البحث',
    seoDesc: 'تحسين محركات البحث لتعزيز ظهورك الرقمي.',
    
    webDev: 'تطوير المواقع الإلكترونية',
    webDevDesc: 'مواقع حديثة ومتجاوبة مبنية للأداء.',
    
    designContent: 'التصميم وإنشاء المحتوى',
    designContentDesc: 'حلول تصميم إبداعية ومحتوى جذاب يجسد جوهر علامتك التجارية.',

    // Service Detail Page Content
    backToServices: 'العودة للخدمات',
    getInTouch: 'تواصل معنا',
    readyToStart: 'مستعد للبدء؟ تواصل معنا للحصول على استشارة مجانية.',
    
    // About
    aboutTitle: 'من نحن',
    aboutDescription: 'نحن شركة رائدة متخصصة في تطوير الحلول التكنولوجية المتطورة. فريقنا من الخبراء يجمع بين المعرفة العميقة والخبرة العملية لتقديم حلول مبتكرة.',
    
    // About Stats
    aiTechSpecialists: 'متخصصو الذكاء الاصطناعي والتكنولوجيا',
    successfulProjects: 'مشاريع ناجحة',
    technicalSupport: 'الدعم التقني',
    clientSatisfaction: 'رضا العملاء',
    yearsOfExcellence: 'سنوات من التميز',
    pioneeringFuture: 'ريادة مستقبل التكنولوجيا',
    
    // About Page Content
    aboutPageTitle: 'من نحن',
    aboutPageSubtitle: 'نحن فريق من المبتكرين المتحمسين المكرسين لتحويل الأعمال من خلال التكنولوجيا المتطورة والحلول الإبداعية.',
    
    // Our Story Section
    ourStoryTitle: 'قصتنا',
    ourStoryParagraph1: 'تأسست Bright-Byte في عام 2025 من رؤية لسد الفجوة بين ممارسات الأعمال التقليدية والحلول التكنولوجية الحديثة. بدأت رحلتنا بفريق صغير من التقنيين المتحمسين وتطورت إلى شركة تحول رقمي متكاملة الخدمات.',
    ourStoryParagraph2: 'اليوم، نحن فخورون بخدمة عملاء من مختلف الصناعات، مساعدتهم على التنقل في المشهد الرقمي وتحقيق أهدافهم التجارية من خلال حلول تكنولوجية مبتكرة.',
    getInTouchButton: 'تواصل معنا',
    
    // Our Values Section
    ourValuesTitle: 'قيمنا',
    ourValuesSubtitle: 'المبادئ التي توجه كل ما نقوم به',
    valueInnovationTitle: 'الابتكار',
    valueInnovationDesc: 'دفع الحدود واحتضان التقنيات المتطورة لتقديم حلول استثنائية.',
    valueCollaborationTitle: 'التعاون',
    valueCollaborationDesc: 'العمل معاً مع عملائنا وشركائنا لتحقيق النجاح المشترك.',
    valueExcellenceTitle: 'التميز',
    valueExcellenceDesc: 'ملتزمون بتقديم أعلى جودة في كل ما نقوم به.',
    valueCreativityTitle: 'الإبداع',
    valueCreativityDesc: 'التفكير خارج الصندوق لحل التحديات المعقدة بحلول فريدة.',
    
    // Our Mission Section
    ourMissionTitle: 'مهمتنا',
    ourMissionDescription: 'تمكين الشركات بحلول تكنولوجية مبتكرة تحفز النمو والكفاءة والنجاح في العصر الرقمي.',
    exploreServicesButton: 'استكشف خدماتنا',
    
    // Contact
    contactTitle: 'تواصل معنا',
    contactDescription: 'مستعد لتحويل عملك بالتكنولوجيا المتطورة؟',
    contactUs: 'اتصل بنا',
    
    // Contact Page
    sendMessageTitle: 'أرسل لنا رسالة',
    contactInfoTitle: 'معلومات الاتصال',
    firstName: 'الاسم الأول',
    lastName: 'اسم العائلة',
    email: 'البريد الإلكتروني',
    subject: 'الموضوع',
    message: 'الرسالة',
    sendMessage: 'إرسال الرسالة',
    sending: 'جاري الإرسال...',
    messageSent: 'تم إرسال الرسالة بنجاح! سنعود إليك قريباً.',
    
    // Form placeholders
    firstNamePlaceholder: 'أحمد',
    lastNamePlaceholder: 'محمد',
    emailPlaceholder: 'ahmed@example.com',
    subjectPlaceholder: 'كيف يمكننا مساعدتك؟',
    messagePlaceholder: 'أخبرنا عن مشروعك...',
    
    // Contact Info Headers
    emailTitle: 'البريد الإلكتروني',
    phoneTitle: 'الهاتف',
    locationTitle: 'الموقع',
    
    // Quick Response Guarantee
    quickResponseTitle: 'ضمان الاستجابة السريعة',
    quickResponseDescription: 'نحن نفخر بالتواصل السريع. ستحصل على بريد إلكتروني تأكيدي فوري، وسيرد فريقنا شخصياً على استفسارك خلال 24 ساعة.',
    
    // Footer
    footerDescription: 'تحويل الشركات بالذكاء الاصطناعي المتطور، والحوسبة الكمية، والحلول الرقمية الشاملة.',
    footerServicesTitle: 'الخدمات',
    footerContactTitle: 'اتصل بنا',
    footerLocationTitle: 'الموقع',
    footerCopyright: '2025 Bright-Byte. جميع الحقوق محفوظة.',
    privacyPolicy: 'سياسة الخصوصية',
    
    // Consultation CTA
    consultationAvailable: 'استشارة مجانية متاحة',
    consultationTitle: 'احجز استشارتك المجانية',
    consultationSubtitle: 'لمدة 30 دقيقة',
    consultationDescription: 'مستعد لتحويل عملك بالتكنولوجيا المتطورة؟ دعنا نناقش مشروعك ونستكشف كيف يمكن لخبرتنا في الذكاء الاصطناعي والحوسبة الكمية والابتكار الرقمي أن تحقق نجاحك.',
    consultationBenefit1: 'استشارة مجانية لمدة 30 دقيقة',
    consultationBenefit2: 'إرشاد خبير مخصص لاحتياجاتك',
    consultationBenefit3: 'لا يوجد التزام أو تعهد مطلوب',
    consultationBenefit4: 'استجابة سريعة خلال 24 ساعة',
    consultationButton: 'تواصل معنا',
    consultationDuration: '30 دقيقة',
    consultationType: 'استشارة استراتيجية',
    consultationCoverTitle: 'ما سنغطيه:',
    consultationCover1: 'تحديات وأهداف عملك الحالية',
    consultationCover2: 'حلول تكنولوجية مخصصة لاحتياجاتك',
    consultationCover3: 'خارطة طريق التنفيذ والخطوات التالية',
    consultationCover4: 'رؤى الاستثمار وتوقعات العائد على الاستثمار',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'nl', 'ar'].includes(savedLanguage)) {
      return savedLanguage;
    }
    
    // If no saved language, try to detect from browser
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'nl') return 'nl';
    if (browserLang === 'ar') return 'ar';
    return 'en';
  });
  
  const [isLoading, setIsLoading] = useState(false);

  const handleLanguageChange = (newLang: Language) => {
    setIsLoading(true);
    // Simulate loading state for smooth transition
    setTimeout(() => {
      setLanguage(newLang);
      localStorage.setItem('language', newLang);
      setIsLoading(false);
    }, 300);
  };

  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations[typeof language]];
    
    // Debug logging for missing translations
    if (!translation) {
      console.warn(`Missing translation for key: "${key}" in language: "${language}"`);
      return key;
    }
    
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, t, isLoading }}>
      <div className={`${language === 'ar' ? 'rtl' : 'ltr'} transition-all duration-300`}>
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
