import React from 'react'
import s from './style.module.scss';
import { IconUploadComponent } from './IconUploadComponent';

export const IconsUploadComponent = () => {
  return (
    <div className={s.container}>
      <IconUploadComponent />
      <IconUploadComponent />
      <IconUploadComponent />
      <IconUploadComponent />
      <IconUploadComponent />
    </div>
  )
}
