import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-semibold">
              Original <span className="text-gold">Groups</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Premium electronics and luxury Turkish fashion. Authenticity guaranteed.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/catalog" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                Shop All
              </Link>
              <Link to="/catalog?category=phones" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                Phones & Gadgets
              </Link>
              <Link to="/catalog?category=fashion" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                Luxury Fashion
              </Link>
              <Link to="/catalog?category=perfumes" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                Perfumes
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Customer Service</h4>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                Shipping & Delivery
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                Returns & Exchanges
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                Warranty Information
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                FAQs
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>123 Luxury Avenue, Istanbul, Turkey</span>
              </a>
              <a href="tel:+901234567890" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+90 123 456 7890</span>
              </a>
              <a href="mailto:info@originalgroups.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@originalgroups.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © 2024 Original Groups. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-primary-foreground/50 hover:text-gold transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/50 hover:text-gold transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
