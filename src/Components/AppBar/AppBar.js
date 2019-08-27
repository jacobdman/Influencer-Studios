import React, { useState, useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import StudioContext from '../../context/StudioContext';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { Motion, spring } from 'react-motion';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Tabs from './Tabs';

const styles = theme => ({
  appBar: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 0,
    zIndex: theme.zIndex.appBar,
    height: 75,
    backgroundColor: theme.palette.background.darkGrey,
    padding: '0 30px',
    [theme.breakpoints.down('sm')]: {
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
  },
});

const ElevationScroll = ({ children, setCollapsed }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 400,
  });

  if (trigger) {
    setCollapsed(false);
  } else {
    setCollapsed(true);
  }

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const StudioAppBar = props => {
  const { classes, match } = props;
  const [collapsed, setCollapsed] = useState(true);
  const context = useContext(StudioContext);

  if (match.path === '/' && match.isExact) {
    return (
      <ElevationScroll setCollapsed={setCollapsed} {...props}>
        <Motion
          defaultStyle={{ y: -200 }}
          style={{
            y: spring(collapsed && !context.forceHeader ? -200 : 0, {
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
      </ElevationScroll>
    );
  }
  return (
    <ElevationScroll setCollapsed={setCollapsed} {...props}>
      <AppBar position="fixed" className={classes.appBar}>
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
    </ElevationScroll>
  );
};

StudioAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(StudioAppBar));
