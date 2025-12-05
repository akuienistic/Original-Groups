import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from './data';

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, quantity?: number, size?: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  generateWhatsAppMessage: () => string;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product, quantity = 1, size) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.product.id === product.id && item.size === size
          );
          
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product.id === product.id && item.size === size
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }
          
          return {
            items: [...state.items, { product, quantity, size }],
          };
        });
      },
      
      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        }));
      },
      
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
          ),
        }));
      },
      
      clearCart: () => set({ items: [] }),
      
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      
      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        );
      },
      
      generateWhatsAppMessage: () => {
        const items = get().items;
        const total = get().getTotalPrice();
        
        let message = 'Hello Original Groups, I would like to order:\n\n';
        
        items.forEach((item) => {
          message += `• ${item.product.name}`;
          if (item.size) message += ` (Size: ${item.size})`;
          message += ` x${item.quantity} - $${(item.product.price * item.quantity).toLocaleString()}\n`;
        });
        
        message += `\n💰 Total: $${total.toLocaleString()}\n\nPlease confirm availability and delivery details.`;
        
        return encodeURIComponent(message);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
