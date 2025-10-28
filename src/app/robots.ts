import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://junkgoatsrichmond.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/dashboard/',
          '/client-dashboard/',
          '/login/',
          '/new-client/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
