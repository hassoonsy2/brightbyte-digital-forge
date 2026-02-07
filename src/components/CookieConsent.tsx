import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { initGA } from '../utils/analytics';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    initGA();
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm"
        >
          <div className="bg-[#0a0a12] border border-white/[0.06] rounded-xl p-6 shadow-2xl shadow-black/50">
            <div className="flex items-start justify-between mb-4">
              <h4 className="text-white font-medium">Cookie Preferences</h4>
              <button
                onClick={handleDecline}
                className="text-[#6b7280] hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[#9ca3af] text-sm mb-6 leading-relaxed">
              We use cookies to enhance your browsing experience and analyze our traffic. 
              By clicking Accept, you consent to our use of cookies.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleDecline}
                className="flex-1 px-4 py-2 text-sm text-[#9ca3af] hover:text-white transition-colors"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 px-4 py-2 bg-[#3b82f6] text-white text-sm font-medium rounded-lg hover:bg-[#60a5fa] transition-colors"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
