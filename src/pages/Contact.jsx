import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Clock, HeartHandshake, ShieldCheck } from 'lucide-react';

const Contact = () => {
  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="bg-navy text-white py-16 sm:py-20 border-b-4 border-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-gold/20 text-gold border border-gold/40 mb-4">
            Direct Communication
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Connect With the Dudhyam Team
          </h1>
          <p className="mt-4 text-base sm:text-lg text-cream/90 leading-relaxed">
            Have questions about milk supply, retail distribution, bulk procurement, or farmer onboarding? We are here to assist you promptly.
          </p>
        </div>
      </section>

      {/* Main Grid: Form & Contact Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Information & Highlights */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                We Welcome Every Query
              </h2>
              <p className="text-sm text-navy/75 leading-relaxed">
                Whether you are a dairy farmer intending to register your herd, a confectioner requiring consistent buffalo milk cream levels, or a family seeking unadulterated cow milk and earthen-pot curd, reach out to our team below.
              </p>
            </div>

            {/* Configurable Contact Detail Cards */}
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-cream-200 shadow-sm flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-gold/20 text-navy flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-gold-dark" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy">Collection & Processing Hub</h4>
                  <p className="text-xs text-navy/70 mt-0.5">
                    Dudhyam Dairy Operational Facility
                  </p>
                  <p className="text-[11px] text-gray-400 mt-1 italic">
                    (Exact geographic GPS coordinates configured upon regional route launch)
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-cream-200 shadow-sm flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-green/15 text-green flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy">Operational Desk</h4>
                  <p className="text-xs text-navy/70 mt-0.5">
                    Available during morning and evening collection windows
                  </p>
                  <p className="text-[11px] text-gray-500 mt-0.5 font-mono">
                    Please submit your phone number in the form for an immediate callback.
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-cream-200 shadow-sm flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-navy/10 text-navy flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy">Electronic Mail</h4>
                  <p className="text-xs text-navy/70 mt-0.5">
                    General Inquiries: <span className="font-semibold text-navy">contact@dudhyam.local</span>
                  </p>
                  <p className="text-xs text-navy/70 mt-0.5">
                    Farmer Relations: <span className="font-semibold text-green">farmers@dudhyam.local</span>
                  </p>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-cream-200 shadow-sm flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-brown/15 text-brown flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy">Daily Procurement Hours</h4>
                  <p className="text-xs text-navy/70 mt-0.5">
                    Morning Intake: <strong>05:30 AM – 08:30 AM</strong>
                  </p>
                  <p className="text-xs text-navy/70 mt-0.5">
                    Evening Intake: <strong>05:00 PM – 07:30 PM</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Farmer Onboarding Quick Note */}
            <div className="p-5 rounded-2xl bg-green-50 border border-green/20 space-y-2">
              <div className="flex items-center space-x-2 text-green font-bold text-sm">
                <HeartHandshake className="w-5 h-5" />
                <span>Are You a Local Milk Producer?</span>
              </div>
              <p className="text-xs text-navy/80 leading-relaxed">
                Choose <strong>"Become a Dudhyam Milk Supplier"</strong> in the inquiry type on the form. Our village coordinator will visit your dairy shed to demonstrate our transparent testing and direct payout system.
              </p>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
