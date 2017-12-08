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
  blue: '#2196F3',
  red: '#F44336',
  deeppurpledark: '#673AB7',
}


const theme = {
  ...colors,
  border: colors.gray300,
  gray: colors.gray500,
  text: colors.gray900,

  colorPrimary: colors.red,
  colorSecond: colors.blue,
  navbarInverse: colors.deeppurpledark,
  buttonDefault: colors.gray200,
  buttonDefaultHover: colors.gray400,
  buttonDefaultActive: colors.gray600,
}
// $color-primary: $color-red;
// $button-default: $color-gray200;
// $button-default-hover: $color-gray400;
// $button-default-active: $color-gray600;

export default theme
