import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useHasSession, useSessionLoading } from '../auth/auth';

const PrivateRoute = ({ component, path }) => {
  const user = useHasSession();
  const loading = useSessionLoading();

  if(!user && !loading) {
    return <Redirect to="/signin" />;
  }

  return <Route path={path} component={component} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired
};

export default PrivateRoute;
