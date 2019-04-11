import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  iframe: {
    width: '100vw',
    height: '93vh',
    marginTop: -15,
    borderColor: theme.palette.primary.main,
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
