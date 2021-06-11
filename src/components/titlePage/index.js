import React from "react";
import "./titlePage.css";

const TitlePage = () => {
  return (
    <>
      <h1 className="titlePage__title">Photo Gallery App</h1>
      <p className="titlePage__subtitle">
        All Images provided by&nbsp;
        <a
          className="titlePage__subtitle-link"
          href="https://unsplash.com/"
          target="_blank"
          rel="noreferrer"
        >
          Unsplash
        </a>
      </p>
    </>
  );
};

export default TitlePage;
