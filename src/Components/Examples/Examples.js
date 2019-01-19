import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  paper: {
    width: '80vw',
    height: '150vh',
    marginTop: 50,
    marginBottom: 50,
    [theme.breakpoints.down('md')]: {
      width: '100vw',
      marginTop: 25,
      marginBottom: 25,
    },
  },
});

class Examples extends Component {
  render() {
    const { classes } = this.props;
    return <Paper className={classes.paper}>Examples</Paper>;
  }
}

Examples.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Examples);
