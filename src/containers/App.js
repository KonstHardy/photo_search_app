import React from "react";
import { useSelector } from "react-redux";

import "./App.css";

import Search from "./../components/search";
import PhotoList from "./../components/photoList";

function App() {
  const isAuth = useSelector((state) => state.isAuth);
  console.log("isAuth", isAuth);
  return (
    <>
      <Search />
      <PhotoList />
    </>
  );
}

export default App;
