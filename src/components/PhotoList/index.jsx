import React from 'react';
import { useSelector } from 'react-redux';

import styles from './PhotoList.module.css';

import { Photo } from '../Photo';
import { NoResults } from '../NoResults';
import { Loader } from '../Loader';

export function PhotoList() {
  const photos = useSelector((state) => state.photos.photoList);
  const loading = useSelector((state) => state.loader.loading);

  return (
    <div className={styles.photoList}>
      {photos.length > 0 ? (
        <div className={`wrapper ${styles.photoListWrapper}`}>
          {photos.map((photo) => (
            <Photo photo={photo} key={photo.id} />
          ))}
        </div>
      ) : (
        <NoResults />
      )}

      {loading ? <Loader /> : null}
    </div>
  );
}
