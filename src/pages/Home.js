import React from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { UsersTable } from '../components';
import { makeStyles, Paper, Container, Typography, Button } from '@material-ui/core';
import { AUTH_ROUTE } from '../utils/constants';

const useStyles = makeStyles((theme) => ({
  content: {
    position: 'relative',
    padding: theme.spacing(6),
    marginTop: theme.spacing(8),
  },
  button: {
    marginTop: theme.spacing(8),
  },
}));
const Home = () => {
  const history = useHistory();
  const isAuth = useSelector((state) => state.user.isAuth);
  const classes = useStyles();
  return (
    <Paper className={classes.content}>
      <Container fixed>
        {isAuth ? (
          <UsersTable />
        ) : (
          <div>
            <Typography variant="h5" gutterBottom>
              Welcome to the APPTRIX PANEL. <br /> Please sign in
            </Typography>
            <Button
              className={classes.button}
              color="primary"
              variant="contained"
              onClick={() => history.push(AUTH_ROUTE)}>
              Log In
            </Button>
          </div>
        )}
      </Container>
    </Paper>
  );
};

export default Home;
