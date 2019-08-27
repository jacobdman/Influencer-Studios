import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  buttons: {
    padding: '0 30px',
    color: '#fff',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  button: {
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
  active: {
    color: theme.palette.primary.main,
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
        label: 'ABOUT YOU',
        path: `/about/you`,
        component: Link,
      },
      {
        label: 'GALLERY',
        path: `/gallery`,
        component: Link,
      },
      // {
      //   label: 'PARTNERS',
      //   path: `/about/team`,
      //   component: Link,
      // },
      // {
      //   label: 'TESTIMONIALS',
      //   path: `/testimonials`,
      //   component: Link,
      // },
      {
        label: 'CONTACT / PRICING',
        path: `/contact`,
        component: Link,
      },
      // {
      //   label: 'OUR TEAM',
      //   path: `http://www.theshutterbrigade.com/`,
      //   component: 'a',
      // },
      // {
      //   label: 'HAIR/MAKE-UP',
      //   path: `https://www.makeitupbykrista.com/`,
      //   component: 'a',
      // },
    ];
    return (
      <div className={classes.buttons}>
        {tabs.map(({ label, path, component }) => (
          <Button
            key={label}
            value={path}
            className={path === pathname ? classes.active : classes.button}
            component={component}
            to={path}
            href={path}
          >
            {label}
          </Button>
        ))}
      </div>
    );
  }
}

TabRouter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(TabRouter));
