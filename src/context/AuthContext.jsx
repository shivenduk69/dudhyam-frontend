import React, { createContext, useState, useEffect, useCallback } from 'react';
import authService from '../services/authService';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('dudhyam_token'));
  const [loading, setLoading] = useState(true);

  // Verify stored token on initial app mount
  const checkAuth = useCallback(async () => {
    const savedToken = localStorage.getItem('dudhyam_token');
    if (!savedToken) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const response = await authService.getMe();
      if (response && response.success && response.data) {
        setUser(response.data);
      } else {
        localStorage.removeItem('dudhyam_token');
        localStorage.removeItem('dudhyam_user');
        setUser(null);
        setToken(null);
      }
    } catch {
      localStorage.removeItem('dudhyam_token');
      localStorage.removeItem('dudhyam_user');
      setUser(null);
      setToken(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const signin = async (credentials) => {
    const response = await authService.signin(credentials);
    if (response.success && response.data) {
      const { user: userData, token: userToken } = response.data;
      localStorage.setItem('dudhyam_token', userToken);
      localStorage.setItem('dudhyam_user', JSON.stringify(userData));
      setToken(userToken);
      setUser(userData);
      return response;
    }
    throw new Error(response.message || 'Failed to sign in');
  };

  const signup = async (formData) => {
    const response = await authService.signup(formData);
    if (response.success && response.data) {
      const { user: userData, token: userToken } = response.data;
      localStorage.setItem('dudhyam_token', userToken);
      localStorage.setItem('dudhyam_user', JSON.stringify(userData));
      setToken(userToken);
      setUser(userData);
      return response;
    }
    throw new Error(response.message || 'Failed to register');
  };

  const logout = async () => {
    try {
      await authService.logout();
    } finally {
      localStorage.removeItem('dudhyam_token');
      localStorage.removeItem('dudhyam_user');
      setToken(null);
      setUser(null);
    }
  };

  const updateProfile = async (updates) => {
    const response = await authService.updateProfile(updates);
    if (response.success && response.data) {
      setUser(response.data);
      localStorage.setItem('dudhyam_user', JSON.stringify(response.data));
      return response;
    }
    throw new Error(response.message || 'Failed to update profile');
  };

  const value = {
    user,
    token,
    loading,
    isAuthenticated: !!user,
    signin,
    signup,
    logout,
    updateProfile,
    refreshUser: checkAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
