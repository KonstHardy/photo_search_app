import React from "react";
import "./searchBar.css";

const SearchBar = () => {
  return (
    <>
      <input
        className="search__input"
        placeholder={`Try searching "dogs" or "cats"`}
        type="text"
        required
      ></input>
      <button className="search__btn btn" type="submit">
        <span className="search__btn-span">Search</span>
      </button>
    </>
  );
};

export default SearchBar;
