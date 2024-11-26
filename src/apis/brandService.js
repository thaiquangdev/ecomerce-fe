import axiosClient from './apiClient';

export const getBrands = async (query) => {
  const { page, limit } = query;
  const response = await axiosClient.get(
    `/brands/get-brands?page=${page}&limit=${limit}`
  );
  return response.data;
};

export const createBrand = async (data) => {
  const response = await axiosClient.post('/brands/create-brand', data);
  return response.data;
};

export const updateBrand = async (data, slug) => {
  const response = await axiosClient.put(`/brands/update-brand/${slug}`, data);
  return response.data;
};

export const deleteBrand = async (slug) => {
  const response = await axiosClient.delete(`/brands/delete-brand/${slug}`);
  return response.data;
};

export const getBrand = async (slug) => {
  const response = await axiosClient.get(`/brands/get-brand/${slug}`);
  return response.data;
};
