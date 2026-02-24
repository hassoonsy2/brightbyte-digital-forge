import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../lib/servicesData';
import {
  ArrowLeft, ArrowRight, Mail, Check, Sparkles,
  ArrowUpRight, Quote, Building2, Target
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const aiPerformanceTrend = [
  { phase: 'Baseline', value: 22 },
  { phase: 'Data Science Setup', value: 38 },
  { phase: 'ML Modeling', value: 61 },
  { phase: 'Transformer + RAG', value: 79 },
  { phase: 'Production Optimized', value: 92 },
];

const aiImpactBars = [
  { label: 'Manual Work Reduced', value: 65 },
  { label: 'Decision Speed Increase', value: 58 },
  { label: 'Forecast Precision Lift', value: 31 },
  { label: 'Support Resolution Faster', value: 42 },
];

const aiArchitectureFlow = [
  'Business Data Sources',
  'Data Science Pipeline',
  'ML + Transformer Models',
  'Custom AI APIs',
  'Business Apps & Automation',
];

const softwareProgressTrend = [
  { phase: 'Requirements', value: 18 },
  { phase: 'Architecture', value: 36 },
  { phase: 'Core Build', value: 63 },
  { phase: 'Integration', value: 82 },
  { phase: 'Production', value: 96 },
];

const softwareCapabilityBars = [
  { label: 'Standalone Applications', value: 95 },
  { label: 'Web Platforms', value: 98 },
  { label: 'Web3 Modules', value: 82 },
  { label: 'Adobe Plugins', value: 88 },
  { label: 'Robotic Software', value: 79 },
];

const softwareArchitectureFlow = [
  'Core Engine',
  'Platform API Layer',
  'Web / App Interfaces',
  'Plugin & Web3 Modules',
  'Automation & Robotics Integrations',
];

const automationRunTrend = [
  { phase: 'Manual Baseline', value: 14 },
  { phase: 'n8n / Make Flows', value: 37 },
  { phase: 'API Orchestration', value: 63 },
  { phase: 'AI Agent Layer', value: 81 },
  { phase: 'Autonomous Operations', value: 94 },
];

const automationImpactBars = [
  { label: 'Manual Tasks Reduced', value: 78 },
  { label: 'Process Cycle Faster', value: 64 },
  { label: 'Error Rate Reduced', value: 71 },
  { label: 'API Throughput Lift', value: 56 },
];

const automationArchitectureFlow = [
  'Business Trigger',
  'n8n / Make Workflow',
  'API Automation Layer',
  'AI Classification & Decisions',
  'Human Approval Checkpoint',
  'CRM / ERP / Ticketing Sync',
];

const machineLearningModelBars = [
  { label: 'Forecasting', value: 93 },
  { label: 'Classification', value: 96 },
  { label: 'Anomaly Detection', value: 89 },
  { label: 'Recommendation', value: 91 },
];

const machineLearningPipeline = [
  'Data Ingestion',
  'Feature Engineering',
  'Model Training',
  'Evaluation & Explainability',
  'Production Monitoring',
];

const webDevelopmentVitals = [
  { metric: 'Lighthouse', value: '98/100', score: 98 },
  { metric: 'LCP', value: '1.1s', score: 94 },
  { metric: 'CLS', value: '0.02', score: 97 },
  { metric: 'TTFB', value: '230ms', score: 92 },
];

const webDevelopmentFlow = [
  'UX Wireframe',
  'Component System',
  'Frontend Build',
  'API + CMS Integration',
  'Performance & SEO Pass',
];

const mobileGrowthCurve = [
  { stage: 'MVP Launch', value: 24 },
  { stage: 'Onboarding', value: 43 },
  { stage: 'Engagement Loop', value: 67 },
  { stage: 'Retention', value: 82 },
  { stage: 'Scale', value: 94 },
];

const mobileCapabilityBars = [
  { label: 'Cross-Platform Coverage', value: 95 },
  { label: 'Performance Stability', value: 91 },
  { label: 'Push Engagement', value: 84 },
  { label: 'Offline Reliability', value: 79 },
];

const marketingFunnelBars = [
  { label: 'Awareness', value: 100 },
  { label: 'Interest', value: 78 },
  { label: 'Consideration', value: 61 },
  { label: 'Conversion', value: 43 },
  { label: 'Retention', value: 57 },
];

const marketingChannelRoi = [
  { label: 'Paid Search', value: 4.6 },
  { label: 'Paid Social', value: 3.9 },
  { label: 'Email', value: 6.1 },
  { label: 'Organic', value: 5.4 },
];

const seoRankTrend = [
  { month: 'M1', value: 14 },
  { month: 'M2', value: 24 },
  { month: 'M3', value: 39 },
  { month: 'M4', value: 57 },
  { month: 'M5', value: 73 },
  { month: 'M6', value: 88 },
];

const seoPillarScores = [
  { label: 'Technical SEO', value: 92 },
  { label: 'On-Page', value: 86 },
  { label: 'Content Depth', value: 84 },
  { label: 'Authority', value: 79 },
];

const socialPlatformBars = [
  { label: 'LinkedIn B2B', value: 88 },
  { label: 'Instagram Reach', value: 81 },
  { label: 'TikTok Awareness', value: 74 },
  { label: 'Community Engagement', value: 83 },
];

const socialContentFlow = [
  'Content Pillars',
  'Creative Production',
  'Platform Publishing',
  'Community Management',
  'Performance Optimization',
];

const designSystemScores = [
  { label: 'Brand Consistency', value: 94 },
  { label: 'UX Clarity', value: 89 },
  { label: 'Visual Performance', value: 86 },
  { label: 'Content Quality', value: 84 },
];

const designProductionFlow = [
  'Research & Positioning',
  'Concept Direction',
  'UI / Visual Production',
  'Content Refinement',
  'Design System Delivery',
];

// ─── Service content ────────────────────────────────────────────────
const serviceContent: Record<string, any> = {
  'ai-consulting': {
    headline: 'Generative AI, ML & Data Science Solutions',
    subheadline: 'From transformer-based Generative AI to production-grade machine learning and data science pipelines, we design custom AI systems that turn business data into measurable decisions and automation.',
    heroStats: [
      { label: 'GenAI Systems Delivered', value: '40+' },
      { label: 'Model Accuracy Lift', value: '+18%' },
      { label: 'Ops Time Reduced', value: '65%' },
    ],
    overview: 'Most companies have data, but not a production AI system that consistently creates value. We bridge that gap by combining Generative AI, transformer architectures, machine learning, and applied data science into practical, custom-built solutions. Instead of generic demos, we focus on domain-specific assistants, prediction engines, and decision systems that connect directly to your operations. From data readiness to deployment and monitoring, we build AI that is explainable, measurable, and business-ready.',
    capabilities: [
      { title: 'Generative AI Product Development', desc: 'Build copilots, chat assistants, and internal AI tools with retrieval-augmented generation (RAG) and business guardrails' },
      { title: 'Transformer Model Solutions', desc: 'Fine-tune and adapt transformer models for domain-specific language, multilingual tasks, summarization, and intelligent search' },
      { title: 'Applied Data Science', desc: 'Design data science workflows for experimentation, feature engineering, forecasting, and actionable insight generation' },
      { title: 'Custom Machine Learning Systems', desc: 'Develop bespoke ML models for classification, recommendations, scoring, and anomaly detection aligned to your business context' },
      { title: 'Data-Driven Decision Engines', desc: 'Operationalize models into real-time decision services and analytics layers for sales, support, risk, and operations' },
      { title: 'AI Platform & MLOps', desc: 'Deploy scalable training/inference pipelines with monitoring, drift detection, performance tracking, and governance' },
    ],
    process: [
      { step: '01', title: 'Use Case & Data Discovery', desc: 'Map high-impact AI opportunities and audit data quality, coverage, and constraints for each target workflow.' },
      { step: '02', title: 'Data Science Foundation', desc: 'Prepare pipelines, feature sets, labeling strategy, and evaluation baselines so model outcomes are trustworthy.' },
      { step: '03', title: 'Model Design', desc: 'Select and design the right approach, transformers for language-heavy problems and custom ML for predictive/data-driven tasks.' },
      { step: '04', title: 'Build Custom Solution', desc: 'Develop and integrate your AI system into existing tools, APIs, and business workflows with secure access controls.' },
      { step: '05', title: 'Deploy, Monitor, Improve', desc: 'Launch to production with observability, feedback loops, drift monitoring, and iterative optimization.' },
    ],
    industries: ['E-commerce', 'Healthcare', 'Finance', 'Manufacturing', 'Logistics', 'Recruitment', 'Legal'],
    deliverables: [
      'AI Opportunity & Data Readiness Assessment',
      'Generative AI / Transformer Architecture',
      'Custom ML Model Suite',
      'Data Science Validation & Experiment Reports',
      'Production APIs, Dashboards, and Monitoring',
      'MLOps, Governance, and Team Enablement',
    ],
    caseStudy: {
      client: 'Multi-Region Commerce Group',
      challenge: 'Support teams were overloaded, product knowledge was fragmented, and forecasting was inconsistent across regions.',
      solution: 'Implemented a transformer-based Generative AI support assistant with RAG plus custom ML demand forecasting models using transactional and behavioral data.',
      result: '42% faster support resolution, 31% better forecast precision, and a significant reduction in manual analyst workload.',
    },
    testimonials: [
      { quote: 'Bright-Byte translated complex AI into a system our teams use daily. The mix of Generative AI and data science delivered real operational gains.', author: 'CTO, Commerce Platform' },
    ],
    techStack: ['OpenAI', 'Anthropic', 'LangChain', 'LlamaIndex', 'PyTorch', 'TensorFlow', 'scikit-learn', 'Pandas', 'MLflow', 'AWS SageMaker', 'Vector DBs', 'Kubernetes'],
    whyUs: [
      { title: 'Custom, Not Template-Based', desc: 'Every solution is designed around your data structure, domain language, and workflow realities' },
      { title: 'GenAI + Data Science Depth', desc: 'We combine transformer/LLM implementation with strong classical ML and analytics fundamentals' },
      { title: 'Production Reliability', desc: 'From experiment to deployment with monitoring, quality controls, and continuous improvement built in' },
    ],
    faq: [
      { q: 'Can you build custom Generative AI systems for our domain?', a: 'Yes. We design domain-aware GenAI systems using your data, terminology, policies, and workflows rather than generic prompts only.' },
      { q: 'Do you work with transformers and custom model tuning?', a: 'Yes. We fine-tune and adapt transformer pipelines where needed, and combine them with retrieval, ranking, and ML components for better accuracy.' },
      { q: 'How do you handle data science and data quality?', a: 'We start with data profiling, feature engineering, and validation baselines. Data science is treated as a core foundation, not an afterthought.' },
      { q: 'Can you deliver data-driven solutions beyond chatbots?', a: 'Absolutely. We build predictive scoring, anomaly detection, recommendations, forecasting, and decision automation systems tied to KPIs.' },
      { q: 'How long does an AI engagement usually take?', a: 'Discovery and scoping typically take 1-2 weeks, pilot systems 3-6 weeks, and production rollout depends on integration complexity.' },
    ],
  },
  'software-development': {
    headline: 'Custom Software Systems & Platforms',
    subheadline: 'We design and build standalone applications, scalable web platforms, Web3-enabled products, Adobe plugins, robotic software interfaces, and other custom engineering solutions.',
    heroStats: [
      { label: 'Software Products Delivered', value: '120+' },
      { label: 'Platform Uptime', value: '99.95%' },
      { label: 'Release Velocity Gain', value: '2.3x' },
    ],
    overview: 'Off-the-shelf tools often break at the exact point your business needs flexibility. We build custom software engineered around your workflows, users, and growth plans. Our team covers product architecture, backend systems, frontend UX, integrations, QA, and deployment. Whether you need a standalone application, a complex web platform, Web3 capability, Adobe plugin tooling, or robotic control software, we deliver production-ready systems with long-term maintainability and clear ownership.',
    capabilities: [
      { title: 'Standalone Applications', desc: 'Build desktop and installable applications with secure local workflows, sync layers, and enterprise deployment support' },
      { title: 'Web Platform Engineering', desc: 'Develop multi-user web platforms with dashboards, permissions, workflow logic, and API-first architecture' },
      { title: 'Web3 Development', desc: 'Implement smart-contract interactions, wallet connectivity, token-aware logic, and secure blockchain-enabled modules' },
      { title: 'Adobe Plugin Development', desc: 'Create Adobe Creative Cloud plugins for automated creative workflows, content operations, and in-app productivity tooling' },
      { title: 'Robotic Software Interfaces', desc: 'Design software layers for robotic systems, telemetry dashboards, command workflows, and human-machine interaction panels' },
      { title: 'Custom Integrations & Automation', desc: 'Connect third-party systems, internal tools, and data services into reliable end-to-end software operations' },
    ],
    process: [
      { step: '01', title: 'Technical Discovery', desc: 'Map requirements, constraints, users, and system dependencies for your specific software type and business goal.' },
      { step: '02', title: 'System Architecture', desc: 'Design the right architecture for standalone software, platform, plugin, Web3 module, or robotics integration.' },
      { step: '03', title: 'Product Engineering', desc: 'Build core software modules in iterative sprints with strong code quality, reviews, and test automation.' },
      { step: '04', title: 'Validation & Hardening', desc: 'Execute functional QA, security testing, performance testing, and reliability checks before launch.' },
      { step: '05', title: 'Production Rollout', desc: 'Deploy with observability, release management, developer handoff, and an optimization roadmap.' },
    ],
    industries: ['SaaS', 'Fintech', 'E-commerce', 'Manufacturing', 'Creative Tools', 'Industrial Automation', 'Logistics'],
    deliverables: [
      'Software Architecture Blueprint',
      'Standalone/Desktop Application Package',
      'Web Platform Modules & APIs',
      'Web3 Integration or Contract Interface Layer',
      'Adobe Plugin Build + Distribution Package',
      'Robotic Interface/Control Software Modules',
      'CI/CD, Testing Suite, and Observability Setup',
    ],
    caseStudy: {
      client: 'Operations & Creative Enterprise',
      challenge: 'Teams relied on disconnected tools across operations, web systems, and creative workflows, causing delays and costly manual rework.',
      solution: 'Built a unified software stack including an internal standalone tool, a customer web platform, and an Adobe plugin for production automation.',
      result: 'Reduced cross-team processing time by 57%, improved release reliability, and significantly reduced manual operational overhead.',
    },
    testimonials: [
      { quote: 'Bright-Byte delivered the exact blend of product engineering we needed, platform, plugin, and automation software working as one system.', author: 'Head of Product Engineering' },
    ],
    techStack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Electron', 'PostgreSQL', 'Docker', 'AWS', 'Solidity', 'Ethers.js', 'Adobe UXP', 'WebSockets'],
    whyUs: [
      { title: 'Multi-Domain Software Expertise', desc: 'We build across apps, platforms, plugins, Web3, and automation software with one engineering standard' },
      { title: 'Architecture First', desc: 'Systems are designed for maintainability, scale, and future feature expansion' },
      { title: 'Production Quality Delivery', desc: 'Strong QA, observability, and release discipline from day one' },
    ],
    faq: [
      { q: 'Can you build standalone applications and not only web apps?', a: 'Yes. We build standalone desktop-style applications as well as cloud-connected hybrid systems, depending on your operational needs.' },
      { q: 'Do you develop Web3-ready software?', a: 'Yes. We can add Web3 modules such as wallet flows, smart-contract integration, and token-aware backend logic where it makes business sense.' },
      { q: 'Can you create Adobe plugins for our workflow?', a: 'Yes. We build Adobe plugin solutions for design teams, production pipelines, and repeatable creative operations.' },
      { q: 'Do you also build robotic software interfaces?', a: 'Yes. We build control interfaces, telemetry dashboards, and integration layers that connect robotic systems with business software.' },
      { q: 'How do you run delivery and communication?', a: 'We work in transparent engineering sprints with weekly demos, structured milestones, and direct product/technical communication.' },
    ],
  },
  'automation': {
    headline: 'n8n, Make, API & AI Automation Systems',
    subheadline: 'We design production automation stacks using n8n and Make, combine them with API orchestration, and add AI decision layers to eliminate repetitive work across your operations.',
    heroStats: [
      { label: 'Automation Flows Deployed', value: '180+' },
      { label: 'Manual Work Reduced', value: '78%' },
      { label: 'Typical ROI Window', value: '6-12 wks' },
    ],
    overview: 'Automation is most valuable when it is reliable, observable, and aligned with real business operations. We map your existing process steps, then engineer robust flow automation using n8n and Make for orchestration, API automation for system-to-system execution, and AI automation for classification, routing, summarization, and next-best actions. The result is faster operations, fewer errors, and teams focused on high-value work instead of repetitive tasks.',
    capabilities: [
      { title: 'n8n Workflow Engineering', desc: 'Build resilient n8n workflows for lead routing, CRM sync, support triage, order ops, and internal approvals' },
      { title: 'Make Scenario Automation', desc: 'Design advanced Make scenarios with conditional branches, retries, error handling, and multi-app coordination' },
      { title: 'API Automation & Webhooks', desc: 'Create API-first automation for internal tools and third-party systems using secure webhook and event-driven architecture' },
      { title: 'AI Automation Layer', desc: 'Add AI steps for document understanding, intent detection, summarization, extraction, and autonomous task handoff' },
      { title: 'Human-in-the-Loop Controls', desc: 'Introduce approval gates, confidence thresholds, and exception queues for business-critical actions' },
      { title: 'Observability & Runbook Ops', desc: 'Implement monitoring dashboards, alerting, logs, replay workflows, and incident runbooks for stable automation' },
    ],
    process: [
      { step: '01', title: 'Automation Discovery', desc: 'Audit workflows, dependencies, SLAs, and failure points to prioritize n8n/Make and API automation opportunities.' },
      { step: '02', title: 'Flow Architecture', desc: 'Define triggers, payload contracts, branching logic, approval gates, retries, and fallbacks before implementation.' },
      { step: '03', title: 'Build & Integrate', desc: 'Implement workflows in n8n/Make, connect APIs, and embed AI tasks where decision or classification is required.' },
      { step: '04', title: 'Validation & Hardening', desc: 'Test with real payloads, edge cases, throttling limits, and rollback plans to ensure production resilience.' },
      { step: '05', title: 'Launch & Optimize', desc: 'Deploy with dashboards, alerts, and iterative optimization to improve throughput and reliability over time.' },
    ],
    industries: ['Operations', 'Customer Support', 'E-commerce', 'Finance Ops', 'HR & Recruitment', 'Sales Enablement', 'Logistics'],
    deliverables: [
      'Automation Opportunity Matrix',
      'n8n Workflow Library',
      'Make Scenario Blueprints',
      'API Automation Contracts & Webhooks',
      'AI Prompt/Decision Layer Config',
      'Monitoring Dashboard + Alert Rules',
      'Operational Runbooks & Handover Docs',
    ],
    caseStudy: {
      client: 'Multi-Channel Commerce Operations Team',
      challenge: 'Support intake, order status checks, and CRM updates were handled manually across disconnected tools.',
      solution: 'Implemented n8n and Make automation flows with API orchestration and an AI triage layer for message classification and routing.',
      result: 'Reduced manual processing by 78%, shortened response cycles, and improved reliability of cross-system data updates.',
    },
    testimonials: [
      { quote: 'Bright-Byte built an automation backbone we can trust. n8n, Make, APIs, and AI now operate as one controlled system.', author: 'Operations Lead, Commerce Platform' },
    ],
    techStack: ['n8n', 'Make', 'Node.js', 'Python', 'FastAPI', 'REST & GraphQL APIs', 'Webhooks', 'OpenAI', 'Anthropic', 'Supabase', 'PostgreSQL', 'Cloud Functions'],
    whyUs: [
      { title: 'Platform-Native Expertise', desc: 'Deep implementation experience in both n8n and Make with clean architecture practices' },
      { title: 'API-First Reliability', desc: 'Automations are engineered around explicit contracts, retries, observability, and failure recovery' },
      { title: 'AI With Operational Guardrails', desc: 'We apply AI where it creates leverage, with confidence thresholds and human override paths' },
    ],
    faq: [
      { q: 'Do you build automation in n8n and Make?', a: 'Yes. We design and deploy production workflows in both n8n and Make based on integration depth, governance, and scaling needs.' },
      { q: 'What is included in API automation?', a: 'API automation includes webhook trigger design, payload mapping, auth handling, retries, error routing, logging, and endpoint monitoring.' },
      { q: 'How does AI automation fit into workflows?', a: 'AI can classify tickets, summarize long threads, extract entities from documents, generate responses, and route tasks with confidence scoring.' },
      { q: 'Can we keep human approvals for sensitive actions?', a: 'Yes. We add approval checkpoints, SLA timers, and escalation paths before any critical step is executed.' },
      { q: 'How soon can we launch automation?', a: 'Most teams can launch a first high-impact workflow in 1-3 weeks, then expand into a full automation portfolio over 6-10 weeks.' },
    ],
  },
  'data-marketing': {
    headline: 'Data-Driven Digital Marketing',
    subheadline: 'Marketing strategies powered by data analytics, AI insights, and proven frameworks that deliver measurable growth.',
    heroStats: [
      { label: 'Avg. ROAS', value: '4.2x' },
      { label: 'Lead Growth', value: '+180%' },
      { label: 'Client Retention', value: '95%' },
    ],
    overview: 'Marketing without data is guesswork. We combine deep analytics with creative strategy to build marketing campaigns that convert. From market research and customer segmentation to campaign execution and optimization — every decision is backed by data. Our approach delivers predictable, scalable growth.',
    capabilities: [
      { title: 'Marketing Analytics', desc: 'Comprehensive dashboards tracking every metric that matters' },
      { title: 'Campaign Strategy', desc: 'Data-informed campaigns across paid, organic, and email channels' },
      { title: 'Customer Segmentation', desc: 'AI-powered audience segmentation for personalized messaging' },
      { title: 'Conversion Optimization', desc: 'A/B testing and funnel optimization to maximize conversions' },
      { title: 'Marketing Automation', desc: 'Automated nurture sequences and lifecycle marketing' },
      { title: 'Attribution Modeling', desc: 'Understand which channels truly drive your revenue' },
    ],
    process: [
      { step: '01', title: 'Audit', desc: 'Comprehensive analysis of your current marketing, competitors, and market opportunity.' },
      { step: '02', title: 'Strategy', desc: 'Develop data-driven marketing strategy with clear KPIs and channel allocation.' },
      { step: '03', title: 'Execute', desc: 'Launch campaigns across channels with rigorous A/B testing and creative optimization.' },
      { step: '04', title: 'Optimize', desc: 'Continuous improvement based on performance data and market feedback.' },
      { step: '05', title: 'Scale', desc: 'Expand successful campaigns and explore new channels for sustained growth.' },
    ],
    industries: ['E-commerce', 'SaaS', 'B2B Services', 'Healthcare', 'Education', 'Finance'],
    deliverables: ['Marketing Audit', 'Growth Strategy', 'Campaign Calendar', 'Analytics Dashboard', 'Monthly Reports'],
    caseStudy: {
      client: 'E-commerce Brand (EU)',
      challenge: 'High customer acquisition costs and low repeat purchase rate.',
      solution: 'Implemented data-driven segmentation with personalized email and retargeting campaigns.',
      result: 'Reduced CAC by 45% and increased repeat purchases by 60%.',
    },
    testimonials: [
      { quote: 'Finally, marketing that actually ties to revenue. We know exactly what is working and what is not.', author: 'CMO, B2B SaaS' },
    ],
    techStack: ['Google Analytics 4', 'Meta Ads', 'Google Ads', 'HubSpot', 'Tableau', 'Python'],
    whyUs: [
      { title: 'Data-First Approach', desc: 'Every strategy backed by analytics and testing' },
      { title: 'Full-Funnel', desc: 'From awareness through retention and advocacy' },
      { title: 'EU Market Expertise', desc: 'Deep understanding of European markets and regulations' },
    ],
    faq: [
      { q: 'How soon will we see results?', a: 'Quick wins within 4-6 weeks. Sustainable growth frameworks within 3 months.' },
      { q: 'Do you handle ad creative?', a: 'Yes. We create ad copy, visuals, and landing pages optimized for conversion.' },
    ],
  },
  'social-media': {
    headline: 'Strategic Social Media Marketing',
    subheadline: 'Build authentic brand presence and engaged communities across social platforms with strategy that drives real business results.',
    heroStats: [
      { label: 'Engagement Rate', value: '5.8%' },
      { label: 'Follower Growth', value: '+300%' },
      { label: 'Brand Reach', value: '10x' },
    ],
    overview: 'Social media is more than posting — it is building a brand community. We develop comprehensive social media strategies that align with your business goals, create content that resonates with your audience, and manage your presence across platforms. Our approach combines creativity with analytics to maximize reach, engagement, and conversion.',
    capabilities: [
      { title: 'Platform Strategy', desc: 'Channel-specific strategies for LinkedIn, Instagram, TikTok, and more' },
      { title: 'Content Creation', desc: 'Engaging visual and written content tailored to each platform' },
      { title: 'Community Management', desc: 'Active engagement with your audience to build loyalty' },
      { title: 'Paid Social', desc: 'Targeted advertising campaigns with advanced audience optimization' },
      { title: 'Influencer Marketing', desc: 'Strategic partnerships with relevant influencers in your industry' },
      { title: 'Social Listening', desc: 'Monitor brand mentions, sentiment, and industry trends' },
    ],
    process: [
      { step: '01', title: 'Audit', desc: 'Analyze your current social presence, competitors, and audience behavior.' },
      { step: '02', title: 'Strategy', desc: 'Develop platform-specific content strategy aligned with business objectives.' },
      { step: '03', title: 'Create', desc: 'Produce high-quality content including graphics, video, and copywriting.' },
      { step: '04', title: 'Engage', desc: 'Active community management with timely responses and conversation building.' },
      { step: '05', title: 'Analyze', desc: 'Weekly performance reports with insights and optimization recommendations.' },
    ],
    industries: ['Consumer Brands', 'B2B Tech', 'Fashion', 'Food & Beverage', 'Healthcare', 'Education'],
    deliverables: ['Social Media Audit', 'Content Strategy', 'Content Calendar', 'Monthly Analytics Report', 'Community Guidelines'],
    caseStudy: {
      client: 'B2B Tech Startup',
      challenge: 'Zero social presence and struggling to generate leads organically.',
      solution: 'Built LinkedIn thought-leadership strategy with consistent content and engagement.',
      result: 'Grew from 200 to 8,000 followers in 6 months. 40% of leads now come from social.',
    },
    testimonials: [
      { quote: 'Our LinkedIn is now our top lead source. The quality of content and engagement has been transformative.', author: 'CEO, B2B Startup' },
    ],
    techStack: ['Buffer', 'Hootsuite', 'Canva', 'Adobe Creative Suite', 'Sprout Social', 'Meta Business'],
    whyUs: [
      { title: 'Platform Natives', desc: 'We live and breathe social media trends' },
      { title: 'Brand Consistency', desc: 'Unified voice across all platforms and touchpoints' },
      { title: 'Results-Driven', desc: 'We track business outcomes, not just vanity metrics' },
    ],
    faq: [
      { q: 'Which platforms should we be on?', a: 'Depends on your audience. We audit your market and recommend the most effective channels.' },
      { q: 'How often should we post?', a: 'Varies by platform. We create a sustainable cadence that maximizes engagement without burnout.' },
    ],
  },
  'machine-learning': {
    headline: 'Machine Learning Solutions',
    subheadline: 'Custom ML models and intelligent pipelines that turn your data into competitive advantage.',
    heroStats: [
      { label: 'Model Accuracy', value: '97%' },
      { label: 'Processing Speed', value: '10x' },
      { label: 'Data Points', value: '1B+' },
    ],
    overview: 'Machine learning unlocks patterns and insights hidden in your data. We build custom ML solutions — from predictive analytics and recommendation systems to computer vision and natural language processing. Our end-to-end approach covers data preparation, model development, validation, deployment, and continuous monitoring.',
    capabilities: [
      { title: 'Predictive Analytics', desc: 'Forecast demand, churn, revenue, and other business-critical metrics' },
      { title: 'NLP & Text Analysis', desc: 'Sentiment analysis, document classification, and entity extraction' },
      { title: 'Computer Vision', desc: 'Image recognition, object detection, and visual inspection systems' },
      { title: 'Recommendation Systems', desc: 'Personalized recommendations that drive engagement and revenue' },
      { title: 'Anomaly Detection', desc: 'Identify fraud, defects, and unusual patterns in real-time' },
      { title: 'MLOps & Monitoring', desc: 'Production ML pipelines with model versioning and drift detection' },
    ],
    process: [
      { step: '01', title: 'Data Audit', desc: 'Assess your data quality, volume, and suitability for machine learning use cases.' },
      { step: '02', title: 'Feature Engineering', desc: 'Transform raw data into features that ML models can learn from effectively.' },
      { step: '03', title: 'Model Development', desc: 'Train and validate multiple model architectures to find the best performer.' },
      { step: '04', title: 'Deployment', desc: 'Deploy models to production with API access, monitoring, and scaling infrastructure.' },
      { step: '05', title: 'Monitoring', desc: 'Continuous monitoring for model drift, performance degradation, and retraining triggers.' },
    ],
    industries: ['E-commerce', 'Finance', 'Healthcare', 'Manufacturing', 'Logistics', 'Legal'],
    deliverables: ['Data Assessment', 'Feature Engineering', 'Trained Models', 'API Endpoints', 'Monitoring Dashboard'],
    caseStudy: {
      client: 'Vettek AI Hiring Platform',
      challenge: 'Manual CV screening was slow and introduced unconscious bias.',
      solution: 'Built ML-powered CV parsing and candidate ranking with bias detection.',
      result: 'Reduced screening time by 85% while improving candidate quality metrics.',
    },
    testimonials: [
      { quote: 'The ML models Bright-Byte built have become core to our product. Accuracy and reliability are exceptional.', author: 'CTO, AI Platform' },
    ],
    techStack: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Hugging Face', 'MLflow', 'Apache Spark'],
    whyUs: [
      { title: 'End-to-End ML', desc: 'From data engineering to production deployment' },
      { title: 'Responsible ML', desc: 'Bias detection and model explainability built in' },
      { title: 'Continuous Learning', desc: 'Models that improve automatically with new data' },
    ],
    faq: [
      { q: 'How much data do we need?', a: 'Depends on the problem. We assess your data and can often start with surprisingly little through transfer learning.' },
      { q: 'How do you ensure model fairness?', a: 'We implement bias detection, fairness constraints, and model explainability from the start.' },
    ],
  },
  'mobile-development': {
    headline: 'Mobile Apps That Users Love',
    subheadline: 'Native and cross-platform mobile applications designed for performance, engagement, and seamless user experience.',
    heroStats: [
      { label: 'App Store Rating', value: '4.8★' },
      { label: 'User Retention', value: '+65%' },
      { label: 'Load Time', value: '<2s' },
    ],
    overview: 'Mobile is where your users are. We build mobile applications that people actually want to use — fast, intuitive, and beautifully designed. Whether you need a native iOS/Android app or a cross-platform solution, our team delivers pixel-perfect implementations with smooth animations, offline support, and deep platform integration.',
    capabilities: [
      { title: 'Cross-Platform Apps', desc: 'Single codebase for iOS and Android with React Native or Flutter' },
      { title: 'Native Development', desc: 'Platform-specific apps leveraging full device capabilities' },
      { title: 'UI/UX Design', desc: 'Mobile-first design following platform guidelines and best practices' },
      { title: 'Push Notifications', desc: 'Intelligent notification systems that drive engagement without annoyance' },
      { title: 'Offline Support', desc: 'Apps that work seamlessly with or without internet connectivity' },
      { title: 'App Store Optimization', desc: 'Maximize downloads with optimized store listings and metadata' },
    ],
    process: [
      { step: '01', title: 'Strategy', desc: 'Define app goals, target audience, platform strategy, and feature prioritization.' },
      { step: '02', title: 'Design', desc: 'Create wireframes, UI designs, and interactive prototypes for user testing.' },
      { step: '03', title: 'Develop', desc: 'Build the application with clean code, regular demos, and iterative feedback.' },
      { step: '04', title: 'Test', desc: 'Comprehensive testing on multiple devices, OS versions, and real-world conditions.' },
      { step: '05', title: 'Launch', desc: 'App Store submission, launch strategy, and post-launch monitoring.' },
    ],
    industries: ['Social', 'Dating', 'E-commerce', 'Fintech', 'Healthcare', 'Entertainment'],
    deliverables: ['App Design (Figma)', 'Source Code', 'App Store Submission', 'Analytics Integration', 'Post-Launch Support'],
    caseStudy: {
      client: 'Festi - Festival Dating App',
      challenge: 'Festival-goers had no dedicated platform to connect with others at the same events.',
      solution: 'Built cross-platform app with ticket verification, real-time chat, and event-based matching.',
      result: 'Beta launch generating strong early traction with festival communities.',
    },
    testimonials: [
      { quote: 'The app Bright-Byte built exceeded our expectations. Beautiful design, smooth performance, and users love it.', author: 'Founder, Festi' },
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Node.js', 'PostgreSQL'],
    whyUs: [
      { title: 'User-Centric', desc: 'Design driven by user research and testing' },
      { title: 'Performance Focus', desc: 'Smooth 60fps animations and sub-second load times' },
      { title: 'Full Lifecycle', desc: 'From concept to App Store and ongoing updates' },
    ],
    faq: [
      { q: 'React Native or native development?', a: 'React Native covers 90% of use cases. We recommend native for highly specialized hardware features.' },
      { q: 'How long to build a mobile app?', a: 'MVP in 8-12 weeks. Full-featured app in 4-6 months.' },
    ],
  },
  'seo': {
    headline: 'SEO That Drives Revenue',
    subheadline: 'Technical SEO, content strategy, and link building that ranks your business where your customers are searching.',
    heroStats: [
      { label: 'Organic Growth', value: '+250%' },
      { label: 'Keywords Top 10', value: '500+' },
      { label: 'Domain Authority', value: '+40' },
    ],
    overview: 'SEO is the highest-ROI marketing channel when done right. We take a technical-first approach — fixing site architecture, improving Core Web Vitals, and building topical authority through strategic content. Our SEO practice combines engineering precision with content expertise to deliver sustainable organic growth that compounds over time.',
    capabilities: [
      { title: 'Technical SEO', desc: 'Site architecture, crawlability, Core Web Vitals, and structured data' },
      { title: 'Content Strategy', desc: 'Keyword research and content planning based on search intent' },
      { title: 'On-Page Optimization', desc: 'Title tags, meta descriptions, headers, and internal linking' },
      { title: 'Link Building', desc: 'Ethical, high-quality backlink acquisition through digital PR' },
      { title: 'Local SEO', desc: 'Google Business Profile optimization and local pack rankings' },
      { title: 'International SEO', desc: 'Multi-language, multi-region SEO for European expansion' },
    ],
    process: [
      { step: '01', title: 'Audit', desc: 'Comprehensive technical audit, competitor analysis, and keyword research.' },
      { step: '02', title: 'Fix', desc: 'Resolve technical issues, improve site speed, and implement structured data.' },
      { step: '03', title: 'Content', desc: 'Create and optimize content targeting high-value keywords and search intent.' },
      { step: '04', title: 'Promote', desc: 'Build authority through digital PR, content marketing, and ethical link building.' },
      { step: '05', title: 'Monitor', desc: 'Track rankings, traffic, and conversions with monthly reporting and optimization.' },
    ],
    industries: ['E-commerce', 'SaaS', 'Local Services', 'Healthcare', 'B2B', 'Publishing'],
    deliverables: ['SEO Audit Report', 'Keyword Strategy', 'Technical Fix List', 'Content Calendar', 'Monthly Rankings Report'],
    caseStudy: {
      client: 'Berkelsnijmachine',
      challenge: 'E-commerce site invisible in search results for key commercial terms.',
      solution: 'Technical SEO overhaul, product page optimization, and multi-language content strategy.',
      result: 'Organic traffic up 300%, ranking #1 for primary commercial keywords in 4 EU markets.',
    },
    testimonials: [
      { quote: 'Bright-Byte\'s technical SEO expertise is unmatched. Our organic traffic has never been higher.', author: 'Marketing Director, E-commerce' },
    ],
    techStack: ['Ahrefs', 'Screaming Frog', 'Google Search Console', 'Semrush', 'Surfer SEO', 'Schema.org'],
    whyUs: [
      { title: 'Technical Depth', desc: 'Engineer-level understanding of how search engines work' },
      { title: 'EU Specialization', desc: 'Multi-language, multi-market SEO expertise' },
      { title: 'Transparent Reporting', desc: 'Clear metrics tied to business outcomes, not vanity keywords' },
    ],
    faq: [
      { q: 'How long until we see SEO results?', a: 'Technical fixes show impact in 4-8 weeks. Content and authority building in 3-6 months.' },
      { q: 'Do you guarantee rankings?', a: 'No one can guarantee specific rankings. We guarantee best-practice implementation and transparent reporting.' },
    ],
  },
  'web-development': {
    headline: 'High-Performance Web Applications',
    subheadline: 'Modern web apps that load instantly, convert visitors, and scale globally across every device.',
    heroStats: [
      { label: 'Lighthouse Score', value: '98' },
      { label: 'Load Time', value: '<1s' },
      { label: 'Conversion Lift', value: '+45%' },
    ],
    overview: 'Your website is often the first impression customers have of your business. We build web applications that perform — sub-second load times, perfect Core Web Vitals, SEO-optimized, and designed to convert. From marketing sites to complex SaaS platforms, we deliver web experiences that drive real business results.',
    capabilities: [
      { title: 'Progressive Web Apps', desc: 'App-like experiences that work offline and load instantly' },
      { title: 'E-commerce Platforms', desc: 'High-conversion stores with seamless payment processing' },
      { title: 'SaaS Applications', desc: 'Multi-tenant software with billing, dashboards, and admin panels' },
      { title: 'Performance Engineering', desc: 'Sub-second load times through edge deployment and optimization' },
      { title: 'SEO Architecture', desc: 'Built to rank with server-side rendering and semantic markup' },
      { title: 'CMS Integration', desc: 'Headless CMS solutions for easy content management' },
    ],
    process: [
      { step: '01', title: 'Discovery', desc: 'Understand your goals, audience, and technical requirements through workshops.' },
      { step: '02', title: 'Design', desc: 'Create wireframes, visual designs, and interactive prototypes for approval.' },
      { step: '03', title: 'Develop', desc: 'Build with modern frameworks, component libraries, and performance best practices.' },
      { step: '04', title: 'Optimize', desc: 'Performance tuning, SEO optimization, accessibility compliance, and cross-browser testing.' },
      { step: '05', title: 'Launch', desc: 'Deployment, monitoring setup, training, and post-launch support.' },
    ],
    industries: ['E-commerce', 'SaaS', 'Healthcare', 'Finance', 'Education', 'Media'],
    deliverables: ['Technical Architecture', 'Responsive Web Application', 'CMS Setup', 'Performance Report', 'Deployment Pipeline'],
    caseStudy: {
      client: 'Kobra Bikes',
      challenge: 'Needed a professional web presence with an interactive product configurator for multiple markets.',
      solution: 'Built responsive website with custom bike configurator and multi-language support.',
      result: 'Launched across 3 EU markets with 40% higher engagement than industry average.',
    },
    testimonials: [
      { quote: 'The website loads instantly and converts beautifully. Our best performing digital asset by far.', author: 'CEO, E-commerce Brand' },
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'PostgreSQL'],
    whyUs: [
      { title: 'Performance Obsessed', desc: 'Every millisecond of load time matters for conversion' },
      { title: 'Conversion Focused', desc: 'Design decisions backed by data and A/B testing' },
      { title: 'Future Proof', desc: 'Modern tech stacks with long-term support and maintainability' },
    ],
    faq: [
      { q: 'How long does web development take?', a: 'Marketing sites: 4-6 weeks. Web applications: 8-12 weeks. Complex platforms: 3-6 months.' },
      { q: 'Do you handle hosting and deployment?', a: 'Yes. We configure hosting, CDN, SSL, and automated deployment pipelines.' },
    ],
  },
  'design-content': {
    headline: 'Design & Creative Content',
    subheadline: 'Stunning visual design and compelling content that captures attention and communicates your brand story.',
    heroStats: [
      { label: 'Brand Projects', value: '50+' },
      { label: 'Client Satisfaction', value: '98%' },
      { label: 'Engagement Lift', value: '+120%' },
    ],
    overview: 'Great design is not just about aesthetics — it is about communication. We create visual identities, user interfaces, and content strategies that tell your brand story and drive action. Our creative team combines artistic vision with strategic thinking to deliver designs that look stunning and perform brilliantly.',
    capabilities: [
      { title: 'Brand Identity', desc: 'Logo design, brand guidelines, and complete visual identity systems' },
      { title: 'UI/UX Design', desc: 'User-centered interface design with prototyping and testing' },
      { title: 'Content Strategy', desc: 'Strategic content planning aligned with business and SEO goals' },
      { title: 'Graphic Design', desc: 'Marketing materials, social assets, presentations, and print design' },
      { title: 'Motion Design', desc: 'Animated graphics, video content, and micro-interactions' },
      { title: 'Design Systems', desc: 'Scalable component libraries for consistent brand application' },
    ],
    process: [
      { step: '01', title: 'Research', desc: 'Understand your brand, audience, competitors, and market positioning.' },
      { step: '02', title: 'Concept', desc: 'Develop creative concepts and mood boards aligned with your brand strategy.' },
      { step: '03', title: 'Design', desc: 'Create polished designs with iterative feedback and refinement cycles.' },
      { step: '04', title: 'Produce', desc: 'Generate all deliverables in required formats and specifications.' },
      { step: '05', title: 'Deliver', desc: 'Handoff with guidelines, assets, and training for consistent application.' },
    ],
    industries: ['Tech', 'Finance', 'Healthcare', 'Consumer Goods', 'B2B Services', 'Non-profit'],
    deliverables: ['Brand Guidelines', 'UI/UX Designs (Figma)', 'Asset Library', 'Content Calendar', 'Design System'],
    caseStudy: {
      client: 'GBICT',
      challenge: 'Outdated brand identity that did not reflect their modern service offering.',
      solution: 'Complete brand refresh with new website design, UI/UX overhaul, and content strategy.',
      result: 'Professional brand presence with significantly improved user engagement.',
    },
    testimonials: [
      { quote: 'The brand identity exceeded our expectations. Professional, modern, and perfectly aligned with our vision.', author: 'CEO, Tech Company' },
    ],
    techStack: ['Figma', 'Adobe Creative Suite', 'After Effects', 'Framer', 'Webflow', 'Lottie'],
    whyUs: [
      { title: 'Strategy + Creativity', desc: 'Design decisions rooted in business strategy and user research' },
      { title: 'Full Creative Suite', desc: 'From brand identity to motion design and content production' },
      { title: 'Consistent Quality', desc: 'Design systems that maintain brand integrity at scale' },
    ],
    faq: [
      { q: 'Can you work with our existing brand?', a: 'Absolutely. We can extend, refresh, or completely redesign your brand identity.' },
      { q: 'What deliverables do we receive?', a: 'Full source files (Figma, AI, PSD), brand guidelines, asset library, and usage documentation.' },
    ],
  },
};

const defaultContent = {
  headline: 'Enterprise Solutions',
  subheadline: 'Custom solutions designed to transform your business with cutting-edge technology.',
  heroStats: [
    { label: 'Satisfaction', value: '99%' },
    { label: 'Projects', value: '100+' },
    { label: 'Support', value: '24/7' },
  ],
  overview: 'We deliver comprehensive technology solutions tailored to your specific business challenges. Our team brings deep expertise across software engineering, AI, and digital marketing to build solutions that drive real results.',
  capabilities: [
    { title: 'Strategic Consulting', desc: 'Expert guidance for your technology decisions' },
    { title: 'Custom Development', desc: 'Solutions built exactly for your requirements' },
    { title: 'Integration', desc: 'Connect your tools into unified workflows' },
    { title: 'Ongoing Support', desc: 'Continuous maintenance and optimization' },
    { title: 'Security', desc: 'Enterprise-grade protection for your data' },
    { title: 'Scalability', desc: 'Architecture built to grow with your business' },
  ],
  process: [
    { step: '01', title: 'Discovery', desc: 'Understand your goals, challenges, and current systems through in-depth consultations.' },
    { step: '02', title: 'Strategy', desc: 'Develop a tailored solution approach with clear deliverables and timeline.' },
    { step: '03', title: 'Build', desc: 'Develop your solution with regular check-ins and iterative feedback.' },
    { step: '04', title: 'Test', desc: 'Comprehensive testing to ensure quality, security, and performance.' },
    { step: '05', title: 'Launch', desc: 'Deploy to production with monitoring, training, and ongoing support.' },
  ],
  industries: ['Technology', 'Finance', 'Healthcare', 'Retail', 'Manufacturing'],
  deliverables: ['Technical Assessment', 'Implementation Plan', 'Deployed Solution', 'Documentation'],
  caseStudy: {
    client: 'Enterprise Client',
    challenge: 'Legacy systems limiting growth and operational efficiency.',
    solution: 'Modernized technology stack with cloud-native architecture.',
    result: '300% improvement in system performance and significant cost reduction.',
  },
  testimonials: [
    { quote: 'Bright-Byte delivered exactly what we needed, on time and on budget. Highly recommended.', author: 'CTO, Enterprise Company' },
  ],
  techStack: ['React', 'Node.js', 'Python', 'AWS', 'Docker'],
  whyUs: [
    { title: 'Experience', desc: 'Years of expertise across industries and technologies' },
    { title: 'Quality', desc: 'Rigorous testing and code review processes' },
    { title: 'Partnership', desc: 'We operate as an extension of your team' },
  ],
  faq: [
    { q: 'How long does a typical project take?', a: 'Varies by scope. We provide detailed estimates after understanding your requirements.' },
    { q: 'Do you provide post-launch support?', a: 'Yes. We offer tailored maintenance and support packages.' },
  ],
};

const serviceStrategyContent: Record<string, { problems: string[]; solutionBlueprint: string[]; businessKpis: string[] }> = {
  'ai-consulting': {
    problems: [
      'Teams have AI ideas but no execution roadmap tied to measurable business value.',
      'Data is fragmented, making model quality and trust inconsistent across departments.',
      'Leadership needs governance and security guardrails before scaling AI adoption.',
    ],
    solutionBlueprint: [
      'AI opportunity mapping with ROI scoring and use-case prioritization.',
      'Data and model architecture with governance, risk controls, and rollout sequencing.',
      'Production pilot delivery with KPI tracking and scale plan by business function.',
    ],
    businessKpis: ['AI adoption rate', 'Decision-cycle reduction', 'Model-to-production time'],
  },
  'software-development': {
    problems: [
      'Off-the-shelf tools block custom workflows and cross-team coordination.',
      'Legacy systems increase maintenance cost and slow product delivery speed.',
      'Engineering teams lack architecture standards for scale and reliability.',
    ],
    solutionBlueprint: [
      'Architecture-first platform design aligned to business-critical workflows.',
      'Iterative MVP-to-scale development with integration and QA hardening.',
      'CI/CD, observability, and clean handover to internal teams.',
    ],
    businessKpis: ['Release velocity', 'Uptime/SLA performance', 'Cost-to-maintain reduction'],
  },
  'automation': {
    problems: [
      'Manual repetitive work slows operations and creates avoidable human errors.',
      'Disconnected tools cause delays in sales, support, and back-office workflows.',
      'Automation attempts fail due to poor exception handling and visibility.',
    ],
    solutionBlueprint: [
      'Workflow audit and automation blueprint (n8n/Make/API).',
      'Reliable orchestration with retries, fallbacks, alerts, and human approvals.',
      'AI-assisted routing/classification to accelerate high-volume operations.',
    ],
    businessKpis: ['Manual effort reduced', 'Cycle-time improvement', 'Workflow failure rate'],
  },
  'machine-learning': {
    problems: [
      'Forecasting and scoring decisions rely on static reports instead of live models.',
      'Data science experiments do not reliably move into production systems.',
      'Teams need explainable ML outcomes for trust and compliance.',
    ],
    solutionBlueprint: [
      'Feature engineering and baseline modeling for measurable uplift.',
      'Model validation, explainability, and deployment pipeline setup.',
      'MLOps monitoring for drift, retraining, and stable long-term performance.',
    ],
    businessKpis: ['Prediction accuracy', 'False-positive reduction', 'Time-to-insight'],
  },
  'web-development': {
    problems: [
      'Slow websites leak conversions and underperform in competitive search.',
      'Inconsistent UX and messaging reduce trust and lead quality.',
      'Web platforms cannot scale cleanly with growth and new features.',
    ],
    solutionBlueprint: [
      'Conversion-focused UX and component-driven frontend architecture.',
      'SEO and Core Web Vitals optimization from day one.',
      'Scalable integrations with CMS, APIs, and analytics instrumentation.',
    ],
    businessKpis: ['Core Web Vitals score', 'Conversion-rate uplift', 'Organic traffic quality'],
  },
  'mobile-development': {
    problems: [
      'Poor onboarding and performance issues hurt retention after install.',
      'Cross-platform apps often compromise quality or release speed.',
      'Teams need clear release and analytics workflows for growth.',
    ],
    solutionBlueprint: [
      'Product-led mobile architecture for iOS/Android from one roadmap.',
      'Performance-first implementation with robust QA and crash prevention.',
      'Analytics, push strategy, and release operations for steady growth.',
    ],
    businessKpis: ['Activation rate', 'Retention (D30)', 'Crash-free sessions'],
  },
  'data-marketing': {
    problems: [
      'Marketing spend is high but attribution clarity is low.',
      'Campaigns lack a testing framework tied to revenue goals.',
      'Teams need predictable pipeline growth with lower CAC.',
    ],
    solutionBlueprint: [
      'End-to-end tracking architecture and dashboard instrumentation.',
      'Funnel strategy with experiments across paid, organic, and CRM.',
      'Continuous optimization loops based on channel-level ROI.',
    ],
    businessKpis: ['CAC trend', 'ROAS by channel', 'Pipeline contribution'],
  },
  'seo': {
    problems: [
      'Technical SEO debt suppresses rankings even with good content.',
      'Content is not mapped to search intent or buying stages.',
      'Businesses need compounding traffic growth, not short-term spikes.',
    ],
    solutionBlueprint: [
      'Technical audit, indexation fixes, and performance remediation.',
      'Keyword-to-page architecture and authority content roadmap.',
      'Structured data + internal linking for sustained ranking gains.',
    ],
    businessKpis: ['Top-10 keyword count', 'Organic conversions', 'Non-branded traffic growth'],
  },
  'social-media': {
    problems: [
      'Content output is inconsistent and not aligned with business objectives.',
      'Engagement does not translate into demand or qualified leads.',
      'Teams lack a repeatable system for creative production and optimization.',
    ],
    solutionBlueprint: [
      'Platform-specific strategy mapped to audience and funnel stage.',
      'Content pillar system with production workflow and publishing cadence.',
      'Performance analysis with iterative creative and targeting improvements.',
    ],
    businessKpis: ['Engagement quality', 'Inbound lead volume', 'Audience growth velocity'],
  },
  'design-content': {
    problems: [
      'Brand communication is inconsistent across sales, product, and marketing.',
      'Visual identity lacks clarity and trust for premium positioning.',
      'Content and design teams need reusable systems for speed and consistency.',
    ],
    solutionBlueprint: [
      'Brand and messaging foundation aligned with business positioning.',
      'Design system and creative templates for multi-channel consistency.',
      'Conversion-oriented content framework for websites, campaigns, and product.',
    ],
    businessKpis: ['Brand consistency score', 'Creative production speed', 'Landing-page engagement'],
  },
};

// ─── Component ──────────────────────────────────────────────────────
const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const services = servicesData;
  const service = services.find((s) => s.id === id);

  const content = serviceContent[id || ''] || defaultContent;
  const strategyContent = serviceStrategyContent[id || ''] || {
    problems: [
      'Unclear delivery priorities across teams.',
      'Technology decisions not tied to business outcomes.',
      'Execution speed impacted by system complexity.',
    ],
    solutionBlueprint: [
      'Assess workflows, constraints, and opportunities.',
      'Design practical architecture and phased execution plan.',
      'Implement, measure, and optimize toward business KPIs.',
    ],
    businessKpis: ['Delivery velocity', 'Operational efficiency', 'Business impact score'],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <Navigate to="/services" />;
  }

  const Icon = service.icon;
  const isAiConsulting = id === 'ai-consulting';
  const isSoftwareDevelopment = id === 'software-development';
  const isAutomation = id === 'automation';
  const isMachineLearning = id === 'machine-learning';
  const isWebDevelopment = id === 'web-development';
  const isMobileDevelopment = id === 'mobile-development';
  const isDataMarketing = id === 'data-marketing';
  const isSeo = id === 'seo';
  const isSocialMedia = id === 'social-media';
  const isDesignContent = id === 'design-content';

  const serviceThemeMap: Record<string, {
    badge: string;
    glowPrimary: string;
    glowSecondary: string;
    badgeClass: string;
    ctaClass: string;
  }> = {
    'ai-consulting': {
      badge: 'AI Strategy',
      glowPrimary: 'bg-blue-500/12',
      glowSecondary: 'bg-cyan-500/8',
      badgeClass: 'bg-blue-500/10 border-blue-500/20 text-blue-300',
      ctaClass: 'bg-blue-500 hover:bg-blue-400',
    },
    'software-development': {
      badge: 'Product Engineering',
      glowPrimary: 'bg-cyan-500/10',
      glowSecondary: 'bg-blue-500/8',
      badgeClass: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300',
      ctaClass: 'bg-cyan-500 hover:bg-cyan-400',
    },
    'automation': {
      badge: 'Automation Studio',
      glowPrimary: 'bg-cyan-500/12',
      glowSecondary: 'bg-sky-500/8',
      badgeClass: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300',
      ctaClass: 'bg-cyan-500 hover:bg-cyan-400',
    },
    'machine-learning': {
      badge: 'ML Systems',
      glowPrimary: 'bg-indigo-500/12',
      glowSecondary: 'bg-blue-500/8',
      badgeClass: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300',
      ctaClass: 'bg-indigo-500 hover:bg-indigo-400',
    },
    'web-development': {
      badge: 'Web Engineering',
      glowPrimary: 'bg-sky-500/12',
      glowSecondary: 'bg-blue-500/8',
      badgeClass: 'bg-sky-500/10 border-sky-500/20 text-sky-300',
      ctaClass: 'bg-sky-500 hover:bg-sky-400',
    },
    'mobile-development': {
      badge: 'Mobile Apps',
      glowPrimary: 'bg-blue-500/12',
      glowSecondary: 'bg-cyan-500/8',
      badgeClass: 'bg-blue-500/10 border-blue-500/20 text-blue-300',
      ctaClass: 'bg-blue-500 hover:bg-blue-400',
    },
    'data-marketing': {
      badge: 'Growth Analytics',
      glowPrimary: 'bg-emerald-500/10',
      glowSecondary: 'bg-cyan-500/8',
      badgeClass: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300',
      ctaClass: 'bg-emerald-500 hover:bg-emerald-400',
    },
    'seo': {
      badge: 'Search Growth',
      glowPrimary: 'bg-violet-500/10',
      glowSecondary: 'bg-blue-500/8',
      badgeClass: 'bg-violet-500/10 border-violet-500/20 text-violet-300',
      ctaClass: 'bg-violet-500 hover:bg-violet-400',
    },
    'social-media': {
      badge: 'Social Strategy',
      glowPrimary: 'bg-fuchsia-500/10',
      glowSecondary: 'bg-cyan-500/8',
      badgeClass: 'bg-fuchsia-500/10 border-fuchsia-500/20 text-fuchsia-300',
      ctaClass: 'bg-fuchsia-500 hover:bg-fuchsia-400',
    },
    'design-content': {
      badge: 'Creative Systems',
      glowPrimary: 'bg-amber-500/10',
      glowSecondary: 'bg-orange-500/8',
      badgeClass: 'bg-amber-500/10 border-amber-500/20 text-amber-300',
      ctaClass: 'bg-amber-500 hover:bg-amber-400',
    },
  };

  const activeTheme = serviceThemeMap[id || ''] || {
    badge: 'Premium Service',
    glowPrimary: 'bg-blue-500/10',
    glowSecondary: 'bg-cyan-500/5',
    badgeClass: 'bg-blue-500/10 border-blue-500/20 text-blue-300',
    ctaClass: 'bg-blue-500 hover:bg-blue-400',
  };

  const aiTrendCoordinates = aiPerformanceTrend.map((point, index) => {
    const x = 26 + (index / (aiPerformanceTrend.length - 1)) * 368;
    const y = 170 - (point.value / 100) * 128;
    return { ...point, x, y };
  });
  const aiTrendPolyline = aiTrendCoordinates.map((point) => `${point.x},${point.y}`).join(' ');

  const softwareTrendCoordinates = softwareProgressTrend.map((point, index) => {
    const x = 26 + (index / (softwareProgressTrend.length - 1)) * 368;
    const y = 170 - (point.value / 100) * 128;
    return { ...point, x, y };
  });
  const softwareTrendPolyline = softwareTrendCoordinates.map((point) => `${point.x},${point.y}`).join(' ');

  const automationTrendCoordinates = automationRunTrend.map((point, index) => {
    const x = 26 + (index / (automationRunTrend.length - 1)) * 368;
    const y = 170 - (point.value / 100) * 128;
    return { ...point, x, y };
  });
  const automationTrendPolyline = automationTrendCoordinates.map((point) => `${point.x},${point.y}`).join(' ');

  const mobileGrowthCoordinates = mobileGrowthCurve.map((point, index) => {
    const x = 26 + (index / (mobileGrowthCurve.length - 1)) * 368;
    const y = 170 - (point.value / 100) * 128;
    return { ...point, x, y };
  });
  const mobileGrowthPolyline = mobileGrowthCoordinates.map((point) => `${point.x},${point.y}`).join(' ');

  const seoTrendCoordinates = seoRankTrend.map((point, index) => {
    const x = 26 + (index / (seoRankTrend.length - 1)) * 368;
    const y = 170 - (point.value / 100) * 128;
    return { ...point, x, y };
  });
  const seoTrendPolyline = seoTrendCoordinates.map((point) => `${point.x},${point.y}`).join(' ');

  return (
    <div className="min-h-screen bg-black">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full blur-[150px] ${activeTheme.glowPrimary}`} />
          <div className={`absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] ${activeTheme.glowSecondary}`} />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
          <Link to="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            All Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm mb-6 border ${activeTheme.badgeClass}`}
              >
                <Sparkles className="w-4 h-4" />
                {activeTheme.badge}
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {content.headline}
              </h1>

              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                {content.subheadline}
              </p>

              <p className="text-sm text-blue-300 mb-8">
                Full technical and execution details are listed below.
              </p>

              <div className="grid sm:grid-cols-3 gap-3 mb-10">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-[11px] text-gray-400">Business Focus</p>
                  <p className="text-sm text-white font-medium">{service.focus}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-[11px] text-gray-400">Typical Delivery Window</p>
                  <p className="text-sm text-white font-medium">{service.deliveryTime}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-[11px] text-gray-400">Expected Outcome</p>
                  <p className="text-sm text-white font-medium">{service.outcome}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-8 mb-10">
                {content.heroStats.map((stat: any, i: number) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}>
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className={`px-6 py-3 rounded-lg text-white font-medium flex items-center gap-2 ${activeTheme.ctaClass}`}
                  >
                    <Mail className="w-4 h-4" />
                    Get a Quote
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border border-blue-500/20 bg-blue-500/10">
                <img
                  src={service.image}
                  alt={`${service.title} visual`}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="absolute inset-0 w-full h-full object-cover opacity-25"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.28),transparent_40%)]" />

                <div className="relative h-full p-8 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-3xl border border-white/25 bg-black/30 backdrop-blur-sm flex items-center justify-center">
                    <Icon className="w-24 h-24 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-sm font-medium mb-4 block text-blue-400">Overview</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What We Do</h2>
            <p className="text-lg text-gray-400 leading-relaxed">{content.overview}</p>
          </motion.div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <span className="text-sm font-medium mb-4 block text-blue-400">Highlights</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">What You Can Expect</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4">
            {service.highlights.map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl p-5 bg-white/[0.03] border border-white/10"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3">
                  <Target className="w-4 h-4 text-blue-400" />
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {isAiConsulting && (
        <section className="py-24 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <span className="text-sm font-medium mb-4 block text-blue-400">Visual Analytics</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Performance & System View</h2>
              <p className="text-gray-400 mt-3 max-w-3xl">
                A visual snapshot of how we move from raw data to measurable AI impact in production.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-white font-semibold mb-3">AI Maturity Progress</h3>
                <div className="rounded-xl border border-white/10 bg-black/25 p-3">
                  <svg viewBox="0 0 420 190" className="w-full h-auto">
                    {[42, 74, 106, 138, 170].map((lineY) => (
                      <line key={lineY} x1="20" y1={lineY} x2="400" y2={lineY} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                    ))}
                    <polyline
                      points={aiTrendPolyline}
                      fill="none"
                      stroke="rgba(96,165,250,0.95)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points={`${aiTrendPolyline} 394,170 26,170`}
                      fill="url(#aiAreaFill)"
                      stroke="none"
                    />
                    <defs>
                      <linearGradient id="aiAreaFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(59,130,246,0.38)" />
                        <stop offset="100%" stopColor="rgba(59,130,246,0.04)" />
                      </linearGradient>
                    </defs>
                    {aiTrendCoordinates.map((point) => (
                      <g key={point.phase}>
                        <circle cx={point.x} cy={point.y} r="4.5" fill="rgba(191,219,254,1)" />
                        <circle cx={point.x} cy={point.y} r="8.5" fill="rgba(96,165,250,0.2)" />
                      </g>
                    ))}
                  </svg>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {aiPerformanceTrend.map((item) => (
                    <div key={item.phase} className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2">
                      <p className="text-[11px] text-gray-400">{item.phase}</p>
                      <p className="text-sm text-white font-medium">{item.value}% maturity</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-white font-semibold mb-3">Data-Driven Impact</h3>
                <div className="space-y-4">
                  {aiImpactBars.map((metric, index) => (
                    <div key={metric.label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-gray-300">{metric.label}</span>
                        <span className="text-sm text-blue-300 font-medium">{metric.value}%</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${metric.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.1 * index }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="text-white font-semibold mb-4">Custom AI Architecture Flow</h3>
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                {aiArchitectureFlow.map((stage, index) => (
                  <React.Fragment key={stage}>
                    <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 px-3 py-2">
                      <p className="text-xs md:text-sm text-blue-100">{stage}</p>
                    </div>
                    {index < aiArchitectureFlow.length - 1 && (
                      <span className="text-blue-400 text-xs md:text-sm">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {isSoftwareDevelopment && (
        <section className="py-24 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <span className="text-sm font-medium mb-4 block text-blue-400">Engineering Visuals</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Software Delivery & Capability Graph</h2>
              <p className="text-gray-400 mt-3 max-w-3xl">
                Visual view of how we execute complex software builds across apps, platforms, plugins, Web3, and robotics integrations.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-white font-semibold mb-3">Build Progress Curve</h3>
                <div className="rounded-xl border border-white/10 bg-black/25 p-3">
                  <svg viewBox="0 0 420 190" className="w-full h-auto">
                    {[42, 74, 106, 138, 170].map((lineY) => (
                      <line key={lineY} x1="20" y1={lineY} x2="400" y2={lineY} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                    ))}
                    <polyline
                      points={softwareTrendPolyline}
                      fill="none"
                      stroke="rgba(56,189,248,0.95)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points={`${softwareTrendPolyline} 394,170 26,170`}
                      fill="url(#softwareAreaFill)"
                      stroke="none"
                    />
                    <defs>
                      <linearGradient id="softwareAreaFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(14,165,233,0.38)" />
                        <stop offset="100%" stopColor="rgba(14,165,233,0.04)" />
                      </linearGradient>
                    </defs>
                    {softwareTrendCoordinates.map((point) => (
                      <g key={point.phase}>
                        <circle cx={point.x} cy={point.y} r="4.5" fill="rgba(125,211,252,1)" />
                        <circle cx={point.x} cy={point.y} r="8.5" fill="rgba(56,189,248,0.2)" />
                      </g>
                    ))}
                  </svg>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {softwareProgressTrend.map((item) => (
                    <div key={item.phase} className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2">
                      <p className="text-[11px] text-gray-400">{item.phase}</p>
                      <p className="text-sm text-white font-medium">{item.value}% completion confidence</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-white font-semibold mb-3">Solution Coverage</h3>
                <div className="space-y-4">
                  {softwareCapabilityBars.map((metric, index) => (
                    <div key={metric.label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-gray-300">{metric.label}</span>
                        <span className="text-sm text-cyan-300 font-medium">{metric.value}%</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${metric.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.1 * index }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="text-white font-semibold mb-4">Software Architecture Flow</h3>
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                {softwareArchitectureFlow.map((stage, index) => (
                  <React.Fragment key={stage}>
                    <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3 py-2">
                      <p className="text-xs md:text-sm text-cyan-100">{stage}</p>
                    </div>
                    {index < softwareArchitectureFlow.length - 1 && (
                      <span className="text-cyan-400 text-xs md:text-sm">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {isAutomation && (
        <section className="py-24 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <span className="text-sm font-medium mb-4 block text-blue-400">Automation Visuals</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Workflow Intelligence Graph</h2>
              <p className="text-gray-400 mt-3 max-w-3xl">
                Visual model of how n8n and Make workflows, API automation, and AI decision layers combine into reliable operations.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-white font-semibold mb-3">Automation Rollout Curve</h3>
                <div className="rounded-xl border border-white/10 bg-black/25 p-3">
                  <svg viewBox="0 0 420 190" className="w-full h-auto">
                    {[42, 74, 106, 138, 170].map((lineY) => (
                      <line key={lineY} x1="20" y1={lineY} x2="400" y2={lineY} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                    ))}
                    <polyline
                      points={automationTrendPolyline}
                      fill="none"
                      stroke="rgba(34,211,238,0.95)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points={`${automationTrendPolyline} 394,170 26,170`}
                      fill="url(#automationAreaFill)"
                      stroke="none"
                    />
                    <defs>
                      <linearGradient id="automationAreaFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(34,211,238,0.35)" />
                        <stop offset="100%" stopColor="rgba(34,211,238,0.04)" />
                      </linearGradient>
                    </defs>
                    {automationTrendCoordinates.map((point) => (
                      <g key={point.phase}>
                        <circle cx={point.x} cy={point.y} r="4.5" fill="rgba(165,243,252,1)" />
                        <circle cx={point.x} cy={point.y} r="8.5" fill="rgba(34,211,238,0.22)" />
                      </g>
                    ))}
                  </svg>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {automationRunTrend.map((item) => (
                    <div key={item.phase} className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2">
                      <p className="text-[11px] text-gray-400">{item.phase}</p>
                      <p className="text-sm text-white font-medium">{item.value}% automation maturity</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-white font-semibold mb-3">Business Impact Metrics</h3>
                <div className="space-y-4">
                  {automationImpactBars.map((metric, index) => (
                    <div key={metric.label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-gray-300">{metric.label}</span>
                        <span className="text-sm text-cyan-300 font-medium">{metric.value}%</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${metric.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.1 * index }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="text-white font-semibold mb-4">n8n + Make + API + AI Flow</h3>
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                {automationArchitectureFlow.map((stage, index) => (
                  <React.Fragment key={stage}>
                    <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3 py-2">
                      <p className="text-xs md:text-sm text-cyan-100">{stage}</p>
                    </div>
                    {index < automationArchitectureFlow.length - 1 && (
                      <span className="text-cyan-400 text-xs md:text-sm">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {isMachineLearning && (
        <section className="py-24 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <span className="text-sm font-medium mb-4 block text-indigo-400">ML Visuals</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Model Performance & Pipeline</h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-white font-semibold mb-4">Model Quality Radar</h3>
                <div className="relative h-64 rounded-xl border border-white/10 bg-black/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {[220, 170, 120, 70].map((size) => (
                      <div key={size} className="absolute rounded-full border border-indigo-400/20" style={{ width: size, height: size }} />
                    ))}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
                      className="absolute w-52 h-52 rounded-full border border-indigo-300/25 border-dashed"
                    />
                    {machineLearningModelBars.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        className="absolute px-2 py-1 rounded-md text-xs text-indigo-100 border border-indigo-400/30 bg-indigo-500/15"
                        style={{
                          top: `${18 + (index % 2) * 38}%`,
                          left: `${14 + index * 18}%`,
                        }}
                      >
                        {item.label}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-white font-semibold mb-3">Accuracy Snapshot</h3>
                <div className="space-y-4">
                  {machineLearningModelBars.map((metric, index) => (
                    <div key={metric.label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-gray-300">{metric.label}</span>
                        <span className="text-sm text-indigo-300 font-medium">{metric.value}%</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${metric.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.1 * index }}
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-blue-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="text-white font-semibold mb-4">ML Delivery Pipeline</h3>
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                {machineLearningPipeline.map((stage, index) => (
                  <React.Fragment key={stage}>
                    <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-3 py-2">
                      <p className="text-xs md:text-sm text-indigo-100">{stage}</p>
                    </div>
                    {index < machineLearningPipeline.length - 1 && (
                      <span className="text-indigo-400 text-xs md:text-sm">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {isWebDevelopment && (
        <section className="py-24 border-y border-white/5 bg-gradient-to-b from-sky-500/[0.05] to-transparent">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <span className="text-sm font-medium mb-4 block text-sky-400">Web Visuals</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Performance-First Web Delivery</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {webDevelopmentVitals.map((vital, index) => (
                <motion.div
                  key={vital.metric}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-xl border border-sky-500/20 bg-sky-500/[0.08] p-4"
                >
                  <p className="text-xs text-sky-200 mb-1">{vital.metric}</p>
                  <p className="text-white font-semibold">{vital.value}</p>
                  <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-400" style={{ width: `${vital.score}%` }} />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-white font-semibold mb-3">Launch Flow</h3>
                <div className="space-y-3">
                  {webDevelopmentFlow.map((item, index) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-sky-500/20 border border-sky-500/40 text-sky-200 text-xs flex items-center justify-center">{index + 1}</div>
                      <div className="text-sm text-gray-200">{item}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-black/20 p-5"
              >
                <h3 className="text-white font-semibold mb-3">Component Architecture</h3>
                <div className="rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-[11px] text-sky-200/90 leading-relaxed">
                  <p>app/landing/page.tsx</p>
                  <p className="text-gray-400">├─ hero/interactive-banner</p>
                  <p className="text-gray-400">├─ sections/case-study-grid</p>
                  <p className="text-gray-400">├─ modules/pricing-engine</p>
                  <p className="text-gray-400">├─ api/conversion-events</p>
                  <p className="text-gray-400">└─ analytics/performance-observer</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {isMobileDevelopment && (
        <section className="py-24 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <span className="text-sm font-medium mb-4 block text-blue-400">Mobile Visuals</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Adoption Curve & Product Stability</h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-white font-semibold mb-3">Growth Curve</h3>
                <div className="rounded-xl border border-white/10 bg-black/25 p-3">
                  <svg viewBox="0 0 420 190" className="w-full h-auto">
                    {[42, 74, 106, 138, 170].map((lineY) => (
                      <line key={lineY} x1="20" y1={lineY} x2="400" y2={lineY} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                    ))}
                    <polyline
                      points={mobileGrowthPolyline}
                      fill="none"
                      stroke="rgba(59,130,246,0.95)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points={`${mobileGrowthPolyline} 394,170 26,170`}
                      fill="url(#mobileAreaFill)"
                      stroke="none"
                    />
                    <defs>
                      <linearGradient id="mobileAreaFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(59,130,246,0.35)" />
                        <stop offset="100%" stopColor="rgba(59,130,246,0.04)" />
                      </linearGradient>
                    </defs>
                    {mobileGrowthCoordinates.map((point) => (
                      <g key={point.stage}>
                        <circle cx={point.x} cy={point.y} r="4.5" fill="rgba(191,219,254,1)" />
                        <circle cx={point.x} cy={point.y} r="8.5" fill="rgba(59,130,246,0.2)" />
                      </g>
                    ))}
                  </svg>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-white font-semibold mb-3">Capability Index</h3>
                <div className="space-y-4">
                  {mobileCapabilityBars.map((metric, index) => (
                    <div key={metric.label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-gray-300">{metric.label}</span>
                        <span className="text-sm text-blue-300 font-medium">{metric.value}%</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${metric.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.1 * index }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {isDataMarketing && (
        <section className="py-24 border-y border-white/5 bg-gradient-to-b from-emerald-500/[0.05] to-transparent">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <span className="text-sm font-medium mb-4 block text-emerald-400">Growth Visuals</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Funnel Health & ROI Mix</h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-white font-semibold mb-3">Revenue Funnel</h3>
                <div className="space-y-3">
                  {marketingFunnelBars.map((step, index) => (
                    <div key={step.label}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-300">{step.label}</span>
                        <span className="text-sm text-emerald-300 font-medium">{step.value}%</span>
                      </div>
                      <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${step.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: index * 0.08 }}
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-white font-semibold mb-3">Channel ROAS</h3>
                <div className="grid grid-cols-2 gap-3">
                  {marketingChannelRoi.map((channel) => (
                    <div key={channel.label} className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.08] p-4">
                      <p className="text-xs text-emerald-200 mb-1">{channel.label}</p>
                      <p className="text-xl text-white font-semibold">{channel.value.toFixed(1)}x</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {isSeo && (
        <section className="py-24 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <span className="text-sm font-medium mb-4 block text-violet-400">SEO Visuals</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Ranking Momentum Dashboard</h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-white font-semibold mb-3">Keyword Growth Curve</h3>
                <div className="rounded-xl border border-white/10 bg-black/25 p-3">
                  <svg viewBox="0 0 420 190" className="w-full h-auto">
                    {[42, 74, 106, 138, 170].map((lineY) => (
                      <line key={lineY} x1="20" y1={lineY} x2="400" y2={lineY} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                    ))}
                    <polyline
                      points={seoTrendPolyline}
                      fill="none"
                      stroke="rgba(167,139,250,0.95)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {seoTrendCoordinates.map((point) => (
                      <g key={point.month}>
                        <circle cx={point.x} cy={point.y} r="4.5" fill="rgba(221,214,254,1)" />
                      </g>
                    ))}
                  </svg>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-white font-semibold mb-3">SEO Pillar Score</h3>
                <div className="space-y-4">
                  {seoPillarScores.map((metric, index) => (
                    <div key={metric.label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-gray-300">{metric.label}</span>
                        <span className="text-sm text-violet-300 font-medium">{metric.value}%</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${metric.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.1 * index }}
                          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {isSocialMedia && (
        <section className="py-24 border-y border-white/5 bg-gradient-to-b from-fuchsia-500/[0.05] to-transparent">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <span className="text-sm font-medium mb-4 block text-fuchsia-400">Social Visuals</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Engagement Engine Overview</h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-white font-semibold mb-3">Platform Impact</h3>
                <div className="space-y-4">
                  {socialPlatformBars.map((metric, index) => (
                    <div key={metric.label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-gray-300">{metric.label}</span>
                        <span className="text-sm text-fuchsia-300 font-medium">{metric.value}%</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${metric.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.1 * index }}
                          className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-white font-semibold mb-4">Content Operation Flow</h3>
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                  {socialContentFlow.map((stage, index) => (
                    <React.Fragment key={stage}>
                      <div className="rounded-xl border border-fuchsia-500/30 bg-fuchsia-500/10 px-3 py-2">
                        <p className="text-xs md:text-sm text-fuchsia-100">{stage}</p>
                      </div>
                      {index < socialContentFlow.length - 1 && (
                        <span className="text-fuchsia-400 text-xs md:text-sm">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {isDesignContent && (
        <section className="py-24 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <span className="text-sm font-medium mb-4 block text-amber-400">Creative Visuals</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Design System & Content Quality</h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-white font-semibold mb-3">Visual Direction Board</h3>
                <div className="grid grid-cols-4 gap-3">
                  {['#F59E0B', '#FB923C', '#3B82F6', '#111827', '#FDE68A', '#FDBA74', '#93C5FD', '#1F2937'].map((color) => (
                    <div key={color} className="rounded-xl border border-white/10 h-16" style={{ backgroundColor: color }} />
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="text-white font-semibold mb-3">Creative Scorecard</h3>
                <div className="space-y-4">
                  {designSystemScores.map((metric, index) => (
                    <div key={metric.label}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-gray-300">{metric.label}</span>
                        <span className="text-sm text-amber-300 font-medium">{metric.value}%</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${metric.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.1 * index }}
                          className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="text-white font-semibold mb-4">Design-to-Content Workflow</h3>
              <div className="flex flex-wrap items-center gap-2 md:gap-3">
                {designProductionFlow.map((stage, index) => (
                  <React.Fragment key={stage}>
                    <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 px-3 py-2">
                      <p className="text-xs md:text-sm text-amber-100">{stage}</p>
                    </div>
                    {index < designProductionFlow.length - 1 && (
                      <span className="text-amber-400 text-xs md:text-sm">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Problems / Solutions / KPI framing */}
      <section className="py-24 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <span className="text-xs uppercase tracking-wide text-red-300">Problems We Solve</span>
              <ul className="mt-4 space-y-3">
                {strategyContent.problems.map((item) => (
                  <li key={item} className="text-sm text-gray-300 leading-relaxed">• {item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <span className="text-xs uppercase tracking-wide text-blue-300">Solution Blueprint</span>
              <ul className="mt-4 space-y-3">
                {strategyContent.solutionBlueprint.map((item) => (
                  <li key={item} className="text-sm text-gray-300 leading-relaxed">• {item}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <span className="text-xs uppercase tracking-wide text-emerald-300">Primary KPI Targets</span>
              <ul className="mt-4 space-y-3">
                {strategyContent.businessKpis.map((item) => (
                  <li key={item} className="text-sm text-gray-200 leading-relaxed font-medium">• {item}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <span className="text-sm font-medium mb-4 block text-blue-400">Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">How We Help</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.capabilities.map((cap: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{cap.title}</h3>
                <p className="text-gray-400 text-sm">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <span className="text-sm font-medium mb-4 block text-blue-400">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">How We Work</h2>
          </motion.div>

          <div className="space-y-6">
            {content.process.map((step: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-6 rounded-2xl bg-white/[0.03] border border-white/10"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <span className="text-blue-400 font-bold">{step.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-24 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <span className="text-sm font-medium mb-4 block text-blue-400">Deliverables</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">What You Receive</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.deliverables.map((deliverable: string, i: number) => (
              <motion.div
                key={deliverable}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-sm text-gray-200">{deliverable}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <span className="text-sm font-medium mb-4 block text-blue-400">Industries</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Who We Serve</h2>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {content.industries.map((industry: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300"
              >
                <Building2 className="w-4 h-4 text-blue-400" />
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <span className="text-sm font-medium mb-4 block text-blue-400">Case Study</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Client Success</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 md:p-12 bg-blue-500/5 border border-blue-500/20"
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{content.caseStudy.client}</h3>
                <div className="space-y-6 mt-8">
                  <div><div className="text-sm text-gray-500 mb-1">Challenge</div><p className="text-gray-300">{content.caseStudy.challenge}</p></div>
                  <div><div className="text-sm text-gray-500 mb-1">Solution</div><p className="text-gray-300">{content.caseStudy.solution}</p></div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="rounded-2xl p-8 text-center bg-blue-500/10">
                  <div className="text-sm text-gray-400 mb-2">Result</div>
                  <p className="text-xl text-white font-medium">{content.caseStudy.result}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      {content.testimonials && content.testimonials.length > 0 && (
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <span className="text-sm font-medium mb-4 block text-blue-400">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">What Clients Say</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {content.testimonials.map((testimonial: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/10"
                >
                  <Quote className="w-8 h-8 text-blue-400 mb-4" />
                  <p className="text-gray-300 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className="text-white font-medium text-sm">{testimonial.author}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech & Why Us */}
      <section className="py-24 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-white mb-6">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {content.techStack.map((tech: string, i: number) => (
                  <span key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm">{tech}</span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-white mb-6">Why Bright-Byte</h3>
              <div className="space-y-4">
                {content.whyUs.map((item: any, i: number) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-blue-500/20">
                      <Check className="w-3 h-3 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white font-medium">{item.title}</div>
                      <div className="text-gray-400 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl font-bold text-white text-center">Common Questions</h2>
          </motion.div>
          <div className="space-y-4">
            {content.faq.map((item: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                <h4 className="text-white font-medium mb-2">{item.q}</h4>
                <p className="text-gray-400 text-sm">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">Let&apos;s discuss your project and see how we can help.</p>
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 rounded-lg font-medium text-white inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400">
                <Mail className="w-5 h-5" />
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
