import React from 'react';
import { Container, Paper, Typography, makeStyles } from '@material-ui/core';
import { LoginForm } from '../components';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    position: 'relative',
    padding: theme.spacing(6),
    marginTop: theme.spacing(8),
  },
}));

const Authorization = () => {
  const classes = useStyles();
  return (
    <Paper mr={3} className={classes.content}>
      <Container fixed>
        <Typography variant="h5" gutterBottom>
          Login to service
        </Typography>
        <LoginForm />
      </Container>
    </Paper>
  );
};

export default Authorization;
