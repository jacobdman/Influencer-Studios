import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import StudioLayout from '../../Assets/StudioLayout.jpg';

const styles = theme => ({
  root: {
    width: '100vw',
    padding: '50px 15px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
    },
  },
  contactPageImageWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  contactPageImage: {
    height: 600,
    width: 825,
    backgroundImage: `url(${StudioLayout})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('sm')]: {
      height: 280,
      width: '100%',
    },
  },
  contactHeader: {
    color: theme.palette.primary.main,
    fontWeight: 600,
    margin: '50px 0',
  },
  contactPageContent: {
    width: '50vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: '0 10px',
      width: '100%',
    },
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  contactType: {
    display: 'flex',
    alignItems: 'center',
  },
  contactTitle: {
    margin: 20,
  },
  mapWrapper: {
    margin: '0 auto',
    height: 500,
    width: 700,
    [theme.breakpoints.down('sm')]: {
      marginTop: 30,
      height: 300,
      width: 250,
    },
  },
  largeIframe: {
    height: 500,
    width: 700,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 5,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  smallIframe: {
    height: 300,
    width: 250,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: 5,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  gmapCanvas: {
    overflow: 'hidden',
    background: 'none !important',
  },
  table: {
    margin: '25px 0',
  },
});

const rates = [
  {
    room: 'Soundstage',
    time: 'Full Day (10hrs)',
    price: 800,
  },
  {
    room: 'Soundstage',
    time: 'Half Day (4hrs)',
    price: 500,
  },
  {
    room: 'Audio Studio',
    time: 'Full Day (8hrs)',
    price: 400,
  },
  {
    room: 'Audio Studio',
    time: 'Half Day (4hrs)',
    price: 250,
  },
  {
    room: 'Audio Studio & Engineer',
    time: 'Hourly',
    price: 100,
  },
];

const Contact = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.contactPageImageWrapper}>
        <Fade in timeout={2500}>
          <Typography variant="h2" className={classes.contactHeader}>
            Contact
          </Typography>
        </Fade>
        <div className={classes.contactPageContent}>
          <div className={classes.row}>
            <div className={classes.contactType}>
              <Typography className={classes.contactTitle} variant="h4">
                Phone:
              </Typography>
              <Typography variant="h5">(801) 999-8249</Typography>
            </div>
            <div className={classes.contactType}>
              <Typography className={classes.contactTitle} variant="h4">
                Email:
              </Typography>
              <Typography variant="h5">Info@IgniteStudios.com</Typography>
            </div>
          </div>
          <div className={classes.row}>
            <div className={classes.contactType}>
              <Typography className={classes.contactTitle} variant="h4">
                Address:
              </Typography>
              <Typography variant="h5">
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
          </div>
        </div>

        <Fade in timeout={2500}>
          <Typography variant="h2" className={classes.contactHeader}>
            Pricing
          </Typography>
        </Fade>
        <div className={classes.contactPageContent}>
          <Typography className={classes.contactTitle} variant="h6">
            Please call us for specific pricing for your projects. We would love
            to help you determine how to achieve your desired results within
            your budget.
          </Typography>
        </div>
        <div className={classes.contactPageContent}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Room</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rates.map((row, i) => (
                <TableRow key={i}>
                  <TableCell component="th" scope="row">
                    {row.room}
                  </TableCell>
                  <TableCell>{row.time}</TableCell>
                  <TableCell align="right">${row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Fade in timeout={2500}>
          <div className={classes.contactPageImage} />
        </Fade>
      </div>
    </div>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
