import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Header.module.css";

import { logOut } from "../../store/actions/auth";

export default function Header() {
  const isAuth = useSelector((state) => state.auth.authentication);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    history.replace("/");
    dispatch(logOut());
  };

  return (
    <nav className={styles.nav}>
      <div className="wrapper">
        <ul className={`list ${styles.navList}`}>
          <span className={styles.navMain}>
            <li className={styles.link}>
              <NavLink to="/" exact activeClassName="linkSelected">
                Home
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink to="/gallery" activeClassName="linkSelected">
                Gallery
              </NavLink>
            </li>
          </span>
          <li className={styles.link}>
            {isAuth ? (
              <button className={styles.btnLogout} onClick={handleClick}>
                Logout
              </button>
            ) : (
              <NavLink to="/login" activeClassName="linkSelected">
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
