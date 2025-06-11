import React from 'react';
import { Brain, Cpu, Code, Zap, BarChart, Share2, Bot, Smartphone, Search, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../lib/servicesData';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t } = useLanguage();

  const services = servicesData(t);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {t('servicesTitle')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link to={`/services/${service.id}`} key={service.id} className="block group">
              <Card 
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-r ${service.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
