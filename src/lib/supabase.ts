import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

// Only create client if we have real credentials
export const supabase = supabaseUrl.includes('placeholder') 
  ? null 
  : createClient(supabaseUrl, supabaseAnonKey)

// Master admin client for managing all sites
const masterSupabaseUrl = process.env.NEXT_PUBLIC_MASTER_SUPABASE_URL
const masterSupabaseAnonKey = process.env.NEXT_PUBLIC_MASTER_SUPABASE_ANON_KEY

export const masterSupabase = masterSupabaseUrl && masterSupabaseAnonKey
  ? createClient(masterSupabaseUrl, masterSupabaseAnonKey)
  : null

export interface ContactSubmission {
  id?: string
  name: string
  email: string
  phone: string
  service?: string
  message?: string
  property_size?: string
  created_at?: string
  status?: 'new' | 'contacted' | 'completed' | 'cancelled'
}

export async function saveContactSubmission(data: ContactSubmission) {
  if (!supabase) {
    console.warn('Supabase not configured. Form submission logged to console only.')
    console.log('Contact form submission:', data)
    return { success: true, data: [{ id: 'local-' + Date.now(), ...data }] }
  }

  try {
    const { data: submission, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: data.service || null,
          message: data.message || null,
          property_size: data.property_size || null,
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data: submission }
  } catch (error) {
    console.error('Error saving contact submission:', error)
    return { success: false, error: 'Failed to save submission' }
  }
}

export async function getContactSubmissions() {
  if (!supabase) {
    console.warn('Supabase not configured. Returning empty array.')
    return { success: true, data: [] }
  }

  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Supabase error:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Error fetching contact submissions:', error)
    return { success: false, error: 'Failed to fetch submissions' }
  }
}

export async function updateSubmissionStatus(id: string, status: ContactSubmission['status']) {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .update({ status })
      .eq('id', id)
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Error updating submission status:', error)
    return { success: false, error: 'Failed to update status' }
  }
}
