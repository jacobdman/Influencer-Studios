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
  },
  logo: {
    display: 'flex',
    backgroundColor: theme.palette.background.paper,
    padding: 5,
    boxSizing: 'border-box',
    borderRadius: 5,
  },
  logoImg: {
    height: 40,
    width: 'auto',
  },
  nameImg: {
    height: 40,
    width: 'auto',
    marginLeft: 10,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
});

class StudioAppBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" color="primary" className={classes.appBar}>
        <Tabs handleClick={this.handleClick} />
        <div className={classes.logo}>
          <img
            className={classes.logoImg}
            alt="Logo"
            src={require('../../Assets/Logo.png')}
          />
          <img
            className={classes.nameImg}
            alt="Name"
            src={require('../../Assets/Name.png')}
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
