import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import destination from '../../images/destination.png';
import * as actionType from '../../constants/actionTypes';
import useStyles from './NavbarStyles';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const classes = useStyles();
  

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    navigate('/auth');

    setUser([]);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <Typography  className={classes.heading} variant="h5" align="center">Destination</Typography>
        <img className={classes.image} src={destination} alt="icon" height="40" />
      </Link>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar component={Link} to="/" className={classes.purple} alt={user?.result.name} src={user?.result.picture}>{user?.result.name.charAt(0)}</Avatar>
            <Typography component={Link} to="/" className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="primary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;