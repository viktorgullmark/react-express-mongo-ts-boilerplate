import { observer } from 'mobx-react-lite';
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useStores } from '../../store';

const ProtectedRoute: React.FC<RouteProps> = ({ ...props }) => {
  const { authStore } = useStores();
  const { jwtToken } = authStore;

  return jwtToken ? (
    <Route {...props} />
  ) : (
    <Redirect to={{ pathname: '/login' }} />
  );
};

export default observer(ProtectedRoute);
