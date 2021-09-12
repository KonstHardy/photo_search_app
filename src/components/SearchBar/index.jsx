import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useScroll } from '../../hooks/useScroll';

import styles from './SearchBar.module.css';

import {
  searchPhotos,
  fetchSearchPhotos,
  fetchRandomPhotos,
} from '../../store/actions/photos';
import {
  setCurrentPage,
  resetCurrentPage,
} from '../../store/actions/pageCounter';

export function SearchBar() {
  const page = useSelector((state) => state.pageCounter.currentPage);

  const dispatch = useDispatch();
  const scrollPosition = useScroll();
  const [searchQuery, setSearchQuery] = useState('');

  const onSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(resetCurrentPage());
    dispatch(searchPhotos(searchQuery.trim()));
  };

  useEffect(() => {
    if (scrollPosition >= document.body.offsetHeight - window.innerHeight) {
      searchQuery === ''
        ? dispatch(fetchRandomPhotos(page))
        : dispatch(fetchSearchPhotos(searchQuery.trim(), page));
      dispatch(setCurrentPage(page));
    }
  }, [scrollPosition]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <form className={styles.form} onSubmit={onSearchSubmit}>
      <input
        className={styles.input}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder={'Try searching "dogs" or "cats"'}
        required
      />
      <button className={`btn ${styles.btnSearch}`} type="submit">
        <span className={styles.span}>Search</span>
      </button>
    </form>
  );
}
