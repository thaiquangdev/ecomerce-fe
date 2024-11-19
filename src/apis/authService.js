import axiosClient from './apiClient';

export const register = async (body) => {
  return axiosClient.post('/auths/register', body);
};

export const login = async (body) => {
  return axiosClient.post('/auths/login', body);
};

export const getInfo = async () => {
  return axiosClient.get('/users/get-user');
};

export const logout = async () => {
  return axiosClient.post('/auths/logout');
};
