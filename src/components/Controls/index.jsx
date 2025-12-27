import React from 'react';
import html2canvas from 'html2canvas';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { useCustomContext } from '@/hooks/useCustomContext';
import { state } from '@/state';

export const Controls = observer(() => {
  const { addNewItem } = useCustomContext();
  const previewItem = state.previewItem;
  const onAddItem = () => {
    addNewItem();
  };
  const onSaveItem = async () => {
    const el = document.getElementById('card');
    const canvas = await html2canvas(el, { scale: 1 });
    const link = document.createElement('a');
    link.download = `card_${previewItem.id}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    console.log(el);
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
