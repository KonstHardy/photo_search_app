import React, { useState } from "react";

import "./searchBar.css";

// import { connect } from "react-redux";
import { useDispatch } from "react-redux";

import { addSearchPhoto } from "./../../store/actions";
import { Unsplash } from "../../api";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  // const onChange = (event) => {
  //   setSearchQuery(event.target.value);
  //   // console.log(event.target.value);
  // };

  const onSearchSubmit = (e) => {
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
    <form className="searchBar" onSubmit={onSearchSubmit}>
      <input
        className="searchBar__input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder={`Try searching "dogs" or "cats"`}
        required
      ></input>
      <button
        className="searchBar__btn btn"
        type="submit"
        onClick={fetchPhotos}
      >
        <span className="searchBar__btn-span">Search</span>
      </button>
    </form>
  );
};

export default SearchBar;

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addSearchPhoto: (photos) => dispatch(addSearchPhoto(photos)),
//   };
// };

// export default connect(null, mapDispatchToProps)(SearchBar);
