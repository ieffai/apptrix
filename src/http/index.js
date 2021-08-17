import axios from 'axios';
import { AUTH_API_URL, USERS_API_URL, AUTH_BEARER } from '../utils/constants';
import { refreshService } from './userApi';

const $host = axios.create({
  baseURL: AUTH_API_URL,
  withCredentials: true,
});

const $authHost = axios.create({
  baseURL: USERS_API_URL,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${AUTH_BEARER}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

$authHost.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        refreshService();
        return $host.request(originalRequest);
      } catch (error) {
        console.log('UNATHORIZED');
      }
    }
    throw error;
  },
);

export { $host, $authHost };
