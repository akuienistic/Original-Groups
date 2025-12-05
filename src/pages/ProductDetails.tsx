import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Heart, Share2, Truck, Shield, RefreshCw, Star, ChevronLeft, ChevronRight, Minus, Plus, MessageCircle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/products/ProductCard';
import { products } from '@/lib/data';
import { useCartStore } from '@/lib/cart';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

const WHATSAPP_NUMBER = '901234567890';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const addItem = useCartStore((state) => state.addItem);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button asChild>
            <Link to="/catalog">Back to Catalog</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) {
      toast.error('Please select a size');
      return;
    }
    addItem(product, quantity, selectedSize);
    toast.success(`${product.name} added to cart`);
  };

  const handleWhatsAppOrder = () => {
    let message = `Hello Original Groups, I'm interested in:\n\n`;
    message += `• ${product.name}`;
    if (selectedSize) message += ` (Size: ${selectedSize})`;
    message += ` x${quantity}\n`;
    message += `💰 Price: $${(product.price * quantity).toLocaleString()}\n\n`;
    message += `Please confirm availability.`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <Layout>
      <div className="container mx-auto py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/catalog" className="hover:text-foreground">Shop</Link>
          <span>/</span>
          <Link to={`/catalog?category=${product.category}`} className="hover:text-foreground capitalize">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-secondary rounded-xl overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <Badge className="bg-gold text-accent-foreground border-0">New</Badge>
                )}
                {product.isBestSeller && (
                  <Badge variant="secondary" className="bg-foreground text-background border-0">
                    Best Seller
                  </Badge>
                )}
              </div>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-gold' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                {product.brand}
              </p>
              <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-gold text-gold'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                    <Badge variant="destructive">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </Badge>
                  </>
                )}
              </div>
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            {/* Size Selection */}
            {product.sizes && (
              <div>
                <p className="font-medium mb-3">Size</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg transition-colors ${
                        selectedSize === size
                          ? 'border-gold bg-gold/10 text-gold'
                          : 'border-border hover:border-gold'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Scent Notes */}
            {product.scentNotes && (
              <div>
                <p className="font-medium mb-3">Scent Profile</p>
                <div className="flex flex-wrap gap-2">
                  {product.scentNotes.map((note) => (
                    <Badge key={note} variant="secondary">
                      {note}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <p className="font-medium mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleAddToCart}
                className="flex-1 h-12 bg-foreground text-background hover:bg-foreground/90"
                disabled={!product.inStock}
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              <Button
                onClick={handleWhatsAppOrder}
                className="flex-1 h-12 bg-[#25D366] hover:bg-[#20BA5C] text-white"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Order via WhatsApp
              </Button>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" className="flex-1">
                <Heart className="h-4 w-4 mr-2" />
                Add to Wishlist
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>

            {/* Delivery Info */}
            <div className="border-t border-border pt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Truck className="h-5 w-5 text-gold" />
                <span>Free delivery on orders over $500</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield className="h-5 w-5 text-gold" />
                <span>Authentic products with full warranty</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <RefreshCw className="h-5 w-5 text-gold" />
                <span>30-day easy returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="specs" className="mt-16">
          <TabsList className="w-full justify-start border-b border-border rounded-none h-auto p-0 bg-transparent">
            {product.specs && (
              <TabsTrigger
                value="specs"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-gold data-[state=active]:bg-transparent"
              >
                Specifications
              </TabsTrigger>
            )}
            <TabsTrigger
              value="reviews"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-gold data-[state=active]:bg-transparent"
            >
              Reviews ({product.reviewCount})
            </TabsTrigger>
            <TabsTrigger
              value="delivery"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-gold data-[state=active]:bg-transparent"
            >
              Delivery & Returns
            </TabsTrigger>
          </TabsList>

          {product.specs && (
            <TabsContent value="specs" className="mt-6">
              <div className="max-w-2xl">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex py-3 border-b border-border last:border-0"
                  >
                    <span className="w-1/3 text-muted-foreground">{key}</span>
                    <span className="w-2/3 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          )}

          <TabsContent value="reviews" className="mt-6">
            <div className="text-center py-12 text-muted-foreground">
              <Star className="h-12 w-12 mx-auto mb-4 text-gold" />
              <p className="text-lg mb-2">Customer reviews coming soon</p>
              <p className="text-sm">Be the first to review this product</p>
            </div>
          </TabsContent>

          <TabsContent value="delivery" className="mt-6">
            <div className="max-w-2xl space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Delivery</h3>
                <p className="text-muted-foreground">
                  Free standard delivery on orders over $500. Express delivery available for an additional fee.
                  Delivery times vary by location.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Returns</h3>
                <p className="text-muted-foreground">
                  30-day return policy for unused items in original packaging.
                  Refunds processed within 5-7 business days.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Pickup</h3>
                <p className="text-muted-foreground">
                  Store pickup available at our Istanbul location. Items ready within 2 hours of order confirmation.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="font-display text-2xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetails;
