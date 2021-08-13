import React from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { setWorkItem } from '../../redux/reducers/issueReducer';
import { fetchIssues } from '../../redux/actions/issueAction';
import { DataGrid } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';
import { SHEETS_ROUTE } from '../../utils/constants';

const TasksTable = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const rows = useSelector((state) => state.issue.issues);
  const rowDataHandler = (rowData) => {
    dispatch(setWorkItem(rowData.row));
    history.push(SHEETS_ROUTE + '/' + rowData.id);
  };
  const renderDetailsButton = (params) => {
    return (
      <Button variant="contained" color="primary" size="small" style={{ marginLeft: 16 }}>
        Timesheet
      </Button>
    );
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'summary',
      headerName: 'Summary',
      width: 300,
    },
    {
      field: 'project',
      headerName: 'Project Name',
      width: 150,
      valueGetter: (params) => {
        let result = [];
        result.push(params.row.project?.name);
        return result;
      },
    },
    {
      field: ' ',
      headerName: ' ',
      width: 150,
      renderCell: renderDetailsButton,
      disableClickEventBubbling: false,
    },
  ];
  React.useEffect(() => {
    dispatch(fetchIssues());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ height: 800, width: 700 }}>
      <DataGrid
        style={{ cursor: 'pointer' }}
        rows={rows}
        columns={columns}
        options={{
          paging: true,
          pageSize: 20,
          emptyRowsWhenPaging: true,
          pageSizeOptions: [6, 12, 20, 50],
        }}
        disableSelectionOnClick
        onRowClick={(rowData) => rowDataHandler(rowData)}
      />
    </div>
  );
};

export default TasksTable;
