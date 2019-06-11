import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  paper: {
    width: '80vw',
    marginTop: 50,
    marginBottom: 50,
    padding: 50,
    [theme.breakpoints.down('md')]: {
      marginTop: 25,
      marginBottom: 25,
    },
  },
  text: {
    fontSize: 20,
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    margin: '30px 0',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  divider: {
    height: 50,
    width: 1,
    backgroundColor: '#9b9b9b',
    [theme.breakpoints.down('md')]: {
      margin: '25px 0',
      width: 200,
      height: 1,
    },
  },
  mapWrapper: {
    margin: '0 auto',
    height: 500,
    width: 700,
    [theme.breakpoints.down('sm')]: {
      height: 300,
      width: 250,
    },
  },
  largeIframe: {
    height: 500,
    width: 700,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  smallIframe: {
    height: 300,
    width: 250,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  gmapCanvas: {
    overflow: 'hidden',
    background: 'none !important',
  },
});

const Contact = ({ classes }) => {
  return (
    <Paper className={classes.paper}>
      <div className={classes.wrapper}>
        <Typography className={classes.text}>(801) 999-8249</Typography>
        <div className={classes.divider} />
        <Typography className={classes.text}>Info@IgniteStudios.com</Typography>
        <div className={classes.divider} />
        <Typography className={classes.text}>
          1005 S 300 W, Salt Lake City, UT 84101
        </Typography>
      </div>
      <div className={classes.mapWrapper}>
        <div className={classes.gmapCanvas}>
          <iframe
            src="https://maps.google.com/maps?q=1005%20S%20300%20W%2C%20Salt%20Lake%20City%2C%20UT%2084101&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            title="map"
            className={classes.largeIframe}
          />
          <iframe
            src="https://maps.google.com/maps?q=1005%20S%20300%20W%2C%20Salt%20Lake%20City%2C%20UT%2084101&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            title="map"
            className={classes.smallIframe}
          />
        </div>
      </div>
      <h2>Rates</h2>
      <div className={classes.wrapper}>
        <Typography className={classes.text}>Facility Rental:</Typography>
        <div className={classes.divider} />
        <Typography className={classes.text}>
          $800 / Full Day (10 hrs)
        </Typography>
        <div className={classes.divider} />
        <Typography className={classes.text}>
          $500 / Half Day (4 hrs)
        </Typography>
      </div>
    </Paper>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Contact));
