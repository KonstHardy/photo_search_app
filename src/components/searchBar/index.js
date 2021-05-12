import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import "./searchBar.css";

import { searchPhotos, fetchPhotos } from "../../store/actions/photos";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const onSearchSubmit = (e) => {
    e.preventDefault();

    dispatch(searchPhotos(searchQuery));
  };

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

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
