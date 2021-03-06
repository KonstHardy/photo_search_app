import { toJson } from 'unsplash-js';
import unsplash from '../../../api';

import { ADD_LIKE, REMOVE_LIKE } from '../../constants/like';

export function addLike(photoId) {
  return async (dispatch) => {
    try {
      await unsplash.photos
        .likePhoto(photoId)
        .then(toJson)
        .then((json) => {
          dispatch({ type: ADD_LIKE, payload: json.photo });
        });
    } catch (error) {
      console.error('Encountered an error with ADD_LIKE', error);
    }
  };
}

export function removeLike(photoId) {
  return async (dispatch) => {
    try {
      await unsplash.photos
        .unlikePhoto(photoId)
        .then(toJson)
        .then((json) => {
          dispatch({ type: REMOVE_LIKE, payload: json.photo });
        });
    } catch (error) {
      console.error('Encountered an error with REMOVE_LIKE', error);
    }
  };
}
