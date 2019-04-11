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
    </Paper>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Contact));
