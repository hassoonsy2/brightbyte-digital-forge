import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Megaphone, Code2, ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  projectsByCategory,
  type PortfolioCategoryKey,
  type PortfolioProject,
} from '../lib/portfolioProjects';

// ─── Category metadata ───────────────────────────────────────────────
const categoryMeta: Record<
  PortfolioCategoryKey,
  {
    title: string;
    subtitle: string;
    description: string;
    icon: React.ElementType;
  }
> = {
  'software-ai': {
    title: 'Software & AI',
    subtitle: 'Custom Development & Intelligent Platforms',
    description:
      'From mobile applications and AI-powered platforms to enterprise automation solutions, we build scalable software with cutting-edge technology designed for performance and growth.',
    icon: Code2,
  },
  marketing: {
    title: 'Marketing',
    subtitle: 'Digital Growth & Brand Strategy',
    description:
      'We help businesses expand their digital presence across Europe through stunning websites, e-commerce platforms, SEO optimization, localization, and targeted social media campaigns.',
    icon: Megaphone,
  },
};
const portfolioCategories = Object.keys(projectsByCategory) as PortfolioCategoryKey[];

const isPortfolioCategory = (value?: string): value is PortfolioCategoryKey =>
  Boolean(value && portfolioCategories.includes(value as PortfolioCategoryKey));

// ─── Helpers ─────────────────────────────────────────────────────────
const getStatusStyle = (status: string) => {
  switch (status) {
    case 'Live':
      return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
    case 'Coming Soon':
      return 'bg-[#3b82f6]/10 text-[#60a5fa] border-[#3b82f6]/20';
    case 'In Development':
      return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
    default:
      return 'bg-white/5 text-[#6b7280] border-white/10';
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

// ─── Project Card ────────────────────────────────────────────────────
const ProjectCard = ({ project }: { project: PortfolioProject }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    setMousePosition({ x, y });
  };

  return (
    <motion.div variants={cardVariants}>
      <Link to={`/portfolio/${project.slug}`} className="block h-full">
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setMousePosition({ x: 0, y: 0 });
          }}
          animate={{
            rotateX: isHovered ? -mousePosition.y : 0,
            rotateY: isHovered ? mousePosition.x : 0,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{ transformStyle: 'preserve-3d' }}
          className="card-3d h-full overflow-hidden flex flex-col group cursor-pointer"
        >
          {/* Glow */}
          <div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.12), transparent 70%)',
            }}
          />

          {/* Image */}
          <div className="relative" style={{ transform: 'translateZ(5px)' }}>
            <div
              className={`w-full h-48 ${
                project.backgroundColor === 'black'
                  ? 'bg-black'
                  : project.backgroundColor === 'white'
                  ? 'bg-white'
                  : 'bg-[#0a0a12]'
              } flex items-center justify-center`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="max-w-full max-h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Status badge */}
            <div className="absolute top-3 right-3">
              <span
                className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full border ${getStatusStyle(
                  project.status
                )}`}
              >
                {project.status}
              </span>
            </div>
            {project.featured && (
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full bg-[#3b82f6]/10 text-[#60a5fa] border border-[#3b82f6]/20">
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            <h3
              className="text-lg font-semibold text-white mb-2 group-hover:text-[#60a5fa] transition-colors duration-300"
              style={{ transform: 'translateZ(15px)' }}
            >
              {project.title}
            </h3>
            <p
              className="text-sm text-[#9ca3af] leading-relaxed mb-6 line-clamp-3 flex-grow"
              style={{ transform: 'translateZ(10px)' }}
            >
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 mb-6" style={{ transform: 'translateZ(10px)' }}>
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/[0.04] border border-white/[0.06] text-[#6b7280]"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/[0.04] border border-white/[0.06] text-[#52525b]">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>

            {/* CTA */}
            <div
              className="flex items-center gap-2 text-sm font-medium text-[#6b7280] group-hover:text-[#3b82f6] transition-colors duration-300"
              style={{ transform: 'translateZ(10px)' }}
            >
              View Case Study
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

// ─── Component ───────────────────────────────────────────────────────
const PortfolioCategory = () => {
  const { category } = useParams<{ category: string }>();

  const meta = isPortfolioCategory(category) ? categoryMeta[category] : undefined;
  const projects = isPortfolioCategory(category)
    ? projectsByCategory[category].filter((project) => !project.hiddenInPortfolio)
    : undefined;

  if (!meta || !projects) {
    return <Navigate to="/portfolio" replace />;
  }

  const Icon = meta.icon;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#030308] pt-28">
        {/* Background effects */}
        <div className="fixed inset-0 bg-grid-subtle opacity-50 pointer-events-none" />
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#3b82f6]/5 blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-20">
          {/* Back navigation */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-[#6b7280] hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </motion.div>

          {/* Category Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center">
                <Icon className="w-6 h-6 text-[#3b82f6]" />
              </div>
              <div>
                <h1 className="section-title">{meta.title}</h1>
                <p className="text-sm text-[#3b82f6] mt-1 font-medium">{meta.subtitle}</p>
              </div>
            </div>
            <p className="section-subtitle">{meta.description}</p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20"
          >
            {projects.map((project, index) => (
              <ProjectCard key={`${project.slug}-${index}`} project={project} />
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="card-3d p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
                Have a similar project in mind?
              </h2>
              <p className="text-[#9ca3af] mb-8 max-w-xl mx-auto">
                Let's discuss how we can help you achieve your goals with our{' '}
                {meta.title.toLowerCase()} expertise.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-premium inline-flex items-center gap-2"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
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

export default PortfolioCategory;
