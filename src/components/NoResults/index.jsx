import React from 'react';

import styles from './NoResults.module.css';

export function NoResults() {
  return (
    <div className={styles.results}>
      <p className={styles.text}>Sorry, nothing matched your search :(</p>
      <p className={styles.text}>
        Please try again with some different keywords.
      </p>
    </div>
  );
}
