import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { FARMER_STEPS } from '../utils/constants';
import {
  HeartHandshake,
  ShieldCheck,
  CreditCard,
  Scale,
  FlaskConical,
  Receipt,
  Users,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const Farmers = () => {
  const stepIcons = [Users, Scale, FlaskConical, Receipt, CreditCard];

  return (
    <div className="space-y-20 pb-20">
      {/* Header Banner */}
      <section className="bg-navy text-white py-16 sm:py-20 border-b-4 border-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-green/20 text-green-light border border-green/40 mb-4">
            Farmer Procurement Model
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Empowering Rural Dairy Producers With Transparency
          </h1>
          <p className="mt-4 text-base sm:text-lg text-cream/90 leading-relaxed">
            Dudhyam is built on a simple promise: accurate digital testing, zero middlemen cuts, and transparent direct bank payouts for every drop of milk supplied.
          </p>
          <div className="mt-8">
            <Link
              to="/contact?type=farmer_registration"
              className="inline-flex items-center bg-gold hover:bg-gold-dark text-navy font-extrabold px-8 py-4 rounded-xl shadow-lg transition-transform transform hover:-translate-y-0.5 text-base"
            >
              <span>Become a Dudhyam Milk Supplier</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* The 5-Step Farmer Procurement Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Step-By-Step Workflow"
          title="The Dudhyam Milk Procurement Process"
          description="Every morning and evening, local dairy farmers experience a calibrated, respectful, and objective intake procedure."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {FARMER_STEPS.map((stepItem, index) => {
            const Icon = stepIcons[index] || Users;
            return (
              <div
                key={stepItem.step}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-cream-200 hover:border-green flex flex-col justify-between relative group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-green">
                      {stepItem.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-green-50 text-green flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-navy mb-2 leading-snug">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs text-navy/70 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-cream-200">
                  <span className="text-[11px] font-semibold text-green flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                    Transparent Stage
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Transparency & Fair Dealing Breakdown */}
      <section className="bg-cream-100 py-16 border-y border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Dignity & Fair Dealings"
            title="Why Rural Producers Prefer Dudhyam"
            description="We have eliminated the traditional vulnerabilities of rural milk sales."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-green space-y-4">
              <div className="w-12 h-12 rounded-xl bg-green-50 text-green flex items-center justify-center">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy">Certified Electronic Scales</h3>
              <p className="text-sm text-navy/75 leading-relaxed">
                Traditional volumetric dipstick methods create disputes and losses. Our collection centers use certified, digitally locked weighing scales with zero manual manipulation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-gold space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold-50 text-navy flex items-center justify-center">
                <FlaskConical className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy">Instant Fat & SNF Analysis</h3>
              <p className="text-sm text-navy/75 leading-relaxed">
                Using calibrated ultrasonic analyzers, milk composition is tested in under 60 seconds while the farmer watches. Pricing is mapped automatically to official quality charts.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-navy space-y-4">
              <div className="w-12 h-12 rounded-xl bg-navy-50 text-navy flex items-center justify-center">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-navy">Direct Bank Settlement</h3>
              <p className="text-sm text-navy/75 leading-relaxed">
                No cash delays, no partial credit IOUs. Earnings are directly credited to the farmer’s verified personal bank account on a fixed, predictable schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Long-Term Relationship & Farmer CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy to-navy-dark rounded-3xl p-8 sm:p-14 text-white border-2 border-gold shadow-2xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-gold/20 text-gold border border-gold/40">
              Grow Your Dairy Farm With Dudhyam
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to Join as a Dudhyam Milk Supplier?
            </h2>
            <p className="text-base sm:text-lg text-cream/90 leading-relaxed">
              We welcome individual smallholder farmers, dairy cooperatives, and cow/buffalo cattle keepers. Our field team assists with simple registration and setup.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact?type=farmer_registration"
                className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-navy font-extrabold px-8 py-4 rounded-xl shadow-lg transition-transform transform hover:-translate-y-0.5 text-base"
              >
                <HeartHandshake className="w-5 h-5 mr-2" />
                <span>Become a Dudhyam Milk Supplier</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-cream border-2 border-cream/40 font-semibold px-8 py-4 rounded-xl text-base transition-colors"
              >
                Inquire For Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Farmers;
