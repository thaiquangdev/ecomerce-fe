import axiosClient from './apiClient';

export const addToCart = async (data) => {
  const response = await axiosClient.post('/carts/create-cart', data);
  return response.data;
};

export const getAllCarts = async () => {
  const response = await axiosClient.get('/carts/get-carts');
  return response.data;
};

export const deleteCartItem = async (cartId, productId) => {
  const resposne = await axiosClient.delete(
    `/carts/delete-cartdetail/${cartId}/${productId}`
  );
  return resposne.data;
};
