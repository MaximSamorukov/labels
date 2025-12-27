import React, { createContext, useMemo, useState } from 'react';
import ViewIcon from '@/assets/view.svg?react';
import RemoveIcon from '@/assets/remove.svg?react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { IconsUploadComponent } from '../IconsUploadComponent';
import { useCustomContext } from '@/hooks/useCustomContext';
import { state } from '@/state';

export const InputForm = observer(({ id }) => {
  const { getItemById, deleteItem } = useCustomContext();

  const item = useMemo(() => {
    const i = getItemById(id);
    return i;
  }, [id]);

  const handleChange = v => {
    setText(v.target.value);
  };
  const handlePreview = () => {
    const i = getItemById(id);
    state.onMakePreview(i);
  };

  const onDeleteItem = () => {
    deleteItem(id);
  };
  return (
    <div className={s.container}>
      <div className={s.firstRow}>
        <div className={s.iconsContainer}>
          <IconsUploadComponent id={id} />
        </div>
        <div className={s.fontsContainer}>
          <IconsUploadComponent />
        </div>
        <div className={s.colorsContainer}>
          <IconsUploadComponent />
        </div>
        <div className={s.textsContainer}>
          <input value={item?.title} onChange={handleChange} />
        </div>
      </div>
      <div className={s.secondRow}>
        <button onClick={handlePreview} className={s.button}>
          <ViewIcon />
        </button>
        <button onClick={onDeleteItem} className={s.button}>
          <RemoveIcon />
        </button>
      </div>
    </div>
  );
});
