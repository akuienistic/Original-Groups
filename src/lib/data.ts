export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'phones' | 'fashion' | 'perfumes' | 'accessories';
  subcategory?: string;
  brand: string;
  images: string[];
  description: string;
  specs?: Record<string, string>;
  sizes?: string[];
  scentNotes?: string[];
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  rating: number;
  reviewCount: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 17 Pro Max',
    price: 1499,
    category: 'phones',
    brand: 'Apple',
    images: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800',
    ],
    description: 'The most advanced iPhone ever. Featuring the A19 Bionic chip, ProMotion display, and revolutionary camera system.',
    specs: {
      'Display': '6.9" Super Retina XDR',
      'Chip': 'A19 Bionic',
      'Camera': '48MP Main + 12MP Ultra Wide + 12MP Telephoto',
      'Storage': '256GB',
      'Battery': 'Up to 29 hours video playback',
    },
    inStock: true,
    isNew: true,
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 234,
  },
  {
    id: '2',
    name: 'Samsung Galaxy S25 Ultra',
    price: 1299,
    category: 'phones',
    brand: 'Samsung',
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
    ],
    description: 'Ultimate power meets intelligent design. Experience the future with Galaxy AI and the most advanced S Pen yet.',
    specs: {
      'Display': '6.8" Dynamic AMOLED 2X',
      'Processor': 'Snapdragon 8 Gen 4',
      'Camera': '200MP Wide + 12MP Ultra Wide + 50MP Telephoto',
      'Storage': '512GB',
      'Battery': '5000mAh',
    },
    inStock: true,
    isNew: true,
    rating: 4.8,
    reviewCount: 189,
  },
  {
    id: '3',
    name: 'Premium Turkish Kaftan - Men',
    price: 899,
    originalPrice: 1199,
    category: 'fashion',
    subcategory: 'men',
    brand: 'Ottoman Couture',
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    ],
    description: 'Handcrafted luxury kaftan featuring intricate embroidery and premium Turkish cotton. A masterpiece of traditional craftsmanship.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 67,
  },
  {
    id: '4',
    name: 'Elegant Turkish Abaya - Women',
    price: 749,
    category: 'fashion',
    subcategory: 'women',
    brand: 'Anatolia Elegance',
    images: [
      'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800',
    ],
    description: 'Sophisticated abaya with delicate gold threading and flowing silhouette. Perfect for special occasions.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    isNew: true,
    rating: 4.8,
    reviewCount: 92,
  },
  {
    id: '5',
    name: 'Oud Royal Parfum',
    price: 450,
    category: 'perfumes',
    brand: 'Maison Royale',
    images: [
      'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800',
    ],
    description: 'An opulent blend of rare oud, amber, and precious woods. The signature scent of royalty.',
    scentNotes: ['Oud', 'Amber', 'Sandalwood', 'Rose', 'Musk'],
    inStock: true,
    isBestSeller: true,
    rating: 4.9,
    reviewCount: 156,
  },
  {
    id: '6',
    name: 'Midnight Noir Eau de Parfum',
    price: 320,
    category: 'perfumes',
    brand: 'Luxe Fragrances',
    images: [
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=800',
      'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=800',
    ],
    description: 'A mysterious blend of dark florals and exotic spices. Captivating and unforgettable.',
    scentNotes: ['Black Orchid', 'Saffron', 'Leather', 'Vanilla', 'Tonka Bean'],
    inStock: true,
    rating: 4.7,
    reviewCount: 89,
  },
  {
    id: '7',
    name: 'AirPods Pro 3',
    price: 299,
    category: 'accessories',
    brand: 'Apple',
    images: [
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800',
    ],
    description: 'Next-generation active noise cancellation and immersive spatial audio.',
    specs: {
      'Chip': 'H3',
      'Battery': '6 hours (30 hours with case)',
      'Features': 'ANC, Transparency Mode, Spatial Audio',
    },
    inStock: true,
    isNew: true,
    rating: 4.8,
    reviewCount: 312,
  },
  {
    id: '8',
    name: 'Luxury Leather Watch Band',
    price: 189,
    category: 'accessories',
    brand: 'Original Groups',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
    ],
    description: 'Premium Italian leather watch band with gold buckle. Compatible with Apple Watch and Samsung Galaxy Watch.',
    inStock: true,
    rating: 4.6,
    reviewCount: 45,
  },
];

export const categories = [
  {
    id: 'phones',
    name: 'Phones & Gadgets',
    description: 'Latest flagship smartphones and tech',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&q=80',
  },
  {
    id: 'fashion',
    name: 'Luxury Fashion',
    description: 'Authentic Turkish designer wear',
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80',
  },
  {
    id: 'perfumes',
    name: 'Perfumes',
    description: 'Exclusive fragrances & oud',
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800&q=80',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Premium gadgets & accessories',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80',
  },
];

export const brands = ['Apple', 'Samsung', 'Ottoman Couture', 'Anatolia Elegance', 'Maison Royale', 'Luxe Fragrances', 'Original Groups'];
