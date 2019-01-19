import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './Components/AppBar/AppBar';

const theme = createMuiTheme({
  typography: {
    color: 'white',
  },
  palette: {
    background: {
      default: '#1b1b1b',
      paper: '#424242',
    },
    primary: {
      main: '#5e0e29',
    },
    secondary: {
      main: '#b2802c',
    },
  },
  zIndex: {
    appBar: 1100,
  },
  button: {
    // '&': {
    //   background: '#74CCC6',
    //   '&:hover': {
    //     background: '#2289D9',
    //   },
    // },
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
