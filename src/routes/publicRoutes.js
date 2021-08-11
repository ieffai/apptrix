import { Authorization, Main } from '../pages';

import { AUTH_ROUTE, MAIN_ROUTE } from '../utils/constants';

export const publicRoutes = [
  {
    path: AUTH_ROUTE,
    Component: Authorization,
  },
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
];
