import { MetadataRoute } from 'next'
import { vadodaraAreas } from '@/lib/business-config'
import { homeAutomationKeywords } from '@/lib/keywords-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://smarthomevadodara.in'
  const lastModified = '2026-02-02'

  // Homepage - highest priority
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ]

  // 21 Area pages - /alkapuri, /gotri, etc. (high priority for local SEO)
  const areaPages: MetadataRoute.Sitemap = vadodaraAreas.map((area) => ({
    url: `${baseUrl}/${area}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // 70 Keyword pages - /home-automation-vadodara, /smart-lighting-vadodara, etc.
  const keywordPages: MetadataRoute.Sitemap = homeAutomationKeywords.map((keyword) => ({
    url: `${baseUrl}/${keyword.slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Total: 1 homepage + 21 areas + 70 keywords = 92 URLs
  return [...staticPages, ...areaPages, ...keywordPages]
}
