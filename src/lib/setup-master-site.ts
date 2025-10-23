// Setup Master Site
// This adds your current Richmond site to the master database

import { masterSupabase } from './supabase';

export async function addCurrentSiteToMaster(): Promise<boolean> {
  if (!masterSupabase) {
    console.error('Master Supabase not configured');
    return false;
  }

  try {
    // Add your current website building site to the master database
    const websiteBuildingSite = {
      id: 'website-building-site',
      name: 'Website Building Site',
      domain: 'your-website-building-domain.com', // Update this with your actual domain
      client_name: 'Your Website Building Business Name',
      client_email: 'your-email@your-domain.com', // Update this with your actual email
      status: 'active',
      created_at: new Date().toISOString(),
      last_updated: new Date().toISOString(),
      supabase_url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      supabase_anon_key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
      seo_score: 85,
      monthly_leads: 15,
      total_leads: 62,
      uptime: 99.8,
      page_speed: 89,
      keywords: 52,
      backlinks: 203,
      last_report_generated: new Date().toISOString(),
      next_report_due: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      industry: 'Web Development',
      location: 'Your Location', // Update this
      services: ['Website Development', 'SEO Services', 'Maintenance', 'Hosting', 'Analytics', 'Lead Generation'],
      primary_color: '#1e40af',
      secondary_color: '#dc2626'
    };

    const { data, error } = await masterSupabase
      .from('sites')
      .upsert(websiteBuildingSite, { onConflict: 'id' })
      .select();

    if (error) {
      console.error('Error adding website building site to master:', error);
      return false;
    }

    console.log('Website building site added to master database:', data);
    return true;
  } catch (error) {
    console.error('Error adding website building site to master:', error);
    return false;
  }
}

export async function setupMasterDatabase(): Promise<boolean> {
  if (!masterSupabase) {
    console.error('Master Supabase not configured');
    return false;
  }

  try {
    // Add your current site
    const success = await addCurrentSiteToMaster();
    
    if (success) {
      console.log('Master database setup complete!');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Error setting up master database:', error);
    return false;
  }
}
