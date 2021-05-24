import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./searchBar.css";

import useScroll from "../../hooks/useScroll";

import { showLoader, hideLoader } from "../../store/actions/loader";
import { fetchSearch, fetchRandom, setPage } from "../../store/actions/photos";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const scrollPosition = useScroll();
  const page = useSelector((state) => state.photos.currentPage);

  const dispatch = useDispatch();

  console.log("--------> SearchBar (1) currentPage", page);

  useEffect(() => {
    if (scrollPosition >= document.body.offsetHeight - window.innerHeight) {
      console.log("--------> SearchBar (2) currentPage", page);

      dispatch(showLoader());
      searchQuery == ""
        ? dispatch(fetchRandom(page))
        : dispatch(fetchSearch(searchQuery, page));

      dispatch(setPage(page));
      dispatch(hideLoader());
    }
  }, [scrollPosition]);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    console.log("--------> SearchBar (3) currentPage", page);

    dispatch(showLoader());
    dispatch(fetchSearch(searchQuery, page));
    dispatch(setPage(page));
    dispatch(hideLoader());
  };

  // useEffect(() => {
  //   dispatch(showLoader());
  //   dispatch(fetchRandom());
  //   // dispatch(setPage(page));
  //   dispatch(hideLoader());
  // }, []);

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
