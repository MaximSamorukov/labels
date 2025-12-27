import React, { useState } from 'react';
import s from './style.module.scss';
import { useCustomContext } from '@/hooks/useCustomContext';

export const CustomTextInput = ({ id, type }) => {
  const { getItemById, saveItem } = useCustomContext();
  const currentItem = getItemById(id);
  const [text, setText] = useState(currentItem[type]);
  const handleInput = e => {
    const v = e.target.value;
    setText(v);
  };
  const onSaveItem = e => {
    const i = getItemById(id);
    const updatedItem = {
      ...i,
      [type]: text,
    };
    saveItem(updatedItem);
  };
  return (
    <div className={s.container}>
      <input value={text} onChange={handleInput} />
      <button className={s.button} onClick={onSaveItem}>
        Save Item
      </button>
    </div>
  );
};
