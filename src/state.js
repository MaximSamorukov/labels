import { makeAutoObservable } from 'mobx';
import { AdvItem } from './advertisementItem';
import { baseItem } from './constants';

class State {
  previewItem = new AdvItem(baseItem);
  constructor() {
    makeAutoObservable(this);
  }

  onMakePreview(item) {
    if (item) {
      this.previewItem = { ...item };
    }
  }
}

export const state = new State();
