import React from "react";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";

import Search from "./../components/search";
import PhotoList from "./../components/photoList";

function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state);
  // console.log(photos);

  return (
    <>
      <Search />
      <PhotoList />
    </>
  );
}

export default App;
