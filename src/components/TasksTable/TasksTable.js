import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchIssues } from '../../redux/actions/issueAction';
import { DataGrid } from '@material-ui/data-grid';

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
    width: 300,
    valueGetter: (params) => {
      let result = [];
      result.push(params.row.project?.name);
      return result;
    },
  },
];

const TasksTable = () => {
  const dispatch = useDispatch();
  const rows = useSelector((state) => state.issue.issues);
  React.useEffect(() => {
    dispatch(fetchIssues());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div style={{ height: 800, width: 900 }}>
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
        //   onRowClick={(rowData) => rowDataHandler(rowData)}
      />
    </div>
  );
};

export default TasksTable;
