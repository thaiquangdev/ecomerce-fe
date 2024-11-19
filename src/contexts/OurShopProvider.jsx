import { createContext, useEffect, useState } from 'react';
import { getProducts } from '@/apis/productService';

export const OurShopContext = createContext();

export const OurShopProvider = ({ children }) => {
  const sortOptions = [
    { label: 'Default sorting', value: '0' },
    { label: 'Sort by popularity', value: '1' },
    { label: 'Sort by average rating', value: '2' },
    { label: 'Sort by lastet', value: '3' },
    { label: 'Sort by price: low to high', value: '4' },
    { label: 'Sort by price: high to low', value: '5' },
  ];

  const showOptions = [
    { label: '8', value: '8' },
    { label: '12', value: '12' },
    { label: 'All', value: 'all' },
  ];

  const [sortId, setSortId] = useState('0');
  const [showId, setShowId] = useState('8');
  const [isShowGrid, setIsShowGrid] = useState(true);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const handleLoadmore = () => {
    const query = {
      sort: sortId,
      page: +page + 1,
      limit: showId,
    };
    setIsLoadMore(true);
    getProducts(query).then(
      (res) => {
        setProducts((prev) => {
          return [...prev, ...res.products];
        });
        setPage(res.page);
        setTotal(res.totalProducts);
        setIsLoading(false);
        setIsLoadMore(false);
      },
      (err) => {
        console.log(err);
        setIsLoading(false);
      }
    );
  };

  const values = {
    sortOptions,
    showOptions,
    setSortId,
    setShowId,
    setIsShowGrid,
    products,
    isShowGrid,
    isLoading,
    handleLoadmore,
    total,
    isLoadMore,
  };

  useEffect(() => {
    const query = {
      sort: sortId,
      page: 1,
      limit: showId,
    };
    getProducts(query).then(
      (res) => {
        setProducts(res.products);
        setTotal(res.totalProducts);
        setIsLoading(false);
      },
      (err) => {
        console.log(err);
        setIsLoading(false);
      }
    );
  }, [sortId, showId]);

  return (
    <OurShopContext.Provider value={values}>{children}</OurShopContext.Provider>
  );
};
