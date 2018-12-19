import React, { Component } from 'react';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Theme from './theme';
import Header from './Components/Header/Header'
import Routes from './routes';
import 'typeface-roboto';

const styles = theme => ({
});


class App extends Component {
  render() {
    return (
      <Theme>
        <div>
          <CssBaseline />
          <Header />
          <div>
            {Routes}
          </div>
        </div>
      </Theme>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);