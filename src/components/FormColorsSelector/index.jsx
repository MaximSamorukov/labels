import React from 'react';
import s from './style.module.scss';
import { FormColorSelector } from './FormColorSelector';

export const FormColorsSelector = ({ id }) => {
  return (
    <div className={s.container}>
      {['bg', 'border'].map(i => (
        <FormColorSelector id={id} type={i} />
      ))}
    </div>
  );
};
