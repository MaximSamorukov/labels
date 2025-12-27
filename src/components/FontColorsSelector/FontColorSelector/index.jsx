import React from 'react';
import s from './style.module.scss';
import { useCustomContext } from '@/hooks/useCustomContext';

export const FontColorSelector = ({ type, id }) => {
  const { getItemById, saveItem } = useCustomContext();
  const currentItem = getItemById(id);
  console.log('>>', id, currentItem);
  const { titleColor, descriptionColor } = currentItem || {};
  const fontColor = type === 'title' ? titleColor : descriptionColor;
  const key = type === 'title' ? 'titleColor' : 'descriptionColor';
  const onSelect = e => {
    console.log(typeof e.target.value, e.target.value, key);
    const updatedItem = {
      ...currentItem,
      [key]: e.target.value,
    };
    saveItem(updatedItem);
  };

  return (
    <div className={s.container}>
      <input type="color" value={fontColor} onChange={onSelect} />
    </div>
  );
};
