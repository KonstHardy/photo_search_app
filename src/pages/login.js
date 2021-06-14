import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

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

  return <div className="wrapper">{/* <h1>Welcome to Login Page</h1> */}</div>;
};

export default Login;
