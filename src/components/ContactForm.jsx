import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import authService from '../services/authService';
import { INQUIRY_TYPES } from '../utils/constants';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const ContactForm = ({ defaultInquiryType = 'general', prefillSubject = '' }) => {
  const [searchParams] = useSearchParams();
  const queryType = searchParams.get('type');
  const queryProduct = searchParams.get('product');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: prefillSubject || (queryProduct ? `Inquiry regarding ${queryProduct}` : ''),
    inquiryType: queryType || defaultInquiryType,
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (queryType) {
      setFormData((prev) => ({ ...prev, inquiryType: queryType }));
    }
    if (queryProduct) {
      setFormData((prev) => ({
        ...prev,
        subject: `Inquiry regarding ${queryProduct}`,
        message: prev.message || `Hello, I would like more information and pricing details regarding ${queryProduct}.`,
      }));
    }
  }, [queryType, queryProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await authService.submitContact(formData);
      if (response && response.success) {
        setSuccessMessage(
          response.message || 'Your inquiry has been submitted successfully. Our team will contact you shortly.'
        );
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          inquiryType: 'general',
          message: '',
        });
      }
    } catch (err) {
      const serverMsg =
        err.response?.data?.message || 'Failed to submit inquiry. Please verify your details and try again.';
      setErrorMessage(serverMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border-2 border-gold/40">
      <div className="mb-6">
        <h3 className="text-2xl font-extrabold text-navy">Send Dudhyam an Inquiry</h3>
        <p className="text-sm text-navy/70 mt-1">
          Whether you are a dairy farmer looking to supply milk, a business seeking bulk procurement, or a consumer, we look forward to hearing from you.
        </p>
      </div>

      {successMessage && (
        <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green/30 text-green flex items-start space-x-3">
          <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="text-sm font-semibold">{successMessage}</div>
        </div>
      )}

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-brown-50 border border-brown/30 text-brown flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="text-sm font-semibold">{errorMessage}</div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
              Full Name <span className="text-brown">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Ramesh Patel"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-navy text-sm transition-all"
            />
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
              Email Address <span className="text-brown">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. ramesh@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-navy text-sm transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 9876543210"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-navy text-sm transition-all"
            />
          </div>

          {/* Inquiry Type */}
          <div>
            <label htmlFor="inquiryType" className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
              Inquiry Type <span className="text-brown">*</span>
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              required
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-navy text-sm transition-all bg-white"
            >
              {INQUIRY_TYPES.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
            Subject <span className="text-brown">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            placeholder="Brief topic of your inquiry"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-navy text-sm transition-all"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
            Detailed Message <span className="text-brown">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Please share any relevant details such as milk volume, location, or requirement..."
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-navy text-sm transition-all"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-navy font-bold py-3.5 px-6 rounded-xl shadow-md transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
              <span>Transmitting Inquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              <span>Submit Inquiry</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
