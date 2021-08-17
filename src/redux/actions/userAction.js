import { setUser, setUsers } from '../reducers/userReducer';
import { fetchUsersService, loginService, logoutService, refreshService } from '../../http/userApi';

export const loginAction = (username, password) => {
  return (dispatch) => {
    loginService(username, password);
    dispatch(setUser(true));
  };
};

export const refreshAction = () => {
  return (dispatch) => {
    refreshService();
    dispatch(setUser(true));
  };
};

export const logout = () => {
  return (dispatch) => {
    logoutService();
    dispatch(setUser(false));
    dispatch(setUsers([]));
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    fetchUsersService().then((data) => dispatch(setUsers(data)));
  };
};
