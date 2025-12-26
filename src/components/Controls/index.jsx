import React from 'react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { useLocalStorage } from '@/hooks';

export const Controls = observer(() => {
  const { addNewItem } = useLocalStorage();

  const onAddItem = () => {
    addNewItem();
  };
  return (
    <div className={s.container}>
      <button className={s.button} onClick={onAddItem}>
        Add New Item
      </button>
    </div>
  );
});
