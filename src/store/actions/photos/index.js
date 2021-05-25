import { toJson } from "unsplash-js";
import unsplash from "../../../api";

import {
  FETCH_SEARCH,
  FETCH_RANDOM,
  CURRENT_PAGE,
} from "../../constants/photos";

// let pageCounter = 1;

export function fetchSearch(searchQuery, page) {
  return async (dispatch) => {
    try {
      await unsplash.search
        .photos(searchQuery, page, 11)
        .then(toJson)
        .then((json) => {
          console.log("FETCH_SEARCH", json);
          dispatch({ type: FETCH_SEARCH, payload: json.results });
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
          dispatch({ type: FETCH_RANDOM, payload: response.results });
        });
    } catch (err) {
      console.log("Encountered an error with FETCH_RANDOM", err);
    }
  };
}

export function setPage(page) {
  return {
    type: CURRENT_PAGE,
    payload: page + 1,
  };
}

// export function setPage(page) {
//   return {
//     type: CURRENT_PAGE,
//     payload: page++,
//   };
// }
