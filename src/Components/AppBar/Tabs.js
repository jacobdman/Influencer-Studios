import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
  tabs: {
    width: '100%',
    padding: '0 30px',
    color: '#fff',
  },
  tab: {
    padding: 0,
    color: theme.typography.color,
    '& a': {
      color: theme.palette.primary,
    },
    '& span': {
      padding: '0 3px',
    },
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

class TabRouter extends Component {
  render() {
    const { pathname } = this.props.location;
    const { classes } = this.props;
    const tabs = [
      {
        label: 'HOME',
        path: `/`,
        component: Link,
      },
      {
        label: 'GALLERY',
        path: `/gallery`,
        component: Link,
      },
      {
        label: 'WHAT WE DO',
        path: `/about/studio`,
        component: Link,
      },
      {
        label: 'STUDIO SPECS',
        path: `/specs`,
        component: Link,
      },
      {
        label: 'TESTIMONIALS',
        path: `/testimonials`,
        component: Link,
      },
      {
        label: 'CONTACT',
        path: `/contact`,
        component: Link,
      },
      {
        label: 'OUR TEAM',
        path: `http://www.theshutterbrigade.com/`,
        component: 'a',
      },
      {
        label: 'HAIR/MAKE-UP',
        path: `https://www.makeitupbykrista.com/`,
        component: 'a',
      },
    ];
    return (
      <Tabs
        value={pathname}
        className={classes.tabs}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
      >
        {tabs.map(({ label, path, component }) => (
          <Tab
            key={label}
            value={path}
            label={label}
            className={classes.tab}
            component={component}
            to={path}
            href={path}
          />
        ))}
      </Tabs>
    );
  }
}

TabRouter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(TabRouter));
