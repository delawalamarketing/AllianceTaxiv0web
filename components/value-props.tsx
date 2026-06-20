import { Check, Clock, DollarSign, Users } from 'lucide-react';

export function ValueProps() {
  const props = [
    {
      icon: DollarSign,
      title: 'No Surge Pricing',
      description: 'Fair, transparent rates every time. No hidden fees.'
    },
    {
      icon: Clock,
      title: 'Fast Pickup',
      description: 'Quick response times, local knowledge.'
    },
    {
      icon: Users,
      title: 'Professional Drivers',
      description: 'Courteous, experienced local drivers you can trust.'
    },
    {
      icon: Check,
      title: 'Flat Airport Rates',
      description: 'Barrie to Toronto Pearson with upfront pricing.'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
          Why Choose Alliance Taxi Barrie?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {props.map((prop) => {
            const Icon = prop.icon;
            return (
              <div key={prop.title} className="flex flex-col p-6 rounded-lg border border-border bg-card hover:shadow-md transition-shadow">
                <Icon className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  {prop.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
