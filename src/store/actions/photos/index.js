import { toJson } from "unsplash-js";
import unsplash from "../../../api";

import { SEARCH_PHOTOS, FETCH_PHOTOS } from "../../types";

let pageCounter = 1;

export function searchPhotos(searchQuery) {
  return async (dispatch) => {
    await unsplash.search
      .photos(searchQuery, pageCounter, 11)
      .then(toJson)
      .then((json) => {
        console.log("SEARCH_PHOTOS", json);
        dispatch({ type: SEARCH_PHOTOS, payload: json.results });
      });
  };
}

export function fetchPhotos() {
  return async (dispatch) => {
    await unsplash.search
      .photos("random", 1, 11)
      .then(toJson)
      .then((response) => {
        console.log("FETCH_PHOTOS", response.results);
        dispatch({ type: FETCH_PHOTOS, payload: response.results });
      });
  };
}
