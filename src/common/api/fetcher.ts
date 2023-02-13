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

export const purchaseProduct = async (id: string | string[] | undefined, userId: string) => {
  const res = await AxiosInstance.post(`user/product`, {
    productId: id,
    userId: userId,
  });

  return res.data;
};

export const getAllProductIds = async () => {
  const [res1, res2, res3] = await Promise.all([
    getTodoMallList('career'),
    getTodoMallList('self'),
    getTodoMallList('investment'),
  ]);

  let productIds = [];

  productIds.push(...res1.map((product: any) => product.id));
  productIds.push(...res2.map((product: any) => product.id));
  productIds.push(...res3.map((product: any) => product.id));

  return productIds;
};

export const getTodoDetail = async (id: string) => {
  const res = await AxiosInstance.get(`products/todo?id=${id}`);

  return res.data;
};

export const finishTodo = async (data: { userId: string; productId: string; sessionId: string; todoId: string }) => {
  console.log(data);
  const res = await AxiosInstance.patch(`user/product`, {
    ...data,
  });

  return res.data;
};
