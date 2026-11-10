// TypeScript interfaces for portfolio data structures

export interface Project {
  title: string;
  desc: string;
  img: string;
  alt: string;
  tech: string[];
  live?: string;
  code: string;
}

export interface Job {
  company: string;
  role: string;
  team: string;
  start: string;
  end: string;
  desc: string;
  logo: string;
  duration?: string;
  location?: string;
  skills?: string[];
}

export interface Skill {
  name: string;
  icon: string;
  level?: string;
  category?: string;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  email: string;
  location: string;
  siteUrl: string;
  ogImage?: string;
  twitterHandle?: string;
}

export interface PersonSchema {
  "@context": string;
  "@type": string;
  name: string;
  jobTitle: string;
  url: string;
  email: string;
  address: {
    "@type": string;
    addressLocality: string;
    addressCountry: string;
  };
  sameAs: string[];
  knowsAbout: string[];
}
