import React from 'react';
import s from './style.module.scss';
import { FontFamilySelector } from './FontFamilySelector';

export const FontsFamilySelector = ({ id }) => {
  return (
    <div className={s.container}>
      {['title', 'description'].map(i => (
        <FontFamilySelector id={id} type={i} />
      ))}
    </div>
  );
};
