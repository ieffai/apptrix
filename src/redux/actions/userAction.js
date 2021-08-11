import { setUser, setUsers } from '../reducers/userReducer';
import { $host, $authHost } from '../../http/index';

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await $host.post('/', { username, password });
      localStorage.setItem('access', response.data.access);
      localStorage.setItem('refresh', response.data.refresh);
      dispatch(setUser(true));
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };
};

export const refreshToken = () => {
  return async (dispatch) => {
    try {
      const response = await $host.post('/refresh/', {
        refresh: localStorage.getItem('refresh'),
      });
      localStorage.setItem('access', response.data.access);
      dispatch(setUser(true));
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    dispatch(setUser(false));
    dispatch(setUsers([]));
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await $authHost.get('/users', {
        params: {
          fields: 'id,name,login,email',
        },
      });
      dispatch(setUsers(data));
    } catch (error) {
      console.log(error.response?.data?.message);
    }
  };
};
