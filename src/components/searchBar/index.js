import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./searchBar.css";

import useScroll from "../../hooks/useScroll";

import {
  searchPhoto,
  fetchSearch,
  fetchRandom,
} from "../../store/actions/photos";
import {
  setCurrentPage,
  resetCurrentPage,
} from "../../store/actions/counterPage";

const SearchBar = () => {
  const dispatch = useDispatch();

  const page = useSelector((state) => state.counter.currentPage);
  const scrollPosition = useScroll();
  const [searchQuery, setSearchQuery] = useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(resetCurrentPage());
    dispatch(searchPhoto(searchQuery.trim()));
  };

  useEffect(() => {
    if (scrollPosition >= document.body.offsetHeight - window.innerHeight) {
      searchQuery === ""
        ? dispatch(fetchRandom(page))
        : dispatch(fetchSearch(searchQuery.trim(), page));
      dispatch(setCurrentPage(page));
    }
  }, [scrollPosition]);

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
