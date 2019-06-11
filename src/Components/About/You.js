import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import layoutImg from '../../Assets/IMG_0164.jpg';

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
    margin: 15,
    marginTop: 30,
  },
});

class You extends Component {
  handleClick = page => {
    this.props.history.push(`/${page}`);
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <h2>About You</h2>
        <Typography className={classes.text}>
          ​No, no. You read the tab right. We're not here to tell you about us.
          (Click on another tab for that goodness!) We genuinely want to know
          about you! What is your passion project that needs a voice? You have a
          story to tell and we want to help you tell it. Tell us what you're
          searching for!
          <br />
          <br />
          ​For now, we'll assume you're looking for a place to begin. Are you an
          influencer? Podcaster? Coach? Trainer? Marketer?
          <br />
          <br />
          ​If so, we have the facility and a wonderfully creative, personable
          production team who will hold your hand (and stroke it occasionally)
          through each phase of the process, while giving you a steady stream of
          confidence to complete it in style.
          <br />
          <br />
          ​Perhaps you just need an upscale place to present or host an event?
          We can accommodate your audience or guests up to 125 people. Unless
          they are sumo wrestlers, in which case...we'll need to chat. (Because
          we're curious!)
        </Typography>
      </Paper>
    );
  }
}

You.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(You));
