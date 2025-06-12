import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles, Zap, Brain, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const techWords = ['AI Solutions', 'Quantum Computing', 'Automation', 'Innovation'];
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const currentWord = techWords[currentWordIndex];
    let currentIndex = 0;
    let isDeleting = false;
    
    const typeInterval = setInterval(() => {
      if (!isDeleting) {
        setTypedText(currentWord.substring(0, currentIndex + 1));
        currentIndex++;
        
        if (currentIndex === currentWord.length) {
          setTimeout(() => {
            isDeleting = true;
          }, 2000);
        }
      } else {
        setTypedText(currentWord.substring(0, currentIndex - 1));
        currentIndex--;
        
        if (currentIndex === 0) {
          isDeleting = false;
          setCurrentWordIndex((prev) => (prev + 1) % techWords.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(typeInterval);
  }, [currentWordIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/20"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${8 + Math.random() * 12}s`, // 8-20 seconds for very smooth movement
                animationDelay: `${Math.random() * 5}s`,
                animationTimingFunction: 'cubic-bezier(0.4, 0, 0.6, 1)', // Custom easing for smoothness
              }}
            />
          ))}
        </div>

        {/* Pulsing orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-purple-500/20 rounded-full animate-pulse"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDuration: `${3 + Math.random() * 4}s`, // 3-7 seconds
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Animated badge */}
          <div className={`inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Sparkles className="w-4 h-4 text-blue-400 mr-2 animate-pulse" />
            <span className="text-blue-300 text-sm font-medium">AI & Tech Specialists</span>
          </div>

          {/* Main heading with staggered animation */}
          <div className="mb-6">
            <h1 className={`text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {t('heroTitle')}
            </h1>
            
            {/* Animated subtitle with typing effect */}
            <div className={`text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-tight transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-300% animate-gradient">
                {typedText}
              </span>
              <span className="animate-blink text-blue-400">|</span>
            </div>
          </div>

          {/* Description with fade-in */}
          <p className={`text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t('heroDescription')}
          </p>

          {/* CTA buttons with hover animations */}
          <div className={`flex justify-center items-center mb-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 relative overflow-hidden border-2 border-blue-400/20 hover:border-blue-300/40"
            >
              <span className="relative z-10 flex items-center">
                <Sparkles className="mr-3 h-6 w-6 group-hover:rotate-12 group-hover:scale-125 transition-all duration-300" />
                {t('heroButtonText')}
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>

          {/* Tech indicators with staggered animations */}
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { icon: Brain, label: 'AI', desc: 'Artificial Intelligence', delay: '0s' },
              { icon: Cpu, label: 'QC', desc: 'Quantum Computing', delay: '0.1s' },
              { icon: Zap, label: 'ML', desc: 'Machine Learning', delay: '0.2s' },
              { icon: Sparkles, label: 'AUTO', desc: 'Automation', delay: '0.3s' }
            ].map((tech, index) => (
              <div 
                key={index}
                className="group text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: tech.delay }}
              >
                <tech.icon className="w-8 h-8 text-blue-400 mx-auto mb-2 group-hover:scale-110 group-hover:text-blue-300 transition-all duration-300" />
                <div className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">{tech.label}</div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="flex flex-col items-center animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center mb-2 backdrop-blur-sm">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-blue-300 text-xs">Scroll Down</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
