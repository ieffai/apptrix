import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/userAction';
import { DialogContent, TextField, makeStyles, Button } from '@material-ui/core';
import { HOME_ROUTE } from '../../utils/constants';

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
  const history = useHistory();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(login(username, password));
    history.push(HOME_ROUTE);
  };
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
      <Button color="primary" variant="contained" className={classes.button} onClick={clickHandler}>
        Login
      </Button>
    </DialogContent>
  );
};

export default LoginForm;
