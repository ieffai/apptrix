import { setUser } from '../reducers/userReducer';
import axios from 'axios';
import { AUTH_API_URL, MAIN_ROUTE, REFRESH_API_URL } from '../../utils/constants';

export const login = (username, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(AUTH_API_URL, { username, password });
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
      const response = await axios.post(REFRESH_API_URL, {
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
    document.location.href = MAIN_ROUTE;
  };
};
