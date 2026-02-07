export type PortfolioProjectStatus = 'Live' | 'Coming Soon' | 'In Development';

export interface PortfolioProject {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  status: PortfolioProjectStatus;
  featured?: boolean;
  backgroundColor?: string;
  hiddenInPortfolio?: boolean;
}

export type PortfolioCategoryKey = 'software-ai' | 'marketing';

export const projectsByCategory: Record<PortfolioCategoryKey, PortfolioProject[]> = {
  'software-ai': [
    {
      slug: 'lemon-boost',
      title: 'Lemon Boost',
      description:
        'AI-powered career coaching platform for a Japanese startup focused on empowering women — featuring real-time voice practice sessions with AI opponents, cross-cultural business simulations, and emotion recognition analytics powered by NVIDIA Conversational AI.',
      image: '/lemon-boost.png',
      technologies: ['NVIDIA Conversational AI', 'Emotion Recognition', 'React', 'Node.js', 'Real-time Voice', 'AI Agents'],
      status: 'Live',
      featured: true,
    },
    {
      slug: 'connaxis-talent-hub',
      title: 'Connaxis Talent Hub',
      description:
        'Intelligent talent management platform that streamlines recruitment, onboarding, and workforce analytics — connecting the right people with the right opportunities through AI-driven matching.',
      image: '/connaxis-logo.png',
      technologies: ['AI', 'React', 'Node.js', 'Machine Learning', 'HR Tech'],
      status: 'Live',
      featured: true,
    },
    {
      slug: 'logoleague',
      title: 'LogoLeague',
      description:
        'AI-powered branding and logo design platform that generates professional brand identities in minutes — combining creative AI with design best practices for startups and businesses.',
      image: '/design.png',
      technologies: ['AI', 'Generative Design', 'React', 'Brand Identity', 'SaaS'],
      status: 'Live',
      featured: true,
      hiddenInPortfolio: true,
    },
    {
      slug: 'festi-festival-dating-app',
      title: 'FestiMatch - Festival Dating App',
      description:
        'Festival-exclusive dating app where only verified ticket holders can connect — featuring AI-powered matching with Autoencoder architecture, real-time chat with voice messages, mood-based discovery, and swipe encounters to find your vibe at any festival.',
      image: '/festi.png',
      technologies: ['React Native', 'AI Matching', 'Autoencoder', 'Real-time Chat', 'Ticket Verification', 'Voice Messages'],
      status: 'Coming Soon',
      featured: true,
    },
    {
      slug: 'kusor-ai-agent-platform',
      title: 'Kusor AI Agent Platform',
      description:
        'Revolutionary platform that enables users to create AI agents with simple prompts, featuring 600+ integrations and access to all edge AI models.',
      image: '/kusor.png',
      technologies: ['AI Agents', '600+ Integrations', 'Edge AI', 'No-Code Platform'],
      status: 'Coming Soon',
      featured: true,
      backgroundColor: 'white',
    },
    {
      slug: 'connaxis-automate',
      title: 'Connaxis Automation Studio',
      description:
        'Design automation platform for creative teams — releasing and managing tools like Proof Automate and PDF Name Lister, with an admin console for license management, browser and desktop launch, and a custom Adobe plugin.',
      image: '/connaxis-logo.png',
      technologies: ['React', 'Node.js', 'Adobe Plugin', 'License Management', 'Desktop App', 'Automation'],
      status: 'Live',
    },
  ],
  marketing: [
    {
      slug: 'berkel-ecommerce-platform',
      title: 'Berkelsnijmachine',
      description:
        'Full-scale Shopify e-commerce platform for a premium Dutch slicing machine brand — featuring multi-language localization, product categorization across 7 collections, SEO optimization, and strategic social media campaigns driving EU expansion.',
      image: '/berkel.png',
      technologies: ['Shopify', 'E-commerce', 'SEO', 'Multi-language', 'Social Media', 'EU Expansion'],
      status: 'Live',
      featured: true,
    },
    {
      slug: 'kobra-bikes',
      title: 'Kobra Bikes',
      description:
        'Professional fatbike brand website with an interactive product configurator, accessory selection, financing options, multi-language localization, and a complete digital presence strategy reaching cycling enthusiasts across European markets.',
      image: '/kobra.webp',
      technologies: ['Website', 'Product Configurator', 'E-commerce', 'Multi-language', 'UI/UX Design'],
      status: 'Live',
      featured: true,
    },
    {
      slug: 'gbict-website',
      title: 'GBICT',
      description:
        'Immersive dark-themed website for a cloud & IT company — featuring 3D animations, motion design showcases, workplace management dashboard presentations, and a modern sidebar navigation with dark/light mode.',
      image: '/gbict.jpeg',
      technologies: ['Web Design', 'UI/UX', '3D Animation', 'Motion Design', 'React'],
      status: 'Live',
    },
  ],
};

export const allPortfolioProjects: PortfolioProject[] = Object.values(projectsByCategory).flat();

export const portfolioProjectBySlug: Record<string, PortfolioProject> = allPortfolioProjects.reduce(
  (acc, project) => {
    acc[project.slug] = project;
    return acc;
  },
  {} as Record<string, PortfolioProject>
);
