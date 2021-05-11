import { createMuiTheme } from '@material-ui/core/styles/';

export const themeOptions = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#e0ac9d',
    },
    secondary: {
      main: '#6f2dbd',
    },
    background: {
      default: '#f0efeb',
      paper: '#f8f9fa',
    },
    text: {
      primary: '#183642',
      secondary: '#001845',
    },
  },
  typography: {
    subtitle1: {
      fontFamily: 'Roboto Mono',
    },
    button: {
      fontFamily: 'Roboto Mono',
    },
    fontFamily: 'Inter',
    overline: {
      fontFamily: 'Roboto Mono',
    },
    caption: {
      fontFamily: 'Roboto Mono',
    },
    h5: {
      fontFamily: 'Roboto Mono',
    },
    h4: {
      fontWeight: 400,
    },
    h6: {
      fontWeight: 500,
    },
  },
  props: {
    MuiAppBar: {
      color: 'transparent',
    },
  },
  spacing: 8,
});