import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";

import Loader from "../components/loader";
import Search from "../components/search";
import PhotoList from "../components/photoList";

import { loginAction } from "../store/actions/auth";

function App() {
  const isAuth = useSelector((state) => state.auth.authentication);
  const dispatch = useDispatch();

  console.log("isAuth", isAuth);

  useEffect(() => {
    dispatch(loginAction());
  }, []);

  if (!isAuth) {
    return <Loader />;
  }

  return (
    <>
      <Search />
      <PhotoList />
    </>
  );
}

export default App;
