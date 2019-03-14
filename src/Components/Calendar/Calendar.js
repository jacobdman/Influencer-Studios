import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import './Calendar.css';

const styles = theme => ({
  paper: {
    width: '80vw',
    height: '82vh',
    marginTop: 50,
    marginBottom: 50,
    padding: 50,
    [theme.breakpoints.down('md')]: {
      width: '100vw',
      marginTop: 25,
      marginBottom: 25,
    },
  },
  tableHeader: {
    color: '#fff',
    fontSize: 15,
  },
});

const testEvents = [
  {
    title: 'booked 12:00 - 2:00',
    start: 'Sat Mar 11 2019 03:24:00 GMT-0700 (Mountain Standard Time)',
    end: 'Sat Mar 11 2019 05:24:00 GMT-0700 (Mountain Standard Time)',
  },
  {
    title: 'booked 2:30 - 3:30',
    start: 'Sat Mar 11 2019 04:24:00 GMT-0700 (Mountain Standard Time)',
    end: 'Sat Mar 11 2019 05:24:00 GMT-0700 (Mountain Standard Time)',
  },
  {
    title: 'booked 1:00 - 4:00',
    start: 'Sat Mar 12 2019 03:24:00 GMT-0700 (Mountain Standard Time)',
    end: 'Sat Mar 12 2019 06:24:00 GMT-0700 (Mountain Standard Time)',
  },
];

const localizer = BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
  handleClick = () => {};

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <Button
          color="primary"
          variant="contained"
          style={{ marginBottom: 15 }}
          onClick={this.handleClick}
        >
          Log-In/Schedule
        </Button>
        <iframe
          src="https://calendar.google.com/calendar/b/6/embed?showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23666666&amp;src=ignitestudios.com_fee7gdbngli9jtaj5hqj4s2us4%40group.calendar.google.com&amp;color=%236B3304&amp;ctz=America%2FDenver"
          width="800"
          height="600"
          frameborder="0"
          scrolling="no"
        />
        <BigCalendar
          localizer={localizer}
          popup
          views={['month', 'week']}
          events={testEvents}
        />
      </Paper>
    );
  }
}

Calendar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Calendar);
