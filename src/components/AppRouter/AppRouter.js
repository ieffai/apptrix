import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { publicRoutes } from '../../routes/publicRoutes';
import { authRoutes } from '../../routes/authRoutes';
import { HOME_ROUTE } from '../../utils/constants';

const AppRouter = ({ auth }) => {
  return (
    <Switch>
      {auth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={HOME_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
