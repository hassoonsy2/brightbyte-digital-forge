import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

export interface LegalSection {
  title: string;
  content: React.ReactNode;
}

interface LegalDocumentLayoutProps {
  badge: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
}

const LegalDocumentLayout = ({
  badge,
  title,
  subtitle,
  lastUpdated,
  sections,
}: LegalDocumentLayoutProps) => {
  return (
    <div className="min-h-screen bg-[#030308]">
      <Header />

      <div className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />
        <div className="absolute top-56 left-1/2 -translate-x-1/2 w-[760px] h-[760px] rounded-full bg-[#3b82f6]/6 blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-center mb-10"
          >
            <span className="label-premium mb-5 inline-block">{badge}</span>
            <h1 className="section-title mb-4">{title}</h1>
            <p className="section-subtitle max-w-3xl mx-auto">{subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 mb-7"
          >
            <p className="text-[#94a3b8] text-sm">
              Last updated: <span className="text-[#dbeafe]">{lastUpdated}</span>
            </p>
          </motion.div>

          <div className="space-y-5">
            {sections.map((section, index) => (
              <motion.section
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                className="card-glass p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-[#3b82f6]/12 border border-[#3b82f6]/25 text-[#60a5fa] text-xs font-semibold flex items-center justify-center">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-xl md:text-2xl font-semibold text-white">{section.title}</h2>
                </div>
                <div className="space-y-4 text-[#9ca3af] text-sm md:text-base leading-relaxed">
                  {section.content}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LegalDocumentLayout;
