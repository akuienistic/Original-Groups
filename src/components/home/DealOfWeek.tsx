import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/data';

export function DealOfWeek() {
  const dealProduct = products.find((p) => p.originalPrice);

  if (!dealProduct) return null;

  const discount = dealProduct.originalPrice
    ? Math.round((1 - dealProduct.price / dealProduct.originalPrice) * 100)
    : 0;

  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">Limited Time Offer</span>
            </div>
            
            <div>
              <p className="text-background/60 text-sm uppercase tracking-widest mb-2">
                Deal of the Week
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {dealProduct.name}
              </h2>
              <p className="text-background/70 max-w-md mx-auto lg:mx-0">
                {dealProduct.description}
              </p>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <span className="text-4xl md:text-5xl font-bold text-gold">
                ${dealProduct.price.toLocaleString()}
              </span>
              {dealProduct.originalPrice && (
                <div className="text-left">
                  <span className="block text-xl text-background/50 line-through">
                    ${dealProduct.originalPrice.toLocaleString()}
                  </span>
                  <span className="text-sm text-gold font-medium">
                    Save {discount}%
                  </span>
                </div>
              )}
            </div>

            <Button asChild size="lg" className="bg-gold text-accent-foreground hover:bg-gold-light h-14 px-8">
              <Link to={`/product/${dealProduct.id}`}>
                Shop This Deal
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gold/30 rounded-full blur-3xl scale-75" />
              <img
                src={dealProduct.images[0]}
                alt={dealProduct.name}
                className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Discount Badge */}
              <div className="absolute -top-4 -right-4 bg-destructive text-destructive-foreground w-20 h-20 rounded-full flex flex-col items-center justify-center shadow-lg z-20">
                <span className="text-2xl font-bold">{discount}%</span>
                <span className="text-xs">OFF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
