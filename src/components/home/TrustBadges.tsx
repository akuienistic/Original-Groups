import { Shield, Truck, RefreshCw, Award, CreditCard, Headphones } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    title: '100% Authentic',
    description: 'Genuine products only',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Express shipping available',
  },
  {
    icon: RefreshCw,
    title: 'Easy Returns',
    description: '30-day return policy',
  },
  {
    icon: Award,
    title: 'Premium Warranty',
    description: 'Full manufacturer warranty',
  },
  {
    icon: CreditCard,
    title: 'Secure Payment',
    description: 'Multiple payment options',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Always here to help',
  },
];

export function TrustBadges() {
  return (
    <section className="py-16 border-y border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-full mb-3">
                <badge.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-medium text-sm mb-1">{badge.title}</h3>
              <p className="text-xs text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
