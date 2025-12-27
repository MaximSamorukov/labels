import React from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export const CustomContext = React.createContext({});

export const CustomContextProvider = ({ children }) => {
  const value = useLocalStorage();

  return (
    <CustomContext.Provider value={value}>{children}</CustomContext.Provider>
  );
};
