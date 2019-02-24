import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ApiCalendar from 'react-google-calendar-api';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
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
    start: 'Sat Feb 21 2019 03:24:00 GMT-0700 (Mountain Standard Time)',
    end: 'Sat Feb 21 2019 05:24:00 GMT-0700 (Mountain Standard Time)',
  },
  {
    title: 'booked 2:30 - 3:30',
    start: 'Sat Feb 21 2019 04:24:00 GMT-0700 (Mountain Standard Time)',
    end: 'Sat Feb 21 2019 05:24:00 GMT-0700 (Mountain Standard Time)',
  },
  {
    title: 'booked 1:00 - 4:00',
    start: 'Sat Feb 22 2019 03:24:00 GMT-0700 (Mountain Standard Time)',
    end: 'Sat Feb 22 2019 06:24:00 GMT-0700 (Mountain Standard Time)',
  },
];

const localizer = BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
  componentDidMount = async () => {
    ApiCalendar.onLoad(async () => {
      await ApiCalendar.handleAuthClick();
      await ApiCalendar.setCalendar({
        newCalendar:
          'ignitestudios.com_fee7gdbngli9jtaj5hqj4s2us4@group.calendar.google.com',
      });
      await ApiCalendar.listUpcomingEvents(
        10,
        'ignitestudios.com_fee7gdbngli9jtaj5hqj4s2us4@group.calendar.google.com'
      ).then(result => {
        console.log(result.items);
      });
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
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
