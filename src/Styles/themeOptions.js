import { createMuiTheme } from '@material-ui/core/styles/';

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#6411ad',
    },
    secondary: {
      main: '#d0bfff',
    },
    background: {
      default: '#fafafa',
      paper: '#F5F5F5',
    },
    text: {
      primary: '#183642',
      secondary: '#6411ad',
    },
  },
  
  typography: {
    subtitle1: {
      fontFamily: 'Nunito',
    },
    button: {
      fontFamily: 'Nunito',
      fontWeight: 'bold',
    },
    fontFamily: 'Nunito',
    overline: {
      fontFamily: 'Nunito',
    },
    caption: {
      fontFamily: 'Nunito',
    },
    h5: {
      fontFamily: 'Nunito',
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
  // spacing: 8,
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