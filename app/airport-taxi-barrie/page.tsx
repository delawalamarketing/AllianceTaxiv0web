import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { ValueProps } from '@/components/value-props';
import { TrustSection } from '@/components/trust-section';
import { FAQ } from '@/components/faq';
import { Footer } from '@/components/footer';
import { CallButton } from '@/components/call-button';
import { SchemaScript } from '@/components/schema-script';
import { generateServiceSchema } from '@/lib/schema';

export const metadata = {
  title: 'Airport Taxi Barrie to Toronto Pearson | Alliance Taxi Barrie',
  description: 'Flat upfront rates from Barrie to Toronto Pearson Airport. No surge pricing. Professional, reliable service.',
  openGraph: {
    title: 'Barrie to Pearson Airport Taxi',
    description: 'Dependable airport taxi service with flat rates and no surge pricing.'
  }
};

export default function AirportTaxiPage() {
  return (
    <div className="w-full bg-background text-foreground">
      <SchemaScript 
        schema={generateServiceSchema(
          'Airport Taxi Service',
          'Flat upfront rates from Barrie to Toronto Pearson Airport. No surge pricing.',
          ['Barrie', 'Toronto Pearson']
        )}
      />
      <Header />
      
      <main>
        <Hero 
          headline="Barrie to Toronto Pearson Airport"
          subheadline="Flat upfront rates, professional drivers, and reliable service. No surge pricing."
          cta="Book Airport Ride"
        />
        
        <ValueProps />
        
        {/* Airport Service Details */}
        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">
              Reliable Airport Transportation
            </h2>
            
            <div className="space-y-6 text-foreground">
              <p className="text-lg text-muted-foreground">
                Traveling from Barrie to Toronto Pearson Airport? Alliance Taxi Barrie offers professional, dependable service with transparent, upfront pricing. No surge pricing, no hidden fees—just honest rates you can count on.
              </p>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-xl mb-4">Airport Service Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-muted-foreground"><strong>Flat Upfront Rates</strong> — Know the price before you book</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-muted-foreground"><strong>No Surge Pricing</strong> — Fair rates, every time</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-muted-foreground"><strong>Professional Drivers</strong> — Experienced, courteous service</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-muted-foreground"><strong>Advance Booking</strong> — Reserve ahead for peace of mind</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-muted-foreground"><strong>Clean, Comfortable Vehicles</strong> — Well-maintained cars for your journey</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-xl mb-3">Our Promise</h3>
                <p className="text-muted-foreground">
                  We understand that airport travel requires reliability. Alliance Taxi Barrie is committed to getting you to Toronto Pearson on time, safely, and affordably. Our drivers are familiar with the route and traffic patterns, ensuring an efficient journey.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-xl mb-3">Ready to Book?</h3>
                <p className="text-muted-foreground mb-4">
                  Call us to get a quote or reserve your airport ride in advance. We&apos;re here to make your travel experience stress-free.
                </p>
              </div>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <CallButton size="lg" text="Book Airport Taxi Now" />
            </div>
          </div>
        </section>
        
        <TrustSection />
        
        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
}
