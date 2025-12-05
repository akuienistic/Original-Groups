import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, MessageCircle, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { useCartStore } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const WHATSAPP_NUMBER = "211922271119";

const Cart = () => {
  const { items, updateQuantity, removeItem, clearCart, getTotalPrice, generateWhatsAppMessage } = useCartStore();
  const total = getTotalPrice();

  const handleWhatsAppCheckout = () => {
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto py-20">
          <div className="max-w-md mx-auto text-center">
            <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="font-display text-2xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Button asChild className="bg-foreground text-background hover:bg-foreground/90">
              <Link to="/catalog">
                Start Shopping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto py-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.size}`}
                className="flex gap-4 bg-card p-4 rounded-xl border border-border"
              >
                {/* Image */}
                <Link
                  to={`/product/${item.product.id}`}
                  className="w-24 h-24 md:w-32 md:h-32 bg-secondary rounded-lg overflow-hidden flex-shrink-0"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </Link>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.product.brand}</p>
                      <Link
                        to={`/product/${item.product.id}`}
                        className="font-medium hover:text-gold transition-colors line-clamp-2"
                      >
                        {item.product.name}
                      </Link>
                      {item.size && <p className="text-sm text-muted-foreground mt-1">Size: {item.size}</p>}
                    </div>
                    <p className="font-semibold text-lg whitespace-nowrap">
                      ${(item.product.price * item.quantity).toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>

                    {/* Remove */}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={() => removeItem(item.product.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}

            {/* Clear Cart */}
            <Button variant="outline" className="w-full" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-xl p-6 sticky top-24">
              <h2 className="font-display text-xl font-semibold mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{total >= 500 ? "Free" : "$25"}</span>
                </div>
                {total < 500 && (
                  <p className="text-xs text-gold">Add ${(500 - total).toLocaleString()} more for free shipping</p>
                )}
              </div>

              <Separator className="my-4" />

              <div className="flex justify-between font-semibold text-lg mb-6">
                <span>Total</span>
                <span>${(total + (total >= 500 ? 0 : 25)).toLocaleString()}</span>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleWhatsAppCheckout}
                  className="w-full h-12 bg-[#25D366] hover:bg-[#20BA5C] text-white"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Checkout via WhatsApp
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Click to send your order directly to our team
                </p>
              </div>

              <Separator className="my-6" />

              {/* Delivery Options */}
              <div className="space-y-3 text-sm">
                <h3 className="font-medium">Delivery Options</h3>
                <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:border-gold transition-colors">
                  <input type="radio" name="delivery" defaultChecked className="accent-gold" />
                  <div>
                    <p className="font-medium">Home Delivery</p>
                    <p className="text-xs text-muted-foreground">3-5 business days</p>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:border-gold transition-colors">
                  <input type="radio" name="delivery" className="accent-gold" />
                  <div>
                    <p className="font-medium">Store Pickup</p>
                    <p className="text-xs text-muted-foreground">Ready in 2 hours</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
