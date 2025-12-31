import React, { useEffect } from 'react';
import ViewIcon from '@/assets/view.svg?react';
import RemoveIcon from '@/assets/remove.svg?react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { IconsUploadComponent } from '../IconsUploadComponent';
import { useCustomContext } from '@/hooks/useCustomContext';
import { state } from '@/state';
import { FontsSizeSelector } from '../FontsSizeSelector';
import { FontColorsSelector } from '../FontColorsSelector';
import { CustomTextInput } from '../CustomTextInput';
import { FormColorsSelector } from '../FormColorsSelector';
import { FontsFamilySelector } from '../FontsFamilySelector';

export const InputForm = observer(({ id, index }) => {
  const { getItemById, deleteItem } = useCustomContext();

  const handlePreview = () => {
    const i = getItemById(id);
    if (i) {
      state.onMakePreview(i);
    }
  };

  useEffect(() => {
    handlePreview();
  }, []);

  const onDeleteItem = () => {
    deleteItem(id);
  };

  return (
    <div className={s.container}>
      <div className={s.firstRow}>
        <div className={s.iconsContainer}>
          <IconsUploadComponent id={id} />
        </div>
        <div className={s.textsContainer}>
          <FormColorsSelector id={id} />
        </div>
        <div className={s.fontsContainer}>
          <FontsSizeSelector id={id} />
        </div>
        <div className={s.colorsContainer}>
          <FontsFamilySelector id={id} />
        </div>
        <div className={s.colorsContainer}>
          <FontColorsSelector id={id} />
        </div>
        <div className={s.textsContainer}>
          <CustomTextInput id={id} type={'title'} />
        </div>
        <div className={s.textsContainer}>
          <CustomTextInput id={id} type={'description'} />
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
