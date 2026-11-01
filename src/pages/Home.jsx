import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import FeatureCard from '../components/FeatureCard';
import { PRODUCTS_DATA, BUSINESS_STATS } from '../utils/constants';
import {
  CheckCircle,
  TrendingUp,
  Droplet,
  Warehouse,
  ShieldAlert,
  ArrowRight,
  HandCoins,
  Cpu,
  Split,
  Sparkles,
  HeartHandshake
} from 'lucide-react';

const Home = () => {
  const whyChooseFeatures = [
    {
      icon: HandCoins,
      title: 'Transparent Farmer Payments',
      description:
        'Fair pricing determined algorithmically by fat and SNF testing, credited directly to rural bank accounts with zero middlemen deductions.',
      accentColor: 'green',
    },
    {
      icon: Cpu,
      title: 'Automated Quality Testing',
      description:
        'Digital ultrasonic milk analyzers test every milk can on the spot before entry, ensuring absolute compositional purity.',
      accentColor: 'navy',
    },
    {
      icon: Split,
      title: 'Segregated Cow & Buffalo Storage',
      description:
        'Dual independent 3,000-litre stainless steel chilling tanks prevent accidental mixing of distinct milk types.',
      accentColor: 'gold',
    },
    {
      icon: Sparkles,
      title: 'Traditional Dairy Heritage',
      description:
        'Slow-crafted soil-pot curd set naturally in clay vessels and granular bilona-style desi ghee for authentic flavor.',
      accentColor: 'brown',
    },
    {
      icon: Droplet,
      title: 'Rigorous Hygiene & Freshness',
      description:
        'Rapid chilling to 4°C within minutes of reception preserves raw bio-integrity without harsh chemical stabilization.',
      accentColor: 'green',
    },
    {
      icon: HeartHandshake,
      title: 'Long-Term Rural Partnerships',
      description:
        'Building enduring prosperity for regional milk producers through consistent daily procurement and mutual respect.',
      accentColor: 'navy',
    },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Business Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Business Overview"
          title="Rural Trust Meets Modern Dairy Technology"
          description="Dudhyam operates at the intersection of traditional farmer empowerment and contemporary cold-chain processing, delivering uncompromised nutrition."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border-t-4 border-green shadow-sm space-y-3">
            <span className="text-3xl font-bold text-green font-mono">01</span>
            <h3 className="text-lg font-bold text-navy">Direct Milk Collection</h3>
            <p className="text-sm text-navy/70 leading-relaxed">
              Procuring unadulterated milk twice daily from hundreds of registered regional dairy farmers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border-t-4 border-navy shadow-sm space-y-3">
            <span className="text-3xl font-bold text-navy font-mono">02</span>
            <h3 className="text-lg font-bold text-navy">Transparent Testing</h3>
            <p className="text-sm text-navy/70 leading-relaxed">
              Every milk sample is digitally analyzed for Fat and SNF in front of the producer before acceptance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border-t-4 border-gold shadow-sm space-y-3">
            <span className="text-3xl font-bold text-gold font-mono">03</span>
            <h3 className="text-lg font-bold text-navy">Dual-Stream Procurement</h3>
            <p className="text-sm text-navy/70 leading-relaxed">
              Strict separate handling of cow and buffalo milk preserves the natural nutritional profiles of both.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border-t-4 border-brown shadow-sm space-y-3">
            <span className="text-3xl font-bold text-brown font-mono">04</span>
            <h3 className="text-lg font-bold text-navy">Chilling & Processing</h3>
            <p className="text-sm text-navy/70 leading-relaxed">
              Rapid cooling in twin 3,000L tanks, combined with artisan clay-pot curd fermentation and ghee craft.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Our Business at a Glance (Active Figures) */}
      <section className="bg-navy text-white py-16 border-y-4 border-gold relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gold/20 text-gold border border-gold/40 mb-3">
              Operational Scale
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Our Business at a Glance
            </h2>
            <p className="text-cream/80 text-base mt-3">
              These verified metrics reflect our current daily operational throughput — active reality, not future projections.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat 1: Daily Collection */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
              <span className="text-xs uppercase font-bold tracking-wider text-green-light block mb-2">
                Daily Intake Volume
              </span>
              <div className="text-4xl font-black text-white font-mono">
                ~{BUSINESS_STATS.dailyTotalLitres} <span className="text-lg font-sans font-semibold text-gold">L</span>
              </div>
              <p className="text-xs text-cream/70 mt-2">
                Total daily milk gathered across morning & evening shifts
              </p>
            </div>

            {/* Stat 2: Cow Milk */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
              <span className="text-xs uppercase font-bold tracking-wider text-gold block mb-2">
                Cow Milk Volume
              </span>
              <div className="text-4xl font-black text-white font-mono">
                ~{BUSINESS_STATS.cowMilkLitres} <span className="text-lg font-sans font-semibold text-gold">L</span>
              </div>
              <p className="text-xs text-cream/70 mt-2">
                Daily fresh cow milk collection stream
              </p>
            </div>

            {/* Stat 3: Buffalo Milk */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
              <span className="text-xs uppercase font-bold tracking-wider text-cream block mb-2">
                Buffalo Milk Volume
              </span>
              <div className="text-4xl font-black text-white font-mono">
                ~{BUSINESS_STATS.buffaloMilkLitres} <span className="text-lg font-sans font-semibold text-gold">L</span>
              </div>
              <p className="text-xs text-cream/70 mt-2">
                Daily rich buffalo milk collection stream
              </p>
            </div>

            {/* Stat 4: Chilling Tanks */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
              <span className="text-xs uppercase font-bold tracking-wider text-green-light block mb-2">
                Storage Capacity
              </span>
              <div className="text-4xl font-black text-white font-mono">
                2 × 3,000 <span className="text-lg font-sans font-semibold text-gold">L</span>
              </div>
              <p className="text-xs text-cream/70 mt-2">
                Two dedicated 3,000-litre stainless steel chillers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Products Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Product Portfolio"
          title="Fresh From Farm, Crafted With Purity"
          description="From whole dairy milk segregated by breed to traditional earthen-pot curd, explore our current range and upcoming value-added offerings."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS_DATA.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center text-sm font-bold text-navy hover:text-green transition-colors"
          >
            <span>Learn more about our product handling and specifications</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>
      </section>

      {/* 5. Why Choose Dudhyam? */}
      <section className="bg-cream-100 py-16 border-y border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Dudhyam Difference"
            title="Why Producers and Customers Trust Us"
            description="Our foundational operating philosophy balances farmer prosperity with consumer health."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseFeatures.map((item, index) => (
              <FeatureCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                accentColor={item.accentColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our Growth Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy to-navy-dark rounded-3xl p-8 sm:p-12 text-white border-2 border-gold/40 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gold/20 text-gold">
                Strategic Roadmap
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Our Growth Vision
              </h2>
              <p className="text-cream/90 text-base leading-relaxed">
                Having established a reliable collection base of ~880 litres daily and insulated 6,000-litre cold chain capability, Dudhyam is strategically advancing into high-demand value-added dairy segments.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-sm text-cream/90">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>Expansion into modern artisanal paneer production lines.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>Scaling our signature earthen soil-pot curd distribution.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>Onboarding more regional dairy farmers with digital payout ledgers.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>Expanding retail and commercial food service partnerships.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right">
              <Link
                to="/farmers"
                className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-navy font-bold px-7 py-3.5 rounded-xl shadow-lg transition-transform transform hover:-translate-y-0.5 text-base"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Call To Action Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl font-extrabold text-navy">
          Join the Dudhyam Dairy Network
        </h2>
        <p className="text-base text-navy/70 max-w-2xl mx-auto">
          Whether you are a dairy farmer looking to supply fresh milk, a bulk consumer, a sweet maker, or a retailer seeking uncompromised dairy purity — we invite you to connect.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
          <Link
            to="/contact?type=farmer_registration"
            className="w-full sm:w-auto bg-green hover:bg-green-dark text-white font-bold px-6 py-3.5 rounded-xl shadow transition-colors"
          >
            Become a Milk Supplier
          </Link>
          <Link
            to="/contact?type=milk_supply"
            className="w-full sm:w-auto bg-gold hover:bg-gold-dark text-navy font-bold px-6 py-3.5 rounded-xl shadow transition-colors"
          >
            Inquire for Bulk Supply
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
