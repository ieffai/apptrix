import { Authorization, Home } from '../pages';

import { AUTH_ROUTE, HOME_ROUTE } from '../utils/constants';

export const publicRoutes = [
  {
    path: AUTH_ROUTE,
    Component: Authorization,
  },
  {
    path: HOME_ROUTE,
    Component: Home,
  },
];
