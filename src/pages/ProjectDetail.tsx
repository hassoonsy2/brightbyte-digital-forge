import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, User, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  // Project data - in a real app, this would come from an API or CMS
  const getProjects = () => ({
    'vettek-ai-hiring-platform': {
      id: 1,
      title: t('vettekTitle') || "Vettek - AI Hiring Platform",
      description: t('vettekDesc') || "In-house developed AI-powered recruitment platform that automates the entire hiring process from CV parsing to intelligent interviews, revolutionizing talent acquisition.",
      longDescription: t('vettekLongDesc') || "Vettek represents a breakthrough in recruitment technology, leveraging advanced AI algorithms to transform how companies discover and evaluate talent. Our platform eliminates traditional hiring biases while dramatically reducing time-to-hire through intelligent automation.",
      image: "/vettek.png",
      technologies: ["AI", "Machine Learning", "React", "Node.js", "CV Parsing", "Interview Automation"],
      category: "AI & Software",
      status: "Live",
      link: null,
      featured: true,
      timeline: t('vettekTimeline') || "6 months",
      team: t('vettekTeam') || "2 developers",
      challenges: [
        t('vettekChallenge1') || "Implementing accurate CV parsing across multiple formats",
        t('vettekChallenge2') || "Creating realistic AI interview simulations",
        t('vettekChallenge3') || "Ensuring bias-free candidate evaluation",
        t('vettekChallenge4') || "Scaling the platform for enterprise clients"
      ],
      solutions: [
        t('vettekSolution1') || "Advanced NLP models for document analysis",
        t('vettekSolution2') || "Conversational AI with natural language processing",
        t('vettekSolution3') || "Ethical AI frameworks and bias detection",
        t('vettekSolution4') || "Cloud-native architecture with auto-scaling"
      ],
      results: [
        t('vettekResult1') || "75% reduction in screening time",
        t('vettekResult2') || "46% more successful hires",
        t('vettekResult3') || "90% reduction in time-to-hire",
        t('vettekResult4') || "Eliminated unconscious bias in initial screening"
      ]
    },
    'festi-festival-dating-app': {
      id: 2,
      title: "Festi - Festival Dating App",
      description: "Mobile application exclusively for festival-goers with verified tickets, enabling connections and matches between people attending the same festivals.",
      longDescription: "Festi revolutionizes festival social experiences by creating a safe, verified environment for festival-goers to connect. Our app ensures only genuine ticket holders can participate, creating meaningful connections in the festival community.",
      image: "/festi.png",
      technologies: ["React Native", "Mobile Development", "Real-time Chat", "Ticket Verification", "Location Services"],
      category: "Mobile App",
      status: "Coming Soon",
      featured: true,
      timeline: "4 months",
      team: "2 developers",
      challenges: [
        "Implementing secure ticket verification",
        "Real-time location-based matching",
        "Creating engaging user experience",
        "Ensuring user safety and privacy"
      ],
      solutions: [
        "Blockchain-based ticket verification",
        "GPS and beacon technology integration",
        "Intuitive swipe-based interface",
        "Advanced privacy controls and reporting"
      ],
      results: [
        "100% verified festival attendees",
        "Real-time matching within festival grounds",
        "Enhanced festival social experience",
        "Safe and secure connection platform"
      ]
    },
    'knaap-smart-automation': {
      id: 3,
      title: "Knaap Smart Automation",
      description: "Intelligent automation system for Knaap that processes leasing offers automatically through smart workflow automation and API integrations.",
      longDescription: "Our smart automation solution transformed Knaap's leasing process, reducing manual work by 80% while improving accuracy and customer response times through intelligent workflow automation.",
      image: "/knaap.png",
      technologies: ["Automation", "API Integration", "Workflow Management", "Python", "Smart Processing"],
      category: "Automation",
      status: "Live",
      timeline: "3 months",
      team: "2 developers",
      challenges: [
        "Integrating with multiple legacy systems",
        "Creating flexible workflow rules",
        "Ensuring data accuracy and validation",
        "Handling complex leasing calculations"
      ],
      solutions: [
        "RESTful API architecture",
        "Visual workflow builder",
        "Automated data validation",
        "Machine learning for offer optimization"
      ],
      results: [
        "80% reduction in manual processing",
        "50% faster offer generation",
        "99.5% accuracy in calculations",
        "24/7 automated processing"
      ]
    },
    'berkel-ecommerce-platform': {
      id: 4,
      title: "Berkel E-commerce Platform",
      description: "Complete e-commerce solution for Berkel Snijmachine with SEO optimization and integrated social media campaigns for enhanced digital presence.",
      longDescription: "We built a comprehensive e-commerce platform for Berkel Snijmachine that not only handles online sales but also integrates seamlessly with social media marketing campaigns, resulting in a 300% increase in online visibility.",
      image: "/berkel.png",
      technologies: ["E-commerce", "SEO", "Social Media", "WordPress", "Digital Marketing"],
      category: "Social Media & Website",
      status: "Live",
      timeline: "5 months",
      team: "2 developers",
      challenges: [
        "Creating user-friendly product configurator",
        "Implementing advanced SEO strategies",
        "Integrating social media automation",
        "Optimizing for mobile commerce"
      ],
      solutions: [
        "Custom product visualization tools",
        "Technical SEO optimization",
        "Automated social media posting",
        "Responsive design with mobile-first approach"
      ],
      results: [
        "300% increase in organic traffic",
        "150% improvement in conversion rates",
        "Automated social media campaigns",
        "Mobile-optimized shopping experience"
      ]
    },
    'gbict-website': {
      id: 5,
      title: "GBICT Website",
      description: "Custom designed and developed website for GBICT, featuring modern UI/UX design and responsive development for optimal user experience.",
      longDescription: "The GBICT website showcases modern web design principles with a focus on user experience and accessibility. Our custom solution provides an intuitive interface for students and faculty while maintaining high performance standards.",
      image: "/gbict.jpeg",
      technologies: ["Web Design", "UI/UX", "Responsive Design", "React", "Modern Development"],
      category: "Design & Website",
      status: "Live",
      timeline: "2 months",
      team: "2 developers",
      challenges: [
        "Creating accessible design for diverse users",
        "Implementing complex navigation structure",
        "Optimizing for various devices",
        "Integrating with existing systems"
      ],
      solutions: [
        "WCAG 2.1 compliant design",
        "Intuitive information architecture",
        "Progressive web app features",
        "Seamless third-party integrations"
      ],
      results: [
        "100% accessibility compliance",
        "50% faster page load times",
        "Improved user engagement",
        "Mobile-first responsive design"
      ]
    },
    'berkel-ai-agents': {
      id: 6,
      title: "Berkel AI Sales & Customer Agents",
      description: "Intelligent sales and customer service agents for Berkel Snijmachine operating across multiple channels with advanced automation capabilities.",
      longDescription: "Our AI agents revolutionized Berkel's customer service by providing 24/7 intelligent support across multiple channels, handling complex queries and providing personalized recommendations with human-like understanding.",
      image: "/berkel.png",
      technologies: ["Machine Learning", "AI Agents", "Multi-channel", "Automation", "Customer Service"],
      category: "Machine Learning & Automation",
      status: "Live",
      timeline: "4 months",
      team: "2 developers",
      challenges: [
        "Training AI on complex product knowledge",
        "Handling multi-language support",
        "Integrating with existing CRM systems",
        "Maintaining conversational quality"
      ],
      solutions: [
        "Advanced NLP training on product data",
        "Multi-language AI models",
        "Seamless CRM integration",
        "Continuous learning algorithms"
      ],
      results: [
        "95% customer query resolution",
        "24/7 automated support",
        "60% reduction in support tickets",
        "Multi-language customer service"
      ]
    },
    'quantum-llm-framework': {
      id: 7,
      title: "Quantum LLM Framework",
      description: "Cutting-edge quantum LLM framework designed to fine-tune large language models on quantum hardware and simulators for next-generation AI capabilities.",
      longDescription: "Our quantum LLM framework represents the future of AI, combining quantum computing principles with large language models to create more efficient and powerful AI systems that can solve complex problems beyond classical computing limits.",
      image: "/quntum.png",
      technologies: ["Quantum Computing", "LLM", "Fine-tuning", "Quantum Hardware", "AI Framework"],
      category: "Quantum Computing",
      status: "Coming Soon",
      featured: true,
      timeline: "8 months",
      team: "4 developers",
      challenges: [
        "Quantum algorithm optimization",
        "Hardware-software integration",
        "Quantum error correction",
        "Scalable quantum architectures"
      ],
      solutions: [
        "Advanced quantum algorithms",
        "Hybrid classical-quantum systems",
        "Error mitigation techniques",
        "Modular quantum framework"
      ],
      results: [
        "Exponential speedup in specific tasks",
        "Reduced computational complexity",
        "Novel quantum AI applications",
        "Foundation for quantum AI ecosystem"
      ]
    },
    'kusor-ai-agent-platform': {
      id: 8,
      title: "Kusor AI Agent Platform",
      description: "Revolutionary platform that enables users to create AI agents with simple prompts, featuring 600+ integrations and access to all edge AI models.",
      longDescription: "Kusor democratizes AI agent creation by allowing anyone to build sophisticated AI agents through simple prompts. With 600+ integrations and access to cutting-edge AI models, users can create powerful automation solutions without coding expertise.",
      image: "/software.png",
      technologies: ["Machine Learning", "AI Agents", "600+ Integrations", "Edge AI", "Software Development"],
      category: "Machine Learning & Software Development",
      status: "Coming Soon",
      featured: true,
      timeline: "6 months",
      team: "5 developers",
      challenges: [
        "Creating intuitive prompt-to-agent system",
        "Managing 600+ API integrations",
        "Optimizing edge AI performance",
        "Ensuring agent reliability and safety"
      ],
      solutions: [
        "Natural language processing for agent creation",
        "Unified API management system",
        "Edge computing optimization",
        "Comprehensive testing and validation"
      ],
      results: [
        "No-code AI agent creation",
        "600+ pre-built integrations",
        "Edge-optimized performance",
        "Enterprise-grade reliability"
      ]
    }
  });

  const projects = getProjects();
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
            <p className="text-gray-300 mb-8">The project you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/portfolio">Back to Portfolio</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-emerald-500/20 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/30 transition-colors";
      case "Coming Soon":
        return "bg-violet-500/20 text-violet-300 border-violet-500/30 hover:bg-violet-500/30 transition-colors";
      case "In Development":
        return "bg-amber-500/20 text-amber-300 border-amber-500/30 hover:bg-amber-500/30 transition-colors";
      case "Deployed":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-colors";
      default:
        return "bg-slate-500/20 text-slate-300 border-slate-500/30 hover:bg-slate-500/30 transition-colors";
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* Back Button */}
          <div className="mb-8">
            <Button asChild variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Link to="/portfolio">
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t('backToPortfolio')}
              </Link>
            </Button>
          </div>

          {/* Project Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge className={getStatusColor(project.status)}>
                  {project.status}
                </Badge>
                <Badge variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors font-medium">
                  {project.category}
                </Badge>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {project.title}
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                {project.longDescription}
              </p>

              {/* Project Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Clock className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{project.timeline}</div>
                  <div className="text-sm text-gray-400">{t('projectTimeline')}</div>
                </div>
                <div className="text-center">
                  <User className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{project.team}</div>
                  <div className="text-sm text-gray-400">{t('projectTeam')}</div>
                </div>
                <div className="text-center">
                  <Calendar className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{project.status}</div>
                  <div className="text-sm text-gray-400">{t('projectStatus')}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                {project.link && (
                  <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t('viewLiveProject')}
                    </a>
                  </Button>
                )}
              </div>
            </div>

            <div className="relative">
              <div className={`w-full h-96 ${slug === 'knaap-smart-automation' ? 'bg-black' : 'bg-white'} rounded-2xl shadow-2xl flex items-center justify-center`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={`max-w-full max-h-full object-contain ${
                    slug === 'knaap-smart-automation' ? 'p-6' : 'p-4'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Technologies */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">{t('projectTechnologies')}</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-blue-500/30 text-blue-300 hover:from-blue-500/20 hover:to-indigo-500/20 hover:border-blue-400/50 transition-all duration-200 px-4 py-2 font-medium"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">{t('projectChallenges')}</h2>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">{t('projectSolutions')}</h2>
                <ul className="space-y-4">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{solution}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6">{t('projectResults')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.results.map((result, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{result}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('readyToStart')}
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your innovative ideas to life with cutting-edge technology solutions.
            </p>
            <Button asChild className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-bold rounded-full shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
              <Link to="/contact">
                {t('startYourProject')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetail;
