import React from "react";
import "./search.css";

import SearchTitle from "./../searchTitle";
import SearchBar from "./../searchBar";

const Search = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="wrapper search__wrapper">
        <SearchTitle />
        <SearchBar />
      </div>
    </form>
  );
};

export default Search;
