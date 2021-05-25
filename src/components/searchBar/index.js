import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./searchBar.css";

import useScroll from "../../hooks/useScroll";

import { showLoader, hideLoader } from "../../store/actions/loader";
import {
  searchPhoto,
  fetchSearch,
  fetchRandom,
  setCurrentPage,
  resetCurrentPage,
} from "../../store/actions/photos";

const SearchBar = () => {
  const dispatch = useDispatch();

  const page = useSelector((state) => state.photos.currentPage);
  const scrollPosition = useScroll();
  const [searchQuery, setSearchQuery] = useState("");

  console.log("--------> SearchBar (1) currentPage", page);

  useEffect(() => {
    if (scrollPosition >= document.body.offsetHeight - window.innerHeight) {
      dispatch(showLoader());

      console.log("--------> SearchBar (3) currentPage", page);
      searchQuery == ""
        ? dispatch(fetchRandom(page))
        : dispatch(fetchSearch(searchQuery, page));

      dispatch(setCurrentPage(page));
      dispatch(hideLoader());
    }
  }, [scrollPosition]);

  const onSearchSubmit = (e) => {
    e.preventDefault();

    console.log("--------> SearchBar (2) currentPage", page);
    dispatch(showLoader());
    dispatch(resetCurrentPage());
    dispatch(searchPhoto(searchQuery, page));
    // dispatch(setCurrentPage(page));
    dispatch(hideLoader());
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
