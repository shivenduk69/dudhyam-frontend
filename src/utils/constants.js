export const BUSINESS_STATS = {
  dailyTotalLitres: '880',
  cowMilkLitres: '440',
  buffaloMilkLitres: '440',
  cowStorageLitres: '3,000',
  buffaloStorageLitres: '3,000',
  totalStorageCapacity: '6,000',
  tanksCount: 2,
};

export const PRODUCTS_DATA = [
  {
    id: 'cow-milk',
    name: 'Fresh Cow Milk',
    tagline: 'Light, naturally sweet, and easy to digest',
    description:
      'Procured daily from local dairy farmers, chilled immediately, and stored in a dedicated 3,000-litre tank to guarantee purity and uncompromised freshness.',
    status: 'Available Daily',
    isAvailable: true,
    category: 'Liquid Milk',
    badge: 'Daily Fresh',
    highlights: ['Separate 3,000L cold chain', 'Unadulterated & whole', 'Tested for Fat & SNF'],
    color: 'green',
  },
  {
    id: 'buffalo-milk',
    name: 'Fresh Buffalo Milk',
    tagline: 'Rich, thick, and wholesome dairy nourishment',
    description:
      'High in natural cream and natural solids, procured from local buffalo keepers and handled in segregated sanitary chillers for households and traditional sweet makers.',
    status: 'Available Daily',
    isAvailable: true,
    category: 'Liquid Milk',
    badge: 'Rich & Creamy',
    highlights: ['Segregated cooling tank', 'Naturally high cream content', 'Direct farm-to-chiller'],
    color: 'navy',
  },
  {
    id: 'soil-pot-curd',
    name: 'Traditional Soil-Pot Curd',
    tagline: 'Slowly set in earthen matkas for authentic aroma & texture',
    description:
      'Crafted according to timeless dairy traditions. Porous earthen clay pots absorb excess moisture, producing a naturally thick, mild, and velvety curd without synthetic thickeners.',
    status: 'Signature Offering',
    isAvailable: true,
    category: 'Fermented Dairy',
    badge: 'Traditional Clay Pot',
    highlights: ['Set in pure clay vessels', 'Naturally thick consistency', 'Active live cultures'],
    color: 'brown',
  },
  {
    id: 'pure-ghee',
    name: 'Pure Desi Ghee',
    tagline: 'Golden, granular, and intensely aromatic',
    description:
      'Simmered slowly using traditional heating vessels to preserve vital nutrients, aroma, and granular texture. Perfect for auspicious cooking and wholesome nutrition.',
    status: 'Available Daily',
    isAvailable: true,
    category: 'Clarified Butter',
    badge: 'Slow Cooked',
    highlights: ['Granular danedar texture', 'Authentic aroma', 'No artificial flavor or color'],
    color: 'gold',
  },
  {
    id: 'malai-paneer',
    name: 'Soft Malai Paneer',
    tagline: 'High-protein, melt-in-mouth artisanal cottage cheese',
    description:
      'Our upcoming value-added line designed to bring pristine freshness and soft texture straight from our processing facility to your kitchen.',
    status: 'Planned / Future Offering',
    isAvailable: false,
    category: 'Value-Added Dairy',
    badge: 'Coming Soon',
    highlights: ['High-protein formulation', 'Zero starch fillers', 'State-of-the-art pressing line'],
    color: 'navy',
  },
];

export const FARMER_STEPS = [
  {
    step: '01',
    title: 'Farmer Brings Milk',
    description: 'Local dairy farmers arrive at the Dudhyam rural collection center twice daily with fresh morning and evening milk.',
  },
  {
    step: '02',
    title: 'Precision Quantity Measurement',
    description: 'Milk is weighed using certified digital weighing scales connected directly to our centralized collection ledger.',
  },
  {
    step: '03',
    title: 'Automated Fat & SNF Testing',
    description: 'Every batch is analyzed immediately with automated ultrasonic milk analyzers to determine exact Fat and SNF metrics.',
  },
  {
    step: '04',
    title: 'Transparent Instant Pricing',
    description: 'The rate chart calculates the fair milk price instantly on an electronic display, with zero middlemen deductions.',
  },
  {
    step: '05',
    title: 'Direct Bank Transfer',
    description: 'Payments are routed directly and securely to the farmer’s verified bank account on an agreed, reliable payout schedule.',
  },
];

export const OPERATIONS_STEPS = [
  {
    number: '01',
    title: 'Milk Collection',
    summary: 'Direct morning and evening intake from verified regional dairy farmers.',
    details: 'Farmers deliver fresh raw milk to our clean collection center. Every delivery is logged with farmer ID and timestamp.',
  },
  {
    number: '02',
    title: 'Automated Quality Testing',
    summary: 'Instant compositional evaluation of fat, SNF, and purity parameters.',
    details: 'Digital testing equipment assesses milk quality on the spot, ensuring no adulteration or water dilution.',
  },
  {
    number: '03',
    title: 'Weighing and Pricing',
    summary: 'Certified electronic weight capture and algorithmic pricing.',
    details: 'Accurate digital weight scales print instantaneous receipts for farmers displaying volume and rate per litre.',
  },
  {
    number: '04',
    title: 'Segregation of Cow & Buffalo Milk',
    summary: 'Strict physical separation of cow and buffalo milk streams.',
    details: 'Cow and buffalo milk are never mixed; each variety flows through dedicated stainless-steel sanitary lines.',
  },
  {
    number: '05',
    title: 'Cold Storage (Two 3,000L Tanks)',
    summary: 'Rapid chilling to 4°C across two dedicated 3,000-litre insulated tanks.',
    details: 'State-of-the-art refrigeration prevents bacterial growth and preserves raw milk freshness for processing.',
  },
  {
    number: '06',
    title: 'Dairy Processing',
    summary: 'Gentle heating, pasteurization, and traditional curd/ghee preparation.',
    details: 'Equipped with precision temperature-controlled heating and cooling infrastructure for both modern and artisanal batches.',
  },
  {
    number: '07',
    title: 'Hygienic Packaging',
    summary: 'Aseptic packaging and earthen clay matka sealing.',
    details: 'Finished milk and soil-pot curd are packaged in sanitized containers preserving fresh taste and integrity.',
  },
  {
    number: '08',
    title: 'Cold-Chain Distribution',
    summary: 'Prompt dispatch to local households, retailers, and commercial partners.',
    details: 'Prompt delivery schedule ensures consumers enjoy dairy within hours of procurement.',
  },
];

export const INQUIRY_TYPES = [
  { value: 'general', label: 'General Enquiry' },
  { value: 'milk_supply', label: 'Bulk Milk Supply' },
  { value: 'dairy_products', label: 'Dairy Products Distribution' },
  { value: 'partnership', label: 'Business Partnership' },
  { value: 'farmer_registration', label: 'Become a Dudhyam Milk Supplier' },
  { value: 'other', label: 'Other Inquiry' },
];
