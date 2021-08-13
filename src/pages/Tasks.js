import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchIssues, fetchIssues } from '../redux/actions/issueAction';
import { TasksTable } from '../components';
import { makeStyles, Paper, Container, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
  content: {
    position: 'relative',
    padding: theme.spacing(6),
    marginTop: theme.spacing(8),
  },
  search: {
    width: 700,
  },
}));
const Tasks = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [searchName, setSearchName] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(false);
  const names = useSelector((state) => state.issue.names);

  const searchHandler = (e) => {
    setSearchName(e.target.value);
    if (searchTimeout !== false) {
      clearTimeout(searchTimeout);
    }
    if (e.target.value.length >= 3) {
      setSearchTimeout(
        setTimeout(
          (value) => {
            dispatch(searchIssues(value));
          },
          500,
          e.target.value,
        ),
      );
    } else {
      dispatch(fetchIssues());
    }
  };
  return (
    <Paper className={classes.content}>
      <Container fixed maxWidth="md">
        <Autocomplete
          className={classes.search}
          freeSolo
          disableClearable
          options={names}
          renderInput={(params) => (
            <TextField
              {...params}
              value={searchName}
              onChange={searchHandler}
              label="Search project"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: 'search' }}
            />
          )}
        />
        <TasksTable />
      </Container>
    </Paper>
  );
};

export default Tasks;
