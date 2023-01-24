import axios from 'axios';

export const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TODO_MALL_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
});
