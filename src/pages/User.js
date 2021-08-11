import { makeStyles, Card, CardContent, Typography, Button, Paper } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { HOME_ROUTE } from '../utils/constants';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 645,
    // background: 'rgba(0,0,0,0.5)',
    marginTop: '100px',
  },
}));

const User = () => {
  const history = useHistory();
  const { id, name, login, email, $type } = useSelector((state) => state.user.curUser);
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Button color="primary" variant="contained" onClick={() => history.push(HOME_ROUTE)}>
        BACK
      </Button>
      <Card>
        <CardContent>
          <Typography>{id}</Typography>
          <Typography>{name}</Typography>
          <Typography>{email}</Typography>
          <Typography>{login}</Typography>
          <Typography>{$type}</Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default User;
