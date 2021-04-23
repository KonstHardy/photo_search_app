import React from "react";
import "./searchTitle.css";

const SearchTitle = () => {
  return (
    <>
      <h1 className="search__title">Photo Gallery App</h1>
      <p className="search__subtitle">
        All Images provided by&nbsp;
        <a className="search__subtitle-link" href="https://unsplash.com/">
          Unsplash
        </a>
      </p>
    </>
  );
};

export default SearchTitle;
