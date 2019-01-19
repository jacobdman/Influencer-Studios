import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import StudioTheme from './StudioTheme';
import Routes from './routes/Router';
import 'typeface-roboto';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1b1b1b',
  },
  routeWrapper: {
    marginTop: 48,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <StudioTheme>
          <div className={classes.routeWrapper}>
            <Routes />
          </div>
        </StudioTheme>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
