// Site Template System
// This manages templates for different types of client websites

export interface SiteTemplate {
  id: string;
  name: string;
  description: string;
  industry: string;
  category: string;
  features: string[];
  pages: string[];
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
  defaultContent: {
    heroTitle: string;
    heroSubtitle: string;
    aboutText: string;
    services: Array<{
      name: string;
      description: string;
      image: string;
    }>;
    contactInfo: {
      phone: string;
      email: string;
      address: string;
    };
    seoKeywords: string[];
    metaDescription: string;
  };
  requiredFields: string[];
  optionalFields: string[];
}

export const siteTemplates: SiteTemplate[] = [
  {
    id: 'power-washing',
    name: 'Power Washing Template',
    description: 'Professional power washing business template with lead generation',
    industry: 'Home Services',
    category: 'Cleaning Services',
    features: [
      'Contact Forms',
      'Service Pages',
      'Location Pages',
      'SEO Optimized',
      'Lead Tracking',
      'Google Reviews',
      'Mobile Responsive',
      'Fast Loading'
    ],
    pages: ['Home', 'Services', 'Service Areas', 'About', 'Contact', 'FAQ'],
    colorScheme: {
      primary: '#1e40af',
      secondary: '#dc2626',
      accent: '#FFA500',
      background: '#ffffff'
    },
    defaultContent: {
      heroTitle: 'Professional Power Washing Services',
      heroSubtitle: 'Transform your property with our expert cleaning services. Licensed, insured, and locally owned.',
      aboutText: 'We provide professional power washing services with years of experience. Our team uses professional-grade equipment and eco-friendly cleaning solutions to deliver exceptional results.',
      services: [
        {
          name: 'House Washing',
          description: 'Complete exterior house cleaning to remove dirt, grime, and mildew.',
          image: '/images/pressure washing house.jpg'
        },
        {
          name: 'Deck & Fence Cleaning',
          description: 'Restore your deck and fence to like-new condition with our gentle cleaning process.',
          image: '/images/powerwashing deck.jpg'
        },
        {
          name: 'Concrete Cleaning',
          description: 'Clean driveways, sidewalks, and patios to remove stains and restore appearance.',
          image: '/images/Pressure washing concrete 2 - commercial.jpg'
        },
        {
          name: 'Roof Cleaning',
          description: 'Safe and effective roof cleaning to remove moss, algae, and debris.',
          image: '/images/pressure washing roof - residential.jpg'
        },
        {
          name: 'Window Cleaning',
          description: 'Crystal clear windows for residential and commercial properties.',
          image: '/images/pressure washing window.jpg'
        },
        {
          name: 'Gutter Cleaning',
          description: 'Thorough gutter cleaning and maintenance to protect your property.',
          image: '/images/pressure washing gutter.jpg'
        }
      ],
      contactInfo: {
        phone: '(555) 123-4567',
        email: 'info@example.com',
        address: 'Your City, State'
      },
      seoKeywords: ['power washing', 'pressure washing', 'house washing', 'deck cleaning', 'concrete cleaning'],
      metaDescription: 'Professional power washing services. House washing, deck cleaning, concrete cleaning, and more. Licensed, insured, and locally owned.'
    },
    requiredFields: ['businessName', 'phone', 'email', 'city', 'state'],
    optionalFields: ['address', 'website', 'socialMedia', 'specialties']
  },
  {
    id: 'window-cleaning',
    name: 'Window Cleaning Template',
    description: 'Professional window cleaning business template',
    industry: 'Home Services',
    category: 'Cleaning Services',
    features: [
      'Contact Forms',
      'Service Pages',
      'Gallery',
      'SEO Optimized',
      'Lead Tracking',
      'Before/After Photos',
      'Mobile Responsive'
    ],
    pages: ['Home', 'Services', 'Gallery', 'About', 'Contact'],
    colorScheme: {
      primary: '#059669',
      secondary: '#dc2626',
      accent: '#3b82f6',
      background: '#ffffff'
    },
    defaultContent: {
      heroTitle: 'Crystal Clear Window Cleaning',
      heroSubtitle: 'Professional window cleaning for residential and commercial properties',
      aboutText: 'We specialize in providing crystal clear windows for homes and businesses. Our experienced team uses professional equipment and techniques.',
      services: [
        {
          name: 'Residential Cleaning',
          description: 'Complete window cleaning for homes and apartments.',
          image: '/images/window-cleaning-residential.jpg'
        },
        {
          name: 'Commercial Cleaning',
          description: 'Professional window cleaning for offices and businesses.',
          image: '/images/window-cleaning-commercial.jpg'
        },
        {
          name: 'Gutter Cleaning',
          description: 'Thorough gutter cleaning and maintenance.',
          image: '/images/gutter-cleaning.jpg'
        }
      ],
      contactInfo: {
        phone: '(555) 123-4567',
        email: 'info@example.com',
        address: 'Your City, State'
      },
      seoKeywords: ['window cleaning', 'residential cleaning', 'commercial cleaning', 'gutter cleaning'],
      metaDescription: 'Professional window cleaning services for residential and commercial properties. Crystal clear results guaranteed.'
    },
    requiredFields: ['businessName', 'phone', 'email', 'city', 'state'],
    optionalFields: ['address', 'website', 'socialMedia', 'specialties']
  },
  {
    id: 'landscaping',
    name: 'Landscaping Template',
    description: 'Professional landscaping business template',
    industry: 'Home Services',
    category: 'Landscaping',
    features: [
      'Contact Forms',
      'Service Pages',
      'Portfolio Gallery',
      'SEO Optimized',
      'Lead Tracking',
      'Project Showcase',
      'Mobile Responsive'
    ],
    pages: ['Home', 'Services', 'Portfolio', 'About', 'Contact', 'Testimonials'],
    colorScheme: {
      primary: '#059669',
      secondary: '#dc2626',
      accent: '#f59e0b',
      background: '#ffffff'
    },
    defaultContent: {
      heroTitle: 'Professional Landscaping Services',
      heroSubtitle: 'Transform your outdoor space with our expert landscaping and maintenance services',
      aboutText: 'We create beautiful outdoor spaces that enhance your property value and enjoyment. Our team combines creativity with expertise.',
      services: [
        {
          name: 'Landscape Design',
          description: 'Custom landscape design to transform your outdoor space.',
          image: '/images/landscape-design.jpg'
        },
        {
          name: 'Lawn Maintenance',
          description: 'Regular lawn care and maintenance services.',
          image: '/images/lawn-maintenance.jpg'
        },
        {
          name: 'Tree Services',
          description: 'Tree trimming, removal, and health care services.',
          image: '/images/tree-services.jpg'
        }
      ],
      contactInfo: {
        phone: '(555) 123-4567',
        email: 'info@example.com',
        address: 'Your City, State'
      },
      seoKeywords: ['landscaping', 'lawn care', 'tree services', 'garden design', 'outdoor maintenance'],
      metaDescription: 'Professional landscaping services including design, maintenance, and tree care. Transform your outdoor space today.'
    },
    requiredFields: ['businessName', 'phone', 'email', 'city', 'state'],
    optionalFields: ['address', 'website', 'socialMedia', 'specialties']
  }
];

