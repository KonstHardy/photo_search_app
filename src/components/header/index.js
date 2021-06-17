import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./header.css";

import { logOut } from "../../store/actions/auth";

const Header = () => {
  const isAuth = useSelector((state) => state.auth.authentication);
  console.log(isAuth);

  const dispatch = useDispatch();

  const handleClick = () => {
    isAuth ? dispatch(logOut()) : console.log("Some text");
  };

  return (
    <nav className="header">
      <div className="wrapper header__wrapper">
        <ul className="list header__list">
          <span className="header__span">
            <li className="header__link header__link-span">
              <Link to="/">Home</Link>
            </li>
            <li className="header__link header__link-span">
              <Link to="/gallery">Gallery</Link>
            </li>
          </span>
          <li className="header__link">
            {isAuth ? (
              <button to="/" onClick={handleClick}>
                Logout
              </button>
            ) : (
              <Link to="/login">Login</Link>
            )}
            {/* <Link to="/login">{isAuth ? "Logout" : "Login"}</Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
