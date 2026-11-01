import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@assets/logo.png';
import { ArrowRight, ShieldCheck, Droplets, Warehouse, Award } from 'lucide-react';
import { BUSINESS_STATS } from '../utils/constants';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-navy to-navy-dark text-white pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden border-b-4 border-gold">
      {/* Decorative background grid and glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFC928_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-navy-light/80 border border-gold/40 px-3.5 py-1.5 rounded-full text-xs font-semibold text-gold shadow-sm">
              <ShieldCheck className="w-4 h-4 text-green-light" />
              <span>Transparent Procurement & Modern Cold Chain</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              Pure Milk.{' '}
              <span className="text-gold block sm:inline">Prosperous Farmers.</span>
            </h1>

            <p className="text-lg sm:text-xl text-cream/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Dudhyam bridges rural dairy producers with urban purity. We operate an ethical milk collection network, rapid fat and SNF testing, dedicated 3,000-litre separate cow and buffalo cold storage, and handcrafted dairy products.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/operations"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-navy font-bold text-base px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Explore Our Business</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-cream border-2 border-cream/40 hover:border-cream font-semibold text-base px-7 py-3.5 rounded-xl transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>

            {/* Key trust badges */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-navy-light/60">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-green/20 flex items-center justify-center text-green-light shrink-0">
                  <Droplets className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white leading-tight">Zero Adulteration</p>
                  <p className="text-[11px] text-cream/70">Tested at source</p>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold shrink-0">
                  <Warehouse className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white leading-tight">6,000L Chilling</p>
                  <p className="text-[11px] text-cream/70">Segregated tanks</p>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 col-span-2 sm:col-span-1 justify-center sm:justify-start">
                <div className="w-8 h-8 rounded-full bg-brown/30 flex items-center justify-center text-gold shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white leading-tight">Direct Payouts</p>
                  <p className="text-[11px] text-cream/70">Bank transferred</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Card / Visual Branding */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border-4 border-gold text-navy relative">
              <div className="absolute -top-3 right-6 bg-green text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                Current Operations
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={logo}
                  alt="Dudhyam Logo"
                  className="h-16 w-auto object-contain bg-cream-50 p-1.5 rounded-xl border border-cream-200"
                />
                <div>
                  <h3 className="text-xl font-extrabold text-navy">Dudhyam Dairy Hub</h3>
                  <p className="text-xs text-green font-semibold">Active Procurement Facility</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-cream border border-cream-200">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs uppercase font-bold text-navy/70">Daily Milk Intake</span>
                    <span className="text-xs font-extrabold text-green bg-green-50 px-2 py-0.5 rounded">
                      Active Everyday
                    </span>
                  </div>
                  <div className="text-3xl font-extrabold text-navy">
                    ~{BUSINESS_STATS.dailyTotalLitres}{' '}
                    <span className="text-base font-semibold text-navy/70">Litres / Day</span>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-navy/80 pt-2 border-t border-cream-200/80">
                    <div>
                      <span className="text-gray-500 block">Cow Milk:</span>
                      <strong className="text-navy">{BUSINESS_STATS.cowMilkLitres} Litres</strong>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Buffalo Milk:</span>
                      <strong className="text-navy">{BUSINESS_STATS.buffaloMilkLitres} Litres</strong>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-navy text-white">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs uppercase font-bold text-gold">Storage Infrastructure</span>
                    <span className="text-[11px] bg-white/20 px-2 py-0.5 rounded text-cream font-medium">
                      Two Independent Tanks
                    </span>
                  </div>
                  <div className="text-2xl font-extrabold text-white">
                    2 × 3,000 Litres
                  </div>
                  <p className="text-xs text-cream/80 mt-1">
                    Physical isolation ensures zero mixing between cow and buffalo milk at 4°C chilling.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-brown-50 border border-brown-100 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-brown" />
                    <span className="text-xs font-bold text-brown">Signature Product:</span>
                    <span className="text-xs text-navy font-medium">Traditional Soil-Pot Curd</span>
                  </div>
                  <Link
                    to="/products#soil-pot-curd"
                    className="text-xs font-bold text-brown hover:text-brown-dark underline"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
