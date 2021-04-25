import React, { useState } from "react";
import "./searchBar.css";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChange = (event) => {
    setSearchQuery(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <div className="searchBar">
      <input
        className="searchBar__input"
        value={searchQuery}
        onChange={onChange}
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
