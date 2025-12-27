import React from 'react';
import domtoimage from 'dom-to-image';
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
    if (!el) {
      console.error('Element not found');
      return;
    }

    domtoimage.toBlob(el).then(function (blob) {
      if (!blob) {
        console.error('Failed to create blob');
        return;
      }
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = `card_${previewItem.id}.png`;
      link.href = url;
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 100);
    });
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
