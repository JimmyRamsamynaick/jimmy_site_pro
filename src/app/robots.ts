import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/payment/confirm'],
    },
    sitemap: 'https://jimmy-pro.duckdns.org/sitemap.xml',
  }
}
