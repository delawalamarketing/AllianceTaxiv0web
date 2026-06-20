import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { ValueProps } from '@/components/value-props';
import { ServiceCard } from '@/components/service-card';
import { TrustSection } from '@/components/trust-section';
import { FAQ } from '@/components/faq';
import { Footer } from '@/components/footer';
import { SchemaScript } from '@/components/schema-script';
import { SITE_CONFIG } from '@/lib/site';
import { generateOrganizationSchema, generateFAQSchema } from '@/lib/schema';

export const metadata = {
  title: `${SITE_CONFIG.name} - Taxi Service in Barrie, ON`,
  description: SITE_CONFIG.description,
  openGraph: {
    title: `${SITE_CONFIG.name} - Reliable Taxi Service`,
    description: SITE_CONFIG.description,
    type: 'website'
  }
};

const faqItems = [
  { question: 'Do you have surge pricing?', answer: 'No. Alliance Taxi Barrie never charges surge pricing.' },
  { question: 'What are your airport rates?', answer: 'We offer flat, upfront rates for trips from Barrie to Toronto Pearson Airport.' },
  { question: 'How long does a taxi usually take to arrive?', answer: 'Response times vary based on location and availability.' },
  { question: 'Do you accept credit cards?', answer: 'Yes. We accept both cash and major credit cards.' },
];

export default function Page() {
  return (
    <div className="w-full bg-background text-foreground">
      <SchemaScript schema={generateOrganizationSchema()} />
      <SchemaScript schema={generateFAQSchema(faqItems)} />
      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero 
          headline="Your Trusted Taxi Service in Barrie"
          subheadline="Professional drivers, fair rates, no surge pricing. Local service you can rely on."
          cta="Book Your Ride"
        />
        
        {/* Value Propositions */}
        <ValueProps />
        
        {/* Services Section */}
        <section id="services" className="w-full py-16 md:py-24 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
              Our Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SITE_CONFIG.services.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.name}
                  description={service.description}
                  href={service.slug}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Trust Section */}
        <TrustSection />
        
        {/* FAQ Section */}
        <section id="faq">
          <FAQ />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
