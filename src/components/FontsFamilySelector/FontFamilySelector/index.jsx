import React from 'react';
import s from './style.module.scss';
import { useCustomContext } from '@/hooks/useCustomContext';
import { FONTS_NAMES } from '@/constants';

export const FontFamilySelector = ({ type, id }) => {
  const { getItemById, saveItem } = useCustomContext();
  const currentItem = getItemById(id);
  const { titleFontFamily, descriptionFontFamily } = currentItem || {};
  const fontFamily = type === 'title' ? titleFontFamily : descriptionFontFamily;
  const key = type === 'title' ? 'titleFontFamily' : 'descriptionFontFamily';
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
      <select value={fontFamily} onChange={onSelect}>
        {Object.entries(FONTS_NAMES).map(([key, value]) => (
          <option value={key} key={key}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};
