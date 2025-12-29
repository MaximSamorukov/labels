import React from 'react';
import s from './style.module.scss';
import { FONTS_SIZES } from '@/constants';
import { useCustomContext } from '@/hooks/useCustomContext';

export const FontSizeSelector = ({ type, id }) => {
  const { getItemById, saveItem } = useCustomContext();
  const currentItem = getItemById(id);

  const { titleFontSize, descriptionFontSize } = currentItem || {};
  const fontSize = type === 'title' ? titleFontSize : descriptionFontSize;
  const key = type === 'title' ? 'titleFontSize' : 'descriptionFontSize';
  const onSelect = e => {
    const updatedItem = {
      ...currentItem,
      [key]: Number(e.target.value),
    };
    saveItem(updatedItem);
  };

  return (
    <div className={s.container}>
      <div className={s.label}>{key}</div>
      <select value={fontSize} onChange={onSelect}>
        {FONTS_SIZES.map(size => (
          <option value={size} key={size}>
            {size} px
          </option>
        ))}
      </select>
    </div>
  );
};
