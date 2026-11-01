import axios from 'axios';

// Normalize base URL: ensure /api is present if a domain is specified without it
let rawBaseUrl = import.meta.env.VITE_API_URL || '/api';
let normalizedBaseUrl = rawBaseUrl.trim();
if (normalizedBaseUrl.startsWith('http')) {
  normalizedBaseUrl = normalizedBaseUrl.replace(/\/$/, '');
  if (!normalizedBaseUrl.endsWith('/api')) {
    normalizedBaseUrl = `${normalizedBaseUrl}/api`;
  }
}

const api = axios.create({
  baseURL: normalizedBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

// Request interceptor to attach bearer token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('dudhyam_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle errors gracefully
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // If token is invalid or expired and we are accessing a protected route
      const token = localStorage.getItem('dudhyam_token');
      if (token) {
        localStorage.removeItem('dudhyam_token');
        localStorage.removeItem('dudhyam_user');
      }
    }
    return Promise.reject(error);
  }
);

export default api;
