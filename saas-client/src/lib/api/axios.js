import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = Cookies.get('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    // Log errors for debugging
    console.error('API Error:', {
      status: error.response?.status,
      url: originalRequest.url,
      method: originalRequest.method,
      data: error.response?.data
    });

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      Cookies.remove('token');
      Cookies.remove('refreshToken');
      toast.error('Session expired. Please login again.');
      window.location.href = '/login';
    }

    // Handle network errors
    if (!error.response) {
      toast.error('Network error - please check your connection');
    }

    return Promise.reject(error);
  }
);

export default api;