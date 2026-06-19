export const SITE_CONFIG = {
  name: 'Alliance Taxi',
  description: 'Reliable taxi service in Barrie, ON. No surge pricing, flat airport rates.',
  phone: '(705) 794-1111',
  phoneLink: 'tel:+17057941111',
  analyticsId: 'G-XXXXXXXXXX', // Placeholder - replace with actual ID
  baseUrl: 'https://alliancetaxi.ca',
  
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
