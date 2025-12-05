import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { products } from '@/lib/data';
import { ProductCard } from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';

export function BestSellers() {
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
              Customer Favorites
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Best Sellers
            </h2>
          </div>
          <Button asChild variant="ghost" className="group">
            <Link to="/catalog">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
