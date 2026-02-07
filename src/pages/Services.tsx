import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import { servicesData, type ServiceItem } from '../lib/servicesData';
import Header from '../components/Header';
import Footer from '../components/Footer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

interface ServiceCardProps {
  service: ServiceItem;
}

const serviceArtwork: Record<string, { gradient: string; blobA: string; blobB: string; accent: string }> = {
  'ai-consulting': {
    gradient: 'from-sky-500/95 via-blue-500/90 to-cyan-400/90',
    blobA: 'bg-cyan-300/45',
    blobB: 'bg-blue-500/45',
    accent: 'from-cyan-300/40 via-transparent to-transparent',
  },
  'software-development': {
    gradient: 'from-indigo-500/95 via-blue-500/90 to-violet-500/85',
    blobA: 'bg-indigo-300/45',
    blobB: 'bg-blue-500/45',
    accent: 'from-indigo-300/45 via-transparent to-transparent',
  },
  'automation': {
    gradient: 'from-cyan-500/95 via-sky-500/90 to-blue-500/85',
    blobA: 'bg-cyan-300/45',
    blobB: 'bg-sky-500/45',
    accent: 'from-cyan-300/45 via-transparent to-transparent',
  },
  'machine-learning': {
    gradient: 'from-violet-500/95 via-indigo-500/90 to-blue-500/85',
    blobA: 'bg-violet-300/45',
    blobB: 'bg-indigo-500/45',
    accent: 'from-violet-300/45 via-transparent to-transparent',
  },
  'web-development': {
    gradient: 'from-sky-500/95 via-blue-500/90 to-cyan-500/85',
    blobA: 'bg-sky-300/45',
    blobB: 'bg-cyan-500/45',
    accent: 'from-sky-300/45 via-transparent to-transparent',
  },
  'mobile-development': {
    gradient: 'from-blue-500/95 via-cyan-500/90 to-sky-500/85',
    blobA: 'bg-blue-300/45',
    blobB: 'bg-cyan-500/45',
    accent: 'from-blue-300/45 via-transparent to-transparent',
  },
  'data-marketing': {
    gradient: 'from-emerald-500/90 via-cyan-500/90 to-blue-500/85',
    blobA: 'bg-emerald-300/45',
    blobB: 'bg-cyan-500/45',
    accent: 'from-emerald-300/45 via-transparent to-transparent',
  },
  seo: {
    gradient: 'from-violet-500/90 via-blue-500/90 to-indigo-500/85',
    blobA: 'bg-violet-300/45',
    blobB: 'bg-blue-500/45',
    accent: 'from-violet-300/45 via-transparent to-transparent',
  },
  'social-media': {
    gradient: 'from-fuchsia-500/90 via-blue-500/90 to-cyan-500/85',
    blobA: 'bg-fuchsia-300/45',
    blobB: 'bg-cyan-500/45',
    accent: 'from-fuchsia-300/45 via-transparent to-transparent',
  },
  'design-content': {
    gradient: 'from-amber-500/90 via-orange-500/85 to-blue-500/80',
    blobA: 'bg-amber-300/45',
    blobB: 'bg-orange-500/40',
    accent: 'from-amber-300/45 via-transparent to-transparent',
  },
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const artwork = serviceArtwork[service.id] || {
    gradient: 'from-blue-500/90 via-cyan-500/85 to-indigo-500/80',
    blobA: 'bg-blue-300/40',
    blobB: 'bg-cyan-500/35',
    accent: 'from-blue-300/40 via-transparent to-transparent',
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 24;
    const y = (e.clientY - rect.top - rect.height / 2) / 24;
    setMousePosition({ x, y });
  };

  const Icon = service.icon;

  return (
    <motion.div variants={itemVariants}>
      <Link to={`/services/${service.id}`}>
        <motion.article
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
          className="card-3d p-5 h-full group cursor-pointer"
        >
          <div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 30% 0%, rgba(59,130,246,0.18), transparent 68%)',
            }}
          />

          <div className="relative mb-5 rounded-xl overflow-hidden border border-white/10 h-36" style={{ transform: 'translateZ(22px)' }}>
            <div className={`absolute inset-0 bg-gradient-to-br ${artwork.gradient}`} />
            <div className={`absolute -top-10 -right-8 w-32 h-32 rounded-full blur-2xl ${artwork.blobA}`} />
            <div className={`absolute -bottom-10 -left-8 w-28 h-28 rounded-full blur-2xl ${artwork.blobB}`} />
            <div className={`absolute inset-0 bg-gradient-to-tr ${artwork.accent}`} />
            <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.28),transparent_44%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_90%,rgba(15,23,42,0.35),transparent_46%)]" />

            <div className="absolute bottom-3 left-3 flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-black/35 backdrop-blur-sm border border-white/25 flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-white text-sm font-semibold">{service.title}</span>
            </div>
          </div>

          <div style={{ transform: 'translateZ(30px)' }}>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-4 min-h-[66px]">
              {service.description}
            </p>

            <div className="space-y-2 mb-4">
              {service.highlights.slice(0, 2).map((highlight) => (
                <div key={highlight} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#60a5fa] mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-[#c7d2fe] leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-1 text-[#9ca3af] text-sm group-hover:text-[#3b82f6] transition-colors">
              <span>View full service details</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
};

const Services = () => {
  const services = servicesData;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#030308] pt-28">
        <div className="fixed inset-0 bg-grid-subtle opacity-50 pointer-events-none" />
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[860px] h-[860px] rounded-full bg-[#3b82f6]/5 blur-[170px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="label-premium mb-6 inline-block">What We Do</span>
            <h1 className="section-title mb-4">
              Services engineered
              <br />
              <span className="text-[#3b82f6]">for modern enterprises</span>
            </h1>
            <p className="text-[#9ca3af] text-lg max-w-3xl leading-relaxed">
              Pick a service to open the full breakdown with capabilities, process, deliverables,
              technologies, FAQs, and case-study detail.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 perspective-1000 mb-16"
          >
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="card-3d rounded-xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
                Need a blended service package?
              </h2>
              <p className="text-[#9ca3af] mb-8 max-w-2xl mx-auto">
                Most engagements combine multiple services, for example software + AI + automation.
                We will propose a phased plan with timeline, budget range, and clear milestones.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-premium inline-flex items-center gap-2"
                >
                  Discuss Your Project
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

export default Services;
