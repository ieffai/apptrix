import React from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../redux/actions/userAction';
import { DataGrid } from '@material-ui/data-grid';
import { USER_ROUTE } from '../../utils/constants';
import { setCurUser } from '../../redux/reducers/userReducer';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
  },
  {
    field: 'login',
    headerName: 'Login',
    width: 150,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'number',
    width: 150,
  },
];

const User = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  const users = useSelector((state) => state.user.users);
  React.useEffect(() => {
    isAuth && dispatch(fetchUsers());
  }, []);
  const rows = users;
  const rowDataHandler = (rowData) => {
    dispatch(setCurUser(rowData.row));
    history.push(USER_ROUTE + '/' + rowData.id);
  };
  return (
    <div style={{ height: 400, width: 630 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
        onRowClick={(rowData) => rowDataHandler(rowData)}
      />
    </div>
  );
};

export default User;
