import React from "react";

import "./home.css";

import SearchTitle from "../components/searchTitle";

const Home = () => {
  return (
    <div className="home">
      <div className="home__title">
        <div className="wrapper home__wrapper">
          <SearchTitle />
          <p className="home__text">
            This application allows you to view and download beautiful free
            images and photos from all&nbsp;over the world.
          </p>
        </div>
      </div>
      <div className="home__desc">
        <div className="wrapper desc__wrapper">
          <p className="desc__text">
            To use application you need to log in.<br />
            If you don’t have an account yet, you can create one.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
