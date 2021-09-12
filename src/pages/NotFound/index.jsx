import React from 'react';

import styles from './NotFound.module.css';

export function NotFound() {
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className={styles.content}>
          <h1 className={styles.title}>
            Error 404
            <br />
            Page Not Found
          </h1>
        </div>
      </div>
    </div>
  );
}
