import React from "react";

import "./search.css";

import SearchTitle from "./../searchTitle";
import SearchBar from "./../searchBar";

const Search = () => {
  return (
    <div className="search">
      <div className="wrapper search__wrapper">
        <SearchTitle />
        <SearchBar />
      </div>
    </div>
  );
};

export default Search;
