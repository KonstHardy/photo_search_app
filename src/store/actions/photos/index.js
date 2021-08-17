import { toJson } from "unsplash-js";
import unsplash from "../../../api";

import {
  SEARCH_PHOTO,
  FETCH_SEARCH,
  FETCH_RANDOM,
  GET_PHOTO_BY_ID,
  CLEAR_PHOTO_BY_ID,
} from "../../constants/photos";

import { showLoader, hideLoader } from "../loader";
import { showModal } from "../modal";

export function searchPhoto(searchQuery) {
  return async (dispatch) => {
    try {
      await unsplash.search
        .photos(searchQuery, 1, 10)
        .then(toJson)
        .then((json) => {
          console.log("SEARCH_PHOTO", json);
          dispatch(showLoader());
          dispatch({ type: SEARCH_PHOTO, payload: json.results });
          dispatch(hideLoader());
        });
    } catch (err) {
      console.log("Encountered an error with SEARCH_PHOTO", err);
    }
  };
}

export function fetchSearch(searchQuery, page) {
  return async (dispatch) => {
    try {
      await unsplash.search
        .photos(searchQuery, page, 10)
        .then(toJson)
        .then((json) => {
          console.log("FETCH_SEARCH", json);
          dispatch(showLoader());
          dispatch({ type: FETCH_SEARCH, payload: json.results });
          dispatch(hideLoader());
        });
    } catch (err) {
      console.log("Encountered an error with FETCH_SEARCH", err);
    }
  };
}

export function fetchRandom(page) {
  return async (dispatch) => {
    try {
      await unsplash.search
        .photos(page, 10)
        .then(toJson)
        .then((response) => {
          console.log("FETCH_RANDOM", response.results);
          dispatch(showLoader());
          dispatch({ type: FETCH_RANDOM, payload: response.results });
          dispatch(hideLoader());
        });
    } catch (err) {
      console.log("Encountered an error with FETCH_RANDOM", err);
    }
  };
}

export function getPhotoById(id) {
  return async (dispatch) => {
    try {
      await unsplash.photos
        .getPhoto(id)
        .then(toJson)
        .then((response) => {
          console.log("GET_PHOTO_BY_ID", response);
          dispatch(showLoader());
          dispatch({
            type: GET_PHOTO_BY_ID,
            payload: response,
          });
          dispatch(hideLoader());
        })
        .then(dispatch(showModal()));
    } catch (err) {
      console.log("Encountered an error with GET_PHOTO_BY_ID", err);
    }
  };
}

export function clearPhotoById() {
  return {
    type: CLEAR_PHOTO_BY_ID,
  };
}
