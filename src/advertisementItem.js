import { L } from '@/constants';

const defaultIcons = {
  0: L.HTML,
  1: L.CSS,
  2: L.REACT,
  3: L.TYPESCRIPT,
  4: L.NODEJS,
};

export class AdvItem {
  id = null;
  title = null;
  titleFontSize = 45;
  titleColor = '#f59e0b';
  description = null;
  descriptionFontSize = 25;
  descriptionColor = '#f59e0b';
  bgColor = '#464545';
  borderColor = '#f59e0b';
  icons = defaultIcons;

  constructor(
    id,
    title,
    titleFontSize,
    titleColor,
    description,
    descriptionFontSize,
    descriptionColor,
    bgColor,
    borderColor,
    icons = defaultIcons
  ) {
    this.id = id;
    this.title = title;
    this.titleFontSize = titleFontSize || this.titleFontSize;
    this.titleColor = titleColor || this.titleColor;
    this.description = description;
    this.descriptionFontSize = descriptionFontSize || this.descriptionFontSize;
    this.descriptionColor = descriptionColor || this.descriptionColor;
    this.bgColor = bgColor || this.bgColor;
    this.borderColor = borderColor || this.borderColor;
    this.icons = icons;
  }
}
