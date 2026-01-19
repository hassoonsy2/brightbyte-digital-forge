import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight, Sparkles, Brain, Cpu, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { trackProjectView } from '../utils/analytics';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Portfolio = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState(t('all'));

  const getProjects = () => [
    {
      id: 1,
      title: t('vettekTitle') || "Vettek - AI Hiring Platform",
      description: t('vettekDesc') || "In-house developed AI-powered recruitment platform that automates the entire hiring process from CV parsing to intelligent interviews, revolutionizing talent acquisition.",
      image: "/vettek.png",
      technologies: ["AI", "Machine Learning", "React", "Node.js", "CV Parsing", "Interview Automation"],
      category: "AI & Software",
      status: "Live",
      link: null,
      github: null,
      featured: true,
      slug: "vettek-ai-hiring-platform"
    },
    {
      id: 2,
      title: t('festiTitle') || "Festi - Festival Dating App",
      description: t('festiDesc') || "Mobile application exclusively for festival-goers with verified tickets, enabling connections and matches between people attending the same festivals.",
      image: "/festi.png",
      technologies: ["React Native", "Mobile Development", "Real-time Chat", "Ticket Verification", "Location Services"],
      category: "Mobile App",
      status: "Coming Soon",
      link: null,
      github: null,
      featured: true,
      slug: "festi-festival-dating-app"
    },
    {
      id: 3,
      title: t('knaapTitle') || "Knaap Smart Automation",
      description: t('knaapDesc') || "Intelligent automation system for Knaap that processes leasing offers automatically through smart workflow automation and API integrations.",
      image: "/knaap.png",
      technologies: ["Automation", "API Integration", "Workflow Management", "Python", "Smart Processing"],
      category: "Automation",
      status: "Live",
      link: null,
      github: null,
      featured: false,
      slug: "knaap-smart-automation",
      backgroundColor: "black"
    },
    {
      id: 4,
      title: t('berkelTitle') || "Berkel E-commerce Platform",
      description: t('berkelDesc') || "Complete e-commerce solution for Berkel Snijmachine with SEO optimization and integrated social media campaigns for enhanced digital presence.",
      image: "/berkel.png",
      technologies: ["E-commerce", "SEO", "Social Media", "WordPress", "Digital Marketing"],
      category: "Social Media & Website",
      status: "Live",
      link: null,
      github: null,
      featured: false,
      slug: "berkel-ecommerce-platform"
    },
    {
      id: 5,
      title: t('gbictTitle') || "GBICT Website",
      description: t('gbictDesc') || "Custom designed and developed website for GBICT, featuring modern UI/UX design and responsive development for optimal user experience.",
      image: "/gbict.jpeg",
      technologies: ["Web Design", "UI/UX", "Responsive Design", "React", "Modern Development"],
      category: "Design & Website",
      status: "Live",
      link: null,
      github: null,
      featured: false,
      slug: "gbict-website"
    },
    {
      id: 6,
      title: t('berkelAgentsTitle') || "Berkel AI Sales & Customer Agents",
      description: t('berkelAgentsDesc') || "Intelligent sales and customer service agents for Berkel Snijmachine operating across multiple channels with advanced automation capabilities.",
      image: "/berkel.png",
      technologies: ["Machine Learning", "AI Agents", "Multi-channel", "Automation", "Customer Service"],
      category: "Machine Learning & Automation",
      status: "Live",
      link: null,
      github: null,
      featured: false,
      slug: "berkel-ai-agents"
    },
    {
      id: 7,
      title: t('quantumTitle') || "Quantum LLM Framework",
      description: t('quantumDesc') || "Cutting-edge quantum LLM framework designed to fine-tune large language models on quantum hardware and simulators for next-generation AI capabilities.",
      image: "/quntum.png",
      technologies: ["Quantum Computing", "LLM", "Fine-tuning", "Quantum Hardware", "AI Framework"],
      category: "Quantum Computing",
      status: "Coming Soon",
      link: null,
      github: null,
      featured: true,
      slug: "quantum-llm-framework"
    },
    {
      id: 8,
      title: t('kusorTitle') || "Kusor AI Agent Platform",
      description: t('kusorDesc') || "Revolutionary platform that enables users to create AI agents with simple prompts, featuring 600+ integrations and access to all edge AI models.",
      image: "/kusor.png",
      technologies: ["Machine Learning", "AI Agents", "600+ Integrations", "Edge AI", "Software Development"],
      category: "Machine Learning & Software Development",
      status: "Coming Soon",
      link: null,
      github: null,
      featured: true,
      slug: "kusor-ai-agent-platform",
      backgroundColor: "white"
    }
  ];

  const projects = getProjects();

  const categories = [
    { key: t('all'), label: t('all') },
    { key: t('ai'), label: t('ai') },
    { key: t('machineLearning'), label: t('machineLearning') },
    { key: t('automation'), label: t('automation') },
    { key: t('mobileApp'), label: t('mobileApp') },
    { key: t('quantumComputing'), label: t('quantumComputing') },
    { key: t('softwareDevelopment'), label: t('softwareDevelopment') },
    { key: t('ecommerce'), label: t('ecommerce') },
    { key: t('seo'), label: t('seo') },
    { key: t('socialMedia'), label: t('socialMedia') },
    { key: t('design'), label: t('design') }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI":
        return <Brain className="w-4 h-4" />;
      case "Machine Learning":
        return <Brain className="w-4 h-4" />;
      case "Automation":
        return <Zap className="w-4 h-4" />;
      case "Mobile App":
        return <Zap className="w-4 h-4" />;
      case "Quantum Computing":
        return <Cpu className="w-4 h-4" />;
      case "Software Development":
        return <Sparkles className="w-4 h-4" />;
      case "E-commerce":
        return <Sparkles className="w-4 h-4" />;
      case "SEO":
        return <Sparkles className="w-4 h-4" />;
      case "Social Media":
        return <Sparkles className="w-4 h-4" />;
      case "Web Design":
        return <Sparkles className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100 transition-colors";
      case "Coming Soon":
        return "bg-violet-50 text-violet-700 border-violet-200 hover:bg-violet-100 transition-colors";
      case "In Development":
        return "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100 transition-colors";
      case "Deployed":
        return "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors";
      default:
        return "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 transition-colors";
    }
  };

  const getStatusTranslation = (status: string) => {
    switch (status) {
      case "Live":
        return t('live') || 'Live';
      case "Coming Soon":
        return t('comingSoon') || 'Coming Soon';
      case "In Development":
        return t('inDevelopment') || 'In Development';
      case "Deployed":
        return t('deployed') || 'Deployed';
      default:
        return status;
    }
  };

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === t('all') 
    ? projects 
    : projects.filter(project => project.technologies.some(tech => 
        tech.toLowerCase().includes(selectedCategory.toLowerCase()) || 
        selectedCategory.toLowerCase().includes(tech.toLowerCase())
      ));

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-28">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-blue-400 mr-2 animate-pulse" />
            <span className="text-blue-300 text-sm font-medium">Our Portfolio</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t('portfolioTitle') || 'Innovation in Action'}
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('portfolioDescription') || 'Explore our cutting-edge projects that showcase the power of AI, quantum computing, and advanced automation technologies.'}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Badge
              key={category.key}
              variant="outline"
              onClick={() => setSelectedCategory(category.key)}
              className={`px-4 py-2 border transition-all duration-300 cursor-pointer font-medium ${
                selectedCategory === category.key
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 border-blue-600 text-white shadow-md"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-gradient-to-r hover:from-slate-50 hover:to-gray-50 hover:border-slate-300 hover:shadow-sm"
              }`}
            >
              {category.key !== "All" && getCategoryIcon(category.key)}
              <span className="ml-2">{category.label}</span>
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className={`group bg-white border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden ${
                project.featured ? 'ring-2 ring-blue-400/30' : ''
              }`}
            >
              <div className="relative">
                <div className={`w-full h-48 ${project.backgroundColor === 'black' ? 'bg-black' : 'bg-white'} flex items-center justify-center`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110 ${
                      project.backgroundColor === 'black' ? 'p-6' : 
                      project.slug === 'kusor-ai-agent-platform' ? 'p-2' : 'p-4'
                    }`}
                  />
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-blue-200 hover:from-blue-100 hover:to-indigo-100 transition-all duration-200 font-medium">
                      <Sparkles className="w-3 h-3 mr-1" />
                      {t('featured')}
                    </Badge>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(project.status)}>
                    {getStatusTranslation(project.status)}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center gap-2 mb-2">
                  {getCategoryIcon(project.category)}
                  <Badge variant="outline" className="text-xs bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-gray-900 text-xl group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs bg-gradient-to-r from-slate-50 to-gray-50 border-slate-200 text-slate-700 hover:from-slate-100 hover:to-gray-100 hover:border-slate-300 transition-all duration-200 font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    asChild
                    className="flex-1 !bg-gradient-to-r !from-blue-600 !via-purple-600 !to-indigo-600 hover:!from-blue-700 hover:!via-purple-700 hover:!to-indigo-700 !text-white !border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link 
                      to={`/portfolio/${project.slug}`}
                      onClick={() => trackProjectView(project.title)}
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      {t('readMore') || 'Read More'}
                    </Link>
                  </Button>
                  {project.link && (
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-blue-400"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t('viewLive') || 'View Live'}
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-white mb-4">{t('noProjectsFound')}</h3>
            <p className="text-gray-300 mb-8">{t('noProjectsFoundDesc')}</p>
            <Button 
              onClick={() => setSelectedCategory(t('all'))}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              {t('viewAllProjects')}
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-100">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('readyToStart') || 'Ready to Start Your Project?'}
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                {t('portfolioCTA') || 'Let\'s collaborate to bring your innovative ideas to life with cutting-edge technology solutions.'}
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-bold rounded-full shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
              >
                <a href="#contact">
                  <Sparkles className="mr-3 h-5 w-5" />
                  {t('startYourProject') || 'Start Your Project'}
                  <ArrowRight className="ml-3 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
