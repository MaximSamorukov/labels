import React from 'react';
import s from './style.module.scss';
import { IconUploadComponent } from './IconUploadComponent';

export const IconsUploadComponent = ({ icons }) => {
  return (
    <div className={s.container}>
      {Array.from({ length: 5 }).map((_, i) => (
        <IconUploadComponent index={i} current={(icons || {})[i]} />
      ))}
    </div>
  );
};
