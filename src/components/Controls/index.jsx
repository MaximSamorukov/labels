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
    if (!el) {
      console.error('Element not found');
      return;
    }

    try {
      // Ждем загрузки всех изображений
      const images = el.querySelectorAll('img');
      await Promise.all(
        Array.from(images).map(
          img =>
            new Promise((resolve, reject) => {
              if (img.complete) {
                resolve();
              } else {
                img.onload = resolve;
                img.onerror = reject;
              }
            })
        )
      );

      // Небольшая задержка для применения стилей
      await new Promise(resolve => setTimeout(resolve, 100));

      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        logging: false,
        width: el.offsetWidth,
        height: el.offsetHeight,
      });

      // Проверяем, что canvas не пустой
      if (canvas.width === 0 || canvas.height === 0) {
        console.error('Canvas has zero dimensions');
        return;
      }

      canvas.toBlob(blob => {
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
      }, 'image/png');
    } catch (error) {
      console.error('Error creating screenshot:', error);
    }
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
