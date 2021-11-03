import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Header.module.css';

import { logOut } from '../../store/actions/auth';

export function Header() {
  const isAuth = useSelector((state) => state.auth.authentication);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    history.replace('/');
    dispatch(logOut());
  };

  return (
    <nav className={styles.nav}>
      <div className="wrapper">
        <ul className={`list ${styles.navList}`}>
          <span className={styles.navMain}>
            <li className={styles.link}>
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink to="/gallery">
                Gallery
              </NavLink>
            </li>
          </span>
          <li className={styles.link}>
            {isAuth ? (
              <button
                className={styles.btnLogout}
                onClick={handleClick}
                type="button"
              >
                Logout
              </button>
            ) : (
              <NavLink to="/login">
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
