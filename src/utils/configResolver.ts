// Configuration resolver utilities
import { siteConfig, personalInfo, formConfig, personSchema, seoKeywords, socialLinks, externalEndpoints } from '../site.config';

export class ConfigResolver {
  // Get configuration by category
  static getSiteConfig() {
    return siteConfig;
  }

  static getPersonalInfo() {
    return personalInfo;
  }

  static getFormConfig() {
    return formConfig;
  }

  static getPersonSchema() {
    return personSchema;
  }

  static getSEOKeywords() {
    return seoKeywords;
  }

  static getSocialLinks() {
    return socialLinks;
  }

  static getExternalEndpoints() {
    return externalEndpoints;
  }

  // Get formatted email with mailto
  static getEmailLink() {
    return `mailto:${siteConfig.email}`;
  }

  // Get formatted location with emoji (placeholder)
  static getLocationWithEmoji() {
    return `${siteConfig.location} 📍`;
  }

  // Get formatted social media URLs
  static getSocialUrl(platform: keyof typeof socialLinks) {
    return socialLinks[platform];
  }

  // Validate configuration
  static validateConfig() {
    const errors: string[] = [];

    if (!siteConfig.title) errors.push('Site title is required');
    if (!siteConfig.description) errors.push('Site description is required');
    if (!siteConfig.email || !siteConfig.email.includes('@')) {
      errors.push('Valid site email is required');
    }
    if (!siteConfig.siteUrl) errors.push('Site URL is required');
    if (!siteConfig.twitterHandle) errors.push('Twitter handle is required');

    if (!personSchema.name) errors.push('Person name is required');
    if (!personSchema.email) errors.push('Person email is required');

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  // Get display-ready configuration for components
  static getDisplayConfig() {
    return {
      siteName: siteConfig.title,
      siteDescription: siteConfig.description,
      authorName: siteConfig.author,
      emailAddress: siteConfig.email,
      location: siteConfig.location,
      twitterHandle: siteConfig.twitterHandle,
      avatar: personalInfo.avatar,
      socialLinks: socialLinks,
      keywords: seoKeywords.keywords,
    };
  }

  // Get form configuration with defaults
  static getFormValidationConfig() {
    return {
      maxMessageLength: formConfig.maxMessageLength,
      minMessageLength: formConfig.minMessageLength,
      minNameLength: formConfig.minNameLength,
      endpoint: formConfig.formspreeEndpoint,
    };
  }

  // Get structured data for JSON-LD
  static getStructuredData() {
    return personSchema;
  }

  // Check if configuration has been properly initialized
  static isInitialized() {
    return !!(
      siteConfig.title &&
      siteConfig.description &&
      siteConfig.email &&
      siteConfig.siteUrl &&
      personalInfo.name &&
      formConfig.formspreeEndpoint
    );
  }
}