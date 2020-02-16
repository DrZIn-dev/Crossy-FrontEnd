import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import ShowContractSign from '../../../../components/showContractSign';



const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    backgroundColor: '#14195b'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([]);

  const [OpenShowContractSing, setOpenShowContractSing] = useState(false)


  
  // showContractSign
  const data = {
    'contractor' : 'A',
    'validator' : 'B',
    'product' : 'Mac 16 pro',
    'pieces' : 20,
    'amount' : (50000 * 20),
    'rate' : 29,
    'status' : 'process'
  }

  const handleClickOpen = () => {
    setOpenShowContractSing(true);
  };

  const handleClose = () => {
    setOpenShowContractSing(false);
  };

  // showContractSign

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <RouterLink to="/">
          <img
            alt="logo"
            src="/images/logos/crossy-logo-text 1.svg"
          />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon onClick={handleClickOpen}/>

            </Badge>
          </IconButton>
          <IconButton
            className={classes.signOutButton}
            color="inherit"
          >
            <InputIcon />
          </IconButton>
        </Hidden>
        {/* showContractSign */}
        <ShowContractSign open={OpenShowContractSing} close={handleClose} data={data}/>
        {/* showContractSign */}
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar;
