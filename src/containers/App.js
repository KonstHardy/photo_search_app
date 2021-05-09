import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";

import Search from "./../components/search";
import PhotoList from "./../components/photoList";

import { loginAction } from "../store/actions/auth";

function App() {
  const isAuth = useSelector((state) => state.isAuth);
  console.log("isAuth", isAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginAction());
  }, []);

  return (
    <>
      <Search />
      <PhotoList />
    </>
  );
}

export default App;
