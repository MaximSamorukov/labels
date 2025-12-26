import React from 'react';
import s from './style.module.scss';
import { L } from '@/constants';

export const IconUploadComponent = ({ index, current }) => {
  const onSelect = e => {
    console.log(index, e.target.value);
  };
  console.log(current);
  return (
    <div className={s.container}>
      <select onChange={onSelect}>
        {Object.entries(L).map(([key, value]) => (
          <option key={key}>{value}</option>
        ))}
      </select>
    </div>
  );
};
