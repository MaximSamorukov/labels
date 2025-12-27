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
    try {
      const canvas = await html2canvas(el, {
        scale: 2, // Увеличьте для лучшего качества
        useCORS: true, // Для внешних ресурсов
        allowTaint: true, // Разрешить "загрязненный" canvas
        backgroundColor: null, // Прозрачный фон
        logging: true, // Включить логирование для отладки
      });

      const link = document.createElement('a');
      link.download = `card_${previewItem.id}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Error creating screenshot:', error);
    }
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
