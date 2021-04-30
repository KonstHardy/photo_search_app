import React, { useState } from "react";

import "./searchBar.css";

import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import { addSearchPhoto } from "./../../store/actions";
import { Unsplash } from "../../api";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const onChange = (event) => {
    setSearchQuery(event.target.value);
    // console.log(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const fetchPhotos = () => {
    Unsplash.search
      .getPhotos({
        query: setSearchQuery,
      })
      .then((result) => {
        if (result.errors) {
          console.log("error occurred: ", result.errors[0]);
        } else {
          const searchResult = result.response;
          addSearchPhoto(searchResult);
          console.log("search result: ", searchResult);
        }
      });
  };

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <input
        className="searchBar__input"
        value={searchQuery}
        onChange={onChange}
        placeholder={`Try searching "dogs" or "cats"`}
        type="text"
        required
      ></input>
      <button
        onClick={fetchPhotos}
        className="searchBar__btn btn"
        type="submit"
      >
        <span className="searchBar__btn-span">Search</span>
      </button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSearchPhoto: (photos) => dispatch(addSearchPhoto(photos)),
  };
};

export default connect(null, mapDispatchToProps)(SearchBar);
