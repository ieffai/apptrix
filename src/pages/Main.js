import React from 'react';
import { useHistory } from 'react-router';
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

const Main = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Paper mr={3} className={classes.content}>
      <Container fixed>
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
      </Container>
    </Paper>
  );
};

export default Main;
