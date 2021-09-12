import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AuthRoute(props) {
  const isAuth = useSelector((state) => state.auth.authentication);

  if (isAuth) {
    return <Route {...props} />;
  }

  return <Redirect to="/login" />;
}
