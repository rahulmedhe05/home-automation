import { MetadataRoute } from 'next'
import { vadodaraAreas, getAreaDisplayName } from '@/lib/business-config'
import { homeAutomationKeywords } from '@/lib/keywords-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://smarthomevadodara.in'
  const currentDate = new Date().toISOString()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/home-automation`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  // Area pages
  const areaPages: MetadataRoute.Sitemap = vadodaraAreas.map((area) => ({
    url: `${baseUrl}/home-automation/${area}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Keyword pages
  const keywordPages: MetadataRoute.Sitemap = homeAutomationKeywords.map((keyword) => ({
    url: `${baseUrl}/home-automation/${keyword.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...areaPages, ...keywordPages]
}
