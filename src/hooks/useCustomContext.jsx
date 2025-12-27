import React, { useContext } from 'react';
import { CustomContext } from '@/Provider';

export const useCustomContext = () => {
  const data = useContext(CustomContext);
  if (!data) {
    throw Error('outside the context scope');
  }
  return data;
};
