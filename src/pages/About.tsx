import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Search, PenTool, Code2, Rocket, Heart,
  GraduationCap, Building2, Globe2, Sparkles, ShieldCheck, Lightbulb, Handshake,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// ─── Journey milestones ──────────────────────────────────────────────
const journey = [
  {
    year: '2006',
    title: 'First Line of Code',
    phase: 'Early Builder',
    location: 'Syria',
    description: 'At just 9 years old, Hussin discovered programming through Java, sparking a lifelong obsession with building real tools from code.',
    outcomes: ['Started with Java fundamentals', 'Built first utility programs'],
    icon: Code2,
  },
  {
    year: '2015',
    title: 'A New Beginning',
    phase: 'Resilience Chapter',
    location: 'Netherlands',
    description: 'At 17, Hussin relocated to the Netherlands during the Syrian civil war and rebuilt life from zero with education and technology as his path forward.',
    outcomes: ['Adapted to a new country and language', 'Continued learning while rebuilding stability'],
    icon: Heart,
  },
  {
    year: '2018',
    title: 'Studying AI at Utrecht',
    phase: 'Academic Foundation',
    location: 'Utrecht University',
    description: 'Pursued Artificial Intelligence at Utrecht University, combining theory with practical engineering exposure across real business use cases.',
    outcomes: ['Strong ML and data science base', 'Applied research translated into practical delivery'],
    icon: GraduationCap,
  },
  {
    year: '2019–2024',
    title: 'Enterprise Experience',
    phase: 'Enterprise Delivery',
    location: 'Rabobank, ASML, Colliers',
    description: 'Worked across major Dutch organizations to build enterprise systems and understand how technology drives transformation in complex environments.',
    outcomes: ['Delivered production-grade internal platforms', 'Learned governance, reliability, and scale operations'],
    icon: Building2,
  },
  {
    year: '2023',
    title: 'Learning from the Best',
    phase: 'Global Benchmarking',
    location: 'India',
    description: 'Traveled to India to study delivery models used by large software firms like Infosys and bring those standards back into Bright-Byte operations.',
    outcomes: ['Refined delivery playbooks', 'Adopted scalable execution patterns'],
    icon: Globe2,
  },
  {
    year: '2025',
    title: 'Bright-Byte is Born',
    phase: 'Company Launch',
    location: 'Utrecht',
    description: 'Left ASML R&D to co-found Bright-Byte with Maya with one mission: make advanced AI and software execution accessible, safe, and outcome-driven.',
    outcomes: ['Founded Bright-Byte in Utrecht', 'Launched software, AI, and automation services'],
    icon: Sparkles,
  },
  {
    year: '2026',
    title: 'Scaling Across Regions',
    phase: 'Growth & Expansion',
    location: 'EU and International',
    description: 'Expanded Bright-Byte delivery across multiple regions with a stronger portfolio, partner network, and full-service execution model.',
    outcomes: ['Broader international client delivery', 'Stronger service depth across AI, software, and growth'],
    icon: Rocket,
  },
];

const storyHighlights = [
  {
    icon: ShieldCheck,
    title: 'Resilience to reliability',
    description: 'We build systems you can trust under real pressure, not just ideal demos.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation with intent',
    description: 'Every technical choice is tied to business outcomes and long-term maintainability.',
  },
  {
    icon: Handshake,
    title: 'Partnership mindset',
    description: 'We work as an extension of your team with clear communication and ownership.',
  },
];

const storyFacts = [
  { value: '2006', label: 'First line of code at age 9' },
  { value: '2015', label: 'New beginning in the Netherlands' },
  { value: '2025', label: 'Bright-Byte founded in Utrecht' },
];

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

