import { toJson } from "unsplash-js";
import unsplash from "../../../api";

import {
  SEARCH_PHOTOS,
  FETCH_SEARCH_PHOTOS,
  FETCH_RANDOM_PHOTOS,
  GET_PHOTO_MODAL,
  REMOVE_PHOTO_MODAL,
} from "../../constants/photos";

import { showLoader, hideLoader } from "../loader";
import { showPhotoModal } from "../photoModal";

export function searchPhotos(searchQuery) {
  return async (dispatch) => {
    try {
      await unsplash.search
        .photos(searchQuery, 1, 10)
        .then(toJson)
        .then((json) => {
          console.log("SEARCH_PHOTOS", json);
          dispatch(showLoader());
          dispatch({ type: SEARCH_PHOTOS, payload: json.results });
          dispatch(hideLoader());
        });
    } catch (err) {
      console.log("Encountered an error with SEARCH_PHOTOS", err);
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
          console.log("FETCH_SEARCH_PHOTOS", json);
          dispatch(showLoader());
          dispatch({ type: FETCH_SEARCH_PHOTOS, payload: json.results });
          dispatch(hideLoader());
        });
    } catch (err) {
      console.log("Encountered an error with FETCH_SEARCH_PHOTOS", err);
    }
  };
}

export function fetchRandomPhotos(page) {
  return async (dispatch) => {
    try {
      await unsplash.search
        .photos(page, 10)
        .then(toJson)
        .then((response) => {
          console.log("FETCH_RANDOM_PHOTOS", response.results);
          dispatch(showLoader());
          dispatch({ type: FETCH_RANDOM_PHOTOS, payload: response.results });
          dispatch(hideLoader());
        });
    } catch (err) {
      console.log("Encountered an error with FETCH_RANDOM_PHOTOS", err);
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
          console.log("GET_PHOTO_MODAL", response);
          dispatch(showLoader());
          dispatch({
            type: GET_PHOTO_MODAL,
            payload: response,
          });
          dispatch(hideLoader());
        })
        .then(dispatch(showPhotoModal()));
    } catch (err) {
      console.log("Encountered an error with GET_PHOTO_MODAL", err);
    }
  };
}

export function removePhotoModal() {
  return {
    type: REMOVE_PHOTO_MODAL,
  };
}
