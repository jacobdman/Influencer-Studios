import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './Components/AppBar/AppBar';

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
      background: '#5e0e29',
      '&:hover': {
        background: '#D4A741',
      },
    },
  },
  link: {
    // textDecoration: 'none',
    // '&': {
    //   color: '#74CCC6',
    //   '&:hover': {
    //     color: '#2289D9',
    //   },
    // },
  },
});

class StudioTheme extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar />
        <CssBaseline />
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default StudioTheme;
