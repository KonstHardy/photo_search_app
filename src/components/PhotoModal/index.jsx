import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import styles from './PhotoModal.module.css';

import { Photo } from '../Photo';
import { Loader } from '../Loader';

import { getPhotoModal, removePhotoModal } from '../../store/actions/photos';
import { hidePhotoModal } from '../../store/actions/photoModal';

export function PhotoModal() {
  const modalActive = useSelector((state) => state.photoModal.showPhotoModal);
  const photo = useSelector((state) => state.photos.photoModalData);

  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    dispatch(removePhotoModal());
    dispatch(getPhotoModal(id));
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleHidePhotoModal = () => {
    dispatch(hidePhotoModal());
    dispatch(removePhotoModal());
    history.goBack();
  };

  return (
    <div
      className={
        modalActive
          ? `${styles.photoModal} ${styles.photoModalActive}`
          : `${styles.photoModal}`
      }
      onClick={handleHidePhotoModal}
      onKeyDown={handleHidePhotoModal}
      aria-hidden="true"
    >
      <div
        className={
          modalActive
            ? `${styles.content} ${styles.contentModal}`
            : `${styles.content}`
        }
        onClick={(event) => event.stopPropagation()}
        onKeyDown={(event) => event.stopPropagation()}
        aria-hidden="true"
      >
        <button
          className={styles.btnClose}
          onClick={handleHidePhotoModal}
          type="button"
          aria-label="close button"
        />

        {photo === null ? <Loader /> : <Photo photo={photo} />}
      </div>
    </div>
  );
}
