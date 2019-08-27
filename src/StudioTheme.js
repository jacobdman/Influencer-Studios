import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './Components/AppBar/AppBar';
import MobileAppBar from './Components/AppBar/MobileAppBar';
import Footer from './Components/Footer/Footer';

const theme = createMuiTheme({
  typography: {
    color: '#fff',
    useNextVariants: true,
  },
  palette: {
    type: 'light',
    background: {
      // '#000',
      // '#1b1b1b',
      // '#424242',
      // '#6d6d6d',
      // '#9b9b9b',
      // '#ccc',
      // '#fff',
      darkGrey: '#1b1b1b',
      lightGrey: '#424242',
      default: '#eee',
      // paper: '#6d6d6d',
    },
    primary: {
      main: '#D4A741',
    },
    secondary: {
      main: '#5e0e29',
    },
  },
  zIndex: {
    appBar: 1100,
  },
  button: {
    '&': {
      background: '#D4A741',
      '&:hover': {
        background: '#5e0e29',
      },
    },
  },
});

const StudioTheme = ({ forceHeader, children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar forceHeader={forceHeader} />
      <MobileAppBar forceHeader={forceHeader} />
      <CssBaseline />
      {children}
      <Footer />
    </MuiThemeProvider>
  );
};

export default StudioTheme;
