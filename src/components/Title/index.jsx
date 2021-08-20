import React from "react";

import styles from "./Title.module.css";

export default function Title() {
  return (
    <>
      <h1 className={styles.title}>Photo Search App</h1>
      <p className={styles.subtitle}>
        All Images provided by&nbsp;
        <a
          className={styles.link}
          href="https://unsplash.com/"
          target="_blank"
          rel="noreferrer"
        >
          Unsplash
        </a>
      </p>
    </>
  );
}
