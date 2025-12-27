import React, { useState } from 'react';
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { state } from '@/state';
import HTML5Icon from '@/assets/html.svg';
import JavaScriptIcon from '@/assets/javascript.svg';
import CSS3Icon from '@/assets/css.svg';
import NodeIcon from '@/assets/nodejs.svg';
import TypeScriptIcon from '@/assets/typescript.svg';
import ReactIcon from '@/assets/react.svg';
import VueIcon from '@/assets/vue.svg';
import NextIcon from '@/assets/nextjs.svg';
import { L } from '@/constants';

const iconsSVGs = {
  [L.HTML]: HTML5Icon,
  [L.CSS]: CSS3Icon,
  [L.REACT]: ReactIcon,
  [L.TYPESCRIPT]: TypeScriptIcon,
  [L.NODEJS]: NodeIcon,
  [L.VUE]: VueIcon,
  [L.NEXTJS]: NextIcon,
  [L.JAVASCRIPT]: JavaScriptIcon,
};

export const AdvertismentField = observer(() => {
  const {
    title,
    titleFontSize,
    titleColor,
    description,
    descriptionFontSize,
    descriptionColor,
    bgColor,
    borderColor,
    icons,
  } = state.previewItem;

  return (
    <div className={s.container}>
      <div
        id="card"
        className={s.card_container}
        style={{ backgroundColor: borderColor }}
      >
        <div className={s.card} style={{ backgroundColor: bgColor }}>
          <div className={s.text_container}>
            <span style={{ fontSize: titleFontSize, color: titleColor }}>
              {title}
            </span>
          </div>
          <div className={s.text_container}>
            <span
              style={{ fontSize: descriptionFontSize, color: descriptionColor }}
            >
              {description}
            </span>
          </div>
          <div className={s.labels_container}>
            {Array.from({ length: 5 }).map((_, index) => (
              <div className={s.label}>
                <img src={iconsSVGs[icons[index]]} alt={icons[index]} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
