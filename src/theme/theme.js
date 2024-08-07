const fontSize = Object.freeze({
  s: 14,
  m: 16,
  l: 20,
  xl: 24,
  xxl: 32,
  xxxl: 40,
  xxxxl: 64,
});

const fontWeight = Object.freeze({
  light: 400,
  regular: 500,
  medium: 600,
  bold: 700,
  extraBold: 800,
});

const color = Object.freeze({
  backgroundColor: '#FFFFFF',
  fontColor: '#000000',
  mainColor: '#B49254',
  cardFontColor: 'rgba(180,146,84,0.7)',
});

const spacing = Object.freeze({
  xxxs: 4,
  xxs: 8,
  xs: 16,
  s: 24,
  m: 32,
  l: 40,
  xl: 44,
  xxl: 48,
  xxxl: 60,
  xxxxl: 64,
});

const theme = Object.freeze({
  fontSize,
  fontWeight,
  color,
  spacing,
});

export { theme, fontSize, fontWeight, color, spacing };
