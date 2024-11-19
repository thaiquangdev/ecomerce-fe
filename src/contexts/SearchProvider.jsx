import { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [isSearchVisiable, setIsSearchVisiable] = useState(false);

  return (
    <SearchContext.Provider value={{ isSearchVisiable, setIsSearchVisiable }}>
      {children}
    </SearchContext.Provider>
  );
};
