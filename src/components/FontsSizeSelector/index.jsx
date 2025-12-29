import React from 'react';
import s from './style.module.scss';
import { FontSizeSelector } from './FontSizeSelector';

export const FontsSizeSelector = ({ id }) => {
  return (
    <div className={s.container}>
      {['title', 'description'].map(i => (
        <FontSizeSelector id={id} type={i} />
      ))}
    </div>
  );
};
