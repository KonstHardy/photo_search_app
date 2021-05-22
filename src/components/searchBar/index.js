import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./searchBar.css";

import { searchPhotos, fetchPhotos, setPage } from "../../store/actions/photos";
import { showLoader, hideLoader } from "../../store/actions/loader";

import useScroll from "../../hooks/useScroll";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const scrollPosition = useScroll();
  const page = useSelector((state) => state.photos.currentPage);

  const dispatch = useDispatch();

  console.log("--------> SearchBar (1) currentPage", page);

  useEffect(() => {
    if (scrollPosition >= document.body.offsetHeight - window.innerHeight) {
      console.log("I am at bottom");
      console.log("--------> SearchBar (2) currentPage", page);

      dispatch(showLoader());

      searchQuery == ""
        ? dispatch(fetchPhotos(page))
        : dispatch(searchPhotos(searchQuery, page));

      dispatch(setPage(page));
      dispatch(hideLoader());
    }
  }, [scrollPosition]);

  const onSearchSubmit = (e) => {
    e.preventDefault();

    dispatch(showLoader());
    dispatch(searchPhotos(searchQuery, page));
    dispatch(setPage(page));
    console.log("--------> SearchBar (3) currentPage", page);
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
