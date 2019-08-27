import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import PurpleShotShort from '../../Assets/PurpleShotShort.jpeg';

const styles = theme => ({
  root: {
    width: '100vw',
    padding: '50px 15px',
    display: 'flex',
    flexDirection: 'column',
  },
  youPageImageWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  youPageImage: {
    height: 300,
    width: '100%',
    backgroundImage: `url(${PurpleShotShort})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    backgroundAttachment: 'fixed',
    filter: 'grayscale(100%)',
    [theme.breakpoints.down('sm')]: {
      height: 400,
    },
  },
  youHeader: {
    color: theme.palette.primary.main,
    fontWeight: 600,
    position: 'relative',
    top: -160,
    [theme.breakpoints.down('sm')]: {
      top: -300,
    },
  },
  youPageContentWrapper: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: -150,
      padding: '0 10px',
    },
  },
  youPageContent: {
    width: '50%',
    fontSize: 20,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
});

const You = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.youPageImageWrapper}>
        <Fade in={true} timeout={2500}>
          <div className={classes.youPageImage} />
        </Fade>
        <Fade in={true} timeout={2500}>
          <Typography variant="h2" className={classes.youHeader}>
            About You
          </Typography>
        </Fade>
      </div>
      <div>
        <div className={classes.youPageContentWrapper}>
          <Typography className={classes.youPageContent}>
            ​No, no. You read the tab right. We're not here to tell you about
            us. (Click on another tab for that goodness!) We genuinely want to
            know about you! What is your passion project that needs a voice? You
            have a story to tell and we want to help you tell it. Tell us what
            you're searching for!
            <br />
            <br />
            ​For now, we'll assume you're looking for a place to begin. Are you
            an influencer? Podcaster? Coach? Trainer? Marketer?
            <br />
            <br />
            ​If so, we have the facility and a wonderfully creative, personable
            production team who will hold your hand (and stroke it occasionally)
            through each phase of the process, while giving you a steady stream
            of confidence to complete it in style.
            <br />
            <br />
            ​Perhaps you just need an upscale place to present or host an event?
            We can accommodate your audience or guests up to 125 people. Unless
            they are sumo wrestlers, in which case...we'll need to chat.
            (Because we're curious!)
          </Typography>
        </div>
      </div>
    </div>
  );
};

You.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(You);
