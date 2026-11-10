// Portfolio data types

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
  duration?: string;
  desc: string;
  logo: string;
  skills?: string[];
  location?: string;
}

export interface Skill {
  name: string;
  icon?: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' | string;
  category?: string;
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export interface BlogPost {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  heroImage?: string;
  tags?: string[];
  draft?: boolean;
}

export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  email: string;
  location: string;
  siteUrl: string;
  twitterHandle: string;
}

export interface PersonalInfo {
  name: string;
  jobTitle: string;
  email: string;
  location: string;
  avatar: string;
}

export interface PersonSchema {
  '@context': string;
  '@type': string;
  name: string;
  alternateName?: string;
  jobTitle: string;
  url: string;
  email: string;
  address?: {
    '@type': string;
    addressLocality: string;
    addressCountry: string;
  };
  sameAs: string[];
  knowsAbout: string[];
}

export interface FormConfig {
  formspreeEndpoint: string;
  maxMessageLength: number;
  minMessageLength: number;
  minNameLength: number;
}

export interface SEOKeywords {
  keywords: string[];
}

// Utility types
export type PartialBy<T, K extends keyof T = keyof T> = Partial<T> & Pick<T, K>;
export type RequiredBy<T, K extends keyof T = keyof T> = T & Required<Pick<T, K>>;
