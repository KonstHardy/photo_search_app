import { useDispatch } from 'react-redux';
import { addLike, removeLike } from '../../../store/actions/like';

import styles from './IconLike.module.css';

export function IconLike(props) {
  const { photoId, photoLike } = props;

  const dispatch = useDispatch();

  return (
    <svg
      className={photoLike ? `${styles.rootActive}` : `${styles.root}`}
      width={17}
      height={17}
      onClick={() => (photoLike ? dispatch(removeLike(photoId)) : dispatch(addLike(photoId)))}
    >
      <path
        fillRule="evenodd"
        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
      />
    </svg>
  );
}
