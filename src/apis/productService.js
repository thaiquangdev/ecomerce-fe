import axiosClient from './apiClient';

export const getProducts = async (query) => {
  const { sort = 0, limit = 8, page = 1, name = '', category = '' } = query;
  const response = await axiosClient.get(`/products/get-products`, {
    params: { sort, limit, page, name, category },
  });
  return response.data;
};

export const getProduct = async (slug) => {
  const response = await axiosClient.get(`/products/get-product/${slug}`);
  return response.data;
};

export const deleteProduct = async (slug) => {
  const response = await axiosClient.delete(`/products/delete-product/${slug}`);
  return response.data;
};
