import React from 'react';

import styles from './Home.module.css';

import { Title } from '../../components/Title';

export function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.title}>
        <div className={`wrapper ${styles.titleWrapper}`}>
          <Title />
          <p className={styles.titleText}>
            This application allows you to view and download beautiful free
            images and photos from all&nbsp;over the world.
          </p>
        </div>
      </div>
      <div className={styles.desc}>
        <div className={`wrapper ${styles.descWrapper}`}>
          <p className={styles.descText}>
            To use application you need to log in.
            <br />
            If you don’t have an account yet, you can create one.
          </p>
        </div>
      </div>
    </div>
  );
}
