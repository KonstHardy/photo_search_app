import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import "./searchBar.css";

import { searchPhotos, fetchPhotos } from "../../store/actions/photos";
import { showLoader, hideLoader } from "../../store/actions/loader";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  const onSearchSubmit = (e) => {
    e.preventDefault();

    dispatch(showLoader());
    // setTimeout(() => {
    dispatch(searchPhotos(searchQuery));
    dispatch(hideLoader());
    // }, 3000);
  };

  useEffect(() => {
    dispatch(showLoader());
    // setTimeout(() => {
    dispatch(fetchPhotos());
    dispatch(hideLoader());
    // }, 3000);
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
