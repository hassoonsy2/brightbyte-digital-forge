import {
  BarChart3,
  Bot,
  Brain,
  Code,
  Globe,
  Palette,
  Search,
  Share2,
  Smartphone,
  Zap,
} from 'lucide-react';

export const servicesData = [
  {
    id: 'ai-consulting',
    icon: Brain,
    title: 'AI Consulting',
    description:
      'From strategy to production: we design practical AI programs that improve operations, decision-making, and customer experience.',
    gradient: 'from-blue-500/80 to-cyan-400/80',
    image: '/AI.png',
    focus: 'Roadmaps, governance, and AI adoption',
    deliveryTime: '2-4 weeks to pilot',
    outcome: 'Up to 3x team productivity in core workflows',
    highlights: [
      'AI opportunity mapping with ROI scoring',
      'Architecture and model/vendor selection',
      'Security, compliance, and change-management rollout',
    ],
  },
  {
    id: 'software-development',
    icon: Code,
    title: 'Software Development',
    description:
      'Custom platforms and internal systems built for scale, reliability, and long-term maintainability.',
    gradient: 'from-blue-600/80 to-indigo-500/80',
    image: '/software.png',
    focus: 'Business-critical systems and platforms',
    deliveryTime: '6-12 weeks for MVP',
    outcome: 'Faster delivery cycles with enterprise-grade quality',
    highlights: [
      'Product architecture and technical planning',
      'API-first development with secure integrations',
      'CI/CD, observability, and documentation handoff',
    ],
  },
  {
    id: 'automation',
    icon: Zap,
    title: 'Automation',
    description:
      'Automate repetitive work across sales, support, finance, and operations with robust AI-assisted workflows.',
    gradient: 'from-cyan-500/80 to-blue-500/80',
    image: '/automation.png',
    focus: 'Workflow automation and AI agents',
    deliveryTime: '2-6 weeks',
    outcome: 'Up to 80% reduction in manual repetitive tasks',
    highlights: [
      'Process audits and automation blueprinting',
      'RPA/API/agent orchestration across tools',
      'Exception handling, guardrails, and monitoring',
    ],
  },
  {
    id: 'machine-learning',
    icon: Bot,
    title: 'Machine Learning',
    description:
      'Predictive and intelligent systems trained on your data to improve forecasting, classification, and optimization.',
    gradient: 'from-indigo-500/80 to-blue-500/80',
    image: '/Machine_learning.png',
    focus: 'Predictive analytics and custom ML models',
    deliveryTime: '4-10 weeks',
    outcome: 'Higher prediction accuracy and better decisions',
    highlights: [
      'Data preparation and feature engineering',
      'Model training, validation, and explainability',
      'Production deployment with drift monitoring',
    ],
  },
  {
    id: 'web-development',
    icon: Globe,
    title: 'Web Development',
    description:
      'High-performance websites and web apps designed to convert, rank, and scale across devices and markets.',
    gradient: 'from-blue-500/80 to-sky-400/80',
    image: '/software.png',
    focus: 'Conversion-focused and SEO-ready web builds',
    deliveryTime: '4-10 weeks',
    outcome: 'Faster load times and stronger conversion rates',
    highlights: [
      'Responsive UX and component-driven frontend',
      'CMS and backend integration where needed',
      'Performance budgets and Core Web Vitals optimization',
    ],
  },
  {
    id: 'mobile-development',
    icon: Smartphone,
    title: 'Mobile Development',
    description:
      'Native-like iOS and Android experiences with scalable backend services and smooth user journeys.',
    gradient: 'from-blue-500/80 to-cyan-500/80',
    image: '/mobiel.png',
    focus: 'Cross-platform and app growth foundations',
    deliveryTime: '8-14 weeks',
    outcome: 'Higher retention with reliable mobile performance',
    highlights: [
      'Product-led app planning and MVP scoping',
      'React Native/Expo implementation and QA',
      'Analytics, push flows, and release support',
    ],
  },
  {
    id: 'data-marketing',
    icon: BarChart3,
    title: 'Data Marketing',
    description:
      'Growth programs driven by measurement, experimentation, and clear attribution from channel to revenue.',
    gradient: 'from-cyan-500/80 to-blue-600/80',
    image: '/marketing.png',
    focus: 'Full-funnel growth and channel performance',
    deliveryTime: '3-8 weeks',
    outcome: 'Lower CAC and more predictable pipeline growth',
    highlights: [
      'Analytics setup and dashboard instrumentation',
      'Campaign strategy with testing roadmap',
      'Attribution, reporting, and optimization loops',
    ],
  },
  {
    id: 'seo',
    icon: Search,
    title: 'SEO',
    description:
      'Technical SEO and content systems that improve visibility, organic traffic quality, and long-term search performance.',
    gradient: 'from-blue-500/80 to-indigo-500/80',
    image: '/SEO.png',
    focus: 'Technical SEO + content authority building',
    deliveryTime: '2-6 weeks for initial uplift',
    outcome: 'Sustainable organic growth with higher intent traffic',
    highlights: [
      'Technical audits and issue remediation',
      'Keyword mapping and content architecture',
      'Structured data and internal-link strategy',
    ],
  },
  {
    id: 'social-media',
    icon: Share2,
    title: 'Social Media',
    description:
      'Content and campaign systems that build brand awareness, engagement, and demand generation across platforms.',
    gradient: 'from-cyan-500/80 to-blue-500/80',
    image: '/Social_Media.png',
    focus: 'Audience growth and social demand creation',
    deliveryTime: '2-4 weeks to launch',
    outcome: 'Consistent content velocity and stronger engagement',
    highlights: [
      'Platform strategy and content pillars',
      'Creative production and publishing workflows',
      'Performance optimization and community loops',
    ],
  },
  {
    id: 'design-content',
    icon: Palette,
    title: 'Design & Content',
    description:
      'Visual systems and messaging frameworks that make your product and brand instantly clearer and more trusted.',
    gradient: 'from-blue-600/80 to-cyan-500/80',
    image: '/design.png',
    focus: 'Brand systems, UX visuals, and content direction',
    deliveryTime: '2-6 weeks',
    outcome: 'Stronger brand perception and clearer communication',
    highlights: [
      'Brand identity and design-system foundations',
      'Web, product, and campaign visual assets',
      'Conversion-aware copy and content frameworks',
    ],
  },
] as const;

export type ServiceItem = (typeof servicesData)[number];
