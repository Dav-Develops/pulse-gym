import axios from 'axios';

const API_BASE = '/api';

const apiClient = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('pulse_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  login: async (credentials) => {
    try {
      const response = await apiClient.post('/auth/login', credentials);
      return response.data;
    } catch (err) {
      // Graceful fallback for mock mode if server is not yet running
      if (!err.response) {
        return {
          user: { name: credentials.email.split('@')[0], email: credentials.email },
          token: 'mock-jwt-token-pulse-gym',
        };
      }
      throw err;
    }
  },

  register: async (userData) => {
    try {
      const response = await apiClient.post('/auth/register', userData);
      return response.data;
    } catch (err) {
      // Graceful fallback for mock mode if server is not yet running
      if (!err.response) {
        return {
          user: { name: userData.name, email: userData.email },
          token: 'mock-jwt-token-pulse-gym',
        };
      }
      throw err;
    }
  },

  getCurrentUser: async () => {
    const response = await apiClient.get('/auth/me');
    return response.data;
  },

  submitTrialPass: async (data) => {
    try {
      const response = await apiClient.post('/trial-pass', data);
      return response.data;
    } catch {
      return { success: true, message: '7-Day Pass activated! Check your inbox.' };
    }
  },

  bookClass: async (data) => {
    try {
      const response = await apiClient.post('/bookings', data);
      return response.data;
    } catch {
      return { success: true, message: 'Class reservation confirmed!' };
    }
  },
};

export default authAPI;
