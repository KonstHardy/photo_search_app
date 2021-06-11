import React from "react";

import "./search.css";

import TitlePage from "../titlePage";
import SearchBar from "./../searchBar";

const Search = () => {
  return (
    <div className="search">
      <div className="wrapper search__wrapper">
        <TitlePage />
        <SearchBar />
      </div>
    </div>
  );
};

export default Search;
