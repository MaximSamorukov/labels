import React from 'react';
import s from './style.module.scss';
import { L } from '@/constants';
import { useCustomContext } from '@/hooks/useCustomContext';

export const IconUploadComponent = ({ index, id }) => {
  const { getItemById, saveItem } = useCustomContext();
  const currentItem = getItemById(id);

  const current = currentItem?.icons[index];
  const onSelect = e => {
    saveItem({
      ...currentItem,
      icons: {
        ...currentItem.icons,
        [index]: e.target.value,
      },
    });
  };

  return (
    <div className={s.container}>
      <select value={current} onChange={onSelect}>
        <option value="">---</option>
        {Object.entries(L).map(([key, value]) => (
          <option value={value} key={key}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};
