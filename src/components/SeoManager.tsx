import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { servicesData } from '../lib/servicesData';
import { portfolioProjectBySlug } from '../lib/portfolioProjects';

const BASE_URL = 'https://bright-byte.co';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

type SeoConfig = {
  title: string;
  description: string;
  keywords?: string;
  ogType?: 'website' | 'article';
  robots?: string;
  schema?: Record<string, unknown>;
};

const staticSeo: Record<string, SeoConfig> = {
  '/': {
    title: 'Bright-Byte | AI Consulting, Software Development & Automation',
    description:
      'Bright-Byte helps businesses scale with AI consulting, software development, automation, machine learning, and growth-focused digital solutions.',
    keywords:
      'AI consulting, software development, automation, machine learning, web development, mobile development, SEO, data marketing, digital transformation',
    ogType: 'website',
  },
  '/services': {
    title: 'Technology Services | AI, Software, Automation & Growth | Bright-Byte',
    description:
      'Explore Bright-Byte services: AI consulting, software engineering, automation, machine learning, web and mobile development, SEO, and data marketing.',
    keywords:
      'technology services, AI services, automation services, software engineering, machine learning consulting, SEO services',
    ogType: 'website',
  },
  '/portfolio': {
    title: 'Portfolio | Bright-Byte Case Studies & Client Work',
    description:
      'Review Bright-Byte portfolio projects across AI products, software platforms, automation systems, marketing growth, and digital product launches.',
    keywords: 'portfolio, case studies, AI projects, software projects, automation projects, client work',
    ogType: 'website',
  },
  '/about': {
    title: 'About Bright-Byte | AI & Software Partner',
    description:
      'Learn about Bright-Byte, our mission, global delivery approach, and how we build practical AI, software, and automation systems for growing teams.',
    keywords: 'about Bright-Byte, AI agency, software partner, automation company, Utrecht technology company',
    ogType: 'website',
  },
  '/contact': {
    title: 'Contact Bright-Byte | Start Your Project',
    description:
      'Contact Bright-Byte to discuss AI consulting, custom software, automation, machine learning, and digital growth projects.',
    keywords: 'contact Bright-Byte, AI consultation, software project inquiry, automation partner',
    ogType: 'website',
  },
  '/blog': {
    title: 'Technology Blog | Bright-Byte Insights',
    description:
      'Read Bright-Byte insights on AI, software engineering, automation, machine learning, digital strategy, and modern business technology.',
    keywords: 'technology blog, AI insights, software engineering articles, automation trends',
    ogType: 'website',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Bright-Byte',
    description: 'Read the Bright-Byte privacy policy and data handling practices.',
    ogType: 'website',
  },
  '/terms-of-use': {
    title: 'Terms of Use | Bright-Byte',
    description: 'Read the Bright-Byte terms of use and service conditions.',
    ogType: 'website',
  },
  '/portfolio/festi-festival-dating-app/terms-of-use': {
    title: 'Festi Terms of Use | Bright-Byte',
    description: 'Terms of use for the Festi Festival Dating App project.',
    ogType: 'website',
  },
  '/portfolio/festi-festival-dating-app/privacy-policy': {
    title: 'Festi Privacy Policy | Bright-Byte',
    description: 'Privacy policy for the Festi Festival Dating App project.',
    ogType: 'website',
  },
};

const blogSeo: Record<string, { title: string; description: string; datePublished: string }> = {
  '1': {
    title: 'The Future of AI in Business',
    description:
      'Explore how AI is transforming modern business operations, decision-making, customer experience, and productivity.',
    datePublished: '2024-03-15',
  },
  '2': {
    title: 'Quantum Computing: Breaking New Ground',
    description:
      'A deep dive into quantum computing developments, real-world use cases, and future impact across industries.',
    datePublished: '2024-03-10',
  },
  '3': {
    title: 'Digital Transformation Strategies',
    description:
      'Key digital transformation strategies for building resilient, data-driven, and scalable business operations.',
    datePublished: '2024-03-05',
  },
  '4': {
    title: 'Machine Learning in Healthcare',
    description:
      'How machine learning is reshaping healthcare operations, diagnostics, and patient outcomes.',
    datePublished: '2024-02-28',
  },
};

const categoryLabel: Record<string, string> = {
  'software-ai': 'Software & AI',
  marketing: 'Marketing',
};

const toAbsoluteUrl = (pathname: string) => {
  const normalized = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  return normalized === '/' ? `${BASE_URL}/` : `${BASE_URL}${normalized}`;
};

const humanizeSlug = (slug: string) =>
  slug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

const upsertMeta = (attribute: 'name' | 'property', key: string, value: string) => {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', value);
};

const upsertCanonical = (href: string) => {
  let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', href);
};

const upsertJsonLd = (id: string, data: Record<string, unknown>) => {
  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
};

