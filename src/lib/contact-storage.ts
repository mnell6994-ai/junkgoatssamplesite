// Local storage-based contact management (no external dependencies)
// This replaces the previous Supabase integration

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
  try {
    const submission = {
      id: 'local-' + Date.now(),
      ...data,
      created_at: new Date().toISOString(),
      status: 'new' as const
    }

    // Store in localStorage (client-side) and log to console (server-side)
    if (typeof window !== 'undefined') {
      const existing = JSON.parse(localStorage.getItem('contact_submissions') || '[]')
      existing.push(submission)
      localStorage.setItem('contact_submissions', JSON.stringify(existing))
    }

    console.log('Contact form submission:', submission)
    return { success: true, data: [submission] }
  } catch (error) {
    console.error('Error saving contact submission:', error)
    return { success: false, error: 'Failed to save submission' }
  }
}

export async function getContactSubmissions() {
  try {
    if (typeof window !== 'undefined') {
      const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]')
      return { success: true, data: submissions.reverse() } // Most recent first
    }
    return { success: true, data: [] }
  } catch (error) {
    console.error('Error fetching contact submissions:', error)
    return { success: false, error: 'Failed to fetch submissions' }
  }
}

export async function updateSubmissionStatus(id: string, status: ContactSubmission['status']) {
  try {
    if (typeof window !== 'undefined') {
      const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]')
      const index = submissions.findIndex((sub: ContactSubmission) => sub.id === id)
      
      if (index !== -1) {
        submissions[index].status = status
        localStorage.setItem('contact_submissions', JSON.stringify(submissions))
        return { success: true, data: [submissions[index]] }
      }
    }
    
    return { success: false, error: 'Submission not found' }
  } catch (error) {
    console.error('Error updating submission status:', error)
    return { success: false, error: 'Failed to update status' }
  }
}
