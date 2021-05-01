import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./searchBar.css";

import { fetchPhotos } from "./../../store/actions";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const onSearchSubmit = (e) => {
    e.preventDefault();

    dispatch(fetchPhotos(setSearchQuery));
  };

  return (
    <form className="searchBar" onSubmit={onSearchSubmit}>
      <input
        className="searchBar__input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder={`Try searching "dogs" or "cats"`}
        required
      ></input>
      <button className="searchBar__btn btn" type="submit">
        <span className="searchBar__btn-span">Search</span>
      </button>
    </form>
  );
};

export default SearchBar;
