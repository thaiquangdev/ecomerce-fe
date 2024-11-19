import axiosClient from './apiClient';

export const getBrands = async () => {
  const response = await axiosClient.get('/brands/get-brands');
  return response.data;
};
