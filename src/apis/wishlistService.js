import axiosClient from './apiClient';

export const addToWishlist = async (productId) => {
  const response = await axiosClient.post('/wishlists/add-wishlist', {
    productId,
  });
  return response.data;
};

export const getAllWishlists = async () => {
  const response = await axiosClient.get('/wishlists/get-wishlists');
  return response.data;
};

export const deleteWishlist = async (pid) => {
  const response = await axiosClient.delete(
    `/wishlists/delete-wishlist/${pid}`
  );
  return response.data;
};
