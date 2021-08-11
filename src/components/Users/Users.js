import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../redux/actions/userAction';
import { DataGrid } from '@material-ui/data-grid';

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
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.user.isAuth);
  const users = useSelector((state) => state.user.users);
  React.useEffect(() => {
    isAuth && dispatch(fetchUsers());
  }, []);
  const rows = users;
  return (
    <div style={{ height: 400, width: 630 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default User;
