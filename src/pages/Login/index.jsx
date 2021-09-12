import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Loader } from '../../components/Loader';

import { logIn } from '../../store/actions/auth';

export function Login() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.authentication);

  if (!isAuth) {
    dispatch(logIn());
    return <Loader />;
  }

  if (isAuth) {
    return <Redirect to="/gallery" />;
  }
}
