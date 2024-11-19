import axiosClient from './apiClient';

export const getProducts = async (query) => {
  const { sort, limit, page } = query;
  const response = await axiosClient.get(
    `/products/get-products?page=${page}?sort=${sort}&limit=${limit}`
  );
  return response.data;
};

export const getProduct = async (slug) => {
  const response = await axiosClient.get(`/products/get-product/${slug}`);
  return response.data;
};
