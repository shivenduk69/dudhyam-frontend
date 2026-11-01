import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import { PRODUCTS_DATA } from '../utils/constants';
import { Link } from 'react-router-dom';
import { Info, Sparkles, ShieldCheck } from 'lucide-react';

const Products = () => {
  const [filter, setFilter] = useState('all');

  const filteredProducts = PRODUCTS_DATA.filter((item) => {
    if (filter === 'available') return item.isAvailable;
    if (filter === 'planned') return !item.isAvailable;
    if (filter === 'milk') return item.category === 'Liquid Milk';
    return true;
  });

  return (
    <div className="space-y-20 pb-20">
      {/* Header Banner */}
      <section className="bg-navy text-white py-16 sm:py-20 border-b-4 border-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-gold/20 text-gold border border-gold/40 mb-4">
            Dairy Product Range
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Wholesome Dairy Crafted With Purity
          </h1>
          <p className="mt-4 text-base sm:text-lg text-cream/90 leading-relaxed">
            Every Dudhyam product is rooted in rigorous milk testing, segregated cold-chain storage, and traditional processing techniques.
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              filter === 'all'
                ? 'bg-navy text-white shadow-md'
                : 'bg-white text-navy hover:bg-cream-100 border border-cream-200'
            }`}
          >
            All Offerings ({PRODUCTS_DATA.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('available')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              filter === 'available'
                ? 'bg-green text-white shadow-md'
                : 'bg-white text-navy hover:bg-cream-100 border border-cream-200'
            }`}
          >
            Active Daily Products
          </button>
          <button
            type="button"
            onClick={() => setFilter('milk')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              filter === 'milk'
                ? 'bg-navy text-white shadow-md'
                : 'bg-white text-navy hover:bg-cream-100 border border-cream-200'
            }`}
          >
            Fresh Liquid Milk
          </button>
          <button
            type="button"
            onClick={() => setFilter('planned')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              filter === 'planned'
                ? 'bg-brown text-white shadow-md'
                : 'bg-white text-navy hover:bg-cream-100 border border-cream-200'
            }`}
          >
            Planned Expansions
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Focus on Traditional Soil-Pot Curd */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brown-50 rounded-3xl p-8 sm:p-12 border-2 border-brown/40 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brown/15 text-brown">
                Heritage Spotlight
              </span>
              <h2 className="text-3xl font-extrabold text-navy">
                Why Traditional Soil-Pot Curd Matters
              </h2>
              <p className="text-navy/80 text-base leading-relaxed">
                Conventional plastic cups lock in heat and sweat moisture back into curd, making it runny and overly acidic. Dudhyam’s Matka Dahi is cultured in natural, breathable terracotta vessels.
              </p>
              <ul className="space-y-2 text-sm text-navy/90">
                <li className="flex items-start space-x-2">
                  <span className="text-brown font-bold mr-1">•</span>
                  <span>Clay walls naturally absorb excess whey, yielding dense, velvety curd naturally.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-brown font-bold mr-1">•</span>
                  <span>Mild, earthy natural aroma reminiscent of ancient dairy heritage.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-brown font-bold mr-1">•</span>
                  <span>Zero gelatin, pectin, starch, or artificial stabilizers added.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-4 text-center">
              <div className="bg-white p-6 rounded-2xl border-2 border-brown shadow-sm space-y-3">
                <span className="text-4xl block">🏺</span>
                <h4 className="text-lg font-bold text-navy">Signature Matka Dahi</h4>
                <p className="text-xs text-navy/70">
                  Available daily in single-batch authentic clay vessels.
                </p>
                <Link
                  to="/contact?type=dairy_products&product=Traditional%20Soil-Pot%20Curd"
                  className="inline-block w-full bg-brown hover:bg-brown-dark text-white font-bold py-2.5 px-4 rounded-xl text-xs shadow transition-colors"
                >
                  Inquire For Distribution
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Paneer Transparency Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cream-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-navy shrink-0 mt-1">
              <Info className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h4 className="text-base font-bold text-navy">Product Roadmap Transparency</h4>
              <p className="text-sm text-navy/70 mt-0.5">
                While Cow Milk, Buffalo Milk, Soil-Pot Curd, and Desi Ghee are actively produced and distributed, <strong>Malai Paneer</strong> is currently under development as a planned expansion to ensure our dedicated press-line meets our exacting purity standards.
              </p>
            </div>
          </div>
          <Link
            to="/contact?type=dairy_products"
            className="shrink-0 bg-navy hover:bg-green text-white text-xs font-bold px-5 py-3 rounded-xl transition-colors shadow"
          >
            Inquire About Future Batches
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
