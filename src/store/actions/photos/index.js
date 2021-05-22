import { toJson } from "unsplash-js";
import unsplash from "../../../api";

import {
  SEARCH_PHOTOS,
  FETCH_PHOTOS,
  CURRENT_PAGE,
} from "../../constants/photos";

// let pageCounter = 1;

export function searchPhotos(searchQuery, page) {
  return async (dispatch) => {
    try {
      await unsplash.search
        .photos(searchQuery, page, 11)
        .then(toJson)
        .then((json) => {
          console.log("SEARCH_PHOTOS", json);
          dispatch({ type: SEARCH_PHOTOS, payload: json.results });
        });
    } catch (err) {
      console.log("Encountered an error with Searching photos", err);
    }
  };
}

export function fetchPhotos() {
  return async (dispatch) => {
    try {
      await unsplash.search
        .photos(1, 11)
        .then(toJson)
        .then((response) => {
          console.log("FETCH_PHOTOS", response.results);
          dispatch({ type: FETCH_PHOTOS, payload: response.results });
        });
    } catch (err) {
      console.log("Encountered an error with Fetching photos", err);
    }
  };
}

export function setPage() {
  return {
    type: CURRENT_PAGE,
  };
}

// export function setPage(page) {
//   return {
//     type: CURRENT_PAGE,
//     payload: page++,
//   };
// }
