import React from 'react';

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  accentColor = 'green',
}) => {
  const getIconContainerStyle = () => {
    if (accentColor === 'gold') return 'bg-gold/15 text-navy border border-gold/30';
    if (accentColor === 'brown') return 'bg-brown/15 text-brown border border-brown/30';
    if (accentColor === 'navy') return 'bg-navy/10 text-navy border border-navy/20';
    return 'bg-green/15 text-green border border-green/30';
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-200 border border-cream-200 hover:border-gold/50 flex flex-col justify-between">
      <div>
        {Icon && (
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${getIconContainerStyle()}`}
          >
            <Icon className="w-6 h-6" />
          </div>
        )}
        <h3 className="text-xl font-bold text-navy mb-2.5">{title}</h3>
        <p className="text-sm text-navy/75 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
