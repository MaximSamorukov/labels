import { useState, useEffect, useCallback } from 'react';
import { AdvItem } from '@/advertisementItem';
import { v4 as uuid } from 'uuid';

const STORAGE_KEY = 'advItems';

export const useLocalStorage = () => {
  const [items, setItems] = useState([]);

  // Загрузка всех items при монтировании
  useEffect(() => {
    const loadItems = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          // Восстанавливаем объекты как экземпляры AdvItem
          const restoredItems = [];
          Object.entries(parsed).forEach(([id, data], index) => {
            restoredItems[index] = new AdvItem(
              data.id,
              data.title,
              data.titleFontSize,
              data.titleColor,
              data.description,
              data.descriptionFontSize,
              data.descriptionColor,
              data.bgColor,
              data.borderColor,
              data.icons
            );
          });
          setItems(restoredItems);
        }
      } catch (error) {
        console.error('Error loading from localStorage:', error);
      }
    };

    loadItems();
  }, []);

  // Получить все items
  const getAllItems = useCallback(() => {
    return items;
  }, [items]);

  // Получить один item по id
  const getItemById = useCallback(
    id => {
      return items.find(item => item.id === id) || null;
    },
    [items]
  );

  const addNewItem = useCallback(() => {
    const id = uuid();
    const label = 'Введите текст объявления';
    const item = new AdvItem(id, label, '', '', 'description', '', '', '', '');
    saveItem(item);
  });
  // Сохранить или обновить item
  const saveItem = useCallback(
    item => {
      try {
        const existingIndex = items.findIndex(i => i.id === item.id);
        let updatedItems;

        if (existingIndex !== -1) {
          // Обновляем существующий
          updatedItems = [...items];
          updatedItems[existingIndex] = item;
        } else {
          // Добавляем новый
          updatedItems = [...items, item];
        }

        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedItems));
        setItems(updatedItems);
      } catch (error) {
        console.error('Error saving to localStorage:', error);
      }
    },
    [items]
  );

  // Удалить item по id
  const deleteItem = useCallback(
    id => {
      try {
        const updatedItems = items.filter(item => item.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedItems));
        setItems(updatedItems);
      } catch (error) {
        console.error('Error deleting from localStorage:', error);
      }
    },
    [items]
  );

  // Полное обновление (замена всех items)
  const updateAll = useCallback(newItems => {
    try {
      const itemsArray = Array.isArray(newItems) ? newItems : [newItems];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(itemsArray));
      setItems(itemsArray);
    } catch (error) {
      console.error('Error updating all items in localStorage:', error);
    }
  }, []);

  return {
    items,
    getAllItems,
    getItemById,
    saveItem,
    deleteItem,
    updateAll,
    addNewItem,
  };
};
