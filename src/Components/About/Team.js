import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import shutter from '../../Assets/shutter.png';
import makeup from '../../Assets/makeup.webp';

const styles = theme => ({
  root: {
    width: '100vw',
    padding: '50px 15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
    },
  },
  header: {
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
  pageContent: {
    width: '50vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '0 10px',
      width: '100%',
    },
  },
  partners: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    padding: '30px 10px',
    width: '80vw',
    [theme.breakpoints.down('sm')]: {
      padding: '20px 10px',
      width: '100%',
    },
  },
  shutter: {
    height: 150,
    width: 350,
    borderRadius: 10,
    backgroundImage: `url(${shutter})`,
    backgroundPosition: '50%',
    backgroundColor: 'black',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('sm')]: {
      margin: '15px 0',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  makeup: {
    height: 150,
    width: 350,
    borderRadius: 10,
    backgroundImage: `url(${makeup})`,
    backgroundPosition: '50%',
    backgroundColor: '#272727',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('sm')]: {
      margin: '15px 0',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
});

const Team = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Fade in={true} timeout={2500}>
        <Typography variant="h2" className={classes.header}>
          Partners
        </Typography>
      </Fade>
      <div className={classes.pageContent}>
        <Typography className={classes.text} variant="h6">
          Check out our awesome partners!
        </Typography>
      </div>
      <Fade in={true} timeout={2500}>
        <div className={classes.partners}>
          <div
            className={classes.shutter}
            onClick={() =>
              window.open('http://www.theshutterbrigade.com/', '_blank')
            }
          />
          <div
            className={classes.makeup}
            onClick={() =>
              window.open('https://www.makeitupbykrista.com/', '_blank')
            }
          />
        </div>
      </Fade>
    </div>
  );
};

Team.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Team);
