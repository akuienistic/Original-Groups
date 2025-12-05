import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/lib/data';

export function Categories() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
            Shop by Category
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Curated Collections
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/catalog?category=${category.id}`}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <h3 className="font-display text-xl font-semibold mb-1 group-hover:text-gold transition-colors">
                  {category.name}
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-3">
                  {category.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-gold group-hover:gap-3 transition-all">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
