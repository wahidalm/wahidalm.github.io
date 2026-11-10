// Site configuration - externalized from Astro config and components
import type { SiteConfig, PersonalInfo, FormConfig, PersonSchema, SEOKeywords } from './types';

// Main site configuration
export const siteConfig: SiteConfig = {
  title: 'Wahid Alam',
  description: 'Portfolio of Wahid Alam. A passionate web developer and open-source enthusiast.',
  author: 'Wahiduz Zaman Alam',
  email: 'wahiduzalam@gmail.com',
  location: 'Assam, India',
  siteUrl: 'https://wahidalm.github.io',
  twitterHandle: '@MrNobodyPlays1',
};

// Personal information
export const personalInfo: PersonalInfo = {
  name: 'Wahiduz Zaman Alam',
  jobTitle: 'Software Engineer',
  email: 'wahiduzalam@gmail.com',
  location: 'Assam, India',
  avatar: '/wahid-alam.webp',
};

// Structured data for SEO
export const personSchema: PersonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Wahiduz Zaman Alam',
  jobTitle: 'Software Engineer & Full Stack Developer',
  url: 'https://wahidalm.github.io',
  email: 'mailto:wahiduzalam@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Assam',
    addressCountry: 'India',
  },
  sameAs: [
    'https://github.com/wahidalm',
    'https://www.linkedin.com/in/wahiduz-alam-519995313/',
    'https://x.com/MrNobodyPlays1',
  ],
  knowsAbout: [
    'Software Engineering',
    'Full Stack Development',
    'Frontend Development',
    'Astro',
    'React',
    'Next.js',
    'Flutter',
    'Django',
    'AI Integration',
    'TypeScript',
    'JavaScript',
    'Python',
    'Web Development',
  ],
};

// Form configuration
export const formConfig: FormConfig = {
  formspreeEndpoint: 'https://formspree.io/f/xnnldoqp',
  maxMessageLength: 500,
  minMessageLength: 10,
  minNameLength: 2,
};

// SEO keywords
export const seoKeywords: SEOKeywords = {
  keywords: [
    'Wahid Alam',
    'Software Engineer',
    'Frontend Developer',
    'React',
    'Next.js',
    'Flutter',
    'Django',
    'Web Developer',
    'Portfolio',
    'Assam Developer',
    'Full Stack Developer',
  ],
};

// Site metadata (for backwards compatibility)
export const SITE_TITLE = siteConfig.title;
export const SITE_DESCRIPTION = siteConfig.description;

// Social links for easy access
export const socialLinks = {
  github: 'https://github.com/wahidalm',
  linkedin: 'https://www.linkedin.com/in/wahiduz-alam-519995313/',
  twitter: 'https://x.com/MrNobodyPlays1',
};

// External services endpoints
export const externalEndpoints = {
  formspree: 'https://formspree.io',
  github: 'https://api.github.com',
  linkedin: 'https://www.linkedin.com',
};