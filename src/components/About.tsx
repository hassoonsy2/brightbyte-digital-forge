import React from 'react';
import { CheckCircle, Award, Users, Rocket, Brain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Brain, value: '', label: t('aiTechSpecialists') },
    { icon: Award, value: '100+', label: t('successfulProjects') },
    { icon: Rocket, value: '24/7', label: t('technicalSupport') },
    { icon: CheckCircle, value: '99%', label: t('clientSatisfaction') },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t('aboutTitle')}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t('aboutDescription')}
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="border-0 bg-blue-50/50">
                  <CardContent className="p-4 text-center">
                    <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Visual element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200/30 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-300/30 rounded-full translate-y-16 -translate-x-16"></div>
              
              <div className="relative z-10 text-center">
                <div className="text-6xl font-bold text-blue-600 mb-4">
                  5+
                </div>
                <div className="text-xl font-semibold text-gray-800 mb-2">
                  {t('yearsOfExcellence')}
                </div>
                <div className="text-gray-600">
                  {t('pioneeringFuture')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
