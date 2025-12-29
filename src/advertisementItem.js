import { DEFAULT_FONT_SIZE, defaultIcons } from '@/constants';

export class AdvItem {
  id = null;
  title = null;
  titleFontSize = DEFAULT_FONT_SIZE.TITLE;
  titleColor = '#f59e0b';
  description = null;
  descriptionFontSize = DEFAULT_FONT_SIZE.DESCRIPTION;
  descriptionColor = '#f59e0b';
  bgColor = '#464545';
  borderColor = '#f59e0b';
  icons = defaultIcons;
  titleFontFamily = 'MERRIWEATHER';
  descriptionFontFamily = 'MERRIWEATHER';

  constructor(data) {
    const {
      id,
      title,
      titleFontSize,
      titleColor,
      description,
      descriptionFontSize,
      descriptionColor,
      bgColor,
      borderColor,
      icons = defaultIcons,
      titleFontFamily,
      descriptionFontFamily,
    } = data;
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
    this.titleFontFamily = titleFontFamily;
    this.descriptionFontFamily = descriptionFontFamily;
  }
}
