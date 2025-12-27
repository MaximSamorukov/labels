import React from 'react';
import s from './style.module.scss';
import { FontColorSelector } from './FontColorSelector';

export const FontColorsSelector = ({ id }) => {
  return (
    <div className={s.container}>
      {['title', 'description'].map(i => (
        <FontColorSelector id={id} type={i} />
      ))}
    </div>
  );
};
