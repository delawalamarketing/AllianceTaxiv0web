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
  title: 'Local Taxi Service Barrie | Alliance Taxi',
  description: 'Quick, reliable local taxi service in Barrie and surrounding towns. Professional drivers, fair rates.',
  openGraph: {
    title: 'Local Taxi Service in Barrie',
    description: 'Dependable local taxi pickups in Barrie, Collingwood, Innisfil, and more.'
  }
};

export default function LocalTaxiPage() {
  const serviceAreas = ['Barrie', 'Collingwood', 'Innisfil', 'Angus', 'Wasaga Beach', 'Midland'];
  
  return (
    <div className="w-full bg-background text-foreground">
      <SchemaScript 
        schema={generateServiceSchema(
          'Local Taxi Service',
          'Quick, reliable local taxi service in Barrie and surrounding towns.',
          serviceAreas
        )}
      />
      <Header />
      
      <main>
        <Hero 
          headline="Local Taxi Service in Barrie"
          subheadline="Fast pickups, professional drivers, and fair rates. We know Barrie inside and out."
          cta="Call for Local Service"
        />
        
        <ValueProps />
        
        {/* Service Details */}
        <section className="w-full py-16 md:py-24 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-balance">
              Quick & Reliable Local Pickups
            </h2>
            
            <div className="space-y-6 text-foreground">
              <p className="text-lg text-muted-foreground">
                Whether you need a ride to the grocery store, doctor&apos;s appointment, or around town, Alliance Taxi is here for you. Our local drivers know Barrie and the surrounding areas well, ensuring efficient and reliable service.
              </p>
              
              <div>
                <h3 className="font-semibold text-xl mb-3">Service Areas</h3>
                <p className="text-muted-foreground mb-4">
                  We proudly serve the following towns:
                </p>
                <ul className="grid grid-cols-2 gap-3">
                  {['Barrie', 'Collingwood', 'Innisfil', 'Angus', 'Wasaga Beach', 'Midland'].map((town) => (
                    <li key={town} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      <span>{town}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-xl mb-3">Why Choose Alliance for Local Service?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Fast response times in Barrie and nearby areas</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Fair, transparent rates—no surge pricing</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Professional, friendly drivers familiar with the area</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Book ahead or call for immediate pickup</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <CallButton size="lg" text="Call Now for Local Taxi" />
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
