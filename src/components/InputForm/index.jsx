import React, { useMemo, useState } from 'react';
import ViewIcon from '@/assets/view.svg?react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { IconsUploadComponent } from '../IconsUploadComponent';
import { useLocalStorage } from '@/hooks';

export const InputForm = observer(({ id }) => {
  const { getItemById } = useLocalStorage();

  const item = useMemo(() => {
    const i = getItemById(id);
    console.log(i);
    return i;
  }, [id]);

  const handleChange = v => {
    setText(v.target.value);
  };
  const handlePreview = () => {
    //state.onMakePreview(id, text);
  };
  return (
    <div className={s.container}>
      <div className={s.firstRow}>
        <div className={s.iconsContainer}>
          <IconsUploadComponent icons={item?.icons} />
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
      </div>
    </div>
  );
});
