import React, { useState } from 'react'
import ViewIcon from '@/assets/view.svg?react'
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { state } from '@/state';

export const CustomInput = observer(({id, label}) => {
  const [text, setText] = useState(label);
  const handleChange = (v) => {
    setText(v.target.value)
  }
  const handlePreview = () => {
    state.onMakePreview(id, text)
  }
  return (
    <div className={s.container}>
      <input value={text} onChange={handleChange} />
      <button onClick={handlePreview} className={s.button}>
        <ViewIcon />
      </button>
    </div>
  )
})
