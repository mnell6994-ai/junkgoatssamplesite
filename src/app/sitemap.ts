import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://junkgoatsrichmond.com'

  // Main pages
  const mainPages = [
    '',
    '/contact',
    '/how-it-works',
    '/privacy',
    '/terms',
    '/sitemap',
  ]

  // Service pages
  const servicePages = [
    '/services',
    '/services/junk-removal',
    '/services/furniture-removal',
    '/services/yard-waste-removal',
    '/services/construction-debris',
    '/services/appliance-removal',
    '/services/estate-cleanout',
    '/services/commercial-cleanout',
    '/services/office-cleanout',
  ]

  // Location pages
  const locationPages = [
    '/richmond',
    '/henrico',
    '/chesterfield',
    '/midlothian',
    '/mechanicsville',
  ]

  const currentDate = new Date()

  return [
    // Main pages with high priority
    ...mainPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1.0 : 0.8,
    })),
    // Service pages
    ...servicePages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    // Location pages
    ...locationPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
