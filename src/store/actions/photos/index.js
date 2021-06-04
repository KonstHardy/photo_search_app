import { toJson } from "unsplash-js";
import unsplash from "../../../api";

import {
  SEARCH_PHOTO,
  FETCH_SEARCH,
  FETCH_RANDOM,
} from "../../constants/photos";

import { showLoader, hideLoader } from "../loader";

export function searchPhoto(searchQuery) {
  return async (dispatch) => {
    try {
      await unsplash.search
        .photos(searchQuery, 1, 11)
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
        .photos(searchQuery, page, 11)
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
        .photos(page, 11)
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
