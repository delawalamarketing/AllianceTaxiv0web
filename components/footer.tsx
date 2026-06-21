import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-2">{SITE_CONFIG.name}</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              {SITE_CONFIG.companyInfo.tagline}
            </p>
            <p className="text-sm text-primary-foreground/70">
              Serving {SITE_CONFIG.serviceArea.description.toLowerCase()}
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {SITE_CONFIG.services.map((service) => (
                <li key={service.id}>
                  <Link 
                    href={service.slug}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-primary-foreground/70">Phone:</span>
                <br />
                <a 
                  href={SITE_CONFIG.phoneLink}
                  className="text-primary-foreground hover:underline font-semibold"
                >
                  {SITE_CONFIG.phone}
                </a>
              </p>
              <p>
                <span className="text-primary-foreground/70">Address:</span>
                <br />
                <span className="text-primary-foreground">
                  {SITE_CONFIG.address.formatted}
                </span>
              </p>
              <p className="text-primary-foreground/70">
                Serving {SITE_CONFIG.serviceArea.description.toLowerCase()}
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-primary-foreground/70 gap-4">
          <div>
            <p>&copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
            <p className="mt-1">
              Website built and SEO managed by{' '}
              <a 
                href="https://www.delawalamarketing.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary-foreground underline transition-colors"
              >
                Delawala Marketing
              </a>
            </p>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-primary-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
