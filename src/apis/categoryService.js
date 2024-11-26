import axiosClient from './apiClient';

export const getCategories = async () => {
  const response = await axiosClient.get('/categories/get-categories');
  return response.data;
};

export const getCategory = async (slug) => {
  const response = await axiosClient.get(`/categories/get-category/${slug}`);
  return response.data;
};

export const createCategory = async (data) => {
  const response = await axiosClient.post('/categories/create-category', data);
  return response.data;
};

export const updateCategory = async (data, slug) => {
  const response = await axiosClient.put(
    `/categories/update-category/${slug}`,
    data
  );
  return response.data;
};

export const deleteCategory = async (slug) => {
  const response = await axiosClient.delete(`/categories/delete-brand/${slug}`);
  return response.data;
};
