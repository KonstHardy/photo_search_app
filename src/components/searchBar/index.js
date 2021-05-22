import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./searchBar.css";

import { searchPhotos, fetchPhotos, setPage } from "../../store/actions/photos";
import { showLoader, hideLoader } from "../../store/actions/loader";

import useScroll from "../../hooks/useScroll";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const page = useSelector((state) => state.photos.currentPage);
  console.log("--------> SearchBar currentPage", page);

  const dispatch = useDispatch();

  const scrollPosition = useScroll();

  useEffect(() => {
    if (scrollPosition >= document.body.offsetHeight - window.innerHeight) {
      console.log("I am at bottom");

      dispatch(showLoader());
      dispatch(searchPhotos(searchQuery, page));
      dispatch(setPage(page));
      dispatch(hideLoader());
    }
  }, [scrollPosition]);

  const onSearchSubmit = (e) => {
    e.preventDefault();

    dispatch(showLoader());
    dispatch(searchPhotos(searchQuery, page));
    // dispatch(setPage(page));
    dispatch(hideLoader());
  };

  // useEffect(() => {
  //   dispatch(showLoader());
  //   dispatch(fetchPhotos());
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
