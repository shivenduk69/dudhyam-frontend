import React from 'react';

const SectionHeading = ({
  badge,
  title,
  description,
  align = 'center',
  theme = 'light',
}) => {
  const isCenter = align === 'center';
  const isDark = theme === 'dark';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'text-left'}`}>
      {badge && (
        <span
          className={`inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-3 shadow-sm ${
            isDark
              ? 'bg-gold/20 text-gold border border-gold/40'
              : 'bg-green-50 text-green border border-green-100'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
          isDark ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-cream/80' : 'text-navy/70'
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`h-1 w-20 bg-gold mt-4 rounded-full ${
          isCenter ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
};

export default SectionHeading;
