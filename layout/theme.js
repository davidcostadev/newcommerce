const colors = {
  gray50: '#FAFAFA',
  gray100: '#F5F5F5',
  gray200: '#EEEEEE',
  gray300: '#E0E0E0',
  gray400: '#BDBDBD',
  gray500: '#9E9E9E',
  gray600: '#757575',
  gray700: '#616161',
  gray800: '#424242',
  gray900: '#212121',
  white: '#FFFFFF',
  black: '#000000',
  blue: '#2196F3',
  red: '#F44336',
  deeppurpledark: '#673AB7',
  indigo50: '#E8EAF6',
  indigo100: '#C5CAE9',
  indigo200: '#9FA8DA',
  indigo300: '#7986CB',
  indigo400: '#5C6BC0',
  indigo500: '#3F51B5',
  indigo600: '#3949AB',
  indigo700: '#303F9F',
  indigo800: '#283593',
  indigo900: '#1A237E',
  indigoA100: '#8C9EFF',
  indigoA200: '#536DFE',
  indigoA400: '#3D5AFE',
  indigoA700: '#304FFE',
}


const fonts = {
  fontBody: '\'Oxygen\', sans-serif',
}

const minXs = 540
const minSm = 768
const minMd = 992
const minLg = 1200

const maxXs = minXs - 1
const maxSm = minSm - 1
const maxMd = minMd - 1
const maxLg = minLg - 1


const width = {
  minXs,
  minSm,
  minMd,
  minLg,
  maxXs,
  maxSm,
  maxMd,
  maxLg,
}

Object.entries(width)
  .forEach(([key, value]) => {
    width[key] = `${value}px`
  })

const theme = {
  ...colors,
  ...fonts,
  ...width,

  border: colors.gray300,
  gray: colors.gray500,
  text: colors.gray900,

  colorPrimary: colors.indigo500,
  colorSecond: colors.black,
  bodyBg: colors.gray100,
  borderColor: colors.gray200,

  navbarInverse: colors.indigo500,
  buttonDefault: colors.gray200,
  buttonDefaultHover: colors.gray400,
  buttonDefaultActive: colors.gray600,


  bgInverse: colors.gray900,
  textInverse: colors.gray50,
  linkInverse: colors.white,
  linkHoverInverse: colors.white,
  linkActiveInverse: colors.black,
  link: colors.indigo500,
  linkHover: colors.indigo100,
  linkActive: colors.indigo700,
}
// $color-primary: $color-red;
// $button-default: $color-gray200;
// $button-default-hover: $color-gray400;
// $button-default-active: $color-gray600;

export default theme
