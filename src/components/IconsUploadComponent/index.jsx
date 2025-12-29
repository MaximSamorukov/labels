import React from 'react';
import s from './style.module.scss';
import { IconUploadComponent } from './IconUploadComponent';
import { defaultIcons } from '@/constants';

export const IconsUploadComponent = ({ id }) => {
  return (
    <div className={s.container}>
      {Object.keys(defaultIcons).map((_, i) => (
        <IconUploadComponent key={i} id={id} index={i} />
      ))}
    </div>
  );
};
