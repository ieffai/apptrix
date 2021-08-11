import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/userAction';
import { DialogContent, TextField, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 480,
  },
  button: {
    marginTop: theme.spacing(8),
    maxWidth: 300,
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();
  return (
    <DialogContent className={classes.root}>
      <TextField
        autoFocus
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        type="text"
        label="Username"
        margin="dense"
        fullWidth
      />
      <TextField
        autoFocus
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        label="Password"
        margin="dense"
        fullWidth
      />
      <Button
        color="primary"
        variant="contained"
        className={classes.button}
        onClick={() => dispatch(login(username, password))}>
        Login
      </Button>
    </DialogContent>
  );
};

export default LoginForm;
