import type { SiteConfig, PersonSchema } from '../types';

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
export const personalInfo = {
  name: 'Wahiduz Zaman Alam',
  jobTitle: 'Software Engineer',
  email: 'wahiduzalam@gmail.com',
  location: 'Assam, India',
  avatar: '../wahid-alam.webp',
};

// Structured data for SEO
export const personSchema: PersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Wahiduz Zaman Alam",
  jobTitle: "Software Engineer",
  url: "https://wahidalm.github.io",
  email: "mailto:wahiduzalam@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Assam",
    addressCountry: "India"
  },
  sameAs: [
    "https://github.com/wahidalm",
    "https://www.linkedin.com/in/wahiduz-alam-519995313/",
    "https://x.com/MrNobodyPlays1"
  ],
  knowsAbout: [
    "Frontend Development",
    "React",
    "Next.js",
    "Astro",
    "Flutter",
    "Django",
    "JavaScript",
    "Python",
    "Web Development"
  ]
};

// Form configuration
export const formConfig = {
  formspreeEndpoint: 'https://formspree.io/f/xnnldoqp',
  maxMessageLength: 500,
  minMessageLength: 10,
  minNameLength: 2,
};

// SEO keywords
export const seoKeywords = [
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
  'Full Stack Developer'
];

// Site metadata
export const SITE_TITLE = siteConfig.title;
export const SITE_DESCRIPTION = siteConfig.description;
