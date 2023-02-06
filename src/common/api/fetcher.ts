import { AxiosInstance } from './axios';

export const getUserInfo = async (email: string | null) => {
  const res = await AxiosInstance.get(`user?email=${email}`);

  return res.data;
};

export const getTodoMallList = async (category: string) => {
  const res = await AxiosInstance.get(`products/preview?type=${category}`);

  return res.data;
};

export const getProductDetail = async (id: string | string[] | undefined) => {
  const res = await AxiosInstance.get(`products?id=${id}`);

  return res.data;
};
