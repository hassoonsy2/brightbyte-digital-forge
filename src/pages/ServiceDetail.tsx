import React from 'react';
import { useParams, Navigate, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../lib/servicesData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t, isLoading } = useLanguage();
  const navigate = useNavigate();
  const services = servicesData(t);
  const service = services.find(s => s.id === id);

  // Show loading state while language context is initializing
  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 pb-20 bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Debug output
  if (!service) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 p-8 text-center text-red-600">
          <p>Debug: id from URL: <b>{id}</b></p>
          <p>Debug: No service found for this id.</p>
          <p>Known service ids: {services.map(s => s.id).join(', ')}</p>
          <Navigate to="/services" />
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-20 pb-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Button 
            onClick={() => navigate('/services')}
            variant="outline" 
            className="mb-8 flex items-center gap-2 hover:bg-blue-50"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('backToServices')}
          </Button>

          <Card className="bg-white/90 shadow-xl">
            <CardContent className="p-8 flex flex-col items-center text-center">
              <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${service.gradient} mb-6`}>
                <Icon className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold mb-4 text-gray-900">{service.title}</h1>
              <p className="text-lg text-gray-700 mb-8">{service.description}</p>
              
              {/* Extended content for each service */}
              <div className="text-gray-600 text-base leading-relaxed space-y-6 w-full text-left">
                {service.id === 'ai-consulting' && (
                  <>
                    <img src="/AI.png" alt="AI Consulting" className="rounded-lg shadow mb-6 w-full max-w-2xl mx-auto" />
                    
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t('aiConsultingTitle')}</h2>
                    <p>{t('aiConsultingIntro')}</p>
                    
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('aiSolutionsTitle')}</h3>
                    <ul className="list-disc ml-6 mb-6 space-y-2">
                      <li>{t('aiSolution1')}</li>
                      <li>{t('aiSolution2')}</li>
                      <li>{t('aiSolution3')}</li>
                      <li>{t('aiSolution4')}</li>
                      <li>{t('aiSolution5')}</li>
                      <li>{t('aiSolution6')}</li>
                      <li>{t('aiSolution7')}</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('whyChooseAiTitle')}</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900">{t('aiExpertTeam')}</h4>
                        <p className="text-sm">{t('aiExpertTeamDesc')}</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900">{t('aiPracticalApproach')}</h4>
                        <p className="text-sm">{t('aiPracticalApproachDesc')}</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900">{t('aiEndToEndSupport')}</h4>
                        <p className="text-sm">{t('aiEndToEndSupportDesc')}</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900">{t('aiIndustryExpertise')}</h4>
                        <p className="text-sm">{t('aiIndustryExpertiseDesc')}</p>
                      </div>
                    </div>

                    <p>{t('aiClosing')}</p>
                  </>
                )}

                {service.id === 'quantum-computing' && (
                  <>
                    <img src="/quntum.png" alt="Quantum Computing" className="rounded-lg shadow mb-6 w-full max-w-2xl mx-auto" />
                    
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t('quantumTitle')}</h2>
                    <p>{t('quantumIntro')}</p>
                    
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('quantumServicesTitle')}</h3>
                    <ul className="list-disc ml-6 mb-6 space-y-2">
                      <li>{t('quantumService1')}</li>
                      <li>{t('quantumService2')}</li>
                      <li>{t('quantumService3')}</li>
                      <li>{t('quantumService4')}</li>
                      <li>{t('quantumService5')}</li>
                      <li>{t('quantumService6')}</li>
                      <li>{t('quantumService7')}</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('quantumApplicationsTitle')}</h3>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-6">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{t('quantumOptimization')}</h4>
                          <p className="text-sm">{t('quantumOptimizationDesc')}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{t('quantumCryptography')}</h4>
                          <p className="text-sm">{t('quantumCryptographyDesc')}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{t('quantumSimulation')}</h4>
                          <p className="text-sm">{t('quantumSimulationDesc')}</p>
                        </div>
                      </div>
                    </div>

                    <p>{t('quantumClosing')}</p>
                  </>
                )}

                {service.id === 'software-development' && (
                  <>
                    <img src="/software.png" alt="Software Development" className="rounded-lg shadow mb-6 w-full max-w-2xl mx-auto" />
                    
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t('softwareTitle')}</h2>
                    <p>{t('softwareIntro')}</p>
                    
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('softwareServicesTitle')}</h3>
                    <ul className="list-disc ml-6 mb-6 space-y-2">
                      <li>{t('softwareService1')}</li>
                      <li>{t('softwareService2')}</li>
                      <li>{t('softwareService3')}</li>
                      <li>{t('softwareService4')}</li>
                      <li>{t('softwareService5')}</li>
                      <li>{t('softwareService6')}</li>
                      <li>{t('softwareService7')}</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('softwareProcessTitle')}</h3>
                    <div className="space-y-4 mb-6">
                      <div className="flex gap-4">
                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{t('softwareStep1')}</h4>
                          <p className="text-sm text-gray-600">{t('softwareStep1Desc')}</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{t('softwareStep2')}</h4>
                          <p className="text-sm text-gray-600">{t('softwareStep2Desc')}</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">3</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{t('softwareStep3')}</h4>
                          <p className="text-sm text-gray-600">{t('softwareStep3Desc')}</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">4</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{t('softwareStep4')}</h4>
                          <p className="text-sm text-gray-600">{t('softwareStep4Desc')}</p>
                        </div>
                      </div>
                    </div>

                    <p>{t('softwareClosing')}</p>
                  </>
                )}

                {service.id === 'automation' && (
                  <>
                    <img src="/automation.png" alt="Automation" className="rounded-lg shadow mb-6 w-full max-w-2xl mx-auto" />
                    
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t('automationTitle')}</h2>
                    <p>{t('automationIntro')}</p>
                    
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('automationSolutionsTitle')}</h3>
                    <ul className="list-disc ml-6 mb-6 space-y-2">
                      <li>{t('automationSolution1')}</li>
                      <li>{t('automationSolution2')}</li>
                      <li>{t('automationSolution3')}</li>
                      <li>{t('automationSolution4')}</li>
                      <li>{t('automationSolution5')}</li>
                      <li>{t('automationSolution6')}</li>
                      <li>{t('automationSolution7')}</li>
                      <li>{t('automationSolution8')}</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('automationBenefitsTitle')}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                      <div className="bg-green-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600 mb-2">{t('automationBenefit1')}</div>
                        <p className="text-sm">{t('automationBenefit1Desc')}</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-2">{t('automationBenefit2')}</div>
                        <p className="text-sm">{t('automationBenefit2Desc')}</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-2">{t('automationBenefit3')}</div>
                        <p className="text-sm">{t('automationBenefit3Desc')}</p>
                      </div>
                    </div>

                    <p>{t('automationClosing')}</p>
                  </>
                )}

                {service.id === 'data-marketing' && (
                  <>
                    <img src="/marketing.png" alt="Data Marketing" className="rounded-lg shadow mb-6 w-full max-w-2xl mx-auto" />
                    
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t('dataMarketingTitle')}</h2>
                    <p>{t('dataMarketingIntro')}</p>
                    
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('dataMarketingServicesTitle')}</h3>
                    <ul className="list-disc ml-6 mb-6 space-y-2">
                      <li>{t('dataMarketingService1')}</li>
                      <li>{t('dataMarketingService2')}</li>
                      <li>{t('dataMarketingService3')}</li>
                      <li>{t('dataMarketingService4')}</li>
                      <li>{t('dataMarketingService5')}</li>
                      <li>{t('dataMarketingService6')}</li>
                      <li>{t('dataMarketingService7')}</li>
                      <li>{t('dataMarketingService8')}</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('dataMarketingChannelsTitle')}</h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">{t('digitalChannels')}</h4>
                        <ul className="text-sm space-y-1 text-gray-600">
                          <li>{t('digitalChannel1')}</li>
                          <li>{t('digitalChannel2')}</li>
                          <li>{t('digitalChannel3')}</li>
                          <li>{t('digitalChannel4')}</li>
                          <li>{t('digitalChannel5')}</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">{t('analyticsInsights')}</h4>
                        <ul className="text-sm space-y-1 text-gray-600">
                          <li>{t('analyticsInsight1')}</li>
                          <li>{t('analyticsInsight2')}</li>
                          <li>{t('analyticsInsight3')}</li>
                          <li>{t('analyticsInsight4')}</li>
                          <li>{t('analyticsInsight5')}</li>
                        </ul>
                      </div>
                    </div>

                    <p>{t('dataMarketingClosing')}</p>
                  </>
                )}

                {service.id === 'social-media' && (
                  <>
                    <img src="/Social_Media.png" alt="Social Media" className="rounded-lg shadow mb-6 w-full max-w-2xl mx-auto" />
                    
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t('socialMediaTitle')}</h2>
                    <p>{t('socialMediaIntro')}</p>
                    
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('socialMediaServicesTitle')}</h3>
                    <ul className="list-disc ml-6 mb-6 space-y-2">
                      <li>{t('socialMediaService1')}</li>
                      <li>{t('socialMediaService2')}</li>
                      <li>{t('socialMediaService3')}</li>
                      <li>{t('socialMediaService4')}</li>
                      <li>{t('socialMediaService5')}</li>
                      <li>{t('socialMediaService6')}</li>
                      <li>{t('socialMediaService7')}</li>
                      <li>{t('socialMediaService8')}</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('socialMediaPlatformsTitle')}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-blue-50 p-3 rounded-lg text-center">
                        <div className="font-semibold text-blue-900">{t('facebook')}</div>
                        <div className="text-xs text-gray-600">{t('facebookDesc')}</div>
                      </div>
                      <div className="bg-pink-50 p-3 rounded-lg text-center">
                        <div className="font-semibold text-pink-900">{t('instagram')}</div>
                        <div className="text-xs text-gray-600">{t('instagramDesc')}</div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg text-center">
                        <div className="font-semibold text-blue-900">{t('linkedin')}</div>
                        <div className="text-xs text-gray-600">{t('linkedinDesc')}</div>
                      </div>
                      <div className="bg-red-50 p-3 rounded-lg text-center">
                        <div className="font-semibold text-red-900">{t('youtube')}</div>
                        <div className="text-xs text-gray-600">{t('youtubeDesc')}</div>
                      </div>
                    </div>

                    <p>{t('socialMediaClosing')}</p>
                  </>
                )}

                {service.id === 'machine-learning' && (
                  <>
                    <img src="/Machine_learning.png" alt="Machine Learning" className="rounded-lg shadow mb-6 w-full max-w-2xl mx-auto" />
                    
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t('machineLearningTitle')}</h2>
                    <p>{t('machineLearningIntro')}</p>
                    
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('machineLearningServicesTitle')}</h3>
                    <ul className="list-disc ml-6 mb-6 space-y-2">
                      <li>{t('machineLearningService1')}</li>
                      <li>{t('machineLearningService2')}</li>
                      <li>{t('machineLearningService3')}</li>
                      <li>{t('machineLearningService4')}</li>
                      <li>{t('machineLearningService5')}</li>
                      <li>{t('machineLearningService6')}</li>
                      <li>{t('machineLearningService7')}</li>
                      <li>{t('machineLearningService8')}</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('machineLearningIndustryTitle')}</h3>
                    <div className="space-y-4 mb-6">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold text-gray-900">{t('financialServices')}</h4>
                        <p className="text-sm text-gray-600">{t('financialServicesDesc')}</p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-gray-900">{t('healthcare')}</h4>
                        <p className="text-sm text-gray-600">{t('healthcareDesc')}</p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold text-gray-900">{t('retail')}</h4>
                        <p className="text-sm text-gray-600">{t('retailDesc')}</p>
                      </div>
                      <div className="border-l-4 border-orange-500 pl-4">
                        <h4 className="font-semibold text-gray-900">{t('manufacturing')}</h4>
                        <p className="text-sm text-gray-600">{t('manufacturingDesc')}</p>
                      </div>
                    </div>

                    <p>{t('machineLearningClosing')}</p>
                  </>
                )}

                {service.id === 'mobile-development' && (
                  <>
                    <img src="/mobiel.png" alt="Mobile Development" className="rounded-lg shadow mb-6 w-full max-w-2xl mx-auto" />
                    
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t('mobileTitle')}</h2>
                    <p>{t('mobileIntro')}</p>
                    
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('mobileServicesTitle')}</h3>
                    <ul className="list-disc ml-6 mb-6 space-y-2">
                      <li>{t('mobileService1')}</li>
                      <li>{t('mobileService2')}</li>
                      <li>{t('mobileService3')}</li>
                      <li>{t('mobileService4')}</li>
                      <li>{t('mobileService5')}</li>
                      <li>{t('mobileService6')}</li>
                      <li>{t('mobileService7')}</li>
                      <li>{t('mobileService8')}</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('mobileProcessTitle')}</h3>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{t('mobileStep1')}</h4>
                          <p className="text-sm">{t('mobileStep1Desc')}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{t('mobileStep2')}</h4>
                          <p className="text-sm">{t('mobileStep2Desc')}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{t('mobileStep3')}</h4>
                          <p className="text-sm">{t('mobileStep3Desc')}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{t('mobileStep4')}</h4>
                          <p className="text-sm">{t('mobileStep4Desc')}</p>
                        </div>
                      </div>
                    </div>

                    <p>{t('mobileClosing')}</p>
                  </>
                )}

                {service.id === 'seo' && (
                  <>
                    <img src="/SEO.png" alt="SEO" className="rounded-lg shadow mb-6 w-full max-w-2xl mx-auto" />
                    
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t('seoTitle')}</h2>
                    <p>{t('seoIntro')}</p>
                    
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('seoServicesTitle')}</h3>
                    <ul className="list-disc ml-6 mb-6 space-y-2">
                      <li>{t('seoService1')}</li>
                      <li>{t('seoService2')}</li>
                      <li>{t('seoService3')}</li>
                      <li>{t('seoService4')}</li>
                      <li>{t('seoService5')}</li>
                      <li>{t('seoService6')}</li>
                      <li>{t('seoService7')}</li>
                      <li>{t('seoService8')}</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('seoResultsTitle')}</h3>
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-green-50 p-4 rounded-lg text-center">
                        <div className="text-xl font-bold text-green-600 mb-2">{t('seoResult1')}</div>
                        <p className="text-sm">{t('seoResult1Desc')}</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="text-xl font-bold text-blue-600 mb-2">{t('seoResult2')}</div>
                        <p className="text-sm">{t('seoResult2Desc')}</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg text-center">
                        <div className="text-xl font-bold text-purple-600 mb-2">{t('seoResult3')}</div>
                        <p className="text-sm">{t('seoResult3Desc')}</p>
                      </div>
                    </div>

                    <p>{t('seoClosing')}</p>
                  </>
                )}

                {service.id === 'web-development' && (
                  <>
                    <img src="/software.png" alt="Web Development" className="rounded-lg shadow mb-6 w-full max-w-2xl mx-auto" />
                    
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t('webTitle')}</h2>
                    <p>{t('webIntro')}</p>
                    
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('webServicesTitle')}</h3>
                    <ul className="list-disc ml-6 mb-6 space-y-2">
                      <li>{t('webService1')}</li>
                      <li>{t('webService2')}</li>
                      <li>{t('webService3')}</li>
                      <li>{t('webService4')}</li>
                      <li>{t('webService5')}</li>
                      <li>{t('webService6')}</li>
                      <li>{t('webService7')}</li>
                      <li>{t('webService8')}</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('webTechnologiesTitle')}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-blue-50 p-3 rounded-lg text-center">
                        <div className="font-semibold text-blue-900">{t('react')}</div>
                        <div className="text-xs text-gray-600">{t('reactDesc')}</div>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg text-center">
                        <div className="font-semibold text-green-900">{t('nodejs')}</div>
                        <div className="text-xs text-gray-600">{t('nodejsDesc')}</div>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg text-center">
                        <div className="font-semibold text-purple-900">{t('nextjs')}</div>
                        <div className="text-xs text-gray-600">{t('nextjsDesc')}</div>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg text-center">
                        <div className="font-semibold text-orange-900">{t('typescript')}</div>
                        <div className="text-xs text-gray-600">{t('typescriptDesc')}</div>
                      </div>
                    </div>

                    <p>{t('webClosing')}</p>
                  </>
                )}

                {service.id === 'design-content' && (
                  <>
                    <img src="/design.png" alt="Design & Content Creation" className="rounded-lg shadow mb-6 w-full max-w-2xl mx-auto" />
                    
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t('designTitle')}</h2>
                    <p>{t('designIntro')}</p>
                    
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('designServicesTitle')}</h3>
                    <ul className="list-disc ml-6 mb-6 space-y-2">
                      <li>{t('designService1')}</li>
                      <li>{t('designService2')}</li>
                      <li>{t('designService3')}</li>
                      <li>{t('designService4')}</li>
                      <li>{t('designService5')}</li>
                      <li>{t('designService6')}</li>
                      <li>{t('designService7')}</li>
                      <li>{t('designService8')}</li>
                    </ul>

                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('designProcessTitle')}</h3>
                    <div className="space-y-4 mb-6">
                      <div className="flex gap-4 items-start">
                        <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{t('designStep1')}</h4>
                          <p className="text-sm text-gray-600">{t('designStep1Desc')}</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{t('designStep2')}</h4>
                          <p className="text-sm text-gray-600">{t('designStep2Desc')}</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{t('designStep3')}</h4>
                          <p className="text-sm text-gray-600">{t('designStep3Desc')}</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{t('designStep4')}</h4>
                          <p className="text-sm text-gray-600">{t('designStep4Desc')}</p>
                        </div>
                      </div>
                    </div>

                    <p>{t('designClosing')}</p>
                  </>
                )}
              </div>

              {/* Get In Touch Button */}
              <div className="mt-12 text-center">
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Mail className="mr-2 h-5 w-5" />
                    {t('getInTouch')}
                  </Button>
                </Link>
                <p className="text-sm text-gray-500 mt-3">{t('readyToStart')}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServiceDetail; 