import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CallButton } from '@/components/call-button';

interface ServiceCardProps {
  title: string;
  description: string;
  href?: string;
  isExternal?: boolean;
}

export function ServiceCard({ 
  title, 
  description, 
  href,
  isExternal 
}: ServiceCardProps) {
  const showLink = href && !isExternal;
  
  return (
    <div className="flex flex-col p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2 text-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground mb-6 flex-1">
        {description}
      </p>
      
      <div className="flex gap-2">
        {showLink ? (
          <Link href={href}>
            <Button variant="outline" className="gap-2">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        ) : null}
        <CallButton 
          variant={showLink ? "secondary" : "default"}
          text={showLink ? "Call" : "Call Now"}
        />
      </div>
    </div>
  );
}
