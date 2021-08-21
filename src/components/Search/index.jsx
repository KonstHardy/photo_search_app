import React from "react";

import styles from "./Search.module.css";

import { Title } from "../Title";
import { SearchBar } from "../SearchBar";

export function Search() {
  return (
    <div className={styles.search}>
      <div className={`wrapper ${styles.searchWrapper}`}>
        <Title />
        <SearchBar />
      </div>
    </div>
  );
}
