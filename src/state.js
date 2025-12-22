import { makeAutoObservable } from "mobx"
import { v4 as uuid } from 'uuid';

class State {
  inputs = [];
  previewItem = {}
  constructor(){
    makeAutoObservable(this)
  }
  addEmptyInput() {
    const id = uuid()
    const label = 'Введите текст объявления'
    this.inputs.push({ id, label })
  }
  onMakePreview(id, text) {
    const item = this.inputs.find((i) => i.id === id);
    if (item) {
      item.label = text;
      this.previewItem = { ...item };
    } 
  }
}

export const state = new State()