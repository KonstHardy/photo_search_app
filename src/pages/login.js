import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import Loader from "../components/loader";
import { loginAction } from "../store/actions/auth";

const Login = () => {
  const isAuth = useSelector((state) => state.auth.authentication);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginAction());
  }, []);

  if (!isAuth) {
    return <Loader />;
  }

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return <div className="wrapper"></div>;
};

export default Login;
