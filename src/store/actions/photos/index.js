import { toJson } from 'unsplash-js';
import unsplash from '../../../api';

import {
  SEARCH_PHOTOS,
  FETCH_SEARCH_PHOTOS,
  FETCH_RANDOM_PHOTOS,
  GET_PHOTO_MODAL,
  REMOVE_PHOTO_MODAL,
} from '../../constants/photos';

import { showLoader, hideLoader } from '../loader';
import { showPhotoModal } from '../photoModal';

export function searchPhotos(searchQuery) {
  return async (dispatch) => {
    try {
      await unsplash.search
        .photos(searchQuery, 1, 10)
        .then(toJson)
        .then((json) => {
          dispatch(showLoader());
          dispatch({ type: SEARCH_PHOTOS, payload: json.results });
          dispatch(hideLoader());
        });
    } catch (error) {
      console.error('Encountered an error with SEARCH_PHOTOS', error);
    }
  };
}

export function fetchSearchPhotos(searchQuery, page) {
  return async (dispatch) => {
    try {
      await unsplash.search
        .photos(searchQuery, page, 10)
        .then(toJson)
        .then((json) => {
          dispatch(showLoader());
          dispatch({ type: FETCH_SEARCH_PHOTOS, payload: json.results });
          dispatch(hideLoader());
        });
    } catch (error) {
      console.error('Encountered an error with FETCH_SEARCH_PHOTOS', error);
    }
  };
}

export function fetchRandomPhotos(page) {
  return async (dispatch) => {
    try {
      await unsplash.search
        .photos(page, 10)
        .then(toJson)
        .then((json) => {
          dispatch(showLoader());
          dispatch({ type: FETCH_RANDOM_PHOTOS, payload: json.results });
          dispatch(hideLoader());
        });
    } catch (error) {
      console.error('Encountered an error with FETCH_RANDOM_PHOTOS', error);
    }
  };
}

export function getPhotoModal(id) {
  return async (dispatch) => {
    try {
      await unsplash.photos
        .getPhoto(id)
        .then(toJson)
        .then((response) => {
          dispatch(showLoader());
          dispatch({ type: GET_PHOTO_MODAL, payload: response });
          dispatch(hideLoader());
        })
        .then(dispatch(showPhotoModal()));
    } catch (error) {
      console.error('Encountered an error with GET_PHOTO_MODAL', error);
    }
  };
}

export function removePhotoModal() {
  return {
    type: REMOVE_PHOTO_MODAL,
  };
}
