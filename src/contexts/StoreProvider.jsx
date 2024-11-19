import { createContext, useEffect, useState } from 'react';
import { getInfo } from '@/apis/authService';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    getInfo()
      .then((res) => {
        setUserInfo(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <StoreContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </StoreContext.Provider>
  );
};
