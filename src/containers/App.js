import React from "react";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";

import Search from "./../components/search";

function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state);
  // console.log(photos);

  return (
    <>
      <Search />
    </>
  );
}

export default App;
