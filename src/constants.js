export const L = {
  CSS: 'CSS',
  HTML: 'HTML',
  JAVASCRIPT: 'JAVASCRIPT',
  NEXTJS: 'NEXTJS',
  NODEJS: 'NODEJS',
  REACT: 'REACT',
  TYPESCRIPT: 'TYPESCRIPT',
  VUE: 'VUE',
};
export const Icons = {
  [L.CSS]: 'css.svg',
  [L.HTML]: 'html.svg',
  [L.JAVASCRIPT]: 'javascript.svg',
  [L.NEXTJS]: 'nextjs.svg',
  [L.NODEJS]: 'nodejs.svg',
  [L.REACT]: 'react.svg',
  [L.TYPESCRIPT]: 'typescript.svg',
  [L.VUE]: 'vue.svg',
};

export const FONTS_SIZES = Array.from({ length: 50 }).map((_, i) => 10 + i * 2);
export const defaultIcons = {
  0: L.HTML,
  1: L.CSS,
  2: L.REACT,
  3: L.TYPESCRIPT,
  4: L.NODEJS,
};

export const FONTS_NAMES = {
  CACTUS: 'Cactus Classical Serif',
  GEOLOGICA: 'Geologica',
  ORANIENBAUM: 'Oranienbaum',
  //YANONE_KAFFEESATZ: 'Yanone Kaffeesatz',
  //ZEN_ANTIQUE: 'Zen Antique',
  MERRIWEATHER: 'Merriweather Local',
};

export const DEFAULT_FONT_SIZE = {
  TITLE: 58,
  DESCRIPTION: 26,
};

export const baseItem = {
  id: null,
  title: 'title',
  titleFontSize: DEFAULT_FONT_SIZE.TITLE,
  titleFontFamily: 'MERRIWEATHER',
  titleColor: '#f59e0b',
  description: 'description',
  descriptionFontFamily: 'MERRIWEATHER',
  descriptionFontSize: DEFAULT_FONT_SIZE.DESCRIPTION,
  descriptionColor: '#f59e0b',
  bgColor: '#464545',
  borderColor: '#f59e0b',
  icons: defaultIcons,
};
