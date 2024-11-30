import axiosClient from './apiClient';

export const getAllOrdersForAdmin = async () => {
  const response = await axiosClient.get('/payments/get-orders-admin');
  return response.data;
};

export const getDetailOrder = async (oid) => {
  const response = await axiosClient.get(`/payments/get-order/${oid}`);
  return response.data;
};
