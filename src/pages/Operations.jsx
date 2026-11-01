import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { OPERATIONS_STEPS, BUSINESS_STATS } from '../utils/constants';
import {
  Warehouse,
  ThermometerSnowflake,
  Flame,
  Split,
  Truck,
  PackageCheck,
  CheckCircle2,
  Cpu,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Operations = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Header Banner */}
      <section className="bg-navy text-white py-16 sm:py-20 border-b-4 border-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-gold/20 text-gold border border-gold/40 mb-4">
            Facility & Workflow
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            End-To-End Dairy Processing Infrastructure
          </h1>
          <p className="mt-4 text-base sm:text-lg text-cream/90 leading-relaxed">
            From calibrated rural intake points to our twin 3,000-litre insulated cold-chain chillers and precision heating systems, examine how Dudhyam guarantees quality at every stage.
          </p>
        </div>
      </section>

      {/* Facility Highlights / Two 3,000L Tanks & Thermal Infra */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Chilling Infrastructure */}
          <div className="bg-white rounded-2xl p-8 shadow-md border-t-4 border-navy space-y-4">
            <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy flex items-center justify-center">
              <ThermometerSnowflake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy">Twin 3,000L Chilling Tanks</h3>
            <p className="text-sm text-navy/75 leading-relaxed">
              Equipped with two independent 3,000-litre stainless-steel milk storage tanks totaling 6,000L cold capacity. Dedicated dual-compressors chill milk to 4°C within hours of intake to arrest acidity.
            </p>
            <div className="text-xs font-bold text-navy bg-cream-100 p-2.5 rounded-lg border border-cream-200">
              ⚡ Cow Milk Chiller: 3,000L | Buffalo Milk Chiller: 3,000L
            </div>
          </div>

          {/* Strict Breed Segregation */}
          <div className="bg-white rounded-2xl p-8 shadow-md border-t-4 border-gold space-y-4">
            <div className="w-12 h-12 rounded-xl bg-gold-50 text-navy flex items-center justify-center">
              <Split className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy">Strict Line Segregation</h3>
            <p className="text-sm text-navy/75 leading-relaxed">
              Cow and buffalo milk are never pooled into the same vessel. Isolated reception manifolds, sanitary transfer pumps, and dedicated pipelines eliminate cross-contamination.
            </p>
            <div className="text-xs font-bold text-navy bg-cream-100 p-2.5 rounded-lg border border-cream-200">
              🥛 Preserves natural cow A2 characteristics & buffalo cream density
            </div>
          </div>

          {/* Heating & Traditional Processing */}
          <div className="bg-white rounded-2xl p-8 shadow-md border-t-4 border-brown space-y-4">
            <div className="w-12 h-12 rounded-xl bg-brown-50 text-brown flex items-center justify-center">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy">Heating & Fermentation Units</h3>
            <p className="text-sm text-navy/75 leading-relaxed">
              Integrated precision heating and cooling infrastructure supports gentle batch pasteurization, controlled incubation for traditional soil-pot curd, and slow-fire desi ghee rendering.
            </p>
            <div className="text-xs font-bold text-navy bg-cream-100 p-2.5 rounded-lg border border-cream-200">
              🏺 Temperature-controlled incubation chambers for clay matka dahi
            </div>
          </div>
        </div>
      </section>

      {/* The 8-Step Complete Operational Workflow */}
      <section className="bg-cream-100 py-16 border-y border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Standard Operating Procedures"
            title="The Dudhyam Operational Lifecycle"
            description="A systematic, hygiene-focused journey from farm delivery to final consumer fulfillment."
          />

          <div className="space-y-6">
            {OPERATIONS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-cream-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-gold transition-all"
              >
                <div className="flex items-start space-x-5">
                  <span className="text-3xl font-black font-mono text-navy shrink-0 bg-cream p-3 rounded-xl border border-cream-200">
                    {step.number}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-navy">{step.title}</h3>
                    <p className="text-xs font-semibold text-green uppercase tracking-wider">
                      {step.summary}
                    </p>
                    <p className="text-sm text-navy/75 mt-1 leading-relaxed max-w-3xl">
                      {step.details}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 self-end md:self-center">
                  <span className="text-xs font-bold text-navy bg-gold/20 border border-gold/40 px-3 py-1.5 rounded-full inline-flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-navy mr-1.5" />
                    Verified Standard
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operations CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl font-extrabold text-navy">
          Interested in Bulk Procurement or Facility Collaboration?
        </h2>
        <p className="text-base text-navy/70 max-w-2xl mx-auto leading-relaxed">
          Dudhyam welcomes inquiries from commercial buyers, confectioners, retailers, and dairy partners looking for dependable chilled milk supply and signature soil-pot curd.
        </p>
        <div>
          <Link
            to="/contact?type=milk_supply"
            className="inline-flex items-center bg-navy hover:bg-navy-dark text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-transform transform hover:-translate-y-0.5 text-base border-2 border-gold"
          >
            <span>Initiate Operational Inquiry</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Operations;
