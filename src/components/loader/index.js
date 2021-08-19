import React from "react";
import { useSelector } from "react-redux";

import "./loader.css";

const Loader = () => {
  const modalActive = useSelector((state) => state.modal.showModal);

  return (
    <div className={modalActive ? "loader loaderModal" : "loader"}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
