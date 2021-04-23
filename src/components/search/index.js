import React from "react";
import "./search.css";

import SearchTitle from "./../searchTitle";
import SearchBar from "./../searchBar";

const Search = () => {
  return (
    <form className="search">
      <div className="wrapper search__wrapper">
        <SearchTitle />
        <SearchBar />
      </div>
    </form>
  );
};

export default Search;
