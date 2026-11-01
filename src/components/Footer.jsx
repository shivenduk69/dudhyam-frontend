import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@assets/logo.png';
import { Phone, Mail, MapPin, ShieldCheck, HeartHandshake } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-cream pt-16 pb-8 border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="Dudhyam Logo" className="h-16 w-auto object-contain bg-white/5 p-1 rounded-lg" />
              <div>
                <span className="text-xl font-bold tracking-tight text-white block">
                  DUDHYAM
                </span>
                <span className="text-xs text-gold font-medium uppercase tracking-wider block">
                  Dairy Enterprise
                </span>
              </div>
            </Link>
            <p className="text-cream/80 text-sm leading-relaxed">
              Empowering regional dairy farmers through transparent procurement, automated testing, dedicated cold chain segregation, and wholesome traditional dairy products.
            </p>
            <div className="flex items-center space-x-2 text-gold text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-green-light" />
              <span>Pure Milk. Prosperous Farmers.</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white text-base font-bold uppercase tracking-wider mb-4 border-b border-navy-light/60 pb-2">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-cream/80 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-cream/80 hover:text-gold transition-colors">
                  About Our Business
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-cream/80 hover:text-gold transition-colors">
                  Dairy Products
                </Link>
              </li>
              <li>
                <Link to="/farmers" className="text-cream/80 hover:text-gold transition-colors flex items-center">
                  <span>Farmer Procurement</span>
                  <span className="ml-2 text-[10px] bg-green text-white font-bold px-1.5 py-0.5 rounded">
                    Direct Payout
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/operations" className="text-cream/80 hover:text-gold transition-colors">
                  Processing & Cold Chain
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream/80 hover:text-gold transition-colors">
                  Contact Dudhyam
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div>
            <h4 className="text-white text-base font-bold uppercase tracking-wider mb-4 border-b border-navy-light/60 pb-2">
              Our Offerings
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/products#cow-milk" className="text-cream/80 hover:text-gold transition-colors flex items-center justify-between">
                  <span>Fresh Cow Milk</span>
                  <span className="text-xs text-green-light font-mono">440 L/day</span>
                </Link>
              </li>
              <li>
                <Link to="/products#buffalo-milk" className="text-cream/80 hover:text-gold transition-colors flex items-center justify-between">
                  <span>Fresh Buffalo Milk</span>
                  <span className="text-xs text-gold font-mono">440 L/day</span>
                </Link>
              </li>
              <li>
                <Link to="/products#soil-pot-curd" className="text-cream/80 hover:text-gold transition-colors flex items-center justify-between">
                  <span>Traditional Soil-Pot Curd</span>
                  <span className="text-xs text-brown-light font-mono">Matka Dahi</span>
                </Link>
              </li>
              <li>
                <Link to="/products#pure-ghee" className="text-cream/80 hover:text-gold transition-colors">
                  Pure Desi Ghee
                </Link>
              </li>
              <li>
                <span className="text-cream/50 text-xs italic">
                  Malai Paneer (Planned Expansion)
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Details (Configurable Placeholders) */}
          <div>
            <h4 className="text-white text-base font-bold uppercase tracking-wider mb-4 border-b border-navy-light/60 pb-2">
              Connect With Us
            </h4>
            <div className="space-y-3 text-sm text-cream/80">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>
                  Dudhyam Collection & Processing Facility<br />
                  <span className="text-xs text-cream/60">(Regional Dairy Operational Hub)</span>
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>Enquiry Desk Available via Contact Form</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>contact@dudhyam.local</span>
              </div>
              <div className="pt-2">
                <Link
                  to="/contact?type=farmer_registration"
                  className="inline-flex items-center text-xs bg-green hover:bg-green-dark text-white font-semibold px-3 py-2 rounded-lg transition-colors"
                >
                  <HeartHandshake className="w-4 h-4 mr-1.5" />
                  Become a Milk Supplier
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-navy-light/40 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/60 space-y-4 sm:space-y-0">
          <p>
            © {currentYear} Dudhyam Dairy Collection & Processing. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/about" className="hover:text-gold transition-colors">
              Business Ethics
            </Link>
            <Link to="/farmers" className="hover:text-gold transition-colors">
              Farmer Transparency
            </Link>
            <Link to="/contact" className="hover:text-gold transition-colors">
              Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
