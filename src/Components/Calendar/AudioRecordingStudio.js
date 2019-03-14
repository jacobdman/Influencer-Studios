import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import './Calendar.css';

const styles = theme => ({
  paper: {
    width: '80vw',
    height: '82vh',
    marginTop: 50,
    marginBottom: 50,
    padding: 20,
    [theme.breakpoints.down('md')]: {
      width: '100vw',
      marginTop: 25,
      marginBottom: 25,
      padding: 0,
    },
  },
  tableHeader: {
    color: '#fff',
    fontSize: 15,
  },
  calendar: {
    width: '100%',
    height: '100%',
    border: '0px solid black',
  },
});

class Calendar extends Component {
  handleClick = () => {};

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <iframe
          src="https://calendar.google.com/calendar/b/6/embed?showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23666666&amp;src=ignitestudios.com_fee7gdbngli9jtaj5hqj4s2us4%40group.calendar.google.com&amp;color=%236B3304&amp;ctz=America%2FDenver"
          className={classes.calendar}
          title="Recording Studio Calendar"
          scrolling="no"
        />
      </Paper>
    );
  }
}

Calendar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Calendar);
