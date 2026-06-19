'use client';

import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/site';

interface CallButtonProps {
  variant?: 'default' | 'outline' | 'secondary' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  text?: string;
  onClick?: () => void;
}

export function CallButton({ 
  variant = 'default', 
  size = 'default',
  className = '',
  text = `Call ${SITE_CONFIG.phone}`,
  onClick
}: CallButtonProps) {
  const handleClick = () => {
    // Track call click in analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'call_click', {
        phone: SITE_CONFIG.phone,
        source: 'call_button'
      });
    }
    
    if (onClick) {
      onClick();
    }
    
    // Navigate to tel link
    window.location.href = SITE_CONFIG.phoneLink;
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      className={`gap-2 ${className}`}
    >
      <Phone className="w-4 h-4" />
      {text}
    </Button>
  );
}

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, eventParams: Record<string, any>) => void;
  }
}
