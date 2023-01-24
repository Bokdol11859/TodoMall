import axios from 'axios';

export const AxiosPublic = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TODO_MALL_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const AxiosPrivate = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TODO_MALL_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// AxiosPrivate.interceptors.request.use(async (req) => {
//   req.headers = {
//     Authorization: `token`,
//   };

//   return req;
// });
