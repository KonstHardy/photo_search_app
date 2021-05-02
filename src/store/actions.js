import { SEARCH_PHOTOS, FETCH_PHOTOS } from "./types";
import { Unsplash } from "./../api";

let counter = 1;

export function searchPhotos(searchQuery) {
  return async (dispatch) => {
    const response = await Unsplash.search.getPhotos({
      query: searchQuery,
      page: counter++,
      per_page: 11,
    });
    // const json = await response.json();
    // console.log(response.response.results);

    console.log(response);
    dispatch({ type: SEARCH_PHOTOS, payload: response.response.results });
  };
}

export function fetchPhotos(setSearchQuery) {
  return async (dispatch) => {
    const response = await Unsplash.search.getPhotos({
      query: setSearchQuery,
      per_page: 11,
    });
    // const json = await response.json();
    // console.log(response.response.results);

    console.log(response);
    dispatch({ type: FETCH_PHOTOS, payload: response.response.results });
  };
}
