import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Loader from "../components/loader";

import { logIn } from "../store/actions/auth";

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logIn());
  }, []);

  const isAuth = useSelector((state) => state.auth.authentication);

  if (!isAuth) {
    return <Loader />;
  }

  if (isAuth) {
    return <Redirect to="/gallery" />;
  }

  return <div className="wrapper"></div>;
};

export default Login;
