'use client';

import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/site';
import { CallButton } from '@/components/call-button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold">
            AT
          </div>
          <span className="hidden sm:inline font-bold text-lg text-foreground">
            {SITE_CONFIG.name}
          </span>
        </Link>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/#services" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            Services
          </Link>
          <Link href="/#faq" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
            FAQ
          </Link>
        </nav>
        
        {/* Phone CTA */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block text-right">
            <p className="text-xs text-muted-foreground">Call us</p>
            <p className="text-sm font-semibold text-foreground">{SITE_CONFIG.phone}</p>
          </div>
          <CallButton variant="secondary" size="sm" text="Call" />
        </div>
      </div>
    </header>
  );
}
