import { SITE_CONFIG } from './site';

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.name,
    image: SITE_CONFIG.baseUrl + '/logo.png',
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.baseUrl,
    telephone: SITE_CONFIG.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE_CONFIG.serviceArea.primary,
      addressRegion: 'ON',
      addressCountry: 'CA',
    },
    areaServed: {
      '@type': 'City',
      name: SITE_CONFIG.serviceArea.primary,
    },
    sameAs: [
      // Add social media URLs when available
    ],
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateServiceSchema(
  serviceName: string,
  serviceDescription: string,
  areaServed: string[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phone,
    },
    areaServed: areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    serviceType: 'Taxi Service',
    url: SITE_CONFIG.baseUrl,
  };
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}
