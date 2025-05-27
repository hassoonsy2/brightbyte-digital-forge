
import React from 'react';
import { Mail, Phone, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/fef6dfd8-e93b-4f7d-b27a-be0177d4f632.png" 
              alt="Bright-Byte" 
              className="h-8 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-400 mb-4 max-w-md">
              Transforming businesses with cutting-edge AI, quantum computing, and comprehensive digital solutions.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contact@bright-byte.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">AI Consulting</li>
              <li className="hover:text-white transition-colors cursor-pointer">Quantum Computing</li>
              <li className="hover:text-white transition-colors cursor-pointer">Software Development</li>
              <li className="hover:text-white transition-colors cursor-pointer">Machine Learning</li>
              <li className="hover:text-white transition-colors cursor-pointer">Automation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>Global Remote Team</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Bright-Byte. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
