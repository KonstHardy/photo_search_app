import React from "react";
import { useSelector } from "react-redux";

import "./App.css";

import Search from "./../components/search";
import PhotoList from "./../components/photoList";

function App() {
  const photos = useSelector((state) => state.photos);
  // console.log(photos);

  return (
    <>
      <Search />
      <PhotoList photos={photos} />
    </>
  );
}

export default App;
