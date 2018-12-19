import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    color: 'white',
  },
  palette: {
    primary: {
      main: '#616161',
    },
    secondary: {
      main: '#5c1000',
    },
    tertiary: {
      light: '#e6d250',
      main: '#ffc400',
      dark: '#a0641e',
      contrastText: '#000',
    },
  },
  zIndex: {
    appBar: 1100,
  },
  button: {
    '&': {
      background: '#74CCC6',
      '&:hover': {
        background: '#2289D9',
      },
    },
  },
  link: {
    textDecoration: 'none',
    '&': {
      color: '#74CCC6',
      '&:hover': {
        color: '#2289D9',
      },
    },
  },
});

class Theme extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>{this.props.children}</MuiThemeProvider>
    );
  }
}

export default Theme;