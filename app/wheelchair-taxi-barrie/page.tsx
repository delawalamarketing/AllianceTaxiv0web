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
  title: 'Wheelchair Accessible Taxi Barrie | Alliance Taxi Barrie',
  description: 'Safe, reliable wheelchair accessible taxi service in Barrie and surrounding areas. Certified drivers, specialized vehicles, flat rates.',
  openGraph: {
    title: 'Wheelchair Accessible Taxi in Barrie',
    description: 'Specialized wheelchair taxi service with certified drivers and fully accessible ramp-equipped vehicles.'
  }
};

export default function WheelchairTaxiPage() {
  const serviceAreas = ['Barrie', 'Collingwood', 'Innisfil', 'Angus', 'Wasaga Beach', 'Midland'];
  
  return (
    <div className="w-full bg-background text-foreground">
      <SchemaScript 
        schema={generateServiceSchema(
          'Wheel Chair Taxi',
          'Safe, reliable wheelchair accessible taxi service in Barrie and surrounding areas.',
          serviceAreas
        )}
      />
      <Header />
      
      <main>
        <Hero 
          headline="Wheelchair Accessible Taxi Service"
          subheadline="Safe, reliable, and comfortable transportation. Specially equipped vehicles and certified, caring drivers serving Barrie."
          cta="Call for Accessible Taxi"
        />
        
        <ValueProps />
        
        {/* Service Details */}
        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">
              Dedicated Accessible Transportation
            </h2>
            
            <div className="space-y-6 text-foreground">
              <p className="text-lg text-muted-foreground">
                Alliance Taxi Barrie is committed to providing inclusive and accessible transportation for everyone in our community. Our wheelchair-accessible taxi service features modern, fully ramp-equipped vehicles and professionally trained drivers to ensure a safe, smooth, and dignified travel experience.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3 text-accent">Vehicle Features</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5">•</span>
                      <span>Rear-loading and side-loading easy-access ramps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5">•</span>
                      <span>Secure multi-point wheelchair tie-down systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5">•</span>
                      <span>Spacious interiors allowing companions to ride along</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5">•</span>
                      <span>Regularly inspected and meticulously cleaned vehicles</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3 text-accent">Trained & Certified Drivers</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5">•</span>
                      <span>Fully certified in accessible boarding and safety protocols</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5">•</span>
                      <span>Patient, courteous, and respectful assistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5">•</span>
                      <span>Experienced with all types of mobility devices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent font-bold mt-0.5">•</span>
                      <span>Door-to-door service options available upon request</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-xl mb-3">Service Areas</h3>
                <p className="text-muted-foreground mb-4">
                  We offer reliable accessible pickups and drop-offs throughout:
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {serviceAreas.map((town) => (
                    <li key={town} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      <span>{town}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-xl mb-3">Flat & Transparent Rates</h3>
                <p className="text-muted-foreground">
                  Just like our other services, our wheelchair taxi rates are transparent and competitive. We never charge surge pricing, so you can count on fair rates whether you are heading to a medical appointment, visiting family, or running local errands.
                </p>
              </div>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <CallButton size="lg" text="Book Wheelchair Taxi Now" />
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
