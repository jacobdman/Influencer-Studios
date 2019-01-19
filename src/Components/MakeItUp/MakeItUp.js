import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  iframe: {
    width: '90vw',
    height: '100vh',
    marginTop: -52,
    marginBottom: 4,
    borderColor: theme.palette.secondary.main,
    [theme.breakpoints.down('md')]: {
      width: '100vw',
    },
  },
});

class MakeItUp extends Component {
  render() {
    const { classes } = this.props;
    return (
      <iframe
        src={'https://www.makeitupbykrista.com/'}
        className={classes.iframe}
        title="MakeItUp"
      />
    );
  }
}

MakeItUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MakeItUp);
