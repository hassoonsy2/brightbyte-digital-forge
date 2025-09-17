import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'nl';

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
    portfolio: 'Portfolio',
    about: 'About',
    contact: 'Contact',
    
    // Hero
    heroTitle: 'Shaping Tomorrow with',
    heroSubtitle: 'Advanced Technology',
    heroDescription: 'Pioneering AI consulting, quantum computing, and software development to empower the digital future.',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    heroButtonText: 'Let\'s Build Your Project Together!',
    
    // Portfolio
    portfolioTitle: 'Innovation in Action',
    portfolioDescription: 'Explore our cutting-edge projects that showcase the power of AI, quantum computing, and advanced automation technologies.',
    portfolioCTA: 'Let\'s collaborate to bring your innovative ideas to life with cutting-edge technology solutions.',
    
    // Portfolio Actions
    readMore: 'Read More',
    viewLive: 'View Live',
    noProjectsFound: 'No Projects Found',
    noProjectsFoundDesc: 'No projects found for the selected category.',
    viewAllProjects: 'View All Projects',
    
    // Project Details
    projectChallenges: 'Challenges',
    projectSolutions: 'Solutions',
    projectResults: 'Results & Impact',
    projectTechnologies: 'Technologies Used',
    projectTimeline: 'Timeline',
    projectTeam: 'Team Size',
    projectStatus: 'Status',
    backToPortfolio: 'Back to Portfolio',
    viewLiveProject: 'View Live Project',
    readyToStart: 'Ready to Start Your Project?',
    startYourProject: 'Start Your Project',
    
    // Portfolio Project Names
    vettekTitle: 'Vettek - AI Hiring Platform',
    vettekDesc: 'In-house developed AI-powered recruitment platform that automates the entire hiring process from CV parsing to intelligent interviews, revolutionizing talent acquisition.',
    vettekLongDesc: 'Vettek represents a breakthrough in recruitment technology, leveraging advanced AI algorithms to transform how companies discover and evaluate talent. Our platform eliminates traditional hiring biases while dramatically reducing time-to-hire through intelligent automation.',
    vettekTimeline: '6 months',
    vettekTeam: '5 developers',
    vettekChallenge1: 'Implementing accurate CV parsing across multiple formats',
    vettekChallenge2: 'Creating realistic AI interview simulations',
    vettekChallenge3: 'Ensuring bias-free candidate evaluation',
    vettekChallenge4: 'Scaling the platform for enterprise clients',
    vettekSolution1: 'Advanced NLP models for document analysis',
    vettekSolution2: 'Conversational AI with natural language processing',
    vettekSolution3: 'Ethical AI frameworks and bias detection',
    vettekSolution4: 'Cloud-native architecture with auto-scaling',
    vettekResult1: '75% reduction in screening time',
    vettekResult2: '46% more successful hires',
    vettekResult3: '90% reduction in time-to-hire',
    vettekResult4: 'Eliminated unconscious bias in initial screening',
    
    festiTitle: 'Festi - Festival Dating App',
    festiDesc: 'Mobile application exclusively for festival-goers with verified tickets, enabling connections and matches between people attending the same festivals.',
    festiLongDesc: 'Festi revolutionizes festival experiences by creating meaningful connections between attendees. Our mobile platform uses ticket verification to ensure authentic festival-goer interactions, fostering a community of music and festival enthusiasts.',
    festiTimeline: '4 months',
    festiTeam: '3 developers',
    festiChallenge1: 'Implementing secure ticket verification system',
    festiChallenge2: 'Creating location-based matching algorithms',
    festiChallenge3: 'Building real-time chat functionality',
    festiChallenge4: 'Ensuring user privacy and safety',
    festiSolution1: 'Blockchain-based ticket verification',
    festiSolution2: 'GPS and beacon technology integration',
    festiSolution3: 'Real-time messaging infrastructure',
    festiSolution4: 'Advanced privacy protection protocols',
    festiResult1: '85% user engagement rate',
    festiResult2: '92% successful matches',
    festiResult3: 'Zero security incidents',
    festiResult4: '4.8/5 app store rating',
    
    knaapTitle: 'Knaap Smart Automation',
    knaapDesc: 'Intelligent automation system for Knaap that processes leasing offers automatically through smart workflow automation and API integrations.',
    knaapLongDesc: 'Knaap Smart Automation transforms the leasing process through intelligent workflow automation. Our system automatically processes leasing offers, validates applications, and streamlines the entire customer journey from inquiry to approval.',
    knaapTimeline: '3 months',
    knaapTeam: '4 developers',
    knaapChallenge1: 'Integrating with multiple leasing systems',
    knaapChallenge2: 'Automating complex decision workflows',
    knaapChallenge3: 'Ensuring data accuracy and compliance',
    knaapChallenge4: 'Scaling for high-volume processing',
    knaapSolution1: 'RESTful API integrations',
    knaapSolution2: 'Rule-based decision engines',
    knaapSolution3: 'Real-time data validation',
    knaapSolution4: 'Microservices architecture',
    knaapResult1: '70% faster processing time',
    knaapResult2: '95% accuracy in offer generation',
    knaapResult3: '50% reduction in manual work',
    knaapResult4: '99.9% system uptime',
    
    berkelTitle: 'Berkel E-commerce Platform',
    berkelDesc: 'Complete e-commerce solution for Berkel Snijmachine with SEO optimization and integrated social media campaigns for enhanced digital presence.',
    berkelLongDesc: 'Berkel E-commerce Platform delivers a comprehensive digital solution for Berkel Snijmachine, featuring advanced e-commerce functionality, SEO optimization, and integrated social media marketing campaigns to maximize online visibility and sales.',
    berkelTimeline: '5 months',
    berkelTeam: '6 developers',
    berkelChallenge1: 'Migrating from legacy systems',
    berkelChallenge2: 'Implementing advanced SEO strategies',
    berkelChallenge3: 'Integrating social media campaigns',
    berkelChallenge4: 'Optimizing for mobile commerce',
    berkelSolution1: 'Modern e-commerce platform',
    berkelSolution2: 'Technical SEO implementation',
    berkelSolution3: 'Social media API integrations',
    berkelSolution4: 'Responsive design optimization',
    berkelResult1: '200% increase in organic traffic',
    berkelResult2: '150% boost in online sales',
    berkelResult3: '85% improvement in page load speed',
    berkelResult4: '300% growth in social media engagement',
    
    gbictTitle: 'GBICT Website',
    gbictDesc: 'Custom designed and developed website for GBICT, featuring modern UI/UX design and responsive development for optimal user experience.',
    gbictLongDesc: 'GBICT Website showcases modern web design principles with a focus on user experience and accessibility. Our custom-built platform provides GBICT with a professional online presence that effectively communicates their services and values.',
    gbictTimeline: '2 months',
    gbictTeam: '3 developers',
    gbictChallenge1: 'Creating intuitive navigation structure',
    gbictChallenge2: 'Implementing accessibility standards',
    gbictChallenge3: 'Optimizing for multiple devices',
    gbictChallenge4: 'Integrating content management system',
    gbictSolution1: 'User-centered design approach',
    gbictSolution2: 'WCAG 2.1 compliance implementation',
    gbictSolution3: 'Mobile-first responsive design',
    gbictSolution4: 'Headless CMS integration',
    gbictResult1: '95% accessibility score',
    gbictResult2: '100% mobile compatibility',
    gbictResult3: '60% faster page load times',
    gbictResult4: '40% increase in user engagement',
    
    berkelAgentsTitle: 'Berkel AI Sales & Customer Agents',
    berkelAgentsDesc: 'Intelligent sales and customer service agents for Berkel Snijmachine operating across multiple channels with advanced automation capabilities.',
    berkelAgentsLongDesc: 'Berkel AI Agents revolutionize customer service and sales through intelligent automation. Our AI-powered agents handle customer inquiries, provide product recommendations, and manage sales processes across multiple communication channels.',
    berkelAgentsTimeline: '4 months',
    berkelAgentsTeam: '5 developers',
    berkelAgentsChallenge1: 'Training AI models for product knowledge',
    berkelAgentsChallenge2: 'Integrating multiple communication channels',
    berkelAgentsChallenge3: 'Ensuring natural conversation flow',
    berkelAgentsChallenge4: 'Maintaining brand consistency',
    berkelAgentsSolution1: 'Custom NLP model training',
    berkelAgentsSolution2: 'Multi-channel API integration',
    berkelAgentsSolution3: 'Conversational AI framework',
    berkelAgentsSolution4: 'Brand voice training algorithms',
    berkelAgentsResult1: '80% query resolution rate',
    berkelAgentsResult2: '24/7 customer support availability',
    berkelAgentsResult3: '65% reduction in response time',
    berkelAgentsResult4: '90% customer satisfaction score',
    
    quantumTitle: 'Quantum LLM Framework',
    quantumDesc: 'Cutting-edge quantum LLM framework designed to fine-tune large language models on quantum hardware and simulators for next-generation AI capabilities.',
    quantumLongDesc: 'Quantum LLM Framework represents the future of artificial intelligence, combining quantum computing principles with large language models. Our framework enables fine-tuning of LLMs on quantum hardware, unlocking unprecedented computational capabilities.',
    quantumTimeline: '8 months',
    quantumTeam: '7 developers',
    quantumChallenge1: 'Developing quantum-classical hybrid algorithms',
    quantumChallenge2: 'Optimizing for quantum hardware constraints',
    quantumChallenge3: 'Ensuring model accuracy and reliability',
    quantumChallenge4: 'Scaling to enterprise applications',
    quantumSolution1: 'Quantum variational algorithms',
    quantumSolution2: 'Hardware-aware optimization',
    quantumSolution3: 'Robust error correction mechanisms',
    quantumSolution4: 'Distributed quantum computing',
    quantumResult1: '10x faster training on quantum hardware',
    quantumResult2: '99.9% model accuracy maintenance',
    quantumResult3: '50% reduction in computational complexity',
    quantumResult4: 'Patent-pending quantum algorithms',
    
    kusorTitle: 'Kusor AI Agent Platform',
    kusorDesc: 'Revolutionary platform that enables users to create AI agents with simple prompts, featuring 600+ integrations and access to all edge AI models.',
    kusorLongDesc: 'Kusor AI Agent Platform democratizes AI agent creation through intuitive prompt-based interfaces. Our platform provides access to 600+ integrations and edge AI models, enabling users to build sophisticated AI agents without technical expertise.',
    kusorTimeline: '6 months',
    kusorTeam: '8 developers',
    kusorChallenge1: 'Creating intuitive prompt interfaces',
    kusorChallenge2: 'Integrating 600+ third-party services',
    kusorChallenge3: 'Optimizing for edge AI model deployment',
    kusorChallenge4: 'Ensuring platform scalability',
    kusorSolution1: 'Natural language processing engines',
    kusorSolution2: 'Comprehensive API marketplace',
    kusorSolution3: 'Edge computing optimization',
    kusorSolution4: 'Microservices architecture',
    kusorResult1: '95% user satisfaction rate',
    kusorResult2: '600+ active integrations',
    kusorResult3: '10,000+ AI agents created',
    kusorResult4: '99.9% platform uptime',
    
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

    // About
    aboutTitle: 'About Bright-Byte',
    aboutDescription: 'We are AI & Tech Specialists - hands-on builders with deep domain knowledge. Our cutting-edge technology company specializes in AI, quantum computing, and comprehensive digital solutions, delivering innovative solutions that drive business transformation.',
    
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
    
    // Success Modal and Toast Messages
    thankYouMessage: 'Thank you',
    successModalMessage: 'Your message has been successfully sent to our team. We appreciate your interest in Bright-Byte and will get back to you within',
    hoursResponse: '24 hours',
    confirmationEmailSent: 'Confirmation email sent to your inbox',
    continueExploring: 'Continue Exploring',
    callUs: 'Call us:',
    
    // Toast Error Messages
    emailServiceNotConfigured: 'Email service not configured yet. Please set up EmailJS credentials.',
    emailError: 'Email Error:',
    contactFormIssue: 'There was an issue with our contact form. Your email client has been opened as a backup. We apologize for the inconvenience.',
    
    // Additional Success Messages
    messageSuccessfullySent: 'Your message has been successfully sent to our team',
    appreciateInterest: 'We appreciate your interest in Bright-Byte',
    responseWithin: 'and will get back to you within',
    confirmationEmail: 'Confirmation email sent to your inbox',
    
    // About Page
    aboutPageTitle: 'About Bright-Byte',
    aboutPageSubtitle: 'Pioneering the Future of Technology',
    ourStoryTitle: 'Our Story',
    ourStoryParagraph1: 'Founded with a vision to bridge the gap between cutting-edge technology and real-world applications, Bright-Byte has emerged as a leading force in AI consulting, quantum computing, and software development.',
    ourStoryParagraph2: 'Our journey began with a simple belief: technology should empower businesses, not complicate them. Today, we\'re proud to be at the forefront of innovation, helping organizations transform their digital landscape.',
    getInTouchButton: 'Get In Touch',
    ourValuesTitle: 'Our Values',
    ourValuesSubtitle: 'The Principles That Drive Us',
    valueInnovationTitle: 'Innovation',
    valueInnovationDesc: 'We constantly push the boundaries of what\'s possible, exploring emerging technologies and creating solutions that set new industry standards.',
    valueCollaborationTitle: 'Collaboration',
    valueCollaborationDesc: 'We believe the best results come from working closely with our clients, understanding their unique challenges and co-creating tailored solutions.',
    valueExcellenceTitle: 'Excellence',
    valueExcellenceDesc: 'Every project receives our unwavering commitment to quality, attention to detail, and pursuit of perfection in both process and outcome.',
    valueCreativityTitle: 'Creativity',
    valueCreativityDesc: 'We approach complex problems with fresh perspectives, combining technical expertise with creative thinking to deliver innovative solutions.',
    ourMissionTitle: 'Our Mission',
    ourMissionDescription: 'To democratize advanced technology and make AI, quantum computing, and cutting-edge software development accessible to businesses of all sizes, empowering them to thrive in the digital age.',
    exploreServicesButton: 'Explore Our Services',
    
    // Cookie Consent
    cookieConsentTitle: 'We use cookies',
    cookieConsentDescription: 'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.',
    cookieAccept: 'Accept All',
    cookieDecline: 'Decline',
    
    // Consultation
    consultationAvailable: 'Available Now',
    consultationTitle: 'Free Technology Consultation',
    consultationSubtitle: 'Get Expert Advice on Your Next Project',
    consultationDescription: 'Book a free 30-minute consultation with our technology experts to discuss your project requirements, explore solutions, and get personalized recommendations.',
    consultationBenefit1: 'Expert technology guidance',
    consultationBenefit2: 'Personalized project roadmap',
    consultationBenefit3: 'Cost and timeline estimates',
    consultationBenefit4: 'No obligation, completely free',
    consultationButton: 'Book Free Consultation',
    consultationDuration: '30 minutes',
    consultationType: 'Video Call',
    consultationCoverTitle: 'What We\'ll Cover',
    consultationCover1: 'Project requirements analysis',
    consultationCover2: 'Technology stack recommendations',
    consultationCover3: 'Development approach & timeline',
    consultationCover4: 'Budget and resource planning'
  },
  nl: {
    // Navigation
    home: 'Home',
    services: 'Diensten',
    portfolio: 'Portfolio',
    about: 'Over Ons',
    contact: 'Contact',
    
    // Hero
    heroTitle: 'De Toekomst Vormen met',
    heroSubtitle: 'Geavanceerde Technologie',
    heroDescription: 'Pionier in AI-consulting, quantum computing en softwareontwikkeling om de digitale toekomst te versterken.',
    getStarted: 'Aan de Slag',
    learnMore: 'Meer Informatie',
    heroButtonText: 'Laten We Samen Uw Project Bouwen!',
    
    // Portfolio
    portfolioTitle: 'Innovatie in Actie',
    portfolioDescription: 'Ontdek onze geavanceerde projecten die de kracht van AI, quantum computing en geavanceerde automatiserings technologieën tonen.',
    portfolioCTA: 'Laten we samenwerken om uw innovatieve ideeën tot leven te brengen met geavanceerde technologieoplossingen.',
    
    // Portfolio Actions
    readMore: 'Lees Meer',
    viewLive: 'Bekijk Live',
    noProjectsFound: 'Geen Projecten Gevonden',
    noProjectsFoundDesc: 'Geen projecten gevonden voor de geselecteerde categorie.',
    viewAllProjects: 'Bekijk Alle Projecten',
    
    // Project Details
    projectChallenges: 'Uitdagingen',
    projectSolutions: 'Oplossingen',
    projectResults: 'Resultaten & Impact',
    projectTechnologies: 'Gebruikte Technologieën',
    projectTimeline: 'Tijdlijn',
    projectTeam: 'Teamgrootte',
    projectStatus: 'Status',
    backToPortfolio: 'Terug naar Portfolio',
    viewLiveProject: 'Bekijk Live Project',
    readyToStart: 'Klaar om Uw Project te Starten?',
    startYourProject: 'Start Uw Project',
    
    // Portfolio Project Names
    vettekTitle: 'Vettek - AI Wervingsplatform',
    vettekDesc: 'In-house ontwikkeld AI-aangedreven wervingsplatform dat het hele wervingsproces automatiseert van CV-parsing tot intelligente interviews, wat talentacquisitie revolutioneert.',
    vettekLongDesc: 'Vettek vertegenwoordigt een doorbraak in wervingstechnologie, gebruikmakend van geavanceerde AI-algoritmes om te transformeren hoe bedrijven talent ontdekken en evalueren. Ons platform elimineert traditionele wervingsvooroordelen terwijl het tijd-tot-hire drastisch vermindert door intelligente automatisering.',
    vettekTimeline: '6 maanden',
    vettekTeam: '5 ontwikkelaars',
    vettekChallenge1: 'Implementeren van accurate CV-parsing over meerdere formaten',
    vettekChallenge2: 'Creëren van realistische AI-interview simulaties',
    vettekChallenge3: 'Zorgen voor vooroordeel-vrije kandidaat evaluatie',
    vettekChallenge4: 'Schaalbaarheid van het platform voor enterprise klanten',
    vettekSolution1: 'Geavanceerde NLP-modellen voor documentanalyse',
    vettekSolution2: 'Conversational AI met natuurlijke taalverwerking',
    vettekSolution3: 'Ethische AI-frameworks en vooroordeel detectie',
    vettekSolution4: 'Cloud-native architectuur met auto-scaling',
    vettekResult1: '75% reductie in screening tijd',
    vettekResult2: '46% meer succesvolle aanwervingen',
    vettekResult3: '90% reductie in tijd-tot-hire',
    vettekResult4: 'Geëlimineerd onbewust vooroordeel in initiële screening',
    
    festiTitle: 'Festi - Festival Dating App',
    festiDesc: 'Mobiele applicatie exclusief voor festivalgangers met geverifieerde tickets, waardoor verbindingen en matches mogelijk zijn tussen mensen die dezelfde festivals bijwonen.',
    festiLongDesc: 'Festi revolutioneert festivalervaringen door betekenisvolle verbindingen te creëren tussen bezoekers. Ons mobiele platform gebruikt ticketverificatie om authentieke festivalganger interacties te waarborgen, wat een gemeenschap van muziek- en festivalenthousiasten bevordert.',
    festiTimeline: '4 maanden',
    festiTeam: '3 ontwikkelaars',
    festiChallenge1: 'Implementeren van veilig ticketverificatie systeem',
    festiChallenge2: 'Creëren van locatie-gebaseerde matching algoritmes',
    festiChallenge3: 'Bouwen van real-time chat functionaliteit',
    festiChallenge4: 'Zorgen voor gebruikersprivacy en veiligheid',
    festiSolution1: 'Blockchain-gebaseerde ticketverificatie',
    festiSolution2: 'GPS en beacon technologie integratie',
    festiSolution3: 'Real-time messaging infrastructuur',
    festiSolution4: 'Geavanceerde privacy beschermingsprotocollen',
    festiResult1: '85% gebruikersengagement rate',
    festiResult2: '92% succesvolle matches',
    festiResult3: 'Nul beveiligingsincidenten',
    festiResult4: '4.8/5 app store rating',
    
    knaapTitle: 'Knaap Slimme Automatisering',
    knaapDesc: 'Intelligent automatiseringssysteem voor Knaap dat lease-aanbiedingen automatisch verwerkt door slimme workflow automatisering en API-integraties.',
    knaapLongDesc: 'Knaap Slimme Automatisering transformeert het leaseproces door intelligente workflow automatisering. Ons systeem verwerkt automatisch lease-aanbiedingen, valideert aanvragen en stroomlijnt de hele klantreis van vraag tot goedkeuring.',
    knaapTimeline: '3 maanden',
    knaapTeam: '4 ontwikkelaars',
    knaapChallenge1: 'Integreren met meerdere lease-systemen',
    knaapChallenge2: 'Automatiseren van complexe beslissingsworkflows',
    knaapChallenge3: 'Zorgen voor data-nauwkeurigheid en compliance',
    knaapChallenge4: 'Schaalbaarheid voor hoogvolume verwerking',
    knaapSolution1: 'RESTful API-integraties',
    knaapSolution2: 'Regel-gebaseerde beslissingsengines',
    knaapSolution3: 'Real-time data validatie',
    knaapSolution4: 'Microservices architectuur',
    knaapResult1: '70% snellere verwerkingstijd',
    knaapResult2: '95% nauwkeurigheid in aanbieding generatie',
    knaapResult3: '50% reductie in handmatig werk',
    knaapResult4: '99.9% systeem uptime',
    
    berkelTitle: 'Berkel E-commerce Platform',
    berkelDesc: 'Complete e-commerce oplossing voor Berkel Snijmachine met SEO-optimalisatie en geïntegreerde social media campagnes voor verbeterde digitale aanwezigheid.',
    berkelLongDesc: 'Berkel E-commerce Platform levert een uitgebreide digitale oplossing voor Berkel Snijmachine, met geavanceerde e-commerce functionaliteit, SEO-optimalisatie en geïntegreerde social media marketing campagnes om online zichtbaarheid en verkoop te maximaliseren.',
    berkelTimeline: '5 maanden',
    berkelTeam: '6 ontwikkelaars',
    berkelChallenge1: 'Migreren van legacy systemen',
    berkelChallenge2: 'Implementeren van geavanceerde SEO-strategieën',
    berkelChallenge3: 'Integreren van social media campagnes',
    berkelChallenge4: 'Optimaliseren voor mobiele commerce',
    berkelSolution1: 'Modern e-commerce platform',
    berkelSolution2: 'Technische SEO implementatie',
    berkelSolution3: 'Social media API-integraties',
    berkelSolution4: 'Responsive design optimalisatie',
    berkelResult1: '200% toename in organisch verkeer',
    berkelResult2: '150% boost in online verkoop',
    berkelResult3: '85% verbetering in pagina laadtijd',
    berkelResult4: '300% groei in social media engagement',
    
    gbictTitle: 'GBICT Website',
    gbictDesc: 'Aangepast ontworpen en ontwikkelde website voor GBICT, met moderne UI/UX-ontwerp en responsieve ontwikkeling voor optimale gebruikerservaring.',
    gbictLongDesc: 'GBICT Website toont moderne webdesign principes met focus op gebruikerservaring en toegankelijkheid. Ons op maat gebouwde platform biedt GBICT een professionele online aanwezigheid die hun diensten en waarden effectief communiceert.',
    gbictTimeline: '2 maanden',
    gbictTeam: '3 ontwikkelaars',
    gbictChallenge1: 'Creëren van intuïtieve navigatiestructuur',
    gbictChallenge2: 'Implementeren van toegankelijkheidsstandaarden',
    gbictChallenge3: 'Optimaliseren voor meerdere apparaten',
    gbictChallenge4: 'Integreren van content management systeem',
    gbictSolution1: 'Gebruiker-gerichte design benadering',
    gbictSolution2: 'WCAG 2.1 compliance implementatie',
    gbictSolution3: 'Mobile-first responsive design',
    gbictSolution4: 'Headless CMS integratie',
    gbictResult1: '95% toegankelijkheidsscore',
    gbictResult2: '100% mobiele compatibiliteit',
    gbictResult3: '60% snellere pagina laadtijden',
    gbictResult4: '40% toename in gebruikersengagement',
    
    berkelAgentsTitle: 'Berkel AI Verkoop & Klantagenten',
    berkelAgentsDesc: 'Intelligente verkoop- en klantenservice agenten voor Berkel Snijmachine die opereren over meerdere kanalen met geavanceerde automatiseringsmogelijkheden.',
    berkelAgentsLongDesc: 'Berkel AI Agenten revolutioneren klantenservice en verkoop door intelligente automatisering. Onze AI-aangedreven agenten behandelen klantvragen, bieden productaanbevelingen en beheren verkoopprocessen over meerdere communicatiekanalen.',
    berkelAgentsTimeline: '4 maanden',
    berkelAgentsTeam: '5 ontwikkelaars',
    berkelAgentsChallenge1: 'Trainen van AI-modellen voor productkennis',
    berkelAgentsChallenge2: 'Integreren van meerdere communicatiekanalen',
    berkelAgentsChallenge3: 'Zorgen voor natuurlijke gespreksstroom',
    berkelAgentsChallenge4: 'Behouden van merkconsistentie',
    berkelAgentsSolution1: 'Aangepaste NLP model training',
    berkelAgentsSolution2: 'Multi-channel API integratie',
    berkelAgentsSolution3: 'Conversational AI framework',
    berkelAgentsSolution4: 'Merkstem training algoritmes',
    berkelAgentsResult1: '80% query resolutie rate',
    berkelAgentsResult2: '24/7 klantenservice beschikbaarheid',
    berkelAgentsResult3: '65% reductie in responstijd',
    berkelAgentsResult4: '90% klanttevredenheidsscore',
    
    quantumTitle: 'Quantum LLM Framework',
    quantumDesc: 'Geavanceerd quantum LLM framework ontworpen om grote taalmodellen te fine-tunen op quantum hardware en simulatoren voor next-generation AI-mogelijkheden.',
    quantumLongDesc: 'Quantum LLM Framework vertegenwoordigt de toekomst van kunstmatige intelligentie, waarbij quantum computing principes worden gecombineerd met grote taalmodellen. Ons framework maakt fine-tuning van LLMs op quantum hardware mogelijk, wat ongekende computationele mogelijkheden ontsluit.',
    quantumTimeline: '8 maanden',
    quantumTeam: '7 ontwikkelaars',
    quantumChallenge1: 'Ontwikkelen van quantum-klassieke hybride algoritmes',
    quantumChallenge2: 'Optimaliseren voor quantum hardware beperkingen',
    quantumChallenge3: 'Zorgen voor model nauwkeurigheid en betrouwbaarheid',
    quantumChallenge4: 'Schaalbaarheid naar enterprise applicaties',
    quantumSolution1: 'Quantum variational algoritmes',
    quantumSolution2: 'Hardware-aware optimalisatie',
    quantumSolution3: 'Robuuste foutcorrectie mechanismen',
    quantumSolution4: 'Gedistribueerde quantum computing',
    quantumResult1: '10x snellere training op quantum hardware',
    quantumResult2: '99.9% model nauwkeurigheid behoud',
    quantumResult3: '50% reductie in computationele complexiteit',
    quantumResult4: 'Patent-pending quantum algoritmes',
    
    kusorTitle: 'Kusor AI Agent Platform',
    kusorDesc: 'Revolutionair platform dat gebruikers in staat stelt AI-agenten te creëren met eenvoudige prompts, met 600+ integraties en toegang tot alle edge AI-modellen.',
    kusorLongDesc: 'Kusor AI Agent Platform democratiseert AI-agent creatie door intuïtieve prompt-gebaseerde interfaces. Ons platform biedt toegang tot 600+ integraties en edge AI-modellen, waardoor gebruikers geavanceerde AI-agenten kunnen bouwen zonder technische expertise.',
    kusorTimeline: '6 maanden',
    kusorTeam: '8 ontwikkelaars',
    kusorChallenge1: 'Creëren van intuïtieve prompt interfaces',
    kusorChallenge2: 'Integreren van 600+ third-party diensten',
    kusorChallenge3: 'Optimaliseren voor edge AI model deployment',
    kusorChallenge4: 'Zorgen voor platform schaalbaarheid',
    kusorSolution1: 'Natuurlijke taalverwerking engines',
    kusorSolution2: 'Uitgebreide API marketplace',
    kusorSolution3: 'Edge computing optimalisatie',
    kusorSolution4: 'Microservices architectuur',
    kusorResult1: '95% gebruikers tevredenheid rate',
    kusorResult2: '600+ actieve integraties',
    kusorResult3: '10,000+ AI-agenten gecreëerd',
    kusorResult4: '99.9% platform uptime',
    
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

    // About
    aboutTitle: 'Over Bright-Byte',
    aboutDescription: 'Wij zijn AI & Tech Specialisten - hands-on bouwers met diepe domeinkennis. Ons geavanceerde technologiebedrijf is gespecialiseerd in AI, quantum computing en uitgebreide digitale oplossingen, en levert innovatieve oplossingen die bedrijfstransformatie stimuleren.',
    
    // Contact
    contactTitle: 'Neem Contact Op',
    contactDescription: 'Klaar om uw bedrijf te transformeren met geavanceerde technologie?',
    contactUs: 'Contact Opnemen',
    
    // Contact Page
    sendMessageTitle: 'Stuur ons een Bericht',
    contactInfoTitle: 'Contact Informatie',
    firstName: 'Voornaam',
    lastName: 'Achternaam',
    email: 'E-mail',
    subject: 'Onderwerp',
    message: 'Bericht',
    sendMessage: 'Bericht Verzenden',
    sending: 'Verzenden...',
    messageSent: 'Bericht succesvol verzonden! We nemen binnenkort contact met u op.',
    
    // Form placeholders
    firstNamePlaceholder: 'Jan',
    lastNamePlaceholder: 'Jansen',
    emailPlaceholder: 'jan@voorbeeld.nl',
    subjectPlaceholder: 'Hoe kunnen we helpen?',
    messagePlaceholder: 'Vertel ons over uw project...',
    
    // Contact Info Headers
    emailTitle: 'E-mail',
    phoneTitle: 'Telefoon',
    locationTitle: 'Locatie',
    
    // Quick Response Guarantee
    quickResponseTitle: 'Snelle Responstijd Garantie',
    quickResponseDescription: 'We zijn trots op snelle communicatie. U ontvangt onmiddellijk een automatische bevestigingsmail en ons team zal persoonlijk reageren op uw vraag binnen 24 uur.',
    
    // Footer
    footerDescription: 'Innovatieve technologieoplossingen die bedrijven transformeren met geavanceerde AI, quantum computing en digitale oplossingen.',
    footerServicesTitle: 'Diensten',
    footerContactTitle: 'Contact',
    footerLocationTitle: 'Locatie',
    footerCopyright: '2025 Bright-Byte. Alle rechten voorbehouden.',
    privacyPolicy: 'Privacybeleid',
    
    // Success Modal and Toast Messages
    thankYouMessage: 'Dank je wel',
    successModalMessage: 'Uw bericht is succesvol verzonden naar ons team. We waarderen uw interesse in Bright-Byte en nemen contact op binnen',
    hoursResponse: '24 uur',
    confirmationEmailSent: 'Bevestigingsmail verzonden naar uw inbox',
    continueExploring: 'Blijf Verkennen',
    callUs: 'Bel ons:',
    
    // Toast Error Messages
    emailServiceNotConfigured: 'E-mailservice nog niet geconfigureerd. Stel EmailJS-referenties in.',
    emailError: 'E-mail Fout:',
    contactFormIssue: 'Er was een probleem met ons contactformulier. Uw e-mailclient is geopend als back-up. Onze excuses voor het ongemak.',
    
    // Additional Success Messages
    messageSuccessfullySent: 'Uw bericht is succesvol verzonden naar ons team',
    appreciateInterest: 'We waarderen uw interesse in Bright-Byte',
    responseWithin: 'en nemen contact op binnen',
    confirmationEmail: 'Bevestigingsmail verzonden naar uw inbox',
    
    // Consultation
    consultationAvailable: 'Nu Beschikbaar',
    consultationTitle: 'Gratis Technologie Consultatie',
    consultationSubtitle: 'Krijg Expert Advies voor Uw Volgende Project',
    consultationDescription: 'Boek een gratis 30-minuten consultatie met onze technologie-experts om uw projectvereisten te bespreken, oplossingen te verkennen en gepersonaliseerde aanbevelingen te krijgen.',
    consultationBenefit1: 'Expert technologie begeleiding',
    consultationBenefit2: 'Gepersonaliseerde project roadmap',
    consultationBenefit3: 'Kosten en tijdlijn schattingen',
    consultationBenefit4: 'Geen verplichtingen, volledig gratis',
    consultationButton: 'Boek Gratis Consultatie',
    consultationDuration: '30 minuten',
    consultationType: 'Video Gesprek',
    consultationCoverTitle: 'Wat We Zullen Bespreken',
    consultationCover1: 'Project vereisten analyse',
    consultationCover2: 'Technologie stack aanbevelingen',
    consultationCover3: 'Ontwikkelingsaanpak & tijdlijn',
    consultationCover4: 'Budget en resource planning',
    
    // About Page
    aboutPageTitle: 'Over Bright-Byte',
    aboutPageSubtitle: 'De Toekomst van Technologie Vormgeven',
    ourStoryTitle: 'Ons Verhaal',
    ourStoryParagraph1: 'Opgericht met de visie om de kloof tussen geavanceerde technologie en praktische toepassingen te overbruggen, is Bright-Byte uitgegroeid tot een leidende kracht in AI-consultancy, quantum computing en softwareontwikkeling.',
    ourStoryParagraph2: 'Onze reis begon met een eenvoudige overtuiging: technologie zou bedrijven moeten versterken, niet compliceren. Vandaag zijn we trots om aan de voorhoede van innovatie te staan en organisaties te helpen hun digitale landschap te transformeren.',
    getInTouchButton: 'Neem Contact Op',
    ourValuesTitle: 'Onze Waarden',
    ourValuesSubtitle: 'De Principes Die Ons Drijven',
    valueInnovationTitle: 'Innovatie',
    valueInnovationDesc: 'We duwen constant de grenzen van wat mogelijk is, verkennen opkomende technologieën en creëren oplossingen die nieuwe industriestandaarden zetten.',
    valueCollaborationTitle: 'Samenwerking',
    valueCollaborationDesc: 'We geloven dat de beste resultaten voortkomen uit nauwe samenwerking met onze klanten, het begrijpen van hun unieke uitdagingen en het samen creëren van op maat gemaakte oplossingen.',
    valueExcellenceTitle: 'Excellentie',
    valueExcellenceDesc: 'Elk project krijgt onze onwrikbare toewijding aan kwaliteit, aandacht voor detail en streven naar perfectie in zowel proces als resultaat.',
    valueCreativityTitle: 'Creativiteit',
    valueCreativityDesc: 'We benaderen complexe problemen met frisse perspectieven, combineren technische expertise met creatief denken om innovatieve oplossingen te leveren.',
    ourMissionTitle: 'Onze Missie',
    ourMissionDescription: 'Om geavanceerde technologie te democratiseren en AI, quantum computing en geavanceerde softwareontwikkeling toegankelijk te maken voor bedrijven van alle groottes, zodat ze kunnen gedijen in het digitale tijdperk.',
    exploreServicesButton: 'Verken Onze Diensten',
    
    // Cookie Consent
    cookieConsentTitle: 'We gebruiken cookies',
    cookieConsentDescription: 'We gebruiken cookies om uw browse-ervaring te verbeteren, gepersonaliseerde content te leveren en ons verkeer te analyseren. Door op "Alles Accepteren" te klikken, stemt u in met ons gebruik van cookies.',
    cookieAccept: 'Alles Accepteren',
    cookieDecline: 'Weigeren'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get language from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['en', 'nl'].includes(savedLanguage)) {
      return savedLanguage;
    }
    
    // If no saved language, try to detect from browser
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'nl') return 'nl';
    return 'en';
  });
  
  const [isLoading, setIsLoading] = useState(false);

  const handleLanguageChange = (newLang: Language) => {
    setIsLoading(true);
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
    
    // Refresh the page to ensure all content is properly translated
    setTimeout(() => {
      window.location.reload();
    }, 100);
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
      <div className="transition-all duration-300">
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
