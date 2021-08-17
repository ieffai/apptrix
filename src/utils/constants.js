const AUTH_API_URL = 'http://erp.apptrix.ru/api/token/';
const USERS_API_URL = 'https://demo-apptrix.myjetbrains.com/youtrack/api/';
const AUTH_BEARER = process.env.REACT_APP_ACCESS_TOKEN;
const AUTH_ROUTE = '/auth';
const HOME_ROUTE = '/home';
const TASKS_ROUTE = '/tasks';
const SHEETS_ROUTE = '/sheets';
const USER_ROUTE = '/user';

export {
  AUTH_API_URL,
  USERS_API_URL,
  AUTH_BEARER,
  AUTH_ROUTE,
  HOME_ROUTE,
  TASKS_ROUTE,
  SHEETS_ROUTE,
  USER_ROUTE,
};
