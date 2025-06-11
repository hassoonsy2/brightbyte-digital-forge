import React from 'react';
import { Calendar, Clock, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '../context/LanguageContext';

const ConsultationCTA = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const benefits = [
    { icon: CheckCircle, text: t('consultationBenefit1') },
    { icon: CheckCircle, text: t('consultationBenefit2') },
    { icon: CheckCircle, text: t('consultationBenefit3') },
    { icon: CheckCircle, text: t('consultationBenefit4') }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main CTA */}
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="h-6 w-6 text-blue-200" />
              <span className="text-blue-200 font-medium">{t('consultationAvailable')}</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              {t('consultationTitle')}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                {t('consultationSubtitle')}
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {t('consultationDescription')}
            </p>

            {/* Benefits list */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <benefit.icon className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button
              onClick={scrollToContact}
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {t('consultationButton')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right side - Visual element */}
          <div className="relative">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardContent className="p-8">
                {/* Consultation preview */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{t('consultationDuration')}</h3>
                  <p className="text-blue-200">{t('consultationType')}</p>
                </div>

                {/* What we'll cover */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-3">{t('consultationCoverTitle')}</h4>
                  <div className="space-y-3 text-blue-100">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{t('consultationCover1')}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{t('consultationCover2')}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{t('consultationCover3')}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{t('consultationCover4')}</span>
                    </div>
                  </div>
                </div>

                {/* Contact info */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="flex items-center justify-center space-x-4 text-blue-200">
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm">info@bright-byte.co</span>
                    </div>
                    <span className="text-white/40">|</span>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">+31657694468</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center animate-pulse delay-1000">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA; 