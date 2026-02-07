import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Search, PenTool, Code2, Rocket } from 'lucide-react';
import {
  SiReact,
  SiPython,
  SiAmazonwebservices,
  SiTypescript,
  SiNodedotjs,
  SiDocker,
  SiTensorflow,
  SiPostgresql,
  SiRedis,
  SiKubernetes,
  SiGraphql,
  SiTailwindcss,
  SiNextdotjs,
  SiOpenai,
  SiPytorch,
  SiMongodb
} from 'react-icons/si';

// ─── Process steps ───────────────────────────────────────────────────
const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery',
    subtitle: 'Understand & Align',
    description: 'We dive deep into your business, goals, and challenges to craft a strategy that fits.',
    details: ['Stakeholder interviews', 'Technical audit', 'Market research', 'Goal mapping'],
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Design',
    subtitle: 'Architect & Prototype',
    description: 'We design systems and interfaces that are elegant, scalable, and user-centered.',
    details: ['System architecture', 'UI/UX design', 'Interactive prototypes', 'User testing'],
  },
  {
    icon: Code2,
    number: '03',
    title: 'Build',
    subtitle: 'Develop & Iterate',
    description: 'Agile development with continuous feedback loops ensures quality at every sprint.',
    details: ['Agile sprints', 'Code reviews', 'CI/CD pipeline', 'Quality assurance'],
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Launch & Scale',
    subtitle: 'Deploy & Optimize',
    description: 'We launch with confidence and continuously optimize for growth and performance.',
    details: ['Performance tuning', 'Monitoring setup', 'Growth analytics', 'Ongoing support'],
  },
];

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = step.icon;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className="relative group cursor-pointer"
    >
      <div className="card-3d p-6 h-full relative overflow-hidden">
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15), transparent 70%)',
          }}
        />
        <div className="absolute top-4 right-4 text-4xl font-bold text-white/[0.04] group-hover:text-[#3b82f6]/10 transition-colors duration-300">
          {step.number}
        </div>
        <div
          className="relative w-12 h-12 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center mb-4
                     group-hover:bg-[#3b82f6]/20 transition-all duration-300"
          style={{ transform: 'translateZ(20px)' }}
        >
          <Icon className="w-6 h-6 text-[#3b82f6] group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute inset-0 rounded-xl border border-[#3b82f6]/0 group-hover:border-[#3b82f6]/30
                         group-hover:scale-125 transition-all duration-500 opacity-0 group-hover:opacity-100" />
        </div>
        <div style={{ transform: 'translateZ(15px)' }}>
          <h4 className="text-white font-medium text-lg mb-0.5 group-hover:text-[#60a5fa] transition-colors">
            {step.title}
          </h4>
          <p className="text-[#3b82f6]/60 text-xs font-medium uppercase tracking-wider mb-3">
            {step.subtitle}
          </p>
        </div>
        <p className="text-[#6b7280] text-sm leading-relaxed mb-4" style={{ transform: 'translateZ(10px)' }}>
          {step.description}
        </p>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
              style={{ transform: 'translateZ(10px)' }}
            >
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
                {step.details.map((detail) => (
                  <span
                    key={detail}
                    className="px-2.5 py-1 text-xs rounded-full bg-[#3b82f6]/10 text-[#60a5fa] border border-[#3b82f6]/20"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// ─── Tech stack ──────────────────────────────────────────────────────
const techStack = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
  { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
  { name: 'OpenAI', icon: SiOpenai, color: '#10A37F' },
  { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
];

// ─── Component ───────────────────────────────────────────────────────
const About = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/20 to-transparent" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#3b82f6]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-[#3b82f6]/3 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── About Us Teaser ────────────────────────────────────── */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="label-premium mb-6 inline-block">About Us</span>
              <h2 className="section-title mb-6">
                Built by builders,
                <br />
                <span className="text-[#3b82f6]">for builders</span>
              </h2>
              <div className="space-y-4 text-[#9ca3af] leading-relaxed mb-8">
                <p>
                  Bright-Byte was born from a passion for technology and a mission to make AI
                  accessible for every business. Founded by Hussin and Maya, we combine deep
                  enterprise experience with creative vision to deliver solutions that
                  truly transform.
                </p>
                <p>
                  From enterprise R&D at companies like ASML and Rabobank to studying AI at
                  Utrecht University — our roots run deep in both innovation and
                  real-world impact.
                </p>
              </div>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  Our Story
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats / highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: 'AI-First', label: 'Approach' },
                { value: 'EU-Based', label: 'Netherlands' },
                { value: 'Full-Stack', label: 'Capabilities' },
                { value: 'Enterprise', label: 'Experience' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="card-glass p-6 text-center group hover:border-[#3b82f6]/20 transition-colors duration-300"
                >
                  <div className="text-2xl font-bold text-white mb-1 group-hover:text-[#60a5fa] transition-colors">
                    {item.value}
                  </div>
                  <div className="text-xs text-[#6b7280] uppercase tracking-wider">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── Tech Stack ────────────────────────────────────────── */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="label-premium mb-4 inline-block">Technologies</span>
            <h3 className="section-title mb-4">
              Our <span className="text-[#3b82f6]">tech stack</span>
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-glass p-8 relative overflow-hidden max-w-3xl mx-auto">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#3b82f6]/10 rounded-full blur-[80px]" />

              <div className="relative z-10">
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
                  {techStack.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.03,
                          type: 'spring',
                          stiffness: 300,
                          damping: 20
                        }}
                        whileHover={{
                          scale: 1.15,
                          y: -5,
                        }}
                        className="group relative flex items-center justify-center"
                      >
                        <motion.div
                          animate={{
                            y: [0, -3, 0],
                          }}
                          transition={{
                            duration: 2.5 + (index * 0.1),
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.05,
                          }}
                          className="w-14 h-14 p-3 rounded-xl bg-white/5 border border-white/10
                                     flex items-center justify-center cursor-pointer
                                     group-hover:border-white/30 group-hover:bg-white/10
                                     transition-all duration-300"
                        >
                          <IconComponent
                            className="w-full h-full transition-all duration-300"
                            style={{
                              color: 'rgba(156, 163, 175, 1)',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = tech.color;
                              e.currentTarget.style.filter = `drop-shadow(0 0 8px ${tech.color}80)`;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = 'rgba(156, 163, 175, 1)';
                              e.currentTarget.style.filter = 'none';
                            }}
                          />
                        </motion.div>

                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1
                                       bg-black/80 backdrop-blur-sm rounded text-xs text-white
                                       whitespace-nowrap pointer-events-none
                                       opacity-0 group-hover:opacity-100 transition-opacity duration-200
                                       border border-white/10">
                          {tech.name}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <p className="mt-6 text-center text-sm text-[#6b7280]">
                  And many more tools tailored to your needs
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── How We Work ───────────────────────────────────────── */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="label-premium mb-4 inline-block">Our Process</span>
            <h3 className="section-title mb-4">
              How we <span className="text-[#3b82f6]">work</span>
            </h3>
            <p className="section-subtitle max-w-lg mx-auto">
              A proven four-step process that turns your vision into reality.
            </p>
          </motion.div>

          <div className="hidden lg:block absolute top-[calc(50%+2rem)] left-[10%] right-[10%] h-px z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full bg-gradient-to-r from-transparent via-[#3b82f6]/20 to-transparent origin-left"
            />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12 },
              },
            }}
            className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {steps.map((step, index) => (
              <StepCard key={step.number} step={step} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
