import { Shield, Clock, Users, Award } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site';

export function TrustSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
          Why Barrie Trusts Alliance Taxi
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Years in Business */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Clock className="w-12 h-12 text-accent" />
            </div>
            <p className="text-3xl font-bold text-foreground mb-2">
              {SITE_CONFIG.companyInfo.yearsInBusiness}+
            </p>
            <p className="text-muted-foreground">
              Years of Reliable Service
            </p>
          </div>
          
          {/* Professional Drivers */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Users className="w-12 h-12 text-accent" />
            </div>
            <p className="text-3xl font-bold text-foreground mb-2">
              Expert
            </p>
            <p className="text-muted-foreground">
              Professional Drivers
            </p>
          </div>
          
          {/* Safety First */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Shield className="w-12 h-12 text-accent" />
            </div>
            <p className="text-3xl font-bold text-foreground mb-2">
              Safe
            </p>
            <p className="text-muted-foreground">
              Licensed & Insured
            </p>
          </div>
          
          {/* Commitment */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Award className="w-12 h-12 text-accent" />
            </div>
            <p className="text-3xl font-bold text-foreground mb-2">
              Dedicated
            </p>
            <p className="text-muted-foreground">
              Local Community Service
            </p>
          </div>
        </div>
        
        {/* Values */}
        <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SITE_CONFIG.companyInfo.values.map((value, index) => (
              <div key={index} className="flex gap-4">
                <span className="text-accent text-xl font-bold">✓</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
