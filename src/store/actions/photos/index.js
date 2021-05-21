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
    await unsplash.search
      .photos(searchQuery, page, 11)
      .then(toJson)
      .then((json) => {
        console.log("SEARCH_PHOTOS", json);
        dispatch({ type: SEARCH_PHOTOS, payload: json.results });
      });
    // .catch((error) => {
    //   console.log("Encountered an error with fetching and parsing data", {
    //     error,
    //   });
    // });
  };
}

export function fetchPhotos() {
  return async (dispatch) => {
    await unsplash.search
      .photos(1, 11)
      .then(toJson)
      .then((response) => {
        console.log("FETCH_PHOTOS", response.results);
        dispatch({ type: FETCH_PHOTOS, payload: response.results });
      });
    // .catch((error) => {
    //   console.log("Encountered an error with fetching and parsing data", {
    //     error,
    //   });
    // });
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
