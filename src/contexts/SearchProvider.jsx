import { createContext, useEffect, useState } from 'react';
import { getCategories } from '@/apis/categoryService';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [isSearchVisiable, setIsSearchVisiable] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories({ page: 1, limit: 8 })
      .then((res) => {
        console.log(res);
        setCategories(res.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SearchContext.Provider
      value={{ isSearchVisiable, setIsSearchVisiable, categories }}
    >
      {children}
    </SearchContext.Provider>
  );
};
