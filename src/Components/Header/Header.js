import React, { Component } from 'react';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { withRouter } from "react-router";
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
    appBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        color: 'white',
        width: 50,
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'flex',
        },
    },
    tabs: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    name: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    img: {
        height: 40,
        width: 'auto',
    },
    ignite: {
        color: theme.palette.secondary.main,
        fontSize: 35,
        fontWeight: 400, 
        marginLeft: 10,
    },
    studios: {
        color: theme.palette.tertiary.main,
        fontSize: 35,
        fontWeight: 400,
        marginLeft: 5,
        marginRight: 15,
    },
});

class Header extends Component {
    state = {
        anchorEl: null,
        value: '',
      };
    
      handleMenuClick = event => {
        this.setState({ anchorEl: event.currentTarget });
      };

      handleClick = (val) => {
          if (val === 'home') {
            this.props.history.push('/');
          } else if (val === 'gallery') {
            this.props.history.push('/gallery')
          } else if (val === 'examples') {
            this.props.history.push('/examples')
        } else if (val === 'about') {
            this.props.history.push('/about')
        } else if (val === 'specs') {
            this.props.history.push('/specs')
        } else if (val === 'testimonials') {
            this.props.history.push('/testimonials')
        } else if (val === 'hair') {
            window.location.href = "https://www.makeitupbykrista.com/";
        }
          this.handleClose()
      }
    
      handleClose = () => {
        this.setState({ anchorEl: null });
      };

    render () {
        const { classes } = this.props;
        const { anchorEl, value } = this.state;
        return (
            <AppBar position="static" color="primary" className={classes.appBar}>
                <IconButton
                    className={classes.button}
                    onClick={this.handleMenuClick}
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={() => this.handleClick('home')}>Home</MenuItem>
                    {/* <MenuItem onClick={() => this.handleClick('galler')}>Gallery</MenuItem>
                    <MenuItem onClick={() => this.handleClick('examples')}>Created In Studio</MenuItem>
                    <MenuItem onClick={() => this.handleClick('about')}>What We Do</MenuItem>
                    <MenuItem onClick={() => this.handleClick('specs')}>Studio Specs</MenuItem>
                    <MenuItem onClick={() => this.handleClick('testimonials')}>Testimonials</MenuItem> */}
                    <MenuItem onClick={() => this.handleClick('hair')}>Hair/Make-Up</MenuItem>
                </Menu>
                <Tabs
                    value={value}
                    className={classes.tabs}
                    onChange={this.handleChange}
                    indicatorColor="secondary"
                    textColor="secondary"
                    centered
                >
                    <Tab onClick={() => this.handleClick('home')} label="Home" />
                    {/* <Tab onClick={() => this.handleClick('gallery')} label="Gallery" />
                    <Tab onClick={() => this.handleClick('examples')} label="Created In Studio" />
                    <Tab onClick={() => this.handleClick('about')} label="What We Do" />
                    <Tab onClick={() => this.handleClick('specs')} label="Studio Specs" />
                    <Tab onClick={() => this.handleClick('testimonials')} label="Testimonials" /> */}
                    <Tab onClick={() => this.handleClick('hair')} label="Hair/Make-Up" />
                </Tabs>
                <div className={classes.name}>
                    <img className={classes.img} src={require('../../Assets/Logo.png')} />
                    <Typography className={classes.ignite}>Ignite</Typography>
                    <Typography className={classes.studios}>Studios</Typography>
                </div>
            </AppBar>
        )
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withRouter(withStyles(styles)(Header));