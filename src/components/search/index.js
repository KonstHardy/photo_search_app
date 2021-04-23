import React from "react";
import "./search.css";

import SearchTitle from "./../searchTitle";

const Search = () => {
  return (
    <form className="search">
      <div className="wrapper">
        <SearchTitle />
      </div>
    </form>
  );
};

export default Search;
