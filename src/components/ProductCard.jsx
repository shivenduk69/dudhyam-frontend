import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Clock, Sparkles } from 'lucide-react';

const ProductCard = ({ product }) => {
  const {
    id,
    name,
    tagline,
    description,
    status,
    isAvailable,
    category,
    badge,
    highlights,
    color,
  } = product;

  const getBorderColor = () => {
    if (color === 'brown') return 'border-brown hover:border-brown-dark';
    if (color === 'green') return 'border-green hover:border-green-dark';
    if (color === 'gold') return 'border-gold hover:border-gold-dark';
    return 'border-navy hover:border-navy-light';
  };

  const getBadgeStyle = () => {
    if (color === 'brown') return 'bg-brown-50 text-brown border-brown/30';
    if (color === 'green') return 'bg-green-50 text-green border-green/30';
    if (color === 'gold') return 'bg-gold-50 text-navy border-gold/40';
    return 'bg-navy-50 text-navy border-navy/30';
  };

  return (
    <div
      id={id}
      className={`bg-white rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 border-2 ${getBorderColor()} flex flex-col justify-between relative group`}
    >
      <div>
        {/* Top Header & Badge */}
        <div className="flex justify-between items-start mb-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
            {category}
          </span>
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${getBadgeStyle()}`}
          >
            {badge}
          </span>
        </div>

        {/* Product Name & Tagline */}
        <h3 className="text-2xl font-extrabold text-navy group-hover:text-green transition-colors">
          {name}
        </h3>
        <p className="text-xs font-medium text-gray-500 mt-1 mb-4 italic">
          "{tagline}"
        </p>

        {/* Description */}
        <p className="text-sm text-navy/80 leading-relaxed mb-6">
          {description}
        </p>

        {/* Highlights List */}
        <div className="space-y-2 mb-6 pt-4 border-t border-cream-200">
          <p className="text-xs font-bold uppercase tracking-wider text-navy">
            Key Characteristics:
          </p>
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-center text-xs text-navy/90">
              <CheckCircle2 className="w-3.5 h-3.5 text-green mr-2 shrink-0" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer / Status & Action */}
      <div className="pt-4 border-t border-cream-200 flex items-center justify-between">
        <div className="flex items-center space-x-1.5">
          {isAvailable ? (
            <span className="flex items-center text-xs font-bold text-green">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse mr-1.5" />
              {status}
            </span>
          ) : (
            <span className="flex items-center text-xs font-bold text-brown">
              <Clock className="w-3.5 h-3.5 mr-1" />
              {status}
            </span>
          )}
        </div>

        <Link
          to={`/contact?type=${isAvailable ? 'dairy_products' : 'general'}&product=${encodeURIComponent(name)}`}
          className={`text-xs font-bold px-3.5 py-2 rounded-lg transition-all ${
            isAvailable
              ? 'bg-navy hover:bg-green text-white shadow'
              : 'bg-cream-100 hover:bg-cream-200 text-navy border border-navy/20'
          }`}
        >
          {isAvailable ? 'Enquire Now' : 'Register Interest'}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
