import React from 'react';
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
import { useSelector, useDispatch } from 'react-redux';
import { TASKS_ROUTE } from '../utils/constants';
import { useHistory } from 'react-router';
import { getWorkItem } from '../redux/actions/issueAction';

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

const Timesheets = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const workItem = useSelector((state) => state.issue.workItem);
  const newWorkItem = useSelector((state) => state.issue.newWorkItem);
  const id = workItem.id.slice(2);
  React.useEffect(() => {
    dispatch(getWorkItem(id));
  }, []);
  return (
    <Paper className={classes.content}>
      <Container maxWidth="md">
        <Card className={classes.card}>
          <CardMedia className={classes.cardMedia}>WorkItem of </CardMedia>
          <CardContent className={classes.cardContent}>
            <Typography variant="h5" gutterBottom>
              ID # {newWorkItem.id}
            </Typography>
            <Typography variant="h4" gutterBottom>
              Username: {newWorkItem.name}
            </Typography>
            <Typography variant="h4" gutterBottom>
              Duration: {newWorkItem.duration}
            </Typography>
          </CardContent>
        </Card>
        <Button color="primary" variant="contained" onClick={() => history.push(TASKS_ROUTE)}>
          BACK
        </Button>
      </Container>
    </Paper>
  );
};

export default Timesheets;
