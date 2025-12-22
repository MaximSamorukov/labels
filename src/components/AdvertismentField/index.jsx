import React, { useState } from 'react'
import s from './style.module.scss';
import { observer } from 'mobx-react-lite';
import { state } from '@/state';
import HTML5Icon from '@/assets/HTML5.svg';
import CSS3Icon from '@/assets/CSS3.svg';
import NodeIcon from '@/assets/Node.js.svg';
import TypeScriptIcon from '@/assets/TypeScript.svg';
import ReactIcon from '@/assets/React.svg';

export const AdvertismentField = observer(() => {
  const label = state.previewItem.label;
  return (
    <div className={s.container}>
      <div id="card_1" className={s.card_container}>
        <div className={s.card}>
          <div className={s.text_container}>
            <span>{label}</span>
          </div>
          <div className={s.labels_container}>
            <div className={s.label}>
              <img src={HTML5Icon} alt="html" />
            </div>
            <div className={s.label}>
              <img src={CSS3Icon} alt="css" />
            </div>
            <div className={s.label}>
              <img src={NodeIcon} alt="node.js" />
            </div>
            <div className={s.label}>
              <img src={TypeScriptIcon} alt="typescript" />
            </div>
            <div className={s.label}>
              <img src={ReactIcon} alt="react" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )})
