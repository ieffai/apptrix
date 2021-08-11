import { Tasks, Timesheets } from '../pages';

import { TASKS_ROUTE, SHEETS_ROUTE } from '../utils/constants';

export const authRoutes = [
  {
    path: TASKS_ROUTE,
    Component: Tasks,
  },
  {
    path: SHEETS_ROUTE,
    Component: Timesheets,
  },
];
