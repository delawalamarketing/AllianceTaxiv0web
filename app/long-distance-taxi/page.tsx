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
  title: 'Long Distance Taxi Service | Alliance Taxi Barrie',
  description: 'Custom quotes for long-distance taxi trips. Extended journeys with professional, reliable drivers.',
  openGraph: {
    title: 'Long Distance Taxi Service',
    description: 'Affordable, professional long-distance taxi service with custom pricing.'
  }
};

export default function LongDistancePage() {
  return (
    <div className="w-full bg-background text-foreground">
      <SchemaScript 
        schema={generateServiceSchema(
          'Long Distance Taxi Service',
          'Custom quotes for long-distance taxi trips beyond regular service areas.',
          ['Ontario', 'Canada']
        )}
      />
      <Header />
      
      <main>
        <Hero 
          headline="Long Distance Taxi Service"
          subheadline="Extended journeys with transparent quotes and professional drivers. Call for custom pricing."
          cta="Get a Quote"
        />
        
        <ValueProps />
        
        {/* Long Distance Details */}
        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">
              Custom Quotes for Your Journey
            </h2>
            
            <div className="space-y-6 text-foreground">
              <p className="text-lg text-muted-foreground">
                Need a taxi for a trip beyond our regular local service area? Alliance Taxi Barrie offers custom quotes for long-distance travel. Whether you&apos;re heading to another city, a special event, or anywhere else, we&apos;ll work with you to provide transparent pricing.
              </p>
              
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-xl mb-4">How It Works</h3>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <p className="font-semibold">Call us with your destination</p>
                      <p className="text-sm text-muted-foreground">Provide your starting point and where you&apos;re headed</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <p className="font-semibold">Get a transparent quote</p>
                      <p className="text-sm text-muted-foreground">We provide an upfront price based on distance and time</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <p className="font-semibold">Book your ride</p>
                      <p className="text-sm text-muted-foreground">We&apos;ll arrange a professional driver for your journey</p>
                    </div>
                  </li>
                </ol>
              </div>
              
              <div>
                <h3 className="font-semibold text-xl mb-3">Example Long Distance Routes</h3>
                <p className="text-muted-foreground mb-4">
                  We serve routes including:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">→</span>
                    <span>Barrie to Niagara Falls</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">→</span>
                    <span>Barrie to Muskoka</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">→</span>
                    <span>Barrie to Ottawa</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent font-bold">→</span>
                    <span>And many more destinations</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-xl mb-3">Why Choose Alliance for Long Distance?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Transparent, upfront pricing—no hidden costs</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Professional, experienced drivers for safe travel</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Well-maintained vehicles for your comfort</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Flexible booking to suit your schedule</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <CallButton size="lg" text="Call for Long Distance Quote" />
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
