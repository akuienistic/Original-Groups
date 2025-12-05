import { Star } from 'lucide-react';

const celebrities = [
  {
    id: 1,
    name: 'Ahmed Al-Rashid',
    title: 'Business Executive',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    quote: 'Exceptional quality and service.',
  },
  {
    id: 2,
    name: 'Layla Hassan',
    title: 'Fashion Influencer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    quote: 'My go-to for luxury fashion.',
  },
  {
    id: 3,
    name: 'Omar Yilmaz',
    title: 'Tech Entrepreneur',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
    quote: 'Always the latest devices first.',
  },
  {
    id: 4,
    name: 'Fatima Al-Mansoor',
    title: 'Celebrity Stylist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
    quote: 'Impeccable taste and curation.',
  },
];

export function CelebrityClients() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
            Trusted by the Elite
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Our Distinguished Clients
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {celebrities.map((celebrity, index) => (
            <div
              key={celebrity.id}
              className="bg-card p-6 rounded-xl text-center hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={celebrity.image}
                alt={celebrity.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-2 ring-gold/20"
              />
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm italic mb-4">
                "{celebrity.quote}"
              </p>
              <h4 className="font-semibold">{celebrity.name}</h4>
              <p className="text-xs text-muted-foreground">{celebrity.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
