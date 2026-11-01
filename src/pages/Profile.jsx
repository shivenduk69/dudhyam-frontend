import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { User, Mail, Phone, Shield, Calendar, CheckCircle2, AlertCircle, Loader2, LogOut } from 'lucide-react';

const Profile = () => {
  const { user, updateProfile, logout } = useAuth();

  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        phone: user.phone || '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    if (!formData.name || formData.name.trim().length < 2) {
      setErrorMessage('Name must be at least 2 characters long.');
      setLoading(false);
      return;
    }

    try {
      await updateProfile({
        name: formData.name,
        phone: formData.phone,
      });
      setSuccessMessage('Profile details updated successfully.');
      setIsEditing(false);
    } catch (err) {
      const msg = err.response?.data?.message || err.message || 'Failed to update profile.';
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
      })
    : 'Recently';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-3xl shadow-xl border-2 border-gold/40 overflow-hidden">
        {/* Top Profile Header */}
        <div className="bg-navy p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 border-b-4 border-gold">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
            <div className="w-20 h-20 rounded-2xl bg-gold text-navy font-black text-3xl flex items-center justify-center shadow-lg uppercase">
              {user?.name ? user.name.charAt(0) : 'U'}
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {user?.name}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-green text-white capitalize">
                  {user?.userType || 'Customer'}
                </span>
              </div>
              <p className="text-sm text-cream/80 mt-1 flex items-center justify-center sm:justify-start">
                <Mail className="w-4 h-4 mr-1.5 text-gold" />
                <span>{user?.email}</span>
              </p>
              <p className="text-xs text-cream/60 mt-1 flex items-center justify-center sm:justify-start">
                <Calendar className="w-3.5 h-3.5 mr-1.5 text-gold" />
                <span>Member since {memberSince}</span>
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={logout}
            className="inline-flex items-center bg-white/10 hover:bg-white/20 text-cream px-4 py-2 rounded-xl text-xs font-bold transition-colors border border-white/20 shrink-0"
          >
            <LogOut className="w-4 h-4 mr-1.5 text-gold" />
            Sign Out
          </button>
        </div>

        {/* Content Body */}
        <div className="p-8 sm:p-10 space-y-8">
          {successMessage && (
            <div className="p-4 rounded-xl bg-green-50 border border-green/30 text-green flex items-center space-x-3 text-sm font-semibold">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>{successMessage}</span>
            </div>
          )}

          {errorMessage && (
            <div className="p-4 rounded-xl bg-brown-50 border border-brown/30 text-brown flex items-center space-x-3 text-sm font-semibold">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Account Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-cream-100 p-5 rounded-2xl border border-cream-200">
              <span className="text-xs uppercase font-bold text-gray-500 block mb-1">
                Account Classification
              </span>
              <p className="text-base font-extrabold text-navy capitalize">
                {user?.userType || 'Customer'} Account
              </p>
              <p className="text-[11px] text-gray-500 mt-1">
                Linked to Dudhyam dairy services
              </p>
            </div>

            <div className="bg-cream-100 p-5 rounded-2xl border border-cream-200">
              <span className="text-xs uppercase font-bold text-gray-500 block mb-1">
                Authentication Security
              </span>
              <p className="text-base font-extrabold text-navy flex items-center">
                <Shield className="w-4 h-4 text-green mr-1.5" />
                JWT Protected
              </p>
              <p className="text-[11px] text-gray-500 mt-1">
                Bcrypt encrypted credentials
              </p>
            </div>

            <div className="bg-cream-100 p-5 rounded-2xl border border-cream-200">
              <span className="text-xs uppercase font-bold text-gray-500 block mb-1">
                Role Permissions
              </span>
              <p className="text-base font-extrabold text-navy capitalize">
                {user?.role || 'User'}
              </p>
              <p className="text-[11px] text-gray-500 mt-1">
                Standard customer / supplier access
              </p>
            </div>
          </div>

          {/* Profile Form */}
          <div className="pt-4 border-t border-cream-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-navy">Personal Profile Details</h3>
                <p className="text-xs text-navy/70 mt-0.5">
                  Update your contact details below. For security, email and account type are locked.
                </p>
              </div>
              {!isEditing && (
                <button
                  type="button"
                  onClick={() => setIsEditing(true)}
                  className="bg-navy hover:bg-navy-light text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
                >
                  Edit Profile
                </button>
              )}
            </div>

            <form onSubmit={handleUpdate} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    disabled={!isEditing}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-navy text-sm disabled:bg-gray-100 disabled:text-gray-600 transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    disabled={!isEditing}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter contact number"
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent text-navy text-sm disabled:bg-gray-100 disabled:text-gray-600 transition-all"
                  />
                </div>
              </div>

              {/* Immutable Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                    Registered Email (Immutable)
                  </label>
                  <input
                    type="email"
                    disabled
                    value={user?.email || ''}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-500 text-sm cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                    User Type (Immutable)
                  </label>
                  <input
                    type="text"
                    disabled
                    value={user?.userType ? `${user.userType.toUpperCase()} ACCOUNT` : 'CUSTOMER ACCOUNT'}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-gray-50 text-gray-500 text-sm cursor-not-allowed font-medium"
                  />
                </div>
              </div>

              {isEditing && (
                <div className="flex items-center space-x-3 pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-gold hover:bg-gold-dark text-navy font-bold px-6 py-2.5 rounded-xl text-sm shadow transition-colors inline-flex items-center"
                  >
                    {loading && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditing(false);
                      setFormData({
                        name: user?.name || '',
                        phone: user?.phone || '',
                      });
                      setErrorMessage('');
                    }}
                    className="bg-gray-100 hover:bg-gray-200 text-navy font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
