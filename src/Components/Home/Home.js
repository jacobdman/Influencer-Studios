import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  paper: {
    width: '80vw',
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
  button: {
    ...theme.button,
    marginTop: 20,
  },
});

class Home extends Component {
  handleClick = () => {
    this.props.history.push('/contact');
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <Typography className={classes.text} color="default">
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
        <Typography className={classes.text}>
          (801) 999-8249
          <br />
          1005 S 300 W, Salt Lake City, UT 84101
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={this.handleClick}
        >
          Contact
        </Button>
      </Paper>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Home));
