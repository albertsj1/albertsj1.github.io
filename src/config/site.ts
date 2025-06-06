/**
 * Site configuration
 * Centralized location for all personal information and contact details
 */

export const siteConfig = {
  // Personal Information
  name: 'John Alberts',
  title: 'DevOps Engineer & Cloud Architect',
  description: 'John Alberts - DevOps Engineer and Cloud Architect specializing in AWS, Kubernetes, CI/CD, and infrastructure automation. Certified solutions architect with expertise in scalable cloud solutions.',

  
  // Social Media & Professional Links
  social: {
    linkedin: 'https://linkedin.com/in/johnmalberts',
    github: 'https://github.com/albertsj1',
    email: 'mailto:john@alberts.me',
  },
  
  // Site URLs (for deployment)
  url: 'https://alberts.me', // Update this when you deploy
  
  // Professional Details
  location: 'Remote', // Or your preferred location
  yearsOfExperience: '20+',
  
  // Skills & Technologies (can be used for SEO keywords)
  primarySkills: [
    'AWS',
    'DevOps',
    'Kubernetes',
    'Docker',
    'Terraform',
    'CI/CD',
    'Infrastructure as Code',
    'Monitoring',
    'Automation'
  ]
} as const;

// Helper function to get mailto link
export const getEmailLink = () => `mailto:${siteConfig.social.email}`;

// Helper function to get full name with title
export const getFullTitle = () => `${siteConfig.name}: ${siteConfig.title}`;
