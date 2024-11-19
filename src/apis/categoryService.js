import axiosClient from './apiClient';

export const getCategories = async () => {
  const response = await axiosClient.get('/categories/get-categories');
  return response.data;
};