const resolveSeo = (pathname: string): SeoConfig & { canonical: string } => {
  const cleanPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  const canonical = toAbsoluteUrl(cleanPath);

  if (staticSeo[cleanPath]) {
    return { ...staticSeo[cleanPath], canonical };
  }

  if (cleanPath.startsWith('/services/')) {
    const serviceId = cleanPath.split('/')[2] || '';
    const service = servicesData.find((item) => item.id === serviceId);
    if (!service) {
      return {
        title: 'Service Not Found | Bright-Byte',
        description: 'The requested service page could not be found.',
        ogType: 'website',
        robots: 'noindex, follow',
        canonical,
      };
    }
    const serviceName = service?.title || humanizeSlug(serviceId) || 'Service';
    const description =
      service?.description ||
      `${serviceName} services by Bright-Byte with implementation-focused delivery and measurable outcomes.`;

    return {
      title: `${serviceName} Services | Bright-Byte`,
      description,
      keywords: `${serviceName.toLowerCase()}, Bright-Byte ${serviceName.toLowerCase()}, technology consulting, digital services`,
      ogType: 'website',
      canonical,
      schema: {
        '@type': 'Service',
        name: serviceName,
        description,
        serviceType: serviceName,
        provider: {
          '@type': 'Organization',
          name: 'Bright-Byte',
          url: BASE_URL,
        },
        url: canonical,
      },
    };
  }

  if (cleanPath.startsWith('/portfolio/category/')) {
    const category = cleanPath.split('/')[3] || '';
    const label = categoryLabel[category] || humanizeSlug(category);
    const description = `${label} case studies and project highlights from Bright-Byte across delivery, execution quality, and business impact.`;
    return {
      title: `${label} Portfolio Projects | Bright-Byte`,
      description,
      keywords: `${label.toLowerCase()} portfolio, case studies, Bright-Byte projects`,
      ogType: 'website',
      canonical,
    };
  }

  if (cleanPath.startsWith('/portfolio/')) {
    const segments = cleanPath.split('/').filter(Boolean);
    if (segments.length === 2) {
      const slug = segments[1];
      const project = portfolioProjectBySlug[slug];
      if (!project) {
        return {
          title: 'Project Not Found | Bright-Byte',
          description: 'The requested portfolio project could not be found.',
          ogType: 'website',
          robots: 'noindex, follow',
          canonical,
        };
      }
      const projectName = project?.title || humanizeSlug(slug);
      const description =
        project?.description ||
        `${projectName} portfolio project delivered by Bright-Byte across product, engineering, and growth execution.`;
      return {
        title: `${projectName} Case Study | Bright-Byte Portfolio`,
        description,
        keywords: `${projectName.toLowerCase()}, portfolio case study, Bright-Byte project`,
        ogType: 'article',
        canonical,
        schema: {
          '@type': 'CreativeWork',
          name: projectName,
          description,
          url: canonical,
          author: {
            '@type': 'Organization',
            name: 'Bright-Byte',
          },
        },
      };
    }
  }

  if (cleanPath.startsWith('/blog/')) {
    const id = cleanPath.split('/')[2] || '';
    const post = blogSeo[id];
    if (post) {
      return {
        title: `${post.title} | Bright-Byte Blog`,
        description: post.description,
        keywords: `${post.title.toLowerCase()}, Bright-Byte blog, technology article`,
        ogType: 'article',
        canonical,
        schema: {
          '@type': 'Article',
          headline: post.title,
          description: post.description,
          datePublished: post.datePublished,
          dateModified: post.datePublished,
          mainEntityOfPage: canonical,
          publisher: {
            '@type': 'Organization',
            name: 'Bright-Byte',
            logo: {
              '@type': 'ImageObject',
              url: `${BASE_URL}/favicon/android-chrome-512x512.png`,
            },
          },
        },
      };
    }
    return {
      title: 'Blog Post Not Found | Bright-Byte',
      description: 'The requested blog post could not be found.',
      ogType: 'website',
      robots: 'noindex, follow',
      canonical,
    };
  }

  return {
    title: 'Page Not Found | Bright-Byte',
    description: 'The requested page could not be found.',
    ogType: 'website',
    robots: 'noindex, follow',
    canonical,
  };
};

const SeoManager = () => {
  const location = useLocation();

  useEffect(() => {
    const seo = resolveSeo(location.pathname);

    document.title = seo.title;

    upsertMeta('name', 'title', seo.title);
    upsertMeta('name', 'description', seo.description);
    upsertMeta('name', 'keywords', seo.keywords || '');
    upsertMeta('name', 'robots', seo.robots || 'index, follow');
    upsertMeta('name', 'author', 'Bright-Byte');
    upsertMeta('name', 'theme-color', '#0f172a');

    upsertMeta('property', 'og:type', seo.ogType || 'website');
    upsertMeta('property', 'og:url', seo.canonical);
    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:image', DEFAULT_IMAGE);
    upsertMeta('property', 'og:site_name', 'Bright-Byte');
    upsertMeta('property', 'og:locale', 'en_US');

    upsertMeta('property', 'twitter:card', 'summary_large_image');
    upsertMeta('property', 'twitter:url', seo.canonical);
    upsertMeta('property', 'twitter:title', seo.title);
    upsertMeta('property', 'twitter:description', seo.description);
    upsertMeta('property', 'twitter:image', DEFAULT_IMAGE);

    upsertCanonical(seo.canonical);

    const baseGraph: Record<string, unknown>[] = [
      {
        '@type': 'Organization',
        name: 'Bright-Byte',
        url: BASE_URL,
        logo: `${BASE_URL}/favicon/android-chrome-512x512.png`,
        sameAs: [
          'https://www.linkedin.com/company/bright-byte-company/',
          'https://www.instagram.com/bright.byte.nl',
        ],
      },
      {
        '@type': 'WebSite',
        name: 'Bright-Byte',
        url: BASE_URL,
        inLanguage: 'en',
      },
    ];

    if (seo.schema) {
      baseGraph.push(seo.schema);
    }

    upsertJsonLd('dynamic-seo-schema', {
      '@context': 'https://schema.org',
      '@graph': baseGraph,
    });
  }, [location.pathname]);

  return null;
};

export default SeoManager;
