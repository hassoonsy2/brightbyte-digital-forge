import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'AI Consulting', href: '/services/ai-consulting' },
    { label: 'Software Development', href: '/services/software-development' },
    { label: 'Automation', href: '/services/automation' },
    { label: 'Machine Learning', href: '/services/machine-learning' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/bright.byte.nl', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/bright-byte-company/', label: 'LinkedIn' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030308] border-t border-white/[0.04]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3b82f6]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img
                src="/Logo-trimmed.png"
                alt="Bright-Byte logo"
                width={387}
                height={105}
                loading="lazy"
                decoding="async"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-[#6b7280] text-sm leading-relaxed mb-6">
              Premium technology consultancy specializing in AI,
              software engineering, automation, and growth systems.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#6b7280] hover:text-[#3b82f6] hover:border-[#3b82f6]/30 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-medium mb-6 text-sm">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-[#6b7280] hover:text-[#3b82f6] text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-medium mb-6 text-sm">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-[#6b7280] hover:text-[#3b82f6] text-sm transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-medium mb-6 text-sm">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <a 
                href="mailto:info@bright-byte.co" 
                className="block text-[#6b7280] hover:text-[#3b82f6] transition-colors"
              >
                info@bright-byte.co
              </a>
              <a 
                href="tel:+31657694468" 
                className="block text-[#6b7280] hover:text-[#3b82f6] transition-colors"
              >
                +31657694468
              </a>
              <p className="text-[#6b7280]">Utrecht, Netherlands</p>
              <p className="text-[#6b7280]">KVK: 66739179</p>
              <p className="text-[#6b7280]">BTW: NL001453936B46</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#6b7280] text-sm">
            &copy; {currentYear} Bright-Byte. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy-policy" className="text-[#6b7280] hover:text-[#3b82f6] transition-colors">
              Privacy
            </Link>
            <Link to="/terms-of-use" className="text-[#6b7280] hover:text-[#3b82f6] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
