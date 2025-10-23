// Multi-Site Management System
// This handles managing multiple client websites from a single admin dashboard

import { masterSupabase } from './supabase';

export interface ClientSite {
  id: string;
  name: string;
  domain: string;
  clientName: string;
  clientEmail: string;
  status: 'active' | 'inactive' | 'maintenance';
  createdAt: string;
  lastUpdated: string;
  seoScore: number;
  monthlyLeads: number;
  totalLeads: number;
  uptime: number;
  pageSpeed: number;
  keywords: number;
  backlinks: number;
  lastReportGenerated: string;
  nextReportDue: string;
  customDomain?: string;
  logo?: string;
  primaryColor?: string;
  secondaryColor?: string;
  industry: string;
  location: string;
  services: string[];
}

export interface AdminDashboard {
  totalSites: number;
  activeSites: number;
  totalLeads: number;
  monthlyLeads: number;
  avgSeoScore: number;
  sitesNeedingAttention: ClientSite[];
  recentActivity: Array<{
    id: string;
    siteId: string;
    siteName: string;
    action: string;
    timestamp: string;
    details: string;
  }>;
  topPerformingSites: ClientSite[];
  sitesWithIssues: ClientSite[];
}

// Mock data - replace with real database queries
export const mockSites: ClientSite[] = [
  {
    id: 'richmond-power-washing',
    name: 'Richmond Power Washing Pro',
    domain: 'richmondpowerwashpro.com',
    clientName: 'John Smith',
    clientEmail: 'john@richmondpowerwashpro.com',
    status: 'active',
    createdAt: '2024-01-15T00:00:00Z',
    lastUpdated: '2024-01-20T10:30:00Z',
    seoScore: 87,
    monthlyLeads: 12,
    totalLeads: 47,
    uptime: 99.9,
    pageSpeed: 92,
    keywords: 45,
    backlinks: 156,
    lastReportGenerated: '2024-01-20T00:00:00Z',
    nextReportDue: '2024-02-20T00:00:00Z',
    industry: 'Home Services',
    location: 'Richmond, VA',
    services: ['House Washing', 'Deck Cleaning', 'Concrete Cleaning']
  },
  {
    id: 'norfolk-pressure-washing',
    name: 'Norfolk Pressure Washing',
    domain: 'norfolkpressurewash.com',
    clientName: 'Sarah Johnson',
    clientEmail: 'sarah@norfolkpressurewash.com',
    status: 'active',
    createdAt: '2024-01-10T00:00:00Z',
    lastUpdated: '2024-01-19T14:20:00Z',
    seoScore: 82,
    monthlyLeads: 8,
    totalLeads: 32,
    uptime: 99.8,
    pageSpeed: 88,
    keywords: 38,
    backlinks: 89,
    lastReportGenerated: '2024-01-19T00:00:00Z',
    nextReportDue: '2024-02-19T00:00:00Z',
    industry: 'Home Services',
    location: 'Norfolk, VA',
    services: ['Pressure Washing', 'Roof Cleaning', 'Gutter Cleaning']
  },
  {
    id: 'virginia-beach-cleaning',
    name: 'Virginia Beach Cleaning Services',
    domain: 'vabeachcleaning.com',
    clientName: 'Mike Chen',
    clientEmail: 'mike@vabeachcleaning.com',
    status: 'maintenance',
    createdAt: '2024-01-05T00:00:00Z',
    lastUpdated: '2024-01-18T09:15:00Z',
    seoScore: 75,
    monthlyLeads: 5,
    totalLeads: 18,
    uptime: 98.5,
    pageSpeed: 85,
    keywords: 28,
    backlinks: 67,
    lastReportGenerated: '2024-01-18T00:00:00Z',
    nextReportDue: '2024-02-18T00:00:00Z',
    industry: 'Home Services',
    location: 'Virginia Beach, VA',
    services: ['Window Cleaning', 'Pressure Washing', 'Deck Cleaning']
  }
];

export async function getAllSites(): Promise<ClientSite[]> {
  if (!masterSupabase) {
    console.warn('Master Supabase not configured. Returning mock data.');
    return mockSites;
  }

  try {
    const { data, error } = await masterSupabase
      .from('sites')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching sites:', error);
      return mockSites;
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching sites:', error);
    return mockSites;
  }
}

export async function getSiteById(siteId: string): Promise<ClientSite | null> {
  const sites = await getAllSites();
  return sites.find(site => site.id === siteId) || null;
}

