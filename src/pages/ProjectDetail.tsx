import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, ExternalLink, Clock, User, Calendar, 
  CheckCircle, Images, Heart, Sparkles, MessageCircle, Ticket, 
  Zap, ChevronLeft, ChevronRight, Play, Pause, Globe, Brain, 
  BarChart3, Mic, Target, Users, Award, Palette, Plug, Key, 
  Monitor, Workflow, Shield, ShoppingCart, Share2, Search,
  Settings, CreditCard, MapPin, Cloud, Box, Moon, Layers
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Phone Mockup Component
const PhoneMockup = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`relative ${className}`}>
    {/* Phone Frame */}
    <div className="relative bg-gray-900 rounded-[3rem] p-2 shadow-2xl border-4 border-gray-800">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl z-10" />
      {/* Screen */}
      <div className="relative bg-black rounded-[2.5rem] overflow-hidden">
        {children}
      </div>
    </div>
    {/* Reflection */}
    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-t from-black/20 to-transparent rounded-full blur-xl" />
  </div>
);

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const screenshotTransition = {
    duration: 0.55,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    setCurrentScreenshot(0);
  }, [slug]);

  // Auto-play screenshots
  useEffect(() => {
    if (!isAutoPlaying) return;
    const project = getProjects()[slug as keyof ReturnType<typeof getProjects>];
    if (!project?.screenshots?.length) return;
    
    const interval = setInterval(() => {
      setCurrentScreenshot((prev) => 
        prev === (project.screenshots?.length || 1) - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slug]);

  useEffect(() => {
    const project = getProjects()[slug as keyof ReturnType<typeof getProjects>];
    if (!project?.screenshots?.length) return;

    project.screenshots.forEach((screenshot) => {
      const image = new Image();
      image.decoding = 'async';
      image.src = screenshot.src;
    });
  }, [slug]);

  const getProjects = () => ({
    'lemon-boost': {
      id: 1,
      title: "Lemon Boost",
      tagline: "AI-Powered Career Coaching",
      description: "AI-powered career coaching platform for a Japanese startup empowering women to practice essential workplace skills with AI opponents across cultural contexts.",
      longDescription: "Lemon Boost (Boostyy) is an AI-powered career development platform built for a Japanese startup focused on empowering women in the workplace. Bright-Byte developed the full Candidate and Admin platforms where candidates can practice critical professional skills — handling interruptions, dealing with rejection, building credibility, saying no professionally — through real-time voice conversations with AI opponents (Recruiters, Managers, Customers) across different cultural business settings (Japan, USA, Europe, Asia). Powered by state-of-the-art NVIDIA Conversational AI with 150ms latency, the platform delivers natural, real-time voice interactions. We also integrated emotion recognition to track candidate behavior and provide data-driven feedback on confidence, social intelligence, and technical skills.",
      image: "/lemon-boost.png",
      technologies: ["NVIDIA Conversational AI", "Emotion Recognition", "React", "Node.js", "Real-time Voice", "AI Agents", "WebRTC", "Python"],
      category: "Software & AI",
      portfolioCategory: "software-ai",
      status: "Live",
      link: null as string | null,
      featured: true,
      timeline: "5 months",
      team: "3 developers",
      accentColor: "#F5B800",
      features: [
        { icon: 'Zap', title: "150ms Latency", desc: "Real-time voice conversations with NVIDIA AI" },
        { icon: 'Globe', title: "4 Cultures", desc: "Japanese, US, European & Asian contexts" },
        { icon: 'Brain', title: "Emotion AI", desc: "Real-time sentiment & confidence tracking" },
        { icon: 'BarChart3', title: "Analytics", desc: "Progress tracking with detailed insights" },
      ],
      stats: [
        { value: "150ms", label: "AI Response Time" },
        { value: "93%", label: "Emotion Accuracy" },
        { value: "5", label: "Practice Scenarios" },
        { value: "3", label: "Opponent Types" },
      ],
      challenges: [
        "Achieving sub-150ms latency for natural real-time voice conversations with AI",
        "Building culturally-aware AI opponents that adapt to Japanese, US, European, and Asian business contexts",
        "Integrating emotion recognition to analyze candidate behavior during live sessions",
        "Creating a comprehensive admin platform for managing scenarios, opponents, skills, and analytics"
      ],
      solutions: [
        "Integrated NVIDIA Conversational AI model for state-of-the-art voice interaction with 150ms response latency",
        "Designed multi-cultural AI personas with culture-specific communication styles and difficulty levels",
        "Built real-time emotion recognition pipeline analyzing candidate audio for sentiment and confidence tracking",
        "Developed full admin dashboard with user management, session analytics, scenario builder, and opponent configuration"
      ],
      results: [
        "150ms voice response latency — natural, real-time AI conversations",
        "93% accuracy in emotion recognition across candidate sessions",
        "5 practice scenarios with 3 opponent types across 4 cultural settings",
        "Complete candidate analytics: confidence, social intelligence, and technical skill tracking"
      ],
      screenshots: [
        { src: '/portfolio/lemon-boost/candidate-dashboard.png', caption: 'Candidate Dashboard — track sessions, practice time, ratings, and skill progress' },
        { src: '/portfolio/lemon-boost/live-session.png', caption: 'Live Practice Session — real-time AI voice conversation with live transcript' },
        { src: '/portfolio/lemon-boost/practice-type.png', caption: 'Practice Type Selection — choose from scenarios like handling interruptions' },
        { src: '/portfolio/lemon-boost/opponent-type.png', caption: 'Opponent & Difficulty — practice with Recruiters, Managers, or Customers' },
        { src: '/portfolio/lemon-boost/culture.png', caption: 'Cultural Context — simulate business conversations across different regions' },
        { src: '/portfolio/lemon-boost/emotion-recognition.png', caption: 'Emotion Recognition — real-time analysis of candidate sentiment' },
        { src: '/portfolio/lemon-boost/skill-feedback.png', caption: 'Skills & Feedback — detailed scoring on professional skills' },
        { src: '/portfolio/lemon-boost/admin-dashboard.png', caption: 'Admin Dashboard — manage users, sessions, and analytics' },
      ]
    },
    'connaxis-talent-hub': {
      id: 2,
      title: "Connaxis Talent Hub",
      description: "Intelligent talent management platform that streamlines recruitment, onboarding, and workforce analytics through AI-driven matching.",
      longDescription: "Connaxis Talent Hub is a comprehensive talent management platform that leverages AI to connect the right people with the right opportunities. From intelligent candidate matching and automated screening to onboarding workflows and workforce analytics, the platform transforms how organizations discover, evaluate, and retain top talent.",
      image: "/connaxis-logo.png",
      technologies: ["AI", "React", "Node.js", "Machine Learning", "HR Tech", "NLP"],
      category: "Software & AI",
      portfolioCategory: "software-ai",
      status: "Live",
      link: null as string | null,
      featured: true,
      timeline: "5 months",
      team: "3 developers",
      challenges: [
        "Building accurate AI-driven candidate matching",
        "Integrating with existing HR systems and job boards",
        "Creating intuitive dashboards for recruiters",
        "Ensuring data privacy and GDPR compliance"
      ],
      solutions: [
        "Advanced NLP for resume parsing and skill extraction",
        "Unified API layer for HR system integrations",
        "Role-based dashboards with real-time analytics",
        "End-to-end encryption and GDPR-compliant data handling"
      ],
      results: [
        "70% reduction in time-to-hire",
        "85% candidate-role match accuracy",
        "Streamlined onboarding reducing admin work by 50%",
        "Full GDPR compliance across all workflows"
      ]
    },
    'logoleague': {
      id: 3,
      title: "LogoLeague",
      description: "AI-powered branding and logo design platform that generates professional brand identities in minutes for startups and businesses.",
      longDescription: "LogoLeague empowers businesses to create professional brand identities without the need for a design agency. Powered by generative AI, the platform produces high-quality logos, brand guidelines, and visual assets tailored to each business's unique identity — making professional branding accessible and affordable for startups and SMBs.",
      image: "/design.png",
      technologies: ["AI", "Generative Design", "React", "Brand Identity", "SaaS", "Cloud"],
      category: "Software & AI",
      portfolioCategory: "software-ai",
      status: "Live",
      link: null as string | null,
      featured: true,
      timeline: "4 months",
      team: "2 developers",
      challenges: [
        "Training generative models for diverse design styles",
        "Ensuring unique, non-repetitive brand outputs",
        "Building an intuitive design customization interface",
        "Scaling the platform for high-volume generation"
      ],
      solutions: [
        "Fine-tuned generative AI models on curated design datasets",
        "Uniqueness verification and style diversity algorithms",
        "Drag-and-drop editor with real-time AI adjustments",
        "Cloud-native architecture with auto-scaling infrastructure"
      ],
      results: [
        "Professional logos generated in under 2 minutes",
        "95% customer satisfaction with design quality",
        "10x more affordable than traditional design agencies",
        "Thousands of unique brand identities created"
      ]
    },
    'festi-festival-dating-app': {
      id: 4,
      title: "FestiMatch",
      tagline: "Match & Fest Together",
      description: "Festival-exclusive dating app where only verified ticket holders can connect — powered by AI matching with Autoencoder architecture.",
      longDescription: "FestiMatch is a festival-exclusive dating app that ensures only verified ticket holders can join and connect. No outsiders — you only match with people attending the same festival as you. Powered by an advanced AI matching algorithm built on Autoencoder architecture, the app learns user preferences and festival behavior to deliver highly relevant matches. Features include swipe-based encounters with mood badges (Feeling flirty, Up to adventure, Thinking longterm), a People directory to explore who's at the festival (All, Online, Just joined), real-time chat with text and voice messages, a Likes page to see who's interested, and Festi Pro premium for unlimited access. The entire experience is designed around the energy and spontaneity of festival culture.",
      image: "/festi.png",
      coverImage: "/portfolio/festi/cover.png",
      technologies: ["React Native", "AI Matching", "Autoencoder Architecture", "Real-time Chat", "Voice Messages", "Ticket Verification", "WebSocket"],
      category: "Software & AI",
      portfolioCategory: "software-ai",
      status: "Coming Soon",
      link: null as string | null,
      featured: true,
      timeline: "4 months",
      team: "2 developers",
      accentColor: "#e91e8c", // Pink/magenta brand color
      features: [
        { icon: Ticket, title: "Ticket Verified", desc: "Only verified festival attendees can join" },
        { icon: Heart, title: "AI Matching", desc: "Autoencoder-powered preference learning" },
        { icon: Sparkles, title: "Mood Badges", desc: "Express your vibe: flirty, adventurous, serious" },
        { icon: MessageCircle, title: "Voice Chat", desc: "Text & voice messages for noisy festivals" },
      ],
      challenges: [
        "Building a secure festival ticket verification system to ensure only genuine attendees can access the platform",
        "Designing an AI matching algorithm that captures festival-specific behavior and preferences using Autoencoder architecture",
        "Implementing real-time chat with voice message support for noisy festival environments",
        "Creating a mood-based discovery system that reflects the spontaneous, dynamic energy of festivals"
      ],
      solutions: [
        "Festival ticket scanning and verification pipeline — no valid ticket, no access to the app",
        "Custom Autoencoder-based matching model trained on user preferences, mood selection, and engagement patterns",
        "WebSocket-powered real-time messaging with voice recording and playback for loud festival settings",
        "Dynamic mood badges (Feeling flirty, Up to adventure, Open to friendship, Thinking longterm) that influence matching and visibility"
      ],
      results: [
        "100% verified festival attendees — zero outsiders on the platform",
        "AI-powered match relevance through Autoencoder-driven preference learning",
        "Real-time conversations with text and voice messages",
        "Mood-driven discovery increasing meaningful connections at festivals"
      ],
      screenshots: [
        { src: '/portfolio/festi/screen-1.png', caption: 'Match Meet Fest — the FestiMatch onboarding experience' },
        { src: '/portfolio/festi/screen-2.png', caption: 'Festival ticket access only — find your vibe people, no outsiders allowed' },
        { src: '/portfolio/festi/screen-3.png', caption: 'Encounters — swipe through profiles with mood badges' },
        { src: '/portfolio/festi/screen-4.png', caption: 'Explore who\'s here — browse festival attendees' },
        { src: '/portfolio/festi/screen-5.png', caption: 'It\'s a match! — make your first move and start chatting instantly' },
        { src: '/portfolio/festi/screen-6.png', caption: 'Share your mood — set your vibe' },
        { src: '/portfolio/festi/screen-7.png', caption: 'Real-time chat — text and voice messages' },
        { src: '/portfolio/festi/screen-8.png', caption: 'Explore your likes — see who likes you' },
      ]
    },
    'kusor-ai-agent-platform': {
      id: 5,
      title: "Kusor AI Agent Platform",
      description: "Revolutionary platform that enables users to create AI agents with simple prompts, featuring 600+ integrations and access to all edge AI models.",
      longDescription: "Kusor democratizes AI agent creation by allowing anyone to build sophisticated AI agents through simple prompts. With 600+ integrations and access to cutting-edge AI models, users can create powerful automation solutions without coding expertise.",
      image: "/kusor.png",
      technologies: ["Machine Learning", "AI Agents", "600+ Integrations", "Edge AI", "Software Development"],
      category: "Software & AI",
      portfolioCategory: "software-ai",
      status: "Coming Soon",
      link: null as string | null,
      featured: true,
      timeline: "6 months",
      team: "5 developers",
      challenges: [
        "Creating intuitive prompt-to-agent system",
        "Managing 600+ API integrations",
        "Optimizing edge AI performance",
        "Ensuring agent reliability and safety"
      ],
      solutions: [
        "Natural language processing for agent creation",
        "Unified API management system",
        "Edge computing optimization",
        "Comprehensive testing and validation"
      ],
      results: [
        "No-code AI agent creation",
        "600+ pre-built integrations",
        "Edge-optimized performance",
        "Enterprise-grade reliability"
      ]
    },
    'connaxis-automate': {
      id: 6,
      title: "Connaxis Automation Studio",
      tagline: "Design Automation Platform",
      description: "Design automation platform for releasing and managing creative tools with admin console, license management, and custom Adobe plugin.",
      longDescription: "Connaxis Automation Studio is a design automation platform built for Connaxis to release, manage, and distribute automation tools to their creative teams. The platform features a Designer Portal where team members sign in, browse available tools, and launch them directly in the browser or download desktop installers for macOS. Tools include Proof Automate (automated design deliverable conversion and PDF proof generation) and PDF Name Lister (batch file name management). An Admin Console handles license requests, approvals, and tool management. We also built a custom Adobe plugin that integrates directly into the designer workflow.",
      image: "/connaxis-logo.png",
      technologies: ["React", "Node.js", "Adobe Plugin", "License Management", "Desktop App (macOS)", "Automation", "PDF Processing"],
      category: "Software & AI",
      portfolioCategory: "software-ai",
      status: "Live",
      link: null as string | null,
      featured: false,
      timeline: "4 months",
      team: "2 developers",
      accentColor: "#F97316",
      features: [
        { icon: 'Palette', title: "Designer Portal", desc: "Browse and launch creative tools" },
        { icon: 'Plug', title: "Adobe Plugin", desc: "Native Creative Cloud integration" },
        { icon: 'Key', title: "License Management", desc: "Request and approve licenses" },
        { icon: 'Monitor', title: "Desktop + Web", desc: "Browser or local installers" },
      ],
      stats: [
        { value: "80%", label: "Faster Workflows" },
        { value: "50+", label: "Enterprise Tools" },
        { value: "99.9%", label: "Uptime" },
        { value: "4mo", label: "Time to Launch" },
      ],
      challenges: [
        "Building a platform that supports both browser-based and desktop tool launches across different operating systems",
        "Creating a license management system with request, approval, and distribution workflows",
        "Developing a custom Adobe plugin for seamless integration into existing designer workflows",
        "Designing a scalable tool release pipeline that supports versioning, updates, and multiple deployment targets"
      ],
      solutions: [
        "Web-based tool launcher with browser execution and macOS desktop installer downloads",
        "Admin console with license request/approval workflow, tool visibility controls, and user management",
        "Custom Adobe plugin enabling proof upload, annotation review, and export — all inside the creative environment",
        "Versioned tool release system with WEB/LOCAL/Browser-ready deployment targets and automatic update checks"
      ],
      results: [
        "Curated toolset eliminating manual design file processing for creative teams",
        "Streamlined license management with instant approval and distribution",
        "Seamless Adobe plugin integration reducing context-switching for designers",
        "Browser and desktop launch options giving teams flexibility in how they work"
      ],
      screenshots: [
        { src: '/portfolio/connaxis-automate/designer-dashboard.png', caption: 'Connaxis Automation Studio — designer sign-in portal with curated toolset, browser or desktop launch' },
        { src: '/portfolio/connaxis-automate/admin-console.png', caption: 'Tool Launcher — browse available tools, request licenses, and launch in browser or install locally' },
        { src: '/portfolio/connaxis-automate/license-management.png', caption: 'Available Tools — PDF Name Lister and Proof Automate with version info and launch options' },
        { src: '/portfolio/connaxis-automate/adobe-plugin.png', caption: 'Proof Automate — custom Adobe plugin with proof upload, annotation review, and export workflow' },
      ]
    },
    'berkel-ecommerce-platform': {
      id: 7,
      title: "Berkel Snijmachines",
      tagline: "Premium E-commerce Platform",
      description: "Full-scale Shopify e-commerce platform for a premium Dutch slicing machine brand with multi-language localization, 7 product collections, SEO optimization, and social media marketing driving EU expansion.",
      longDescription: "We partnered with Berkelsnijmachine — a premium Dutch brand specializing in authentic Berkel slicing machines, knives, and accessories — to build their complete digital commerce platform. The Shopify store features 7 curated product collections, advanced price filtering, a personalization service, and dedicated B2B pages for businesses. The multi-language website includes product videos, brand storytelling, maintenance guides, and a full support system.",
      image: "/berkel.png",
      technologies: ["Shopify", "E-commerce", "SEO", "Multi-language Localization", "Social Media Marketing", "EU Expansion", "Product Categorization"],
      category: "Marketing",
      portfolioCategory: "marketing",
      status: "Live",
      link: null as string | null,
      featured: true,
      timeline: "5 months",
      team: "2 developers",
      accentColor: "#B91C1C",
      features: [
        { icon: 'ShoppingCart', title: "Shopify Plus", desc: "Enterprise e-commerce" },
        { icon: 'Globe', title: "Multi-language", desc: "EU localization" },
        { icon: 'Search', title: "SEO Strategy", desc: "Organic growth" },
        { icon: 'Share2', title: "Social Media", desc: "Brand campaigns" },
      ],
      stats: [
        { value: "300%", label: "Traffic Growth" },
        { value: "150%", label: "Conversion Lift" },
        { value: "7", label: "Collections" },
        { value: "5mo", label: "To Launch" },
      ],
      challenges: [
        "Building a scalable Shopify e-commerce platform with 7 product collections and advanced filtering for an international audience",
        "Implementing multi-language localization (Dutch primary) to support EU market expansion across multiple regions",
        "Developing SEO strategies for both product pages and brand content to drive organic traffic",
        "Creating a cohesive digital brand experience connecting the heritage Berkel identity with modern e-commerce"
      ],
      solutions: [
        "Custom Shopify storefront with 7 curated collections, price filtering, product videos, and a personalization service",
        "Multi-language localization with Dutch as primary language and EU language support for cross-border commerce",
        "Technical SEO optimization across product listings, brand content, and category pages for maximum organic reach",
        "Strategic social media campaigns and brand storytelling connecting Berkel's heritage with modern audience engagement"
      ],
      results: [
        "300% increase in organic traffic through SEO and content strategy",
        "Successful expansion into multiple EU markets via localized storefronts",
        "150% improvement in conversion rates with optimized product pages",
        "7 curated product collections driving cross-sell and higher average order value"
      ],
      screenshots: [
        { src: '/portfolio/berkel/website.png', caption: 'Berkelsnijmachine homepage — premium brand experience with hero showcase' },
        { src: '/portfolio/berkel/shop.png', caption: 'Shopify e-commerce store — 7 product collections with price filtering' },
      ]
    },
    'kobra-bikes': {
      id: 8,
      title: "Kobra Bikes",
      tagline: "Premium Fatbike Brand",
      description: "Professional fatbike brand website with interactive product configurator, accessory selection, financing options, and multi-language localization.",
      longDescription: "We built Kobra Bikes a complete digital presence for their premium fatbike brand. The website features an immersive hero experience, a comprehensive product assortment, and a step-by-step interactive configurator where customers select their KOBRA model, choose from accessories, and proceed to order. The platform includes financing options, test drive booking, a dealer locator, customer reviews with Trustpilot integration, and multi-language localization.",
      image: "/kobra.webp",
      technologies: ["Website Development", "Product Configurator", "E-commerce", "Multi-language", "UI/UX Design", "Trustpilot Integration"],
      category: "Marketing",
      portfolioCategory: "marketing",
      status: "Live",
      link: null as string | null,
      featured: true,
      timeline: "3 months",
      team: "2 developers",
      accentColor: "#EA580C",
      features: [
        { icon: 'Settings', title: "Configurator", desc: "Interactive bike builder" },
        { icon: 'Globe', title: "Multi-language", desc: "EU localization" },
        { icon: 'CreditCard', title: "Financing", desc: "Flexible payment options" },
        { icon: 'MapPin', title: "Dealer Locator", desc: "Find local dealers" },
      ],
      stats: [
        { value: "€2,799", label: "Starting Price" },
        { value: "7+", label: "Accessories" },
        { value: "3mo", label: "To Launch" },
        { value: "EU", label: "Markets" },
      ],
      challenges: [
        "Building an intuitive step-by-step product configurator with accessory selection and real-time pricing",
        "Implementing multi-language localization for Dutch, English, and other EU markets",
        "Creating a bold, high-energy brand experience that communicates the premium KOBRA identity",
        "Integrating financing options, test drive booking, dealer locator, and Trustpilot reviews into a seamless user journey"
      ],
      solutions: [
        "Custom product configurator with model selection, 7+ accessories, real-time pricing, and multi-step checkout flow",
        "Full multi-language localization supporting Dutch primary with English and additional EU languages",
        "Black and orange brand design system with immersive hero video, high-quality product imagery, and bold typography",
        "Integrated financing calculator, test drive booking system, dealer map, and live Trustpilot review widget"
      ],
      results: [
        "Interactive configurator driving higher engagement and accessory attach rates",
        "Multi-market reach across EU through localized storefronts",
        "Premium brand experience building customer confidence and trust",
        "Seamless purchase journey from configurator to checkout with financing options"
      ],
      screenshots: [
        { src: '/portfolio/kobra/website.png', caption: 'Kobra Bikes homepage — immersive hero with brand video and bold orange CTAs' },
        { src: '/portfolio/kobra/configurator.png', caption: 'Product configurator — KOBRA V1.2 Fatbike with accessory selection' },
      ]
    },
    'gbict-website': {
      id: 9,
      title: "GBICT",
      tagline: "Cloud & IT Services",
      description: "Immersive dark-themed website for a cloud & IT company featuring 3D animations, motion design, workplace management showcases, and modern sidebar navigation.",
      longDescription: "We designed and developed an immersive website for GBICT — a cloud and IT services company with the tagline 'We sustain +Cloud'. The site features a striking dark theme with teal/turquoise accent gradients, creating a premium tech-forward atmosphere.",
      image: "/gbict.jpeg",
      technologies: ["Web Design", "UI/UX", "3D Animation", "Motion Design", "React", "Dark Theme"],
      category: "Marketing",
      portfolioCategory: "marketing",
      status: "Live",
      link: null as string | null,
      featured: false,
      timeline: "2 months",
      team: "2 developers",
      accentColor: "#14B8A6",
      features: [
        { icon: 'Cloud', title: "Cloud Services", desc: "Sustainable cloud solutions" },
        { icon: 'Box', title: "3D Animation", desc: "Interactive visualizations" },
        { icon: 'Moon', title: "Dark Mode", desc: "Seamless theme switching" },
        { icon: 'Layers', title: "Motion Design", desc: "Fluid UI animations" },
      ],
      stats: [
        { value: "2mo", label: "Time to Launch" },
        { value: "4", label: "Sections" },
        { value: "3D", label: "Interactive" },
        { value: "100%", label: "Dark Theme" },
      ],
      challenges: [
        "Designing an immersive dark-themed experience with complex visual effects and 3D animations",
        "Building a unique vertical sidebar navigation that works seamlessly across all sections",
        "Implementing motion design showcases and 3D interactive elements without sacrificing performance",
        "Creating a cohesive visual identity that communicates GBICT's cloud and IT expertise"
      ],
      solutions: [
        "Custom dark theme with teal/turquoise gradient accents, atmospheric backgrounds, and smooth transitions",
        "Vertical sidebar navigation with context-aware links, social icons, dark/light mode toggle, and scroll indicators",
        "Optimized 3D Earth model and motion design animations using modern rendering techniques for smooth performance",
        "Full-screen immersive sections with laptop mockups, dashboard previews, and educational content presentations"
      ],
      results: [
        "Immersive brand experience that positions GBICT as a premium cloud & IT provider",
        "Interactive 3D and motion design showcases demonstrating technical capabilities",
        "Dark/light mode support with seamless theme transitions",
        "Modern sidebar navigation increasing content discoverability and engagement"
      ],
      screenshots: [
        { src: '/portfolio/gbict/screen-1.png', caption: 'GBICT hero — "We sustain +Cloud" with immersive dark theme' },
        { src: '/portfolio/gbict/screen-2.png', caption: 'Workplace Management — laptop mockup showcasing GBICT dashboard' },
        { src: '/portfolio/gbict/screen-3.png', caption: 'Motion Design — fluid animations enhancing user experience' },
        { src: '/portfolio/gbict/screen-4.png', caption: '3D Animation — interactive Earth cross-section model' },
      ]
    }
  });

  const projects = getProjects();
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
            <p className="text-gray-400 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </motion.button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Special themed layouts
  const isFesti = slug === 'festi-festival-dating-app';
  const isLemonBoost = slug === 'lemon-boost';
  const isConnaxisAutomate = slug === 'connaxis-automate';
  const isBerkel = slug === 'berkel-ecommerce-platform';
  const isKobra = slug === 'kobra-bikes';
  const isGbict = slug === 'gbict-website';
  
  const getAccentColor = () => {
    if (isFesti) return '#e91e8c';
    if (isLemonBoost) return '#F5B800';
    if (isConnaxisAutomate) return '#F97316';
    if (isBerkel) return '#B91C1C';
    if (isKobra) return '#EA580C';
    if (isGbict) return '#14B8A6';
    return '#3b82f6';
  };
  
  const accentColor = getAccentColor();

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "Coming Soon":
        return `bg-[${accentColor}]/10 text-[${isFesti ? '#f472b6' : '#60a5fa'}] border-[${accentColor}]/20`;
      case "In Development":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      default:
        return "bg-white/5 text-gray-500 border-white/10";
    }
  };

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => 
      prev === (project.screenshots?.length || 1) - 1 ? 0 : prev + 1
    );
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => 
      prev === 0 ? (project.screenshots?.length || 1) - 1 : prev - 1
    );
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black">
        {/* Background effects */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full blur-[200px]"
            style={{ 
              background: isFesti 
                ? 'radial-gradient(circle, rgba(233,30,140,0.15) 0%, transparent 70%)' 
                : isLemonBoost 
                  ? 'radial-gradient(circle, rgba(245,184,0,0.12) 0%, transparent 70%)'
                  : isConnaxisAutomate
                    ? 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)'
                    : isBerkel
                      ? 'radial-gradient(circle, rgba(185,28,28,0.12) 0%, transparent 70%)'
                      : isKobra
                        ? 'radial-gradient(circle, rgba(234,88,12,0.12) 0%, transparent 70%)'
                        : isGbict
                          ? 'radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 70%)'
                          : 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)' 
            }}
          />
          {isFesti && (
            <>
              <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px]" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[150px]" />
            </>
          )}
          {isLemonBoost && (
            <>
              <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-yellow-500/8 rounded-full blur-[150px]" />
              <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-amber-500/8 rounded-full blur-[150px]" />
            </>
          )}
          {isConnaxisAutomate && (
            <>
              <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-orange-500/8 rounded-full blur-[150px]" />
              <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-amber-500/8 rounded-full blur-[150px]" />
            </>
          )}
          {isBerkel && (
            <>
              <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-red-500/8 rounded-full blur-[150px]" />
              <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-rose-500/8 rounded-full blur-[150px]" />
            </>
          )}
          {isKobra && (
            <>
              <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-orange-500/8 rounded-full blur-[150px]" />
              <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-amber-500/8 rounded-full blur-[150px]" />
            </>
          )}
          {isGbict && (
            <>
              <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-teal-500/8 rounded-full blur-[150px]" />
              <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[150px]" />
            </>
          )}
        </div>

        {/* Custom Hero Sections */}
        {isFesti ? (
          /* Festi Hero */
          <div className="relative min-h-screen flex items-center">
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Portfolio
                  </Link>

                  <div className="flex items-center gap-3 mb-6">
                    <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border ${getStatusStyle(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-sm text-gray-400">{project.category}</span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <img src={project.image} alt="" className="w-16 h-16 rounded-2xl" />
                    <div>
                      <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight">
                        FestiMatch
                      </h1>
                      <p className="text-xl" style={{ color: accentColor }}>
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
                    {project.longDescription}
                  </p>

                  <div className="flex gap-8 mb-10">
                    <div>
                      <div className="text-3xl font-bold text-white">{project.timeline}</div>
                      <div className="text-sm text-gray-500">Development</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">{project.team}</div>
                      <div className="text-sm text-gray-500">Team Size</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold" style={{ color: accentColor }}>100%</div>
                      <div className="text-sm text-gray-500">Verified Users</div>
                    </div>
                  </div>

                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 rounded-full font-semibold text-white inline-flex items-center gap-2"
                      style={{ background: `linear-gradient(135deg, ${accentColor}, #9333ea)` }}
                    >
                      Start Your Project
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </motion.div>

                {/* Right - Phone Showcase */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative flex justify-center"
                >
                  <div className="relative">
                    <div 
                      className="absolute inset-0 blur-3xl opacity-50"
                      style={{ background: `radial-gradient(circle, ${accentColor}40 0%, transparent 70%)` }}
                    />
                    
                    <PhoneMockup className="relative z-10 w-72 sm:w-80">
                      <div className="relative aspect-[9/19]">
                        <AnimatePresence mode="sync" initial={false}>
                          <motion.img
                            key={currentScreenshot}
                            src={project.screenshots?.[currentScreenshot]?.src}
                            alt={project.screenshots?.[currentScreenshot]?.caption}
                            initial={{ opacity: 0, scale: 1.015, filter: 'blur(8px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, scale: 0.985, filter: 'blur(6px)' }}
                            transition={screenshotTransition}
                            className="absolute inset-0 w-full h-full object-contain"
                            loading="eager"
                            decoding="async"
                            draggable={false}
                          />
                        </AnimatePresence>
                      </div>
                      
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {project.screenshots?.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentScreenshot(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              idx === currentScreenshot 
                                ? 'w-6' 
                                : 'bg-white/40 hover:bg-white/60'
                            }`}
                            style={{ 
                              backgroundColor: idx === currentScreenshot ? accentColor : undefined 
                            }}
                          />
                        ))}
                      </div>
                    </PhoneMockup>

                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -top-4 -right-4 bg-gradient-to-br from-pink-500 to-purple-600 p-3 rounded-2xl shadow-xl"
                    >
                      <Heart className="w-6 h-6 text-white fill-white" />
                    </motion.div>
                    
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                      className="absolute -bottom-4 -left-4 bg-gray-900 border border-gray-700 p-3 rounded-2xl shadow-xl"
                    >
                      <Sparkles className="w-6 h-6" style={{ color: accentColor }} />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ) : isLemonBoost ? (
          /* Lemon Boost Hero */
          <div className="relative min-h-screen flex items-center">
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Portfolio
                  </Link>

                  <div className="flex items-center gap-3 mb-6">
                    <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border ${getStatusStyle(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-sm text-gray-400">{project.category}</span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: accentColor }}>
                      <img src={project.image} alt="" className="w-12 h-12 object-contain" />
                    </div>
                    <div>
                      <h1 className="text-5xl sm:text-6xl font-bold text-white tracking-tight">
                        Lemon Boost
                      </h1>
                      <p className="text-xl" style={{ color: accentColor }}>
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
                    {project.longDescription}
                  </p>

                  {/* Stats Grid */}
                  {project.stats && (
                    <div className="grid grid-cols-4 gap-4 mb-10">
                      {project.stats.map((stat: any, idx: number) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold" style={{ color: accentColor }}>{stat.value}</div>
                          <div className="text-xs text-gray-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 rounded-full font-semibold text-black inline-flex items-center gap-2"
                      style={{ background: accentColor }}
                    >
                      Start Your Project
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </motion.div>

                {/* Right - Dashboard Showcase */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative">
                    {/* Background Glow */}
                    <div 
                      className="absolute inset-0 blur-3xl opacity-30"
                      style={{ background: `radial-gradient(circle, ${accentColor}60 0%, transparent 70%)` }}
                    />
                    
                    {/* Browser Window Mockup */}
                    <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
                      {/* Browser Header */}
                      <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500" />
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="flex-1 text-center">
                          <div className="inline-flex items-center gap-2 bg-gray-900 px-3 py-1 rounded-md text-xs text-gray-400">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: accentColor }} />
                            boostyy.app/dashboard
                          </div>
                        </div>
                      </div>
                      
                      {/* Screenshot */}
                      <div className="relative aspect-[16/10] bg-gray-950">
                        <AnimatePresence mode="sync" initial={false}>
                          <motion.img
                            key={currentScreenshot}
                            src={project.screenshots?.[currentScreenshot]?.src}
                            alt={project.screenshots?.[currentScreenshot]?.caption}
                            initial={{ opacity: 0, scale: 1.012, filter: 'blur(6px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, scale: 0.988, filter: 'blur(4px)' }}
                            transition={screenshotTransition}
                            className="absolute inset-0 w-full h-full object-contain bg-gray-950"
                            loading="eager"
                            decoding="async"
                            draggable={false}
                          />
                        </AnimatePresence>
                        
                        {/* AI Character Overlay */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.5, type: "spring" }}
                          className="absolute bottom-4 right-4 w-20 h-20"
                        >
                          <img 
                            src="/portfolio/lemon-boost/listening.gif" 
                            alt="AI Character" 
                            className="w-full h-full object-contain drop-shadow-2xl"
                          />
                        </motion.div>
                      </div>
                    </div>



                    {/* Screenshot Indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                      {project.screenshots?.slice(0, 4).map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentScreenshot(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentScreenshot 
                              ? 'w-6' 
                              : 'bg-gray-600 hover:bg-gray-500'
                          }`}
                          style={{ 
                            backgroundColor: idx === currentScreenshot ? accentColor : undefined 
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ) : isConnaxisAutomate ? (
          /* Connaxis Automate Hero */
          <div className="relative min-h-screen flex items-center">
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Portfolio
                  </Link>

                  <div className="flex items-center gap-3 mb-6">
                    <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border ${getStatusStyle(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-sm text-gray-400">{project.category}</span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white">
                      <img src={project.image} alt="" className="w-12 h-12 object-contain" />
                    </div>
                    <div>
                      <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                        Connaxis Automation
                      </h1>
                      <p className="text-xl" style={{ color: accentColor }}>
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
                    {project.longDescription}
                  </p>

                  {/* Stats Grid */}
                  {project.stats && (
                    <div className="grid grid-cols-4 gap-4 mb-10">
                      {project.stats.map((stat: any, idx: number) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold" style={{ color: accentColor }}>{stat.value}</div>
                          <div className="text-xs text-gray-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 rounded-full font-semibold text-white inline-flex items-center gap-2"
                      style={{ background: accentColor }}
                    >
                      Start Your Project
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </motion.div>

                {/* Right - Dashboard Showcase */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative">
                    {/* Background Glow */}
                    <div 
                      className="absolute inset-0 blur-3xl opacity-30"
                      style={{ background: `radial-gradient(circle, ${accentColor}60 0%, transparent 70%)` }}
                    />
                    
                    {/* Browser Window Mockup */}
                    <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
                      {/* Browser Header */}
                      <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500" />
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="flex-1 text-center">
                          <div className="inline-flex items-center gap-2 bg-gray-900 px-3 py-1 rounded-md text-xs text-gray-400">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: accentColor }} />
                            connaxis.studio
                          </div>
                        </div>
                      </div>
                      
                      {/* Screenshot */}
                      <div className="relative aspect-[16/10] bg-gray-950">
                        <AnimatePresence mode="sync" initial={false}>
                          <motion.img
                            key={currentScreenshot}
                            src={project.screenshots?.[currentScreenshot]?.src}
                            alt={project.screenshots?.[currentScreenshot]?.caption}
                            initial={{ opacity: 0, scale: 1.012, filter: 'blur(6px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, scale: 0.988, filter: 'blur(4px)' }}
                            transition={screenshotTransition}
                            className="absolute inset-0 w-full h-full object-contain"
                            loading="eager"
                            decoding="async"
                            draggable={false}
                          />
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Screenshot Indicators */}
                    <div className="flex justify-center gap-2 mt-6">
                      {project.screenshots?.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentScreenshot(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentScreenshot 
                              ? 'w-6' 
                              : 'bg-gray-600 hover:bg-gray-500'
                          }`}
                          style={{ 
                            backgroundColor: idx === currentScreenshot ? accentColor : undefined 
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ) : isBerkel ? (
          /* Berkel Hero */
          <div className="relative min-h-screen flex items-center">
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Portfolio
                  </Link>

                  <div className="flex items-center gap-3 mb-6">
                    <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border ${getStatusStyle(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-sm text-gray-400">{project.category}</span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center p-2">
                      <img src={project.image} alt="" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                        Berkel
                      </h1>
                      <p className="text-xl" style={{ color: accentColor }}>
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
                    {project.longDescription}
                  </p>

                  {/* Stats Grid */}
                  {project.stats && (
                    <div className="grid grid-cols-4 gap-4 mb-10">
                      {project.stats.map((stat: any, idx: number) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold" style={{ color: accentColor }}>{stat.value}</div>
                          <div className="text-xs text-gray-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 rounded-full font-semibold text-white inline-flex items-center gap-2"
                      style={{ background: accentColor }}
                    >
                      Start Your Project
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </motion.div>

                {/* Right - Website Showcase */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative">
                    {/* Background Glow */}
                    <div 
                      className="absolute inset-0 blur-3xl opacity-30"
                      style={{ background: `radial-gradient(circle, ${accentColor}60 0%, transparent 70%)` }}
                    />
                    
                    {/* Browser Window Mockup */}
                    <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
                      {/* Browser Header */}
                      <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500" />
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="flex-1 text-center">
                          <div className="inline-flex items-center gap-2 bg-gray-900 px-3 py-1 rounded-md text-xs text-gray-400">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: accentColor }} />
                            berkelsnijmachines.nl
                          </div>
                        </div>
                      </div>
                      
                      {/* Screenshot */}
                      <div className="relative aspect-[16/10] bg-gray-950">
                        <AnimatePresence mode="sync" initial={false}>
                          <motion.img
                            key={currentScreenshot}
                            src={project.screenshots?.[currentScreenshot]?.src}
                            alt={project.screenshots?.[currentScreenshot]?.caption}
                            initial={{ opacity: 0, scale: 1.012, filter: 'blur(6px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, scale: 0.988, filter: 'blur(4px)' }}
                            transition={screenshotTransition}
                            className="absolute inset-0 w-full h-full object-contain"
                            loading="eager"
                            decoding="async"
                            draggable={false}
                          />
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Screenshot Indicators */}
                    <div className="flex justify-center gap-2 mt-6">
                      {project.screenshots?.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentScreenshot(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentScreenshot 
                              ? 'w-6' 
                              : 'bg-gray-600 hover:bg-gray-500'
                          }`}
                          style={{ 
                            backgroundColor: idx === currentScreenshot ? accentColor : undefined 
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ) : isKobra ? (
          /* Kobra Bikes Hero */
          <div className="relative min-h-screen flex items-center">
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Portfolio
                  </Link>

                  <div className="flex items-center gap-3 mb-6">
                    <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border ${getStatusStyle(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-sm text-gray-400">{project.category}</span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-black border border-gray-800 flex items-center justify-center p-2">
                      <img src={project.image} alt="" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                        Kobra Bikes
                      </h1>
                      <p className="text-xl" style={{ color: accentColor }}>
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
                    {project.longDescription}
                  </p>

                  {/* Stats Grid */}
                  {project.stats && (
                    <div className="grid grid-cols-4 gap-4 mb-10">
                      {project.stats.map((stat: any, idx: number) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold" style={{ color: accentColor }}>{stat.value}</div>
                          <div className="text-xs text-gray-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 rounded-full font-semibold text-white inline-flex items-center gap-2"
                      style={{ background: accentColor }}
                    >
                      Start Your Project
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </motion.div>

                {/* Right - Website Showcase */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative">
                    {/* Background Glow */}
                    <div 
                      className="absolute inset-0 blur-3xl opacity-30"
                      style={{ background: `radial-gradient(circle, ${accentColor}60 0%, transparent 70%)` }}
                    />
                    
                    {/* Browser Window Mockup */}
                    <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
                      {/* Browser Header */}
                      <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500" />
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="flex-1 text-center">
                          <div className="inline-flex items-center gap-2 bg-gray-900 px-3 py-1 rounded-md text-xs text-gray-400">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: accentColor }} />
                            kobrabikes.com
                          </div>
                        </div>
                      </div>
                      
                      {/* Screenshot */}
                      <div className="relative aspect-[16/10] bg-gray-950">
                        <AnimatePresence mode="sync" initial={false}>
                          <motion.img
                            key={currentScreenshot}
                            src={project.screenshots?.[currentScreenshot]?.src}
                            alt={project.screenshots?.[currentScreenshot]?.caption}
                            initial={{ opacity: 0, scale: 1.012, filter: 'blur(6px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, scale: 0.988, filter: 'blur(4px)' }}
                            transition={screenshotTransition}
                            className="absolute inset-0 w-full h-full object-contain"
                            loading="eager"
                            decoding="async"
                            draggable={false}
                          />
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Screenshot Indicators */}
                    <div className="flex justify-center gap-2 mt-6">
                      {project.screenshots?.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentScreenshot(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentScreenshot 
                              ? 'w-6' 
                              : 'bg-gray-600 hover:bg-gray-500'
                          }`}
                          style={{ 
                            backgroundColor: idx === currentScreenshot ? accentColor : undefined 
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ) : isGbict ? (
          /* GBICT Hero */
          <div className="relative min-h-screen flex items-center">
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Portfolio
                  </Link>

                  <div className="flex items-center gap-3 mb-6">
                    <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border ${getStatusStyle(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-sm text-gray-400">{project.category}</span>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center p-2">
                      <img src={project.image} alt="" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                        GBICT
                      </h1>
                      <p className="text-xl" style={{ color: accentColor }}>
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-lg">
                    {project.longDescription}
                  </p>

                  {/* Stats Grid */}
                  {project.stats && (
                    <div className="grid grid-cols-4 gap-4 mb-10">
                      {project.stats.map((stat: any, idx: number) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold" style={{ color: accentColor }}>{stat.value}</div>
                          <div className="text-xs text-gray-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 rounded-full font-semibold text-white inline-flex items-center gap-2"
                      style={{ background: accentColor }}
                    >
                      Start Your Project
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </motion.div>

                {/* Right - Website Showcase */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative">
                    {/* Background Glow */}
                    <div 
                      className="absolute inset-0 blur-3xl opacity-30"
                      style={{ background: `radial-gradient(circle, ${accentColor}60 0%, transparent 70%)` }}
                    />
                    
                    {/* Browser Window Mockup */}
                    <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
                      {/* Browser Header */}
                      <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                        <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500" />
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="flex-1 text-center">
                          <div className="inline-flex items-center gap-2 bg-gray-900 px-3 py-1 rounded-md text-xs text-gray-400">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: accentColor }} />
                            gbict.nl
                          </div>
                        </div>
                      </div>
                      
                      {/* Screenshot */}
                      <div className="relative aspect-[16/10] bg-gray-950">
                        <AnimatePresence mode="sync" initial={false}>
                          <motion.img
                            key={currentScreenshot}
                            src={project.screenshots?.[currentScreenshot]?.src}
                            alt={project.screenshots?.[currentScreenshot]?.caption}
                            initial={{ opacity: 0, scale: 1.012, filter: 'blur(6px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, scale: 0.988, filter: 'blur(4px)' }}
                            transition={screenshotTransition}
                            className="absolute inset-0 w-full h-full object-contain"
                            loading="eager"
                            decoding="async"
                            draggable={false}
                          />
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Screenshot Indicators */}
                    <div className="flex justify-center gap-2 mt-6">
                      {project.screenshots?.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentScreenshot(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentScreenshot 
                              ? 'w-6' 
                              : 'bg-gray-600 hover:bg-gray-500'
                          }`}
                          style={{ 
                            backgroundColor: idx === currentScreenshot ? accentColor : undefined 
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ) : (
          /* Standard Hero for other projects */
          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-10"
            >
              <Link
                to={project.portfolioCategory ? `/portfolio/category/${project.portfolioCategory}` : '/portfolio'}
                className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to {project.category}
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border ${getStatusStyle(project.status)}`}>
                    {project.status}
                  </span>
                  <span className="text-gray-500">•</span>
                  <span className="text-sm text-gray-400">{project.category}</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                  {project.title}
                </h1>

                <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                  {project.longDescription}
                </p>

                <div className="grid grid-cols-3 gap-6 mb-10">
                  <div className="bg-gray-900/50 border border-gray-800 p-4 text-center rounded-xl">
                    <Clock className="w-5 h-5 text-blue-500 mx-auto mb-2" />
                    <div className="text-lg font-semibold text-white">{project.timeline}</div>
                    <div className="text-xs text-gray-500">Timeline</div>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800 p-4 text-center rounded-xl">
                    <User className="w-5 h-5 text-blue-500 mx-auto mb-2" />
                    <div className="text-lg font-semibold text-white">{project.team}</div>
                    <div className="text-xs text-gray-500">Team</div>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800 p-4 text-center rounded-xl">
                    <Calendar className="w-5 h-5 text-blue-500 mx-auto mb-2" />
                    <div className="text-lg font-semibold text-white">{project.status}</div>
                    <div className="text-xs text-gray-500">Status</div>
                  </div>
                </div>

                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Project
                    </motion.button>
                  </a>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className={`w-full h-96 bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 flex items-center justify-center ${slug === 'kusor-ai-agent-platform' ? 'bg-white' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain p-6"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* Features Section (Themed projects) */}
        {(isFesti || isLemonBoost || isConnaxisAutomate || isBerkel || isKobra || isGbict) && project.features && (
          <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-gray-400">
                {isFesti ? 'Everything you need to find your festival match' : 'Powerful features for career development'}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.features.map((feature, index) => {
                // Icon mapping for string icons
                const iconMap: Record<string, any> = { 
                  Zap, Globe, Brain, BarChart3, Mic, Target, Users, Award,
                  Palette, Plug, Key, Monitor, Workflow, Shield,
                  ShoppingCart, Share2, Search,
                  Settings, CreditCard, MapPin,
                  Cloud, Box, Moon, Layers
                };
                const IconComponent = (isLemonBoost || isConnaxisAutomate || isBerkel || isKobra || isGbict)
                  ? iconMap[feature.icon as string] || Zap
                  : feature.icon;
                
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-900/50 border border-gray-800 p-6 rounded-2xl text-center hover:border-gray-700 transition-colors group"
                    style={{ '--hover-border': `${accentColor}40` } as React.CSSProperties}
                  >
                    <div 
                      className="w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center transition-colors group-hover:scale-110"
                      style={{ backgroundColor: `${accentColor}20` }}
                    >
                      <IconComponent className="w-7 h-7" style={{ color: accentColor }} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-16">
          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 border border-gray-800 p-8 rounded-2xl mb-8"
          >
            <h2 className="text-xl font-semibold text-white mb-6">Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-medium rounded-full border transition-colors"
                  style={{ 
                    backgroundColor: (isFesti || isLemonBoost || isConnaxisAutomate || isBerkel || isKobra || isGbict) ? `${accentColor}15` : 'rgba(59,130,246,0.1)',
                    borderColor: (isFesti || isLemonBoost || isConnaxisAutomate || isBerkel || isKobra || isGbict) ? `${accentColor}30` : 'rgba(59,130,246,0.2)',
                    color: isFesti ? '#f472b6' : isLemonBoost ? '#F5B800' : isConnaxisAutomate ? '#F97316' : isBerkel ? '#B91C1C' : isKobra ? '#EA580C' : isGbict ? '#14B8A6' : '#60a5fa'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 border border-gray-800 p-8 rounded-2xl"
            >
              <h2 className="text-xl font-semibold text-white mb-6">Challenges</h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-400 text-sm leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-900/50 border border-gray-800 p-8 rounded-2xl"
            >
              <h2 className="text-xl font-semibold text-white mb-6">Solutions</h2>
              <ul className="space-y-4">
                {project.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div 
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: accentColor }}
                    />
                    <span className="text-gray-400 text-sm leading-relaxed">{solution}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 border border-gray-800 p-8 rounded-2xl mb-16"
          >
            <h2 className="text-xl font-semibold text-white mb-6">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.results.map((result, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-sm leading-relaxed">{result}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Screenshots Gallery - Festi gets special mobile showcase */}
          {project.screenshots && project.screenshots.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Images className="w-5 h-5" style={{ color: accentColor }} />
                  <h2 className="text-xl font-semibold text-white">
                    {isFesti ? 'App Screenshots' : (isLemonBoost || isConnaxisAutomate || isBerkel || isKobra || isGbict) ? 'Platform Screenshots' : 'Screenshots'}
                  </h2>
                </div>
                
                {(isFesti || isLemonBoost || isConnaxisAutomate || isBerkel || isKobra || isGbict) && (
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    {isAutoPlaying ? 'Pause' : 'Play'}
                  </button>
                )}
              </div>

              {(isFesti || isLemonBoost || isConnaxisAutomate || isBerkel || isKobra || isGbict) ? (
                // Themed screenshot gallery with carousel
                <div className="relative">
                  <div className="overflow-hidden rounded-2xl">
                    <motion.div 
                      className="flex gap-4"
                      animate={{ x: -currentScreenshot * (isFesti ? 280 : 700) }}
                      transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.55 }}
                    >
                      {project.screenshots.map((screenshot, index) => (
                        <motion.div
                          key={index}
                          className={`flex-shrink-0 transition-all duration-300 ${
                            index === currentScreenshot ? 'scale-100 opacity-100' : 'scale-95 opacity-50'
                          }`}
                          onClick={() => setCurrentScreenshot(index)}
                          style={{ width: isFesti ? 280 : 700 }}
                        >
                          {isFesti ? (
                            <PhoneMockup className="w-64">
                              <img
                                src={screenshot.src}
                                alt={screenshot.caption}
                                className="w-full aspect-[9/19] object-contain"
                              />
                            </PhoneMockup>
                          ) : (
                            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
                              <img
                                src={screenshot.src}
                                alt={screenshot.caption}
                                className="w-full object-contain"
                              />
                            </div>
                          )}
                          <p className="mt-4 text-sm text-gray-400 text-center max-w-full">
                            {screenshot.caption}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-center gap-4 mt-8">
                    <button
                      onClick={prevScreenshot}
                      className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    <div className="flex gap-2">
                      {project.screenshots.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentScreenshot(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentScreenshot ? 'w-8' : 'bg-gray-600 hover:bg-gray-500'
                          }`}
                          style={{ 
                            backgroundColor: idx === currentScreenshot ? accentColor : undefined 
                          }}
                        />
                      ))}
                    </div>
                    
                    <button
                      onClick={nextScreenshot}
                      className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ) : (
                // Standard grid for other projects
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.screenshots.map((screenshot, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden group hover:border-gray-700 transition-colors"
                    >
                      <div className="relative bg-[#0a0a12] overflow-hidden">
                        <img
                          src={screenshot.src}
                          alt={screenshot.caption}
                          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-400 leading-relaxed">{screenshot.caption}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div 
              className="p-8 md:p-12 text-center rounded-3xl border"
              style={{ 
                background: isFesti 
                  ? 'linear-gradient(135deg, rgba(233,30,140,0.1) 0%, rgba(147,51,234,0.1) 100%)' 
                  : (isLemonBoost || isConnaxisAutomate || isBerkel || isKobra || isGbict)
                    ? `linear-gradient(135deg, ${accentColor}15 0%, ${accentColor}08 100%)`
                    : 'rgba(59,130,246,0.05)',
                borderColor: isFesti ? 'rgba(233,30,140,0.2)' : (isLemonBoost || isConnaxisAutomate || isBerkel || isKobra || isGbict) ? `${accentColor}30` : 'rgba(59,130,246,0.2)'
              }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to start your project?
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Let&apos;s collaborate to bring your innovative ideas to life with cutting-edge technology solutions.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2"
                  style={{ 
                    background: isFesti 
                      ? `linear-gradient(135deg, ${accentColor}, #9333ea)` 
                      : (isLemonBoost || isConnaxisAutomate || isBerkel || isKobra || isGbict)
                        ? accentColor
                        : 'linear-gradient(135deg, #3b82f6, #2563eb)',
                    color: (isLemonBoost || isConnaxisAutomate || isBerkel || isKobra || isGbict) ? 'black' : 'white'
                  }}
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetail;
