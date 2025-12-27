import React from 'react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { useCustomContext } from '@/hooks/useCustomContext';

export const Controls = observer(() => {
  const { addNewItem } = useCustomContext();

  const onAddItem = () => {
    addNewItem();
  };
  const onSaveItem = () => {
    //addNewItem();
  };
  return (
    <div className={s.container}>
      <button className={s.button} onClick={onAddItem}>
        Add New Item
      </button>
      <button className={s.button} onClick={onSaveItem}>
        Save Item
      </button>
    </div>
  );
});
