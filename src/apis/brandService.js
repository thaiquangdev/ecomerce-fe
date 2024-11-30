import axiosClient from './apiClient';

export const getBrands = async (query) => {
  const { page = 1, limit = 8, name = '' } = query; // Đặt giá trị mặc định
  const response = await axiosClient.get('/brands/get-brands', {
    params: { page, limit, name }, // Sử dụng params để tạo query string tự động
  });
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
