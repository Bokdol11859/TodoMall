import { AxiosInstance } from './axios';

export const getUserInfo = async (email: string | null) => {
  const res = await AxiosInstance.get(`user?email=${email}`);
  return res.data;
};
