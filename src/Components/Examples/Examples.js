import React, { Component } from 'react';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: theme.palette.primary.dark,
    },
    paper: {
        width: '80vw',
        height: '150vh',
        marginTop: 50,
        marginBottom: 50,
        [theme.breakpoints.down('md')]: {
            width: '100vw',
            marginTop: 25,
            marginBottom: 25,
        },
    },
  });

class Examples extends Component {
    render () {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    Examples
                </Paper>
            </div>
        )
    }
}

Examples.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Examples);