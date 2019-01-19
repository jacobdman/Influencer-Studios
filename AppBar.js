import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import CommonUtils from 'utils/CommonUtils';
import baseStyles from 'styles/jss';
import soloLogo from 'img/Logos/full-white.png';
import MeStore from 'stores/MeStore';
import { observer } from 'mobx-react';
import { Link, withRouter } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import LeftDrawer from './LeftDrawer';
import RightDrawer from './RightDrawer';
import UserMessagesStore from 'stores/UserMessagesStore';
import Badge from '@material-ui/core/Badge';

const styles = theme => ({
  root: {
    width: '100%',
    position: 'fixed',
    zIndex: 9000,
  },
  grow: {
    ...baseStyles.grow,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      marginRight: 10,
      width: 100,
    },
  },
  menu: {
    display: 'flex',
    alignItems: 'center',
  },
  menuButton: {
    marginLeft: 0,
    marginRight: 20,
  },
  name: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
});

class PhxAppBar extends React.Component {
  state = {
    anchorEl: null,
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    CommonUtils.deleteCookie('token', '/', process.env.REACT_APP_DOMAIN);
    this.props.history.push(`/login`);
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleUserMessagesOpen = () => {
    UserMessagesStore.openDrawer = true;
    UserMessagesStore.resetMessageCount();
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const { user } = MeStore;
    const { newMessageCount } = UserMessagesStore;
    let badge;
    if (newMessageCount === 0) {
      badge = <AccountCircle />;
    } else {
      badge = (
        <Badge
          className={classes.margin}
          badgeContent={newMessageCount}
          color="secondary"
        >
          <AccountCircle />
        </Badge>
      );
    }
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.logo}>
              <Link to="/">
                <img src={soloLogo} alt="" />
              </Link>
            </div>
            <div className={classes.grow} />
            <div className={classes.menu}>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : null}
                aria-haspopup="true"
                color="inherit"
                onClick={this.handleUserMessagesOpen}
              >
                {badge}
              </IconButton>
              <Typography
                variant="title"
                color="inherit"
                noWrap
                classes={{
                  root: classes.name,
                }}
              >
                {user.first_name} {user.last_name}
              </Typography>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <ArrowDropDown />
              </IconButton>
            </div>
          </Toolbar>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={this.handleMenuClose}
          >
            <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
            <MenuItem onClick={() => this.props.history.push(`/me`)}>
              Account
            </MenuItem>
          </Menu>
        </AppBar>
        <LeftDrawer
          open={this.state.open}
          handleDrawerOpen={() => {}}
          handleDrawerClose={this.handleDrawerClose.bind(this)}
        />
        <RightDrawer />
      </div>
    );
  }
}

PhxAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(observer(PhxAppBar)));
