import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const base = SITE_CONFIG.baseUrl;

  const servicePages: MetadataRoute.Sitemap = SITE_CONFIG.services.map((service) => ({
    url: `${base}${service.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: base,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...servicePages,
    {
      url: `${base}/privacy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${base}/terms`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
