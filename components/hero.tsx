import { CallButton } from '@/components/call-button';

interface HeroProps {
  headline: string;
  subheadline: string;
  cta?: string;
}

export function Hero({ headline, subheadline, cta }: HeroProps) {
  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary via-primary to-primary/80">
      {/* Placeholder background image overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22%3E%3Crect fill=%22%23f5f5f5%22 width=%221200%22 height=%22600%22/%3E%3C/svg%3E")',
          backgroundSize: 'cover'
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 text-balance">
          {headline}
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 text-balance max-w-2xl mx-auto">
          {subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CallButton 
            variant="secondary"
            size="lg"
            text={cta || 'Call Now'}
          />
        </div>
      </div>
    </section>
  );
}
