import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
  tabs: {
    width: '100%',
    marginLeft: 10,
    marginRight: 10,
  },
  tab: {
    color: theme.palette.primary.contrastText,
    '& a': {
      color: theme.palette.secondary,
    },
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
      },
      // {
      //   label: 'GALLERY',
      //   path: `/gallery`,
      // },
      // {
      //   label: 'CREATED IN STUDIO',
      //   path: `/examples`,
      // },
      // {
      //   label: 'STUDIO SPECS',
      //   path: `/specs`,
      // },
      // {
      //   label: 'TESTIMONIALS',
      //   path: `/testimonials`,
      // },
      {
        label: 'CALENDAR',
        path: `/calendar`,
      },
      {
        label: 'HAIR/MAKE-UP',
        path: `/makeitup`,
      },
    ];
    return (
      <Tabs
        value={pathname}
        className={classes.tabs}
        indicatorColor="secondary"
        textColor="secondary"
        scrollable
        // scrollButtons="off"
      >
        {tabs.map(({ label, path }) => (
          <Tab
            key={label}
            value={path}
            label={label}
            className={classes.tab}
            component={Link}
            to={path}
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
