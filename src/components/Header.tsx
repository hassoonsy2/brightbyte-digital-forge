import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language } = useLanguage();

  return (
    <header className="relative bg-white/90 backdrop-blur-md border-b border-gray-200/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <Link to="/" className="flex items-center group ml-2">
            <img 
              src="/lovable-uploads/fef6dfd8-e93b-4f7d-b27a-be0177d4f632.png" 
              alt="Bright-Byte" 
              className="h-66 w-auto transition-transform duration-300 group-hover:scale-115"
              style={{ maxHeight: '110px' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t('home')}
            </Link>
            <Link 
              to="/services"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t('services')}
            </Link>
            <Link 
              to="/blog"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Blog
            </Link>
            <Link 
              to="/portfolio"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t('portfolio') || 'Portfolio'}
            </Link>
            <Link 
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t('about')}
            </Link>
            <Link 
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {t('contact')}
            </Link>
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/20">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2 text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <Link 
                to="/services"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2 text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('services')}
              </Link>
              <Link 
                to="/blog"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2 text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/portfolio"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2 text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('portfolio') || 'Portfolio'}
              </Link>
              <Link 
                to="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2 text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('about')}
              </Link>
              <Link 
                to="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2 text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('contact')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
