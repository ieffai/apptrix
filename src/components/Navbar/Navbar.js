import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/userAction';
import {
  AppBar,
  Container,
  makeStyles,
  Toolbar,
  Typography,
  IconButton,
  Link,
} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { HOME_ROUTE, AUTH_ROUTE } from '../../utils/constants';
import { menuData } from '../../utils/menuData';

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: 'red',
  },
  title: {
    flexGrow: '1',
    fontWeight: 'bold',
    cursor: 'pointer',
    '& span': {
      color: '#fff',
    },
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  link: {
    margin: theme.spacing(1, 1.5),
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    position: 'relative',
    boxSizing: 'border-box',
    transition: 'all 500ms ease',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: 'inset 0 0 0 2px white',
      textDecoration: 'none',
    },
  },
}));

const Navbar = ({ auth }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const clickHandler = () => {
    history.push(HOME_ROUTE);
    dispatch(logout());
  };
  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Container maxWidth="lg" fixed>
        <Toolbar>
          <Typography
            variant="h5"
            className={classes.title}
            onClick={() => history.push(HOME_ROUTE)}>
            <span>Apptrix</span>
          </Typography>
          {auth ? (
            <nav>
              {menuData.map((item) => (
                <Link
                  color="inherit"
                  variant="button"
                  key={item.title}
                  className={classes.link}
                  onClick={() => history.push(item.path)}>
                  {item.title}
                </Link>
              ))}
              <IconButton onClick={clickHandler} className={classes.icon}>
                <ExitToAppIcon />
              </IconButton>
            </nav>
          ) : (
            <IconButton onClick={() => history.push(AUTH_ROUTE)}>
              <AccountCircleIcon className={classes.icon} />
            </IconButton>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
