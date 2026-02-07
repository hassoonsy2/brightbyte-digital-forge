import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Send, CheckCircle2, X, Sparkles, ArrowUpRight,
  MessageSquare, Clock, Shield, Star, Users, Zap,
  Calendar, ChevronRight, Check, ArrowRight
} from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/email';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    budget: '',
    service: '',
    message: ''
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        company: formData.company,
        budget: formData.budget,
        service: formData.service,
        message: formData.message,
        time: new Date().toLocaleString('en-GB', { 
          timeZone: 'Europe/Amsterdam',
          dateStyle: 'short',
          timeStyle: 'short'
        }),
        reply_to: formData.email,
      };

      if (!emailConfig.serviceId || emailConfig.serviceId.includes('your_')) {
        toast.error('Email service not configured');
        setIsSubmitting(false);
        return;
      }

      const result = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      );

      if (result.status === 200) {
        setSubmittedName(formData.firstName);
        setShowSuccessModal(true);
        setFormData({ firstName: '', lastName: '', email: '', company: '', budget: '', service: '', message: '' });
        setFormStep(0);
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setFormStep(prev => Math.min(prev + 1, 2));
  const prevStep = () => setFormStep(prev => Math.max(prev - 1, 0));

  const steps = [
    { title: 'About You', icon: Users },
    { title: 'Project Details', icon: MessageSquare },
    { title: 'Message', icon: Mail }
  ];

  const services = [
    'AI Consulting',
    'Machine Learning',
    'Web Development',
    'Software Development',
    'Mobile Apps',
    'Automation',
    'Data Marketing',
    'SEO',
    'Other'
  ];

  const budgets = [
    '€10k - €25k',
    '€25k - €50k',
    '€50k - €100k',
    '€100k+',
    'Not sure yet'
  ];

  return (
    <section id="contact" className="relative min-h-screen py-20 overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Start Your Project</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Let&apos;s build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              something great
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tell us about your project and we&apos;ll get back to you within 24 hours with a detailed proposal.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Sidebar - Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Trust Card */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">Why companies choose us</h3>
              <div className="space-y-4">
                {[
                  { icon: Clock, text: '24h response guarantee', color: 'text-blue-400' },
                  { icon: Shield, text: 'NDA available on request', color: 'text-green-400' },
                  { icon: Star, text: '4.9/5 client satisfaction', color: 'text-yellow-400' },
                  { icon: Zap, text: 'Fast, agile development', color: 'text-cyan-400' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center ${item.color}`}>
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-gray-300 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <a 
              href="mailto:info@bright-byte.co"
              className="block p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-400">Email us directly</div>
                  <div className="text-white font-medium group-hover:text-blue-400 transition-colors">
                    info@bright-byte.co
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors" />
              </div>
            </a>

            {/* Availability */}
            <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-green-500"
                    animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
                <span className="text-green-400 font-medium">Available for new projects</span>
              </div>
              <p className="text-gray-400 text-sm">
                Currently accepting new clients for Q1 2026. Book a free consultation call.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="relative rounded-3xl bg-white/[0.03] border border-white/10 p-8 backdrop-blur-sm overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
              
              {/* Step Indicator */}
              <div className="relative flex items-center justify-between mb-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center flex-1">
                    <motion.div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                        formStep >= index 
                          ? 'bg-blue-500 text-white' 
                          : 'bg-white/5 text-gray-500'
                      }`}
                      animate={{ scale: formStep === index ? 1.1 : 1 }}
                    >
                      {formStep > index ? <Check className="w-5 h-5" /> : <step.icon className="w-4 h-4" />}
                    </motion.div>
                    <span className={`ml-2 text-sm hidden sm:block ${formStep >= index ? 'text-white' : 'text-gray-500'}`}>
                      {step.title}
                    </span>
                    {index < steps.length - 1 && (
                      <div className={`flex-1 h-px mx-4 ${formStep > index ? 'bg-blue-500' : 'bg-white/10'}`} />
                    )}
                  </div>
                ))}
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="relative space-y-6">
                <AnimatePresence mode="wait">
                  {/* Step 1: About You */}
                  {formStep === 0 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-400 text-sm mb-2">First Name *</label>
                          <input
                            name="firstName"
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-400 text-sm mb-2">Last Name *</label>
                          <input
                            name="lastName"
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Work Email *</label>
                        <input
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Company</label>
                        <input
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                          placeholder="Acme Inc."
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Project Details */}
                  {formStep === 1 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-gray-400 text-sm mb-3">What service do you need? *</label>
                        <div className="grid grid-cols-2 gap-3">
                          {services.map((service) => (
                            <button
                              key={service}
                              type="button"
                              onClick={() => setFormData({ ...formData, service })}
                              className={`px-4 py-3 rounded-xl text-left text-sm transition-all ${
                                formData.service === service
                                  ? 'bg-blue-500 text-white border-blue-500'
                                  : 'bg-white/5 text-gray-300 border border-white/10 hover:border-white/20'
                              }`}
                            >
                              {service}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-400 text-sm mb-3">Project Budget</label>
                        <div className="flex flex-wrap gap-2">
                          {budgets.map((budget) => (
                            <button
                              key={budget}
                              type="button"
                              onClick={() => setFormData({ ...formData, budget })}
                              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                                formData.budget === budget
                                  ? 'bg-blue-500 text-white'
                                  : 'bg-white/5 text-gray-300 border border-white/10 hover:border-white/20'
                              }`}
                            >
                              {budget}
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Message */}
                  {formStep === 2 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Tell us about your project *</label>
                        <textarea
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all resize-none"
                          placeholder="Describe your project goals, timeline, and any specific requirements..."
                        />
                      </div>

                      <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
                        <div className="flex items-start gap-3">
                          <Calendar className="w-5 h-5 text-blue-400 mt-0.5" />
                          <div>
                            <div className="text-white font-medium text-sm">Prefer to talk?</div>
                            <div className="text-gray-400 text-sm">We&apos;ll include a calendar link in our response to book a call.</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-4">
                  {formStep > 0 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 rounded-xl font-medium text-gray-400 hover:text-white transition-colors"
                    >
                      Back
                    </button>
                  )}
                  
                  {formStep < 2 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="ml-auto px-6 py-3 rounded-xl font-medium text-white bg-blue-500 hover:bg-blue-400 transition-colors flex items-center gap-2"
                    >
                      Continue
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="ml-auto px-8 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 transition-all disabled:opacity-50 flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-md w-full p-8 text-center rounded-3xl bg-gray-900 border border-white/10"
            >
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-400" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Thanks, {submittedName}!
              </h3>
              <p className="text-gray-400 mb-6">
                We&apos;ve received your message and will respond within 24 hours with a detailed proposal.
              </p>

              <button
                onClick={() => setShowSuccessModal(false)}
                className="px-8 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-medium transition-colors"
              >
                Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
