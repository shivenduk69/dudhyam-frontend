import api from './api';

export const authService = {
  async signup(data) {
    const response = await api.post('/auth/signup', data);
    return response.data;
  },

  async signin(data) {
    const response = await api.post('/auth/signin', data);
    return response.data;
  },

  async getMe() {
    const response = await api.get('/auth/me');
    return response.data;
  },

  async logout() {
    try {
      const response = await api.post('/auth/logout');
      return response.data;
    } catch {
      // Even if network fails, logout proceeds locally
      return { success: true };
    }
  },

  async getProfile() {
    const response = await api.get('/users/profile');
    return response.data;
  },

  async updateProfile(data) {
    const response = await api.put('/users/profile', data);
    return response.data;
  },

  async submitContact(data) {
    const response = await api.post('/contact', data);
    return response.data;
  },
};

export default authService;
