import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import StudioContext from '../../context/StudioContext';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { Motion, spring } from 'react-motion';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from './Tabs';

const styles = theme => ({
  appBar: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 0,
    zIndex: theme.zIndex.appBar,
    backgroundColor: theme.palette.background.darkGrey,
    padding: '15px 0',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  menuIcon: {
    position: 'fixed',
    zIndex: theme.zIndex.appBar,
    right: 10,
    top: 0,
    color: 'white',
    border: '2px solid white',
    borderRadius: 10,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  logo: {
    height: 50,
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
      height: '60%',
    },
  },
});

const StudioMobileAppBar = props => {
  const { classes } = props;
  const context = useContext(StudioContext);

  return (
    <>
      <Motion
        defaultStyle={{ y: -400 }}
        style={{
          y: spring(!context.forceHeader ? -400 : 0, {
            stiffness: 50,
            damping: 12,
          }),
        }}
      >
        {style => (
          <AppBar
            position="fixed"
            className={classes.appBar}
            style={{ transform: `translateY(${style.y}px)` }}
          >
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
            <Tabs />
          </AppBar>
        )}
      </Motion>
      <Motion
        defaultStyle={{ y: -100 }}
        style={{
          y: spring(context.forceHeader ? 315 : 15, {
            stiffness: 50,
            damping: 12,
          }),
        }}
      >
        {style => (
          <IconButton
            className={classes.menuIcon}
            onClick={context.toggleForceHeader}
            style={{ transform: `translateY(${style.y}px)` }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        )}
      </Motion>
    </>
  );
};

StudioMobileAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(StudioMobileAppBar));