// ─── StepCard ────────────────────────────────────────────────────────
const StepCard = ({ step }: { step: typeof steps[0] }) => {
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
          className="relative w-12 h-12 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center mb-4 group-hover:bg-[#3b82f6]/20 transition-all duration-300"
          style={{ transform: 'translateZ(20px)' }}
        >
          <Icon className="w-6 h-6 text-[#3b82f6] group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute inset-0 rounded-xl border border-[#3b82f6]/0 group-hover:border-[#3b82f6]/30 group-hover:scale-125 transition-all duration-500 opacity-0 group-hover:opacity-100" />
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

// ─── World Map data ──────────────────────────────────────────────────
type MapLocation = {
  name: string;
  lon: number;
  lat: number;
  isHQ: boolean;
  labelY: number;
  labelX: number;
  labelAnchor?: 'start' | 'middle' | 'end';
  hqLabelY?: number;
};

const locations: MapLocation[] = [
  { name: 'Netherlands', lon: 5.3, lat: 52.1, isHQ: true, labelY: -14, labelX: 0, labelAnchor: 'middle', hqLabelY: 22 },
  { name: 'Germany', lon: 10.5, lat: 51.2, isHQ: false, labelY: 2, labelX: 16, labelAnchor: 'start' },
  { name: 'Japan', lon: 138.3, lat: 36.2, isHQ: false, labelY: -10, labelX: 10, labelAnchor: 'start' },
  { name: 'Taiwan', lon: 121.0, lat: 23.7, isHQ: false, labelY: 16, labelX: 10, labelAnchor: 'start' },
  { name: 'Singapore', lon: 103.8, lat: 1.35, isHQ: false, labelY: 16, labelX: 10, labelAnchor: 'start' },
  { name: 'South America', lon: -58.0, lat: -15.0, isHQ: false, labelY: 18, labelX: 0, labelAnchor: 'middle' },
  { name: 'Middle East', lon: 46.0, lat: 24.0, isHQ: false, labelY: 18, labelX: 0, labelAnchor: 'middle' },
];

const MAP_WIDTH = 1000;
const MAP_HEIGHT = 500;

const projectLonLat = (lon: number, lat: number) => ({
  x: ((lon + 180) / 360) * MAP_WIDTH,
  y: ((90 - lat) / 180) * MAP_HEIGHT,
});

const WorldMap = () => {
  const projectedLocations = useMemo(
    () => locations.map((loc) => ({ ...loc, ...projectLonLat(loc.lon, loc.lat) })),
    [],
  );
  const hq = projectedLocations[0];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Glow behind map */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-[#3b82f6]/5 blur-[100px]" />
      </div>

      <svg viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`} className="relative w-full h-auto" style={{ maxHeight: '500px' }}>
        {/* Subtle grid */}
        <defs>
          <pattern id="mapGrid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(59, 130, 246, 0.04)" strokeWidth="0.5" />
          </pattern>
          {/* Glow filter for markers */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glowLarge" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid background */}
        <rect width={MAP_WIDTH} height={MAP_HEIGHT} fill="url(#mapGrid)" />

        {/* Real world map (generated from geographic country data) */}
        <image
          href="/world-map-real.svg"
          x="0"
          y="0"
          width={MAP_WIDTH}
          height={MAP_HEIGHT}
          preserveAspectRatio="xMidYMid meet"
          opacity="0.82"
        />

        {/* Connection lines from HQ to each location */}
        {projectedLocations.filter((l) => !l.isHQ).map((loc, i) => {
          const midX = (hq.x + loc.x) / 2;
          const arcLift = 35 + Math.min(180, Math.abs(hq.x - loc.x) * 0.18);
          const midY = Math.max(20, Math.min(hq.y, loc.y) - arcLift);
          const pathD = `M ${hq.x} ${hq.y} Q ${midX} ${midY} ${loc.x} ${loc.y}`;
          return (
            <g key={`conn-${i}`}>
              {/* Line glow */}
              <path
                d={pathD}
                fill="none"
                stroke="rgba(59, 130, 246, 0.12)"
                strokeWidth="3"
              />
              {/* Dashed line */}
              <path
                d={pathD}
                fill="none"
                stroke="rgba(59, 130, 246, 0.4)"
                strokeWidth="1"
                strokeDasharray="8 6"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to="-28"
                  dur={`${2 + i * 0.4}s`}
                  repeatCount="indefinite"
                />
              </path>
            </g>
          );
        })}

        {/* Location markers */}
        {projectedLocations.map((loc, i) => (
          <g key={`loc-${i}`}>
            {/* Heat / glow circle */}
            <circle
              cx={loc.x}
              cy={loc.y}
              r={loc.isHQ ? 25 : 16}
              fill={`rgba(59, 130, 246, ${loc.isHQ ? 0.12 : 0.08})`}
              filter="url(#glowLarge)"
            />

            {/* Pulsing ring */}
            <circle
              cx={loc.x}
              cy={loc.y}
              r={loc.isHQ ? 6 : 4}
              fill="none"
              stroke="rgba(59, 130, 246, 0.5)"
              strokeWidth="1"
            >
              <animate attributeName="r" from={loc.isHQ ? '6' : '4'} to={loc.isHQ ? '22' : '15'} dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.6" to="0" dur="2.5s" repeatCount="indefinite" />
            </circle>

            {/* Second pulse (offset) */}
            <circle
              cx={loc.x}
              cy={loc.y}
              r={loc.isHQ ? 6 : 4}
              fill="none"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="0.5"
            >
              <animate attributeName="r" from={loc.isHQ ? '6' : '4'} to={loc.isHQ ? '22' : '15'} dur="2.5s" begin="1.25s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.4" to="0" dur="2.5s" begin="1.25s" repeatCount="indefinite" />
            </circle>

            {/* Core dot */}
            <circle
              cx={loc.x}
              cy={loc.y}
              r={loc.isHQ ? 5 : 3.5}
              fill="#3b82f6"
              filter="url(#glow)"
            />
            {/* Inner bright dot */}
            <circle
              cx={loc.x}
              cy={loc.y}
              r={loc.isHQ ? 2.5 : 1.5}
              fill="#93c5fd"
            />

            {/* Label */}
            <text
              x={loc.x + loc.labelX}
              y={loc.y + loc.labelY}
              textAnchor={loc.labelAnchor ?? 'middle'}
              fill="white"
              fontSize="11"
              fontWeight="500"
              fontFamily="Inter, sans-serif"
            >
              {loc.name}
            </text>
            {loc.isHQ && (
              <text
                x={loc.x}
                y={loc.y + (loc.hqLabelY ?? 30)}
                textAnchor="middle"
                fill="rgba(96, 165, 250, 0.8)"
                fontSize="8"
                fontWeight="600"
                fontFamily="Inter, sans-serif"
                letterSpacing="2"
              >
                HEADQUARTERS
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
};

// ─── About Page Component ────────────────────────────────────────────
const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#030308] pt-28">
        {/* Background effects */}
        <div className="fixed inset-0 bg-grid-subtle opacity-50 pointer-events-none" />
        <div className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#3b82f6]/5 blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

          {/* ── Section 1: Our Story ─────────────────────────────────── */}
          <div className="mb-32 py-12 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative text-center mb-14"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-[#3b82f6]/8 blur-[70px] pointer-events-none" />
              <span className="label-premium mb-6 inline-block">Our Story</span>
              <h2 className="section-title mb-6">
                Born from resilience,
                <br />
                <span className="text-[#3b82f6]">built with purpose</span>
              </h2>
              <p className="section-subtitle max-w-3xl mx-auto">
                Bright-Byte isn&apos;t just a tech company. It&apos;s the story of turning
                adversity into innovation — and a mission to make AI accessible for everyone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="grid lg:grid-cols-[1.25fr_0.95fr] gap-5 mb-14"
            >
              <div className="card-glass p-6 md:p-8 relative overflow-hidden">
                <div className="absolute -top-20 -right-10 w-56 h-56 rounded-full bg-[#3b82f6]/10 blur-[70px] pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="text-white text-xl md:text-2xl font-semibold mb-4 tracking-tight">
                    A founder journey shaped by experience, not hype
                  </h3>
                  <div className="space-y-4 text-[#9ca3af] text-sm md:text-base leading-relaxed">
                    <p>
                      From writing first programs at age 9 to working inside enterprise teams at Rabobank,
                      ASML, and Colliers, the Bright-Byte story is built on real technical depth and years of
                      hands-on delivery.
                    </p>
                    <p>
                      After relocating to the Netherlands in 2015, Hussin rebuilt from the ground up:
                      studying AI at Utrecht University, shipping production systems, and learning what it takes
                      to deliver high-impact software with consistency.
                    </p>
                    <p>
                      Together with Maya, Bright-Byte was founded to combine enterprise rigor with
                      creative product thinking, helping businesses adopt AI in practical, safe, and
                      measurable ways.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {storyHighlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.12 + index * 0.08 }}
                      className="card-glass p-5 group hover:border-[#3b82f6]/25 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center mb-3 group-hover:bg-[#3b82f6]/20 transition-colors">
                        <Icon className="w-5 h-5 text-[#3b82f6]" />
                      </div>
                      <h4 className="text-white font-semibold text-sm md:text-base mb-1.5">{item.title}</h4>
                      <p className="text-[#9ca3af] text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16"
            >
              {storyFacts.map((fact) => (
                <div key={fact.value} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-center">
                  <div className="text-[#60a5fa] text-xl md:text-2xl font-semibold mb-1">{fact.value}</div>
                  <div className="text-[#9ca3af] text-xs md:text-sm">{fact.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 md:p-6"
            >
              <h4 className="text-white font-semibold text-base md:text-lg mb-2">Timeline Highlights</h4>
              <p className="text-[#9ca3af] text-sm md:text-base leading-relaxed">
                Our journey combines resilience, enterprise experience, and a practical execution mindset.
                Each milestone shaped how we deliver AI and software outcomes for clients today.
              </p>
            </motion.div>

            {/* Journey Timeline */}
            <div className="relative">
              {/* Vertical line (mobile) */}
              <div className="lg:hidden absolute left-[7px] top-2 bottom-2 w-px">
                <div className="w-full h-full bg-gradient-to-b from-[#3b82f6]/35 via-[#3b82f6]/18 to-transparent" />
              </div>

              {/* Vertical line (desktop) */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full bg-gradient-to-b from-[#3b82f6]/30 via-[#3b82f6]/20 to-transparent origin-top"
                />
              </div>

              <div className="space-y-8 lg:space-y-0 relative">
                {journey.map((milestone, index) => {
                  const Icon = milestone.icon;
                  const isLeft = index % 2 === 0;

                  return (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.08 }}
                      className="relative pl-8 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-12 lg:mb-12"
                    >
                      {/* Center dot (mobile) */}
                      <div className="lg:hidden absolute left-[2px] top-7 w-3 h-3 rounded-full bg-[#3b82f6] border-2 border-[#030308] z-10">
                        <div className="absolute inset-0 rounded-full bg-[#3b82f6] animate-ping opacity-25" />
                      </div>

                      {/* Content side */}
                      <div className={isLeft ? 'lg:pr-12' : 'lg:col-start-2 lg:pl-12'}>
                        <div className="card-glass p-6 group hover:border-[#3b82f6]/20 transition-colors duration-300">
                          <div className="flex items-center justify-between gap-3 mb-3">
                            <span className="text-[10px] uppercase tracking-[0.16em] text-[#93c5fd] border border-[#3b82f6]/25 bg-[#3b82f6]/10 rounded-full px-2.5 py-1">
                              {milestone.phase}
                            </span>
                            <span className="text-[#64748b] text-xs">{milestone.location}</span>
                          </div>
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center group-hover:bg-[#3b82f6]/20 transition-colors">
                              <Icon className="w-5 h-5 text-[#3b82f6]" />
                            </div>
                            <span className="text-[#3b82f6] text-sm font-semibold tracking-wider">
                              {milestone.year}
                            </span>
                          </div>
                          <h4 className="text-white font-semibold text-lg mb-2">
                            {milestone.title}
                          </h4>
                          <p className="text-[#9ca3af] text-sm leading-relaxed mb-4">
                            {milestone.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {milestone.outcomes.map((item) => (
                              <span
                                key={item}
                                className="px-2.5 py-1 text-xs rounded-full bg-white/[0.03] border border-white/[0.08] text-[#cbd5e1]"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Center dot (desktop) */}
                      <div className="hidden lg:flex absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-[#3b82f6] border-4 border-[#030308] z-10">
                        <div className="absolute inset-0 rounded-full bg-[#3b82f6] animate-ping opacity-20" />
                      </div>

                      {/* Empty side (desktop) */}
                      {isLeft ? <div className="hidden lg:block" /> : null}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Section 2: The Founders ──────────────────────────────── */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="label-premium mb-4 inline-block">The Team</span>
              <h3 className="section-title mb-4">
                Meet the <span className="text-[#3b82f6]">founders</span>
              </h3>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Hussin */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="card-3d p-8 group"
              >
                <div className="grid grid-cols-[120px_1fr] gap-4 mb-6 items-center">
                  <div className="relative h-36 rounded-2xl overflow-hidden border border-[#3b82f6]/35 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e3a8a] shadow-[0_0_0_1px_rgba(59,130,246,0.18)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(147,197,253,0.35),transparent_50%)]" />
                    <img
                      src="/hussin.png"
                      alt="Hussin - Co-Founder & CEO"
                      className="absolute inset-0 w-full h-full object-cover object-[center_18%] scale-[1.16] contrast-125 brightness-125"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-xl leading-tight mb-1">Hussin</h4>
                    <p className="text-[#3b82f6] text-sm font-medium mb-2">Co-Founder & CEO</p>
                    <p className="text-[#94a3b8] text-xs leading-relaxed">
                      AI strategist and engineering leader focused on practical, production-ready innovation.
                    </p>
                  </div>
                </div>
                <p className="text-[#9ca3af] text-sm leading-relaxed mb-5">
                  AI engineer with roots in enterprise R&D. Studied Artificial Intelligence at Utrecht University
                  and built systems at Rabobank, ASML, and Colliers. Started coding at age 9 and
                  never stopped — now channeling that passion into making AI safe and accessible for businesses worldwide.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['AI & ML', 'Enterprise Systems', 'Automation', 'Full-Stack'].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-xs rounded-full bg-[#3b82f6]/10 text-[#60a5fa] border border-[#3b82f6]/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Maya */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -5 }}
                className="card-3d p-8 group"
              >
                <div className="grid grid-cols-[120px_1fr] gap-4 mb-6 items-center">
                  <div className="relative h-36 rounded-2xl overflow-hidden border border-[#3b82f6]/35 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e3a8a] shadow-[0_0_0_1px_rgba(59,130,246,0.18)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_16%,rgba(147,197,253,0.35),transparent_50%)]" />
                    <img
                      src="/maya.png"
                      alt="Maya - Co-Founder & Creative Director"
                      className="absolute inset-0 w-full h-full object-cover object-[center_16%] scale-[1.14] contrast-125 brightness-125"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-xl leading-tight mb-1">Maya</h4>
                    <p className="text-[#3b82f6] text-sm font-medium mb-2">Co-Founder & Creative Director</p>
                    <p className="text-[#94a3b8] text-xs leading-relaxed">
                      Creative lead shaping brand, UX, and product communication into memorable experiences.
                    </p>
                  </div>
                </div>
                <p className="text-[#9ca3af] text-sm leading-relaxed mb-5">
                  The creative force behind Bright-Byte. With a strong background in marketing strategy and a
                  passion for design, Maya ensures every product we build doesn&apos;t just work brilliantly
                  — it looks and feels exceptional. She bridges the gap between technology and human experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Brand Strategy', 'UI/UX Design', 'Marketing', 'Creative Direction'].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 text-xs rounded-full bg-[#3b82f6]/10 text-[#60a5fa] border border-[#3b82f6]/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* ── Section 3: Mission & Impact ──────────────────────────── */}
          <div className="mb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Mission Text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="label-premium mb-6 inline-block">Our Mission</span>
                <h3 className="section-title mb-6">
                  Making AI <span className="text-[#3b82f6]">accessible</span>
                  <br />for everyone
                </h3>
                <div className="space-y-4 text-[#9ca3af] leading-relaxed mb-8">
                  <p>
                    We believe every business, regardless of size, deserves access to the
                    transformative power of artificial intelligence. Too many companies are being
                    left behind in the AI revolution — not because the technology doesn&apos;t exist,
                    but because it feels out of reach.
                  </p>
                  <p>
                    Bright-Byte exists to change that. We translate complex AI capabilities
                    into practical, safe, and scalable solutions that help companies grow,
                    compete, and innovate.
                  </p>
                </div>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-premium inline-flex items-center gap-2"
                  >
                    Work With Us
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </motion.div>

              {/* Giving Back Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="card-glass p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#3b82f6]/10 rounded-full blur-[60px] pointer-events-none" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center mb-6">
                      <Heart className="w-6 h-6 text-[#3b82f6]" />
                    </div>
                    <h4 className="text-white font-semibold text-xl mb-3">Giving Back</h4>
                    <p className="text-[#9ca3af] text-sm leading-relaxed mb-6">
                      Hussin organizes IT and AI workshops to empower the next generation of
                      builders — especially in war-affected countries like Syria and Lebanon.
                      Having experienced the challenges of displacement firsthand, he is committed
                      to sharing knowledge and creating opportunities for those who need them most.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
                        <div className="text-2xl font-bold text-white mb-1">AI</div>
                        <div className="text-xs text-[#6b7280]">Workshops</div>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
                        <div className="text-2xl font-bold text-white mb-1">MENA</div>
                        <div className="text-xs text-[#6b7280]">Region Focus</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ── Section 4: Where We Operate ──────────────────────────── */}
          <div className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="label-premium mb-4 inline-block">Global Reach</span>
              <h3 className="section-title mb-4">
                Where we <span className="text-[#3b82f6]">operate</span>
              </h3>
              <p className="section-subtitle max-w-lg mx-auto">
                Headquartered in the Netherlands with partners and clients across the globe.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="card-glass p-4 md:p-8 relative overflow-hidden">
                <WorldMap />
              </div>
            </motion.div>
          </div>

          {/* ── Section 5: How We Work ───────────────────────────────── */}
          <div className="relative mb-20">
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
                <StepCard key={step.number} step={step} />
              ))}
            </motion.div>
          </div>

          {/* ── CTA ─────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="card-3d p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
                Ready to build something great?
              </h2>
              <p className="text-[#9ca3af] mb-8 max-w-xl mx-auto">
                Let's discuss how we can help you leverage AI and technology to grow your business.
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

export default AboutPage;
