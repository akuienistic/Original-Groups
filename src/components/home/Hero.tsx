import { Link } from "react-router-dom";
import { ArrowRight, Shield, Truck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30 pt-20 md:pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-gold font-medium tracking-widest uppercase text-sm animate-fade-in">
                Premium Collection 2025
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Original <span className="text-gold">Groups</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light animate-fade-in animation-delay-200">
                Electronics & Luxury Fashion
              </p>
            </div>

            <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 animate-fade-in animation-delay-300">
              Discover the finest collection of flagship smartphones, authentic Turkish luxury fashion, and exclusive
              fragrances. Every piece curated for the discerning customer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-400">
              <Button
                asChild
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 h-14 px-8 text-base"
              >
                <Link to="/catalog">
                  Explore Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 px-8 text-base border-gold text-gold hover:bg-gold hover:text-accent-foreground"
              >
                <Link to="/catalog?category=fashion">Turkish Fashion</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4 animate-fade-in animation-delay-500">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-5 w-5 text-gold" />
                <span>Authentic Brands</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="h-5 w-5 text-gold" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="h-5 w-5 text-gold" />
                <span>Premium Warranty</span>
              </div>
            </div>
          </div>

          {/* Featured Product Image */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl scale-90" />

              {/* Main Image Container */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800"
                  alt="Premium Smartphone"
                  className="w-full h-full object-cover animate-float"
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-lg border border-border animate-fade-in animation-delay-500">
                <p className="text-xs text-muted-foreground">Starting from</p>
                <p className="font-semibold text-lg">$299</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
