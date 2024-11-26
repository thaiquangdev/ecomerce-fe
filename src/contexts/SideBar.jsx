import { createContext, useEffect, useState } from 'react';
import { getAllCarts } from '@/apis/cartService';
import { getAllWishlists } from '@/apis/wishlistService';

export const SiderBarContext = createContext();

export const SiderBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState('');
  const [listProductCarts, setListProductCarts] = useState([]);
  const [listProductWishlists, setListProductWishlists] = useState([]);
  const [detailProductSlug, setDetailProductSlug] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetListProductCarts = (type) => {
    if (type === 'cart') {
      setIsLoading(true);
      getAllCarts().then(
        (res) => {
          setListProductCarts(res.cartDetails);
          setIsLoading(false);
        },
        (err) => {
          console.log(err);
          setIsLoading(false);
        }
      );
    }
  };

  const handleGetListProductWishlists = (type) => {
    if (type === 'wishlist') {
      setIsLoading(true);
      getAllWishlists().then(
        (res) => {
          setListProductWishlists(res.wishlists);
          setIsLoading(false);
        },
        (err) => {
          console.log(err);
          setIsLoading(false);
        }
      );
    }
  };

  useEffect(() => {
    handleGetListProductCarts('cart');
    handleGetListProductWishlists('wishlist');
  }, []);

  return (
    <SiderBarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        type,
        setType,
        handleGetListProductCarts,
        handleGetListProductWishlists,
        listProductCarts,
        listProductWishlists,
        isLoading,
        detailProductSlug,
        setDetailProductSlug,
      }}
    >
      {children}
    </SiderBarContext.Provider>
  );
};
