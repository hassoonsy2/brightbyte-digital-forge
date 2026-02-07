import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Megaphone, Code2, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { projectsByCategory } from '../lib/portfolioProjects';

const categories = [
  {
    slug: 'software-ai',
    title: 'Software & AI',
    description:
      'Custom software development, AI-powered platforms, and intelligent automation — from mobile apps to enterprise solutions built with cutting-edge technology.',
    icon: Code2,
    projectCount: projectsByCategory['software-ai'].filter((project) => !project.hiddenInPortfolio).length,
    tags: ['AI Platforms', 'Mobile Apps', 'Automation', 'SaaS'],
  },
  {
    slug: 'marketing',
    title: 'Marketing',
    description:
      'Strategic digital marketing, e-commerce platforms, SEO optimization, and social media campaigns that drive real business growth across Europe.',
    icon: Megaphone,
    projectCount: projectsByCategory.marketing.filter((project) => !project.hiddenInPortfolio).length,
    tags: ['E-commerce', 'SEO', 'Social Media', 'Localization'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

interface CategoryCardProps {
  cat: typeof categories[0];
}

const CategoryCard = ({ cat }: CategoryCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setMousePosition({ x, y });
  };

  const Icon = cat.icon;

  return (
    <motion.div variants={cardVariants}>
      <Link to={`/portfolio/category/${cat.slug}`} className="block h-full">
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
          className="card-3d h-full p-8 lg:p-10 flex flex-col group cursor-pointer"
        >
          {/* Glow on hover */}
          <div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15), transparent 70%)',
            }}
          />

          {/* Icon */}
          <div
            className="w-12 h-12 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center mb-6 group-hover:bg-[#3b82f6]/20 group-hover:border-[#3b82f6]/30 transition-all duration-300"
            style={{ transform: 'translateZ(20px)' }}
          >
            <Icon className="w-6 h-6 text-[#3b82f6]" />
          </div>

          {/* Title */}
          <h2
            className="text-2xl font-semibold text-white mb-3 tracking-tight group-hover:text-[#60a5fa] transition-colors"
            style={{ transform: 'translateZ(15px)' }}
          >
            {cat.title}
          </h2>

          {/* Description */}
          <p
            className="text-[#9ca3af] text-sm leading-relaxed mb-6 flex-grow"
            style={{ transform: 'translateZ(10px)' }}
          >
            {cat.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8" style={{ transform: 'translateZ(10px)' }}>
            {cat.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#60a5fa]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div
            className="flex items-center justify-between pt-6 border-t border-white/[0.06]"
            style={{ transform: 'translateZ(10px)' }}
          >
            <span className="text-xs text-[#6b7280] uppercase tracking-wider">
              {cat.projectCount} project{cat.projectCount !== 1 ? 's' : ''}
            </span>
            <div className="flex items-center gap-2 text-sm font-medium text-[#3b82f6] group-hover:gap-3 transition-all duration-300">
              Explore
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#030308] pt-28">
        {/* Background effects */}
        <div className="fixed inset-0 bg-grid-subtle opacity-50 pointer-events-none" />
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#3b82f6]/5 blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-20">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <span className="label-premium mb-6 inline-block">Our Portfolio</span>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <h1 className="section-title mb-4">
                  Work that speaks
                  <br />
                  <span className="text-[#3b82f6]">for itself.</span>
                </h1>
              </div>
              <p className="section-subtitle lg:text-right lg:max-w-md">
                Explore our work across software, AI, and digital marketing
                — delivering measurable results for clients across Europe.
              </p>
            </div>
          </motion.div>

          {/* Category Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20 max-w-4xl mx-auto"
          >
            {categories.map((cat) => (
              <CategoryCard key={cat.slug} cat={cat} />
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="card-3d p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
                Ready to start your project?
              </h2>
              <p className="text-[#9ca3af] mb-8 max-w-xl mx-auto">
                Let's collaborate to bring your innovative ideas to life with
                cutting-edge technology solutions.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-premium inline-flex items-center gap-2"
                >
                  Start Your Project
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

export default Portfolio;
