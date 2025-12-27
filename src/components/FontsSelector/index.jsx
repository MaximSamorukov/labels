import React from 'react';
import s from './style.module.scss';
import { FontSelector } from './FontSelector';

export const FontsSelector = ({ id }) => {
  return (
    <div className={s.container}>
      {['title', 'description'].map(i => (
        <FontSelector id={id} type={i} />
      ))}
    </div>
  );
};
