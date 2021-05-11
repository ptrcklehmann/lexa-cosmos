import { createMuiTheme } from '@material-ui/core/styles/';

const lightTheme = createMuiTheme({
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
      fontFamily: 'Inter',
    },
    button: {
      fontFamily: 'Inter',
    },
    fontFamily: 'Inter',
    overline: {
      fontFamily: 'Inter',
    },
    caption: {
      fontFamily: 'Inter',
    },
    h5: {
      fontFamily: 'Inter',
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
})

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#e0ac9d',
    },
    secondary: {
      main: '#6f2dbd',
    },
    background: {
      default: '#231651',
      paper: '#2e1760',
    },
    text: {
      primary: '#50ffb1',
      secondary: '#d6fff6',
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

export const themeSchema = (theme) => {
  return (theme === 'light') ? lightTheme : darkTheme
}