export interface ClientSiteConfig {
  id: string;
  templateId: string;
  businessName: string;
  domain: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  address?: string;
  website?: string;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    google?: string;
  };
  specialties?: string[];
  customColors?: {
    primary?: string;
    secondary?: string;
    accent?: string;
  };
  logo?: string;
  heroImage?: string;
  aboutText?: string;
  services?: Array<{
    name: string;
    description: string;
    image: string;
  }>;
  seoKeywords?: string[];
  metaDescription?: string;
}

export function generateSiteFromTemplate(
  template: SiteTemplate,
  clientConfig: ClientSiteConfig
): any {
  // This function generates the complete site configuration
  // It merges the template with client-specific customizations
  
  const siteConfig = {
    ...template,
    customizations: {
      businessName: clientConfig.businessName,
      domain: clientConfig.domain,
      contactInfo: {
        phone: clientConfig.phone,
        email: clientConfig.email,
        address: clientConfig.address || `${clientConfig.city}, ${clientConfig.state}`
      },
      colors: {
        ...template.colorScheme,
        ...clientConfig.customColors
      },
      content: {
        ...template.defaultContent,
        heroTitle: template.defaultContent.heroTitle.replace('Professional', clientConfig.businessName),
        aboutText: clientConfig.aboutText || template.defaultContent.aboutText,
        services: clientConfig.services || template.defaultContent.services,
        seoKeywords: clientConfig.seoKeywords || template.defaultContent.seoKeywords,
        metaDescription: clientConfig.metaDescription || template.defaultContent.metaDescription
      },
      branding: {
        logo: clientConfig.logo,
        heroImage: clientConfig.heroImage
      },
      socialMedia: clientConfig.socialMedia || {}
    }
  };

  return siteConfig;
}

export function getTemplateById(templateId: string): SiteTemplate | null {
  return siteTemplates.find(template => template.id === templateId) || null;
}

export function getTemplatesByIndustry(industry: string): SiteTemplate[] {
  return siteTemplates.filter(template => template.industry === industry);
}

export function getTemplatesByCategory(category: string): SiteTemplate[] {
  return siteTemplates.filter(template => template.category === category);
}

// Site deployment configuration
export interface DeploymentConfig {
  siteId: string;
  templateId: string;
  clientConfig: ClientSiteConfig;
  supabaseProject: {
    url: string;
    anonKey: string;
    serviceKey: string;
  };
  vercelProject: {
    projectId: string;
    domain: string;
  };
  customDomain?: string;
  sslEnabled: boolean;
  analyticsEnabled: boolean;
  seoEnabled: boolean;
}

export function generateDeploymentConfig(
  templateId: string,
  clientConfig: ClientSiteConfig,
  supabaseCredentials: { url: string; anonKey: string; serviceKey: string }
): DeploymentConfig {
  return {
    siteId: clientConfig.id,
    templateId,
    clientConfig,
    supabaseProject: supabaseCredentials,
    vercelProject: {
      projectId: `client-${clientConfig.id}`,
      domain: `${clientConfig.id}.vercel.app`
    },
    sslEnabled: true,
    analyticsEnabled: true,
    seoEnabled: true
  };
}

