import { makeAutoObservable } from 'mobx';
import { AdvItem } from './advertisementItem';

class State {
  previewItem = new AdvItem(
    'id',
    'label',
    45,
    '',
    'description',
    25,
    '',
    '',
    ''
  );
  constructor() {
    makeAutoObservable(this);
  }

  onMakePreview(item) {
    console.log('preview', item);
    if (item) {
      this.previewItem = { ...item };
    }
  }
}

export const state = new State();
