import { Tasks, Timesheets, User } from '../pages';

import { TASKS_ROUTE, SHEETS_ROUTE, USER_ROUTE } from '../utils/constants';

export const authRoutes = [
  {
    path: TASKS_ROUTE,
    Component: Tasks,
  },
  {
    path: SHEETS_ROUTE,
    Component: Timesheets,
  },
  {
    path: USER_ROUTE + '/:id',
    Component: User,
  },
];
