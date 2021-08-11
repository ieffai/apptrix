import { Home, Tasks, Timesheets } from '../pages';

import { HOME_ROUTE, TASKS_ROUTE, SHEETS_ROUTE } from '../utils/constants';

export const authRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: TASKS_ROUTE,
    Component: Tasks,
  },
  {
    path: SHEETS_ROUTE,
    Component: Timesheets,
  },
];
