import React, { useState } from "react";
import { Unsplash } from "../../api";
import "./searchBar.css";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChange = (event) => {
    setSearchQuery(event.target.value);
    // console.log(event.target.value);
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
          console.log("search result: ", searchResult);
        }
      });
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
      <button
        onClick={fetchPhotos}
        className="searchBar__btn btn"
        type="submit"
      >
        <span className="searchBar__btn-span">Search</span>
      </button>
    </div>
  );
};

export default SearchBar;
