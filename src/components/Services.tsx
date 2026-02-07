import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { servicesData, type ServiceItem } from '../lib/servicesData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
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
  const Icon = service.icon;
  const artwork = serviceArtwork[service.id] || {
    gradient: 'from-blue-500/90 via-cyan-500/85 to-indigo-500/80',
    blobA: 'bg-blue-300/40',
    blobB: 'bg-cyan-500/35',
    accent: 'from-blue-300/40 via-transparent to-transparent',
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    setMousePosition({ x, y });
  };

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
                'radial-gradient(circle at 30% 0%, rgba(59,130,246,0.16), transparent 66%)',
            }}
          />

          <div className="relative h-28 rounded-xl overflow-hidden border border-white/10 mb-4" style={{ transform: 'translateZ(20px)' }}>
            <div className={`absolute inset-0 bg-gradient-to-br ${artwork.gradient}`} />
            <div className={`absolute -top-8 -right-7 w-24 h-24 rounded-full blur-2xl ${artwork.blobA}`} />
            <div className={`absolute -bottom-8 -left-7 w-24 h-24 rounded-full blur-2xl ${artwork.blobB}`} />
            <div className={`absolute inset-0 bg-gradient-to-tr ${artwork.accent}`} />
            <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:22px_22px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.24),transparent_40%)]" />
            <div className="absolute inset-0 p-3 flex items-end">
              <div className="w-9 h-9 rounded-lg bg-black/35 backdrop-blur-sm border border-white/25 flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          <div style={{ transform: 'translateZ(28px)' }}>
            <h3 className="text-white font-medium text-lg mb-2 group-hover:text-[#60a5fa] transition-colors">
              {service.title}
            </h3>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-4">
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

            <div className="flex items-center gap-1 text-[#6b7280] text-sm group-hover:text-[#3b82f6] transition-colors">
              <span>Open details</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
};

const Services = () => {
  const featuredServices = useMemo(() => servicesData.slice(0, 8), []);

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#3b82f6]/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="label-premium mb-6 inline-block">What We Do</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="section-title mb-4">
                Services built for
                <br />
                <span className="text-[#3b82f6]">modern enterprises</span>
              </h2>
            </div>
            <p className="section-subtitle lg:max-w-xl [text-wrap:balance]">
              Click any service to view the full details, workflow, deliverables, and case-study context.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 perspective-1000"
        >
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <p className="text-[#9ca3af] text-center sm:text-left">
            Need deeper detail? Explore the full service breakdown.
          </p>
          <Link to="/services">
            <button className="btn-secondary whitespace-nowrap inline-flex items-center gap-2">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
