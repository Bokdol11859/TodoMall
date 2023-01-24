import { AxiosInstance } from './axios';

export const getMyPageInfo = async (email: string) => {
  const res = await AxiosInstance.get(`user?email=${email}`);
  return res.data;
};
