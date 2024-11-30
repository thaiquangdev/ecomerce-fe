import axiosClient from './apiClient';

export const getUsers = async () => {
  const response = await axiosClient.get('/users/get-users');
  return response.data;
};

export const getAddress = async () => {
  const response = await axiosClient.get('/address//get-addresses');
  return response.data;
};

export const createAddress = async (data) => {
  const response = await axiosClient.post('/address/create-address', data);
  return response.data;
};
