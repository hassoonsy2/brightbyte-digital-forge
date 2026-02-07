import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, CheckCircle2, Clock, MessageCircle, Rocket, ShieldCheck } from 'lucide-react';

const benefits = [
  'Comprehensive project and technical audit',
  'Stack and architecture recommendations',
  'Timeline, scope, and budget guidance',
  'Clear next-step action plan',
];

const sessionAgenda = [
  'Business goals and blockers',
  'Technology and integration scope',
  'Recommended build strategy',
  'Timeline and investment estimate',
];

const quickStats = [
  { value: '30m', label: 'Strategy Call' },
  { value: '24h', label: 'Follow-up Plan' },
  { value: '100%', label: 'No Obligation' },
];

const ConsultationCTA = () => (
  <section className="relative py-28 overflow-hidden">
    <div className="absolute inset-0 bg-[#060912]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.2),transparent_36%),radial-gradient(circle_at_85%_80%,rgba(14,165,233,0.16),transparent_32%)]" />
    <div className="absolute inset-0 bg-grid-subtle opacity-30" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/25 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/25 to-transparent" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="relative rounded-3xl border border-white/10 bg-[#050916]/75 backdrop-blur-xl overflow-hidden">
        <div className="absolute -top-32 -left-24 w-72 h-72 rounded-full bg-[#3b82f6]/15 blur-[95px]" />
        <div className="absolute -bottom-40 -right-24 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative z-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 px-6 py-10 md:px-10 md:py-12 lg:px-12 lg:py-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/10 text-[#93c5fd] text-xs font-medium mb-6">
              <MessageCircle className="w-3.5 h-3.5" />
              Free Consultation
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight mb-5">
              Let&apos;s discuss your
              <br />
              <span className="bg-gradient-to-r from-[#60a5fa] to-[#22d3ee] bg-clip-text text-transparent">
                next project
              </span>
            </h2>

            <p className="text-[#9ca3af] text-base sm:text-lg leading-relaxed max-w-2xl mb-7">
              Book a focused strategy session with our team. You&apos;ll get practical direction, technical clarity,
              and a clear execution path tailored to your goals.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 mb-8">
              {quickStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * index }}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                >
                  <div className="text-white text-xl font-semibold">{stat.value}</div>
                  <div className="text-[#94a3b8] text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mb-9">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.06 * index }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#3b82f6]/15 border border-[#3b82f6]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#60a5fa]" />
                  </div>
                  <span className="text-sm text-[#cbd5e1] leading-relaxed">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-lg font-medium text-white inline-flex items-center gap-2 bg-[#3b82f6] hover:bg-[#60a5fa] transition-colors"
                >
                  Book Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 rounded-lg border border-white/15 text-[#e2e8f0] hover:border-[#3b82f6]/40 hover:bg-[#3b82f6]/10 transition-colors"
                >
                  Browse Services
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-2xl border border-white/10 bg-[#0b1221]/80 p-6 sm:p-7 h-full">
              <div className="flex items-center justify-between gap-4 pb-5 border-b border-white/10">
                <div>
                  <p className="text-xs text-[#93c5fd] uppercase tracking-[0.14em]">Session Snapshot</p>
                  <h3 className="text-white text-xl font-semibold mt-1">What You&apos;ll Get</h3>
                </div>
                <div className="w-11 h-11 rounded-xl bg-[#3b82f6]/15 border border-[#3b82f6]/35 flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-[#60a5fa]" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 py-5">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <Clock className="w-4 h-4 text-[#60a5fa] mb-2" />
                  <p className="text-white text-sm font-medium">30 Minutes</p>
                  <p className="text-[#94a3b8] text-xs">Live strategy call</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <Calendar className="w-4 h-4 text-[#60a5fa] mb-2" />
                  <p className="text-white text-sm font-medium">Video Meeting</p>
                  <p className="text-[#94a3b8] text-xs">Flexible scheduling</p>
                </div>
              </div>

              <div className="pt-1">
                <p className="text-white font-medium mb-3">Agenda</p>
                <div className="space-y-2.5">
                  {sessionAgenda.map((item, index) => (
                    <div key={item} className="flex gap-3">
                      <div className="w-6 h-6 rounded-full border border-[#3b82f6]/35 bg-[#3b82f6]/10 text-[#93c5fd] text-xs flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-sm text-[#cbd5e1] leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 rounded-lg bg-gradient-to-r from-[#3b82f6]/8 to-cyan-500/8 px-4 py-3">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#60a5fa] mt-0.5 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                    We focus on practical recommendations you can execute immediately after the call.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default ConsultationCTA;
