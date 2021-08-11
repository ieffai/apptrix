import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { publicRoutes } from '../../routes/publicRoutes';
import { authRoutes } from '../../routes/authRoutes';
import { AUTH_ROUTE } from '../../utils/constants';

const AppRouter = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <Switch>
      {!isAuth
        ? publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} component={Component} exact />
          ))
        : authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} component={Component} exact />
          ))}

      <Redirect to={AUTH_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
