import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from './Tabs';

const styles = theme => ({
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    zIndex: theme.zIndex.appBar,
    height: 50,
    backgroundColor: theme.palette.background.darkGrey,
  },
  logo: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: 3,
    boxSizing: 'border-box',
  },
  logoImg: {
    height: '100%',
    width: 'auto',
  },
  nameImg: {
    height: '75%',
    width: 'auto',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
});

class StudioAppBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" className={classes.appBar}>
        <Tabs handleClick={this.handleClick} />
        <div className={classes.logo}>
          <img
            className={classes.logoImg}
            alt="Logo"
            src={require('../../Assets/Logo.svg')}
          />
          <img
            className={classes.nameImg}
            alt="Name"
            src={require('../../Assets/Logo_Name.svg')}
          />
        </div>
      </AppBar>
    );
  }
}

StudioAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(StudioAppBar));
