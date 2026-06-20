import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SITE_CONFIG } from '@/lib/site';

export const metadata = {
  title: `Privacy Policy | ${SITE_CONFIG.name}`,
  description: `How ${SITE_CONFIG.name} collects, uses, and protects your personal information when you book a ride or use our website.`,
  robots: { index: true, follow: true }
};

const LAST_UPDATED = 'June 20, 2026';

export default function PrivacyPage() {
  return (
    <div className="w-full bg-background text-foreground">
      <Header />

      <main>
        <section className="w-full py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
              Privacy Policy
            </h1>
            <p className="text-sm text-muted-foreground mb-10">
              Last updated: {LAST_UPDATED}
            </p>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                {SITE_CONFIG.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your
                privacy and is committed to protecting the personal information you share with us. This
                Privacy Policy explains what we collect, how we use it, and the choices you have. It applies
                to our website and to the taxi and transportation services we provide in {SITE_CONFIG.serviceArea.primary} and
                surrounding areas.
              </p>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Information We Collect</h2>
                <p className="mb-4">
                  We collect only the information needed to provide reliable service. This may include:
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong className="text-foreground">Booking details</strong> — your name, phone number, pickup and drop-off locations, and the date and time of your ride.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong className="text-foreground">Contact information</strong> — details you provide when you call or message us to request a quote or service.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong className="text-foreground">Payment information</strong> — when you pay by credit card, payments are processed by our payment provider. We do not store full card numbers on our systems.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span><strong className="text-foreground">Website usage data</strong> — basic analytics such as pages visited and device type, collected automatically to help us improve the site.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="space-y-2">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Schedule, dispatch, and complete your rides.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Contact you about a booking, quote, or service update.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Process payments and keep records for accounting and tax purposes.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Maintain, secure, and improve our website and services.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">•</span>
                    <span>Comply with legal and regulatory obligations.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">How We Share Information</h2>
                <p>
                  We do not sell or rent your personal information. We share it only with the drivers and staff
                  who need it to complete your ride, with service providers who help us operate (such as payment
                  processors and analytics tools), and when required by law or to protect the safety of our
                  passengers, drivers, or the public.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Cookies &amp; Analytics</h2>
                <p>
                  Our website uses cookies and similar technologies to remember preferences and understand how
                  the site is used. We may use third-party analytics services that collect aggregated, non-identifying
                  usage data. You can control or disable cookies through your browser settings, though some features
                  of the site may not work as intended.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Data Retention &amp; Security</h2>
                <p>
                  We keep personal information only as long as needed for the purposes described above or as
                  required by law. We use reasonable administrative, technical, and physical safeguards to protect
                  your information. No method of transmission or storage is completely secure, so we cannot
                  guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Your Rights</h2>
                <p>
                  Subject to applicable Canadian privacy law, you may request access to the personal information we
                  hold about you, ask us to correct it, or request that we delete it. To make a request, contact us
                  using the details below. We may need to verify your identity before acting on a request.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Children&apos;s Privacy</h2>
                <p>
                  Our website and services are not directed to children, and we do not knowingly collect personal
                  information from children without the consent of a parent or guardian.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. When we do, we will revise the &ldquo;Last
                  updated&rdquo; date above. We encourage you to review this page periodically.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or how we handle your information, please contact
                  us at{' '}
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
