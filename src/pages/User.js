import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Button,
  Paper,
  Container,
  CardMedia,
} from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { HOME_ROUTE } from '../utils/constants';
const useStyles = makeStyles((theme) => ({
  content: {
    position: 'relative',
    padding: theme.spacing(6),
    marginTop: theme.spacing(8),
  },
  cardMedia: {
    paddingTop: '40px',
    marginLeft: '15px',
  },
  cardContent: {
    flexGrow: 1,
  },
  card: {
    marginBottom: '25px',
  },
}));

const User = () => {
  const history = useHistory();
  const { id, name, login, email, $type } = useSelector((state) => state.user.curUser);
  const classes = useStyles();
  return (
    <Paper className={classes.content}>
      <Container maxWidth="md">
        <Card className={classes.card}>
          <CardMedia className={classes.cardMedia}>Project of {name}</CardMedia>
          <CardContent className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              ID #{id}
            </Typography>
            <Typography variant="h4" gutterBottom>
              Email: {email}
            </Typography>
            <Typography variant="h4" gutterBottom>
              Login: {login}
            </Typography>
            <Typography variant="h4" gutterBottom>
              Account type: {$type}
            </Typography>
          </CardContent>
        </Card>
        <Button color="primary" variant="contained" onClick={() => history.push(HOME_ROUTE)}>
          BACK
        </Button>
      </Container>
    </Paper>
  );
};

export default User;
