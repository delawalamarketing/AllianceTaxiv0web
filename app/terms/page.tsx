import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SITE_CONFIG } from '@/lib/site';

export const metadata = {
  title: `Terms of Service | ${SITE_CONFIG.name}`,
  description: `The terms and conditions that govern your use of the ${SITE_CONFIG.name} website and taxi services in ${SITE_CONFIG.serviceArea.primary}.`,
  robots: { index: true, follow: true }
};

const LAST_UPDATED = 'June 20, 2026';

export default function TermsPage() {
  return (
    <div className="w-full bg-background text-foreground">
      <Header />

      <main>
        <section className="w-full py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
              Terms of Service
            </h1>
            <p className="text-sm text-muted-foreground mb-10">
              Last updated: {LAST_UPDATED}
            </p>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the {SITE_CONFIG.name} website and
                the taxi and transportation services we provide in {SITE_CONFIG.serviceArea.primary} and surrounding
                areas. By booking a ride or using our website, you agree to these Terms. If you do not agree, please
                do not use our services.
              </p>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Our Services</h2>
                <p>
                  {SITE_CONFIG.name} provides local taxi, airport transfer, and long-distance transportation
                  services. Service availability, response times, and vehicle types depend on demand, location,
                  traffic, weather, and driver availability. While we work hard to be on time, we do not guarantee
                  specific pickup or arrival times.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Bookings &amp; Cancellations</h2>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>When you book a ride, you are responsible for providing accurate pickup and drop-off details and a reachable phone number.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Please cancel as early as possible if your plans change. Repeated no-shows or last-minute cancellations may affect future bookings.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>For airport and long-distance trips, we recommend booking in advance to secure availability.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Fares &amp; Payment</h2>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>We charge fair, transparent rates and never apply surge pricing.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Airport trips are offered at flat, upfront rates. Other fares may be metered or quoted based on distance and time.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Quoted fares assume normal routes and conditions. Significant detours, extra stops, wait time, or tolls may affect the final fare.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>We accept cash and major credit cards. Payment is due at the end of your trip unless otherwise arranged.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Passenger Responsibilities</h2>
                <p className="mb-4">To keep everyone safe, passengers agree to:</p>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Wear seatbelts and follow the driver&apos;s reasonable safety instructions.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Behave respectfully toward the driver and not damage the vehicle.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Not transport illegal, hazardous, or prohibited items.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Be responsible for any cleaning or repair costs caused by misuse of the vehicle.</span>
                  </li>
                </ul>
                <p className="mt-4">
                  We reserve the right to refuse or end service to anyone who behaves unsafely, unlawfully, or
                  abusively.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Lost Items</h2>
                <p>
                  We will make reasonable efforts to help return items left in our vehicles, but we are not
                  responsible for lost, damaged, or forgotten property. If you leave something behind, contact us
                  as soon as possible.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, {SITE_CONFIG.name} is not liable for indirect,
                  incidental, or consequential damages, including missed flights, appointments, or connections
                  arising from delays beyond our reasonable control. Our total liability for any claim related to a
                  trip will not exceed the amount paid for that trip.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Website Use</h2>
                <p>
                  The content on this website is provided for general information about our services. We may update
                  rates, service areas, and information at any time without notice. You agree not to misuse the
                  website or attempt to disrupt its operation.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Governing Law</h2>
                <p>
                  These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada
                  applicable therein, without regard to conflict-of-law principles.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Changes to These Terms</h2>
                <p>
                  We may update these Terms from time to time. When we do, we will revise the &ldquo;Last
                  updated&rdquo; date above. Your continued use of our services after changes take effect means you
                  accept the updated Terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Contact Us</h2>
                <p>
                  Questions about these Terms? Reach us at{' '}
                  <a href={SITE_CONFIG.phoneLink} className="text-accent font-medium hover:underline">
                    {SITE_CONFIG.phone}
                  </a>
                  {' '}or visit us at {SITE_CONFIG.address.formatted}.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
