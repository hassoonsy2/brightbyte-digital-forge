import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
            <img 
              src="/lovable-uploads/fef6dfd8-e93b-4f7d-b27a-be0177d4f632.png" 
              alt="Bright-Byte" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              {t('footerDescription')}
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-4 w-4 text-blue-400" />
                <a 
                  href="mailto:info@bright-byte.co" 
                  className="text-sm hover:text-white transition-colors"
                >
                  info@bright-byte.co
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-4 w-4 text-blue-400" />
                <a 
                  href="tel:+31657694468" 
                  className="text-sm hover:text-white transition-colors"
                >
                  +31657694468
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm">Utrecht, The Netherlands</span>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-3">Follow Us</h4>
            <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/bright.byte.nl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/bright-byte-company/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footerServicesTitle')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link 
                  to="/services/ai-consulting" 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t('aiConsulting')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/quantum-computing" 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t('quantumComputing')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/software-development" 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t('softwareDev')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/machine-learning" 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t('machineLearning')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/services/automation" 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t('automation')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footerContactTitle')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link 
                  to="/about" 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t('services')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t('contact')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t('privacyPolicy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-center sm:text-left">&copy; {t('footerCopyright')}</p>
            
            {/* Social Media Links - Bottom */}
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a 
                href="https://www.instagram.com/bright.byte.nl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/bright-byte-company/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
