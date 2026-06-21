import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard search + social crawlers
      {
        userAgent: '*',
        allow: '/',
      },
      // Explicitly welcome AI / answer-engine crawlers (AEO/GEO)
      {
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-User',
          'anthropic-ai',
          'PerplexityBot',
          'Perplexity-User',
          'Google-Extended',
          'Applebot-Extended',
          'CCBot',
          'Amazonbot',
          'Meta-ExternalAgent',
        ],
        allow: '/',
      },
    ],
    sitemap: `${SITE_CONFIG.baseUrl}/sitemap.xml`,
    host: SITE_CONFIG.baseUrl,
  };
}
