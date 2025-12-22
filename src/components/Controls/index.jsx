import React from 'react'
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { state } from '@/state';

export const Controls = observer(() => {
  const onAddInput = () => {
    console.log('add input')
    state.addEmptyInput()
  }
  return (
    <div className={s.container}>
      <button className={s.button} onClick={onAddInput}>Add Input</button>
    </div>
  )
})
