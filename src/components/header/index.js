import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./header.css";

import { logOut } from "../../store/actions/auth";

const Header = () => {
  const isAuth = useSelector((state) => state.auth.authentication);
  console.log(isAuth);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    history.replace("/");
    dispatch(logOut());
  };

  return (
    <nav className="header">
      <div className="wrapper header__wrapper">
        <ul className="list header__list">
          <span className="header__left">
            <li className="header__link header__link-left">
              <NavLink to="/" exact activeClassName="link__selected">
                Home
              </NavLink>
            </li>
            <li className="header__link header__link-span">
              <NavLink to="/gallery" activeClassName="link__selected">
                Gallery
              </NavLink>
            </li>
          </span>
          <li className="header__link">
            {isAuth ? (
              <button className="header__logout" onClick={handleClick}>
                Logout
              </button>
            ) : (
              <NavLink to="/login" activeClassName="link__selected">
                Login
              </NavLink>
            )}
            {/* <NavLink to="/login">{isAuth ? "Logout" : "Login"}</NavLink> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
