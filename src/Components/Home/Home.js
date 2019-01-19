import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  paper: {
    width: '80vw',
    // height: '90vw',
    marginTop: 50,
    marginBottom: 50,
    padding: 50,
    [theme.breakpoints.down('md')]: {
      width: '100vw',
      marginTop: 25,
      marginBottom: 25,
    },
  },
  text: {
    fontSize: 18,
  },
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <Typography className={classes.text}>
          Ignite Studios offers you a state-of-the-art facility conveniently
          located in the heart of downtown Salt Lake, complete with soundstage,
          green and white cyc walls, edit bays, and an audio recording suite.
        </Typography>
        <br />
        <br />
        <Typography className={classes.text}>
          Please call for a tour and special pricing before our official
          February 2019 launch!
        </Typography>
        <br />
        <br />
        (801) 999-8249
        <br />
        1005 S 300 W, Salt Lake City, UT 84101
      </Paper>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