export async function getAdminDashboard(): Promise<AdminDashboard> {
  const sites = await getAllSites();
  const activeSites = sites.filter(site => site.status === 'active');
  
  const totalLeads = sites.reduce((sum, site) => sum + site.totalLeads, 0);
  const monthlyLeads = sites.reduce((sum, site) => sum + site.monthlyLeads, 0);
  const avgSeoScore = sites.reduce((sum, site) => sum + site.seoScore, 0) / sites.length;
  
  const sitesNeedingAttention = sites.filter(site => 
    site.seoScore < 70 || 
    site.pageSpeed < 80 || 
    site.uptime < 99 ||
    site.monthlyLeads < 5
  );
  
  const topPerformingSites = sites
    .sort((a, b) => b.seoScore - a.seoScore)
    .slice(0, 5);
  
  const sitesWithIssues = sites.filter(site => 
    site.status === 'maintenance' || 
    site.uptime < 99 ||
    site.seoScore < 60
  );
  
  const recentActivity = [
    {
      id: '1',
      siteId: 'richmond-power-washing',
      siteName: 'Richmond Power Washing Pro',
      action: 'SEO Report Generated',
      timestamp: '2024-01-20T10:30:00Z',
      details: 'Monthly SEO report generated with 87/100 score'
    },
    {
      id: '2',
      siteId: 'norfolk-pressure-washing',
      siteName: 'Norfolk Pressure Washing',
      action: 'Lead Received',
      timestamp: '2024-01-20T09:15:00Z',
      details: 'New lead for pressure washing services'
    },
    {
      id: '3',
      siteId: 'virginia-beach-cleaning',
      siteName: 'Virginia Beach Cleaning Services',
      action: 'Maintenance Mode',
      timestamp: '2024-01-19T14:20:00Z',
      details: 'Site put into maintenance mode for updates'
    }
  ];
  
  return {
    totalSites: sites.length,
    activeSites: activeSites.length,
    totalLeads,
    monthlyLeads,
    avgSeoScore: Math.round(avgSeoScore),
    sitesNeedingAttention,
    recentActivity,
    topPerformingSites,
    sitesWithIssues
  };
}

export async function updateSiteStatus(siteId: string, status: ClientSite['status']): Promise<boolean> {
  // This would update the database
  console.log(`Updating site ${siteId} status to ${status}`);
  return true;
}

export async function generateSiteReport(siteId: string): Promise<boolean> {
  // This would trigger report generation
  console.log(`Generating report for site ${siteId}`);
  return true;
}

export async function getSiteAnalytics(siteId: string, days: number = 30): Promise<any> {
  // This would fetch analytics data for a specific site
  console.log(`Getting analytics for site ${siteId} for ${days} days`);
  return {
    siteId,
    days,
    mock: true
  };
}

// Site template system for easy deployment
export interface SiteTemplate {
  id: string;
  name: string;
  description: string;
  industry: string;
  features: string[];
  pages: string[];
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  defaultContent: {
    heroTitle: string;
    heroSubtitle: string;
    services: string[];
    aboutText: string;
  };
}

export const siteTemplates: SiteTemplate[] = [
  {
    id: 'power-washing',
    name: 'Power Washing Template',
    description: 'Professional power washing business template',
    industry: 'Home Services',
    features: ['Contact Forms', 'Service Pages', 'Location Pages', 'SEO Optimized'],
    pages: ['Home', 'Services', 'About', 'Contact', 'Service Areas'],
    colorScheme: {
      primary: '#1e40af',
      secondary: '#dc2626',
      accent: '#FFA500'
    },
    defaultContent: {
      heroTitle: 'Professional Power Washing Services',
      heroSubtitle: 'Transform your property with our expert cleaning services',
      services: ['House Washing', 'Deck Cleaning', 'Concrete Cleaning', 'Roof Cleaning'],
      aboutText: 'We provide professional power washing services with years of experience.'
    }
  },
  {
    id: 'window-cleaning',
    name: 'Window Cleaning Template',
    description: 'Professional window cleaning business template',
    industry: 'Home Services',
    features: ['Contact Forms', 'Service Pages', 'Gallery', 'SEO Optimized'],
    pages: ['Home', 'Services', 'Gallery', 'About', 'Contact'],
    colorScheme: {
      primary: '#059669',
      secondary: '#dc2626',
      accent: '#3b82f6'
    },
    defaultContent: {
      heroTitle: 'Crystal Clear Window Cleaning',
      heroSubtitle: 'Professional window cleaning for residential and commercial properties',
      services: ['Residential Cleaning', 'Commercial Cleaning', 'Gutter Cleaning', 'Pressure Washing'],
      aboutText: 'We specialize in providing crystal clear windows for homes and businesses.'
    }
  }
];

export async function createNewSite(templateId: string, clientInfo: {
  name: string;
  email: string;
  domain: string;
  location: string;
  services: string[];
}): Promise<ClientSite | null> {
  const template = siteTemplates.find(t => t.id === templateId);
  if (!template) return null;
  
  // This would create a new site using the template
  console.log(`Creating new site using template ${templateId} for client ${clientInfo.name}`);
  
  const newSite: ClientSite = {
    id: clientInfo.domain.replace('.com', '').replace('.', '-'),
    name: clientInfo.name,
    domain: clientInfo.domain,
    clientName: clientInfo.name,
    clientEmail: clientInfo.email,
    status: 'active',
    createdAt: new Date().toISOString(),
    lastUpdated: new Date().toISOString(),
    seoScore: 0,
    monthlyLeads: 0,
    totalLeads: 0,
    uptime: 100,
    pageSpeed: 0,
    keywords: 0,
    backlinks: 0,
    lastReportGenerated: new Date().toISOString(),
    nextReportDue: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    industry: template.industry,
    location: clientInfo.location,
    services: clientInfo.services,
    primaryColor: template.colorScheme.primary,
    secondaryColor: template.colorScheme.secondary
  };
  
  return newSite;
}
