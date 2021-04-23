import React from "react";
import "./searchBar.css";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <input
        className="searchBar__input"
        placeholder={`Try searching "dogs" or "cats"`}
        type="text"
        required
      ></input>
      <button className="searchBar__btn btn" type="submit">
        <span className="searchBar__btn-span">Search</span>
      </button>
    </div>
  );
};

export default SearchBar;
