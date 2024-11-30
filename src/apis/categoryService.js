import axiosClient from './apiClient';

export const getCategories = async (query) => {
  const { page = 1, limit = 8, name = '' } = query; // đặt giá trị mặc định
  const response = await axiosClient.get(`/categories/get-categories`, {
    params: { page, limit, name }, // sử dụng params để tạo query tự động
  });
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
