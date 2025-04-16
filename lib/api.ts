import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const API_KEY = process.env.NEXT_PUBLIC_BACKEND_API_V1_KEY;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const authService = {
  
  login: async (email: string, password: string, user_type: string, ip_address: string) => {
    return api.post('/api/v1/user/login', { email, password, user_type, ip_address });
  },
  signup: async () => {

  },
  verifyOtp: async (email: string, otp: string) => {
    return api.post('/api/v1/user/verify-otp', { email, otp });
  },
};

export const dashboardService = {
  getAccountantData: async () => {
    return api.get('/api/v1/dashboard/accountant');
  },
};