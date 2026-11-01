import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { BUSINESS_STATS } from '../utils/constants';
import {
  ShieldCheck,
  Target,
  Eye,
  HeartHandshake,
  CheckCircle2,
  Droplet,
  Warehouse,
  Flame,
  ArrowRight
} from 'lucide-react';

const About = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Header Banner */}
      <section className="bg-navy text-white py-16 sm:py-20 border-b-4 border-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-gold/20 text-gold border border-gold/40 mb-4">
            About Dudhyam
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built on Farmer Trust and Traditional Purity
          </h1>
          <p className="mt-4 text-base sm:text-lg text-cream/90 leading-relaxed">
            Dudhyam is a dedicated milk collection, chilling, and processing business created to restore dignity to rural dairy farming and provide families with unadulterated, wholesome milk products.
          </p>
        </div>
      </section>

      {/* Business Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              align="left"
              badge="Our Story & Philosophy"
              title="A Purpose-Driven Dairy Enterprise"
            />
            <p className="text-base text-navy/80 leading-relaxed">
              At Dudhyam, we believe that true dairy excellence begins right at the village cowshed. Milk is not merely a commodity; it is a sacred dietary staple that sustains health and vitalizes rural economies.
            </p>
            <p className="text-base text-navy/80 leading-relaxed">
              Historically, local milk producers faced opaque pricing, inaccurate volume measures, and delayed payments from middlemen. Dudhyam was established to revolutionize this model by integrating transparent automated quality measurement with immediate cold chain segregation.
            </p>
            <div className="p-5 rounded-2xl bg-cream-100 border border-cream-200 space-y-3">
              <h4 className="text-sm font-bold text-navy uppercase tracking-wider">
                Current Operational Strength
              </h4>
              <p className="text-sm text-navy/80">
                Today, Dudhyam actively collects approximately <strong>{BUSINESS_STATS.dailyTotalLitres} litres</strong> of fresh milk daily — evenly balanced between <strong>{BUSINESS_STATS.cowMilkLitres} litres of cow milk</strong> and <strong>{BUSINESS_STATS.buffaloMilkLitres} litres of buffalo milk</strong>. Our facility is anchored by two independent <strong>3,000-litre</strong> chilling units, ensuring zero cross-mingling of milk varieties.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green/30 space-y-6">
              <h3 className="text-xl font-bold text-navy border-b border-cream-200 pb-3 flex items-center">
                <ShieldCheck className="w-5 h-5 text-green mr-2" />
                <span>Our Core Operating Pillars</span>
              </h3>

              <div className="space-y-4 text-sm text-navy/80">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green/20 flex items-center justify-center text-green shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-navy block">Strict Physical Segregation:</strong>
                    Separate cow and buffalo milk pipelines, storage tanks, and handling protocols.
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-gold/30 flex items-center justify-center text-navy shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-navy block">Algorithmic Transparency:</strong>
                    Direct fat and SNF testing determines fair rates automatically on clear digital screens.
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-brown/20 flex items-center justify-center text-brown shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-navy block">Traditional Fermentation:</strong>
                    Respecting artisanal clay vessel methods for signature curd and slow-simmered ghee.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-cream-100 py-16 border-y border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border-t-4 border-green space-y-4">
              <div className="w-12 h-12 rounded-xl bg-green-50 text-green flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-navy">Our Mission</h3>
              <p className="text-base text-navy/80 leading-relaxed">
                To build an ethical, technology-enabled dairy collection and cold-chain ecosystem that guarantees fair, prompt compensation to local dairy farmers while delivering pure, unadulterated liquid milk and traditional dairy products to consumers.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border-t-4 border-gold space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold-50 text-navy flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-navy">Our Vision</h3>
              <p className="text-base text-navy/80 leading-relaxed">
                To become the most dependable and trusted regional dairy brand, recognized for transparent rural procurement practices, unwavering quality standards, and the celebration of traditional Indian dairy craft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Farmers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-md border-2 border-navy/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-green block">
                Farmer-Centric Partnership
              </span>
              <h2 className="text-3xl font-extrabold text-navy">
                Our Uncompromising Commitment to Dairy Farmers
              </h2>
              <p className="text-navy/80 text-base leading-relaxed">
                Farmers are the heartbeat of Dudhyam. We treat every supplier as an equal stakeholder in our enterprise. By eliminating intermediaries and deploying calibrated digital equipment at the collection center, we ensure that every millilitre of milk and every decimal point of fat is honored accurately.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-navy/90">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-green shrink-0" />
                  <span>On-the-spot digital receipt for quantity & fat</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-green shrink-0" />
                  <span>Predictable, hassle-free bank account payouts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-green shrink-0" />
                  <span>Year-round daily procurement without off-season cuts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-green shrink-0" />
                  <span>Transparent rate card linked to analytical testing</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right">
              <Link
                to="/farmers"
                className="inline-flex items-center justify-center bg-green hover:bg-green-dark text-white font-bold px-6 py-3.5 rounded-xl shadow transition-colors text-sm"
              >
                <span>Read Full Farmer Process</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Values + Modern Infrastructure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Harmonious Approach"
          title="Traditional Values Combined With Modern Infrastructure"
          description="We do not compromise on timeless taste, nor do we compromise on temperature-controlled safety."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-7 rounded-2xl border border-cream-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-brown-50 text-brown flex items-center justify-center font-bold">
              🏺
            </div>
            <h3 className="text-lg font-bold text-navy">Authentic Soil-Pot Fermentation</h3>
            <p className="text-sm text-navy/70 leading-relaxed">
              Modern stainless steel cannot replicate the porous breathing of unglazed earthen pots. Our traditional dahi is naturally set in clay matkas, ensuring rich curd with thick natural consistency.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-cream-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-navy-50 text-navy flex items-center justify-center font-bold">
              ❄️
            </div>
            <h3 className="text-lg font-bold text-navy">Rapid Bulk Milk Chillers</h3>
            <p className="text-sm text-navy/70 leading-relaxed">
              Two 3,000-litre stainless steel insulated tanks cool collected milk down to 4°C within hours, arresting microbial growth without requiring artificial preservatives.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-cream-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-lg bg-gold-50 text-navy flex items-center justify-center font-bold">
              🔥
            </div>
            <h3 className="text-lg font-bold text-navy">Controlled Thermal Processing</h3>
            <p className="text-sm text-navy/70 leading-relaxed">
              Precision steam-jacketed heating vessels allow gentle pasteurization and slow simmering of butter into golden, fragrant desi ghee without scorching the milk solids.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
