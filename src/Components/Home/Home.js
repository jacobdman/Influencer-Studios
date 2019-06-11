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

class Home extends Component {
  handleClick = page => {
    this.props.history.push(`/${page}`);
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <h2>The Studio</h2>
        <Typography className={classes.text}>
          ​In the heart of Salt Lake, convenient to the airport and within the
          "Devil's Triangle" of freeways (I-15, I-80, I-215) you will find our
          state-of-the-art film and audio production studio ... but only if
          you're looking for it. The older brick exterior in a "historic"
          neighborhood (aka yet-to-be-renovated area) is the perfect disguise to
          prevent the paparazzi from rushing us and stalking our talent. They
          would never suspect that our camouflaged building is an internal
          safe-haven where the magic happens!
          <br />
          <br />
          Shh....
          <br />
          It's a carefully guarded secret that behind this brick (individually
          laid by the building's owner, Angelo, himself while defying all modern
          child-labor laws at the age of 12) we run a covert high-tech operation
          that boasts:
          <br />
          <ul>
            <li>
              The quietest studio in SL, assisted by a nearly half-million
              dollar renovation that includes floor-ceiling surround sound
              panels. We've done the work so you don't have to choose between
              A/C and set lights! (You're welcome, sweat-proned actors. And if
              you're still a little shiny up top, click on our tab for Makeup
              ... yes, men--it's your moment to wear it shamelessly.)
            </li>
            <li>Each room expertly sound-proofed.</li>
            <li>A 1900 sq ft soundstage, 13 ft ceilings</li>
            <li>Full white and green cyc walls with scoops</li>
            <li>Separate audio recording and control rooms</li>
            <li>Sound-proof edit bays</li>
            <li>12'x50' staging and green room area</li>
            <li>Electric grid</li>
            <li>digitally converted sound panel</li>
            <li>Technical control panels</li>
            <li>
              Integrated networking through each room, which can accommodate a
              full orchestra
            </li>
          </ul>
          <br />
          <br />
          To the unsuspecting passerby, it is just another building around the
          corner from the haunted house. To those in the know, it is Utah's film
          and audio industry's best-kept secret. Truly a geode. We've got your
          back!
          <br />
          <br />
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',
              // margin: 15,
            }}
          >
            <img src={layoutImg} alt="Studio Layout" />
          </div>
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => this.handleClick('contact')}
        >
          Contact
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => this.handleClick('gallery')}
        >
          Full Gallery
        </Button>
      </Paper>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Home));
