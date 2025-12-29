import React from 'react';
import s from './style.module.scss';
import { useCustomContext } from '@/hooks/useCustomContext';

export const FormColorSelector = ({ type, id }) => {
  const { getItemById, saveItem } = useCustomContext();
  const currentItem = getItemById(id);
  const { bgColor, borderColor } = currentItem || {};
  const fontColor = type === 'bg' ? bgColor : borderColor;
  const key = type === 'bg' ? 'bgColor' : 'borderColor';
  const onSelect = e => {
    const updatedItem = {
      ...currentItem,
      [key]: e.target.value,
    };
    saveItem(updatedItem);
  };

  return (
    <div className={s.container}>
      <div className={s.label}>{key}</div>
      <input type="color" value={fontColor} onChange={onSelect} />
    </div>
  );
};
