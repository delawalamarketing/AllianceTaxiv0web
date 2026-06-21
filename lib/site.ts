export const SITE_CONFIG = {
  name: 'Alliance Taxi Barrie',
  description: 'Professional taxi service in Barrie, ON. No surge pricing, flat airport rates. Visit us at 4 Ferris Ln, Barrie, ON L4M 2X7 or call (705) 794-1111.',
  phone: '(705) 794-1111',
  phoneLink: 'tel:+17057941111',
  analyticsId: 'G-XXXXXXXXXX', // Placeholder - replace with actual ID
  baseUrl: 'https://alliancetaxi.ca',
  
  address: {
    streetAddress: '4 Ferris Ln',
    addressLocality: 'Barrie',
    addressRegion: 'ON',
    postalCode: 'L4M 2X7',
    formatted: '4 Ferris Ln, Barrie, ON L4M 2X7'
  },
  
  serviceArea: {
    primary: 'Barrie, ON',
    towns: ['Barrie', 'Collingwood', 'Innisfil', 'Angus', 'Wasaga Beach', 'Midland'],
    description: 'Serving Barrie and neighboring towns'
  },
  
  services: [
    {
      id: 'local',
      name: 'Local Taxi Service',
      slug: '/local-taxi-barrie',
      description: 'Quick, reliable pickups in Barrie and surrounding areas',
      keywords: 'local taxi Barrie, taxi Collingwood, ride Innisfil'
    },
    {
      id: 'airport',
      name: 'Airport Taxi Service',
      slug: '/airport-taxi-barrie',
      description: 'Barrie to Toronto Pearson. No surge pricing, flat upfront rates.',
      keywords: 'airport taxi Barrie, Pearson transport, Barrie to Toronto'
    },
    {
      id: 'longhaul',
      name: 'Long Distance',
      slug: '/long-distance-taxi',
      description: 'Extended trips & custom quotes',
      keywords: 'long distance taxi, custom quotes'
    },
    {
      id: 'wheelchair',
      name: 'Wheel Chair Taxi',
      slug: '/wheelchair-taxi-barrie',
      description: 'Safe, accessible transportation with certified drivers & specialized vehicles',
      keywords: 'wheelchair taxi Barrie, accessible taxi, wheelchair transport Barrie'
    }
  ],
  
  companyInfo: {
    yearsInBusiness: 20,
    tagline: 'Your trusted local taxi service',
    values: [
      'No surge pricing',
      'Flat upfront airport rates',
      'Professional drivers',
      'Clean vehicles',
      'Local experts'
    ]
  }
}

