import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Award, Lightbulb } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t('valueInnovationTitle'),
      description: t('valueInnovationDesc')
    },
    {
      icon: Users,
      title: t('valueCollaborationTitle'),
      description: t('valueCollaborationDesc')
    },
    {
      icon: Award,
      title: t('valueExcellenceTitle'),
      description: t('valueExcellenceDesc')
    },
    {
      icon: Lightbulb,
      title: t('valueCreativityTitle'),
      description: t('valueCreativityDesc')
    }
  ];

  const team = [
    {
      name: 'Hussin Almoustafa',
      role: 'CEO & Machine Learning / Quantum Researcher',
      image: '/team/hussin.jpg',
      bio: 'Visionary leader and expert in machine learning and quantum computing research, driving innovation in AI and quantum technologies.'
    },
    {
      name: 'Maya Almahmoud',
      role: 'CFO / Marketing Specialist & Designer',
      image: '/team/maya.jpg',
      bio: 'Strategic financial leader with expertise in marketing and design, bringing creative solutions to business challenges.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {t('aboutPageTitle')}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('aboutPageSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('ourStoryTitle')}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t('ourStoryParagraph1')}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {t('ourStoryParagraph2')}
              </p>
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Link to="/contact">
                  {t('getInTouchButton')}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl bg-white flex items-center justify-center">
              <img
                src="/lovable-uploads/fef6dfd8-e93b-4f7d-b27a-be0177d4f632.png"
                alt="Bright-Byte Logo"
                className="w-auto h-48 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('ourValuesTitle')}</h2>
            <p className="text-xl text-gray-600">
              {t('ourValuesSubtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{t('ourMissionTitle')}</h2>
            <p className="text-xl mb-8">
              {t('ourMissionDescription')}
            </p>
            <Button
              asChild
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Link to="/services">
                {t('exploreServicesButton')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About; 