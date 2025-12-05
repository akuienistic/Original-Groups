import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { Product } from '@/lib/data';
import { useCartStore } from '@/lib/cart';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn(
        "group block bg-card rounded-lg overflow-hidden hover-lift",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-square bg-secondary overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-gold text-accent-foreground border-0">
              New
            </Badge>
          )}
          {product.isBestSeller && (
            <Badge variant="secondary" className="bg-foreground text-background border-0">
              Best Seller
            </Badge>
          )}
          {product.originalPrice && (
            <Badge variant="destructive">
              -{Math.round((1 - product.price / product.originalPrice) * 100)}%
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="secondary"
            size="icon"
            className="h-9 w-9 rounded-full bg-background/90 backdrop-blur-sm hover:bg-background"
            onClick={(e) => e.preventDefault()}
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Add to Cart */}
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button
            onClick={handleAddToCart}
            className="w-full bg-foreground text-background hover:bg-foreground/90"
            disabled={!product.inStock}
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          {product.brand}
        </p>
        <h3 className="font-medium text-foreground line-clamp-2 group-hover:text-gold transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">
            ${product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        
        {/* Stock Status */}
        {!product.inStock && (
          <p className="text-xs text-destructive font-medium">Out of Stock</p>
        )}
      </div>
    </Link>
  );
}
