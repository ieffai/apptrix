import axios from 'axios';
import { AUTH_API_URL, USERS_API_URL, AUTH_BEARER } from '../utils/constants';

const $host = axios.create({
  baseURL: AUTH_API_URL,
});

const $authHost = axios.create({
  baseURL: USERS_API_URL,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${AUTH_BEARER}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